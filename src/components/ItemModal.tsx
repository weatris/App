import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Input } from './Input';
import Stack from './Stack/Stack';
import { useNotification } from '../redux/notification/useNotification';
import { t } from 'i18next';
import { Item } from '../types';
import { useStateProvider } from '../redux/useStateProvider';

function formatWeight(weight:string) {
  if (weight.includes('kg')) {
      let kgValue = parseFloat(weight.replace('kg', '').trim());
      return kgValue * 1000;
  } else if (weight.includes('g')) {
    return parseFloat(weight.replace('g', '').trim());
  } else {
      return parseInt(weight);
  }
}

export const ItemModal = ({
  isOpen,
  onClose,
  onSave,
  selectedItem,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Item) => void;
  selectedItem?: Item;
}) => {
  const { addNotification } = useNotification();
  const { items } = useStateProvider().state.items;

  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [count, setCount] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
      setWeight(formatWeight(selectedItem.weight).toString());
      setWidth(selectedItem.size.width.toString());
      setHeight(selectedItem.size.height.toString());
      setCount(selectedItem.count.toString());
    } else {
      setName('');
      setWeight('');
      setHeight('');
      setWidth('');
      setCount('');
    }
  }, [selectedItem, isOpen]);

  const handleAccept = () => {
    if (!name || !weight || !width || !count) {
      addNotification({
        title: t('invalidData'),
        tp: 'alert',
      });
      return;
    }
    const item: Item = {
      ...selectedItem,
      id: selectedItem?.id ? selectedItem?.id : items.length + 1,
      name,
      count: Number(count),
      weight,
      size: {
        width: Number(width),
        height: Number(height),
      },
      imageUrl: '/cat.jpg',
      comments: [],
    };

    onSave(item);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={selectedItem ? t('editItem') : t('createItem')}
      onAccept={handleAccept}
    >
      <Stack className="w-full gap-2" direction="col">
        <Input value={name} setValue={setName} label_text={t('name')} />
        <Input
          value={weight}
          setValue={setWeight}
          label_text={t('weight')}
          type="number"
        />
        <Input
          value={height}
          setValue={setHeight}
          label_text={t('height')}
          type="number"
        />
        <Input
          value={width}
          setValue={setWidth}
          label_text={t('width')}
          type="number"
        />
        <Input
          value={count}
          setValue={setCount}
          label_text={t('count')}
          type="number"
        />
      </Stack>
    </Modal>
  );
};
