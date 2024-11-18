import Stack from './Stack/Stack';

export const Input = ({
  value,
  setValue,
  label_text,
  type = 'text',
}: {
  value: string | number;
  setValue: (s: string) => void;
  label_text: string;
  type?: 'text' | 'number';
}) => {
  return (
    <Stack className="w-full" direction="col" alignItems="start">
      <label className="w-full">
        {label_text}:
        <input
          className="w-full p-1 border border-gray-200 focus:outline-none"
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </Stack>
  );
};
