import classNames from 'classnames';

export const Button = ({
  children,
  onClick,
  variant = 'default',
  className,
}: {
  children: string | React.ReactNode;
  onClick?: (e: any) => void;
  variant?: 'default' | 'primary';
  className?: string;
}) => {
  const classes = classNames(
    'px-5 py-2 rounded-lg',
    variant == 'default' && 'bg-green-700 hover:bg-green-800 border text-white',
    variant == 'primary' &&
      'hover:bg-gray-50 text-gray-700 border border-gray-200',
    className,
  );
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
