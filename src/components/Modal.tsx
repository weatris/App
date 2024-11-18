import { t } from 'i18next';
import { Button } from './Button';
import { XMarkIcon } from './icons';
import { Icon } from './icons/Icon';
import Stack from './Stack/Stack';

export const Modal = ({
  title,
  children,
  isOpen,
  onClose,
  onAccept,
}: {
  title: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
}) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <div className="w-screen h-screen absolute top-0 left-0 bg-gray-500 opacity-45 z-[2]" />
      <Stack
        className="w-screen h-screen absolute top-0 left-0"
        direction="col"
        justifyContent="center"
      >
        <Stack
          className="w-[400px] bg-white z-[3] rounded-lg overflow-hidden"
          direction="col"
        >
          <Stack
            className="w-full h-[60px] p-2 rounded-r border-b"
            direction="row"
            justifyContent="between"
          >
            <p className="text-xl">{title}</p>
            <Icon onClick={onClose}>
              <XMarkIcon color="gray" />
            </Icon>
          </Stack>
          <div className="w-full h-full p-2">{children}</div>

          <Stack
            className="w-full h-[60px] p-2 rounded-r border-t"
            direction="row"
            justifyContent="between"
          >
            <Button onClick={onClose} variant="primary">
              {t('cancel')}
            </Button>
            <Button onClick={onAccept}>{t('accept')}</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
