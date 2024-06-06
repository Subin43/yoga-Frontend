export default function Input({
  type,
  placeholder,
  label,
  name,
}: {
  type: string;
  placeholder: string;
  label: string;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={label} className="text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className="border bg-gray-50 border-gray-300 rounded-xl w-full md:w-[300px] p-2.5 text-sm md:text-base text-gray-900 focus:ring-blue-500 focus:border-blue-600 outline-none"
        required
        name={name}
        autoComplete="new-password"
      />
    </div>
  );
}
