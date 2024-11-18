import { Spinner } from './Spinner';

export const ProgressPanel = ({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
  isError?: boolean;
  errorComponent?: React.ReactNode;
  nothingFound?: boolean;
  nothingFoundComponent?: React.ReactNode;
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
};
