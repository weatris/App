import classNames from 'classnames';
import Stack from '../Stack/Stack';

const sizes = {
  sm: 'w-4 h-4 min-w-4 min-h-4',
  md: 'w-6 h-6 min-w-6 min-h-6',
  lg: 'w-[90px] h-[90px] min-w-[90px] min-h-[90px]',
};

export const Icon = ({
  onClick,
  children,
  className = '',
  hoverable = true,
  size = 'md',
}: {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  className?: string;
  hoverable?: boolean;
  size?: keyof typeof sizes;
}) => {
  const classes = classNames(
    sizes[size],
    'p-[2px] rounded-md',
    hoverable && 'hover:bg-gray-100 cursor-pointer',
    className,
  );

  return (
    <Stack
      className={classes}
      onClick={onClick}
      direction="row"
      alignItems="center"
    >
      {children}
    </Stack>
  );
};
