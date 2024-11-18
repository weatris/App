import Stack from '../components/Stack/Stack';
import { Icon } from '../components/icons/Icon';
import { ExclamationTriangleIcon } from '../components/icons';
import { t } from 'i18next';

export const ErrorPage = () => {
  return (
    <Stack
      className="w-full h-full"
      direction="col"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        className="w-[300px] h-[300px] border rounded-lg shadow-md p-4"
        direction="col"
        justifyContent="center"
      >
        <Icon size="lg">
          <ExclamationTriangleIcon color="lightgray" />
        </Icon>
        <p className="text-xl">{t('error_page')}</p>
      </Stack>
    </Stack>
  );
};
