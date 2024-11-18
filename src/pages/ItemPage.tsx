import { useNavigate, useParams } from 'react-router-dom';
import { useStateProvider } from '../redux/useStateProvider';
import { getCommentsByItemId, getItemById } from '../services';
import { useEffect, useState } from 'react';
import { commentType, Item } from '../types';
import { ProgressPanel } from '../components/ProgressPanel';
import Stack from '../components/Stack/Stack';
import { Button } from '../components/Button';
import { t } from 'i18next';
import { useNotification } from '../redux/notification/useNotification';
import { ItemModal } from '../components/ItemModal';

export const ItemPage = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const { state, actions } = useStateProvider();
  const { items, comments } = state.items;
  const { updateItem } = actions;
  const [data, setData] = useState<Item | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [itemComments, setItemComments] = useState<commentType[]>([]);

  useEffect(() => {
    const itemData = getItemById(id, items);
    const commentsData = getCommentsByItemId(id, items, comments);
    if (itemData) {
      setData(itemData);
      setItemComments(commentsData || []);
    } else {
      addNotification({
        title: t('error_page'),
        tp: 'alert',
      });
      navigate('/error_page');
    }
  }, [id]);

  const onSave = (newData: Item) => {
    updateItem(newData);
    setData(newData);
  };

  console.log(items);

  return (
    <ProgressPanel isLoading={!data?.id}>
      <Stack className="w-full h-[60px] px-5 border-b" justifyContent="between">
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          {t('returnToMain')}
        </Button>
        <p>{data?.name}</p>
        <div />
      </Stack>
      <Stack
        className="w-full h-full"
        direction="col"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          className="w-[600px] h-full shadow-md gap-1 p-4"
          direction="col"
          alignItems="start"
        >
          <img className="w-[600px] h-[400px]" src={data?.imageUrl} />
          <p>
            {t('count')}: {data?.count}
          </p>
          <p>
            {t('size')}: {JSON.stringify(data?.size)}
          </p>
          <p>
            {t('weight')}: {data?.weight}
          </p>
          <Button
            className="my-2 ml-auto"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {t('editItem')}
          </Button>
          <p className="w-full mt-10 pt-2 border-t">{t('comments')}:</p>
          {itemComments.map((item) => (
            <Stack
              key={item.id}
              className="w-full h-[60px] p-1 my-2 border"
              direction="col"
              alignItems="start"
            >
              <p className="self-end">{item.date}</p>
              <p>{item.description}</p>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <ItemModal
        {...{
          isOpen,
          onClose: () => {
            setIsOpen(false);
          },
          onSave,
          selectedItem: data,
        }}
      />
    </ProgressPanel>
  );
};
