import { t } from 'i18next';
import { Button } from '../components/Button';
import Dropdown, { optionType } from '../components/Dropdown';
import { FunnelIcon, XMarkIcon } from '../components/icons';
import { Icon } from '../components/icons/Icon';
import Stack from '../components/Stack/Stack';
import { useNotification } from '../redux/notification/useNotification';
import { useState } from 'react';
import { useStateProvider } from '../redux/useStateProvider';
import { sortItems } from '../services';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { ItemModal } from '../components/ItemModal';
import { Item } from '../types';

export const MainPage = () => {
  const navigate = useNavigate();
  const [selectedFilterType, setSelectedFilterType] = useState('name');
  const { state, actions } = useStateProvider();
  const { items } = state.items;
  const { addItem, removeItem } = actions;
  const itemsList = sortItems(selectedFilterType, items);
  const [isOpen, setIsOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | undefined>(
    undefined,
  );

  const onSave = (item: Item) => {
    addItem(item);
  };

  const dropdownOptions: optionType[] = [
    {
      id: 'name',
      name: t('filter_items.name'),
    },
    {
      id: 'name_reverse',
      name: t('filter_items.name_reverse'),
    },
    {
      id: 'count_lower',
      name: t('filter_items.count_lower'),
    },
    {
      id: 'count_higher',
      name: t('filter_items.count_higher'),
    },
  ];

  return (
    <>
      <Stack className="w-screen h-screen" direction="col">
        <Stack
          className="w-full h-[80px] px-5 gap-2 border-b"
          direction="row"
          alignItems="center"
          justifyContent="end"
        >
          <Dropdown
            {...{
              options: dropdownOptions,
              onSelect: (s) => {
                setSelectedFilterType(s);
              },
              icon: (
                <Icon hoverable={false}>
                  <FunnelIcon color="gray" />
                </Icon>
              ),
            }}
          />
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {t('createItem')}
          </Button>
        </Stack>

        <Stack
          className="w-full h-full gap-3 p-5"
          direction="row"
          alignItems="start"
        >
          {itemsList.map((item) => (
            <Stack
              key={item.id}
              className="w-[180px] h-[200px] relative border rounded-lg cursor-pointer hover:shadow-md"
              direction="col"
              alignItems="start"
              onClick={() => {
                navigate(`/items/${item.id}`);
              }}
            >
              <Icon
                className="absolute right-0"
                size="md"
                onClick={(e) => {
                  e.stopPropagation();
                  setItemToRemove(item.id);
                }}
              >
                <XMarkIcon color="red" />
              </Icon>
              <p className="w-full bg-gray-100 py-3 px-3 border-b truncate">
                {item.name}
              </p>
              <div className="w-full h-full">
                <img
                  className="w-full h-full"
                  src={item.imageUrl}
                  alt="image"
                />
              </div>
              <p className="w-full bg-gray-100 py-2 px-3 border-t truncate text-end">
                {item.count}
              </p>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Modal
        {...{
          isOpen: !!itemToRemove,
          onClose: () => {
            setItemToRemove(undefined);
          },
          title: t('confirmDelete'),
          onAccept: () => {
            itemToRemove && removeItem(itemToRemove);
            setItemToRemove(undefined);
          },
        }}
      >
        {t('areYouSure')}
      </Modal>
      <ItemModal
        {...{
          isOpen,
          onClose: () => {
            setIsOpen(false);
          },
          onSave,
        }}
      />
    </>
  );
};
