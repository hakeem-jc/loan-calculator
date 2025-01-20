import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

type InputProps = {
  id: string;
  label: string;
  type: string;
  register: ReturnType<typeof useForm>["register"];
  error?: string;
  placeholder?: string;
  validationRules?: object;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  register,
  error,
  placeholder,
  validationRules,
  disabled
}) => {
  return (
    <div className={`relative ${styles["float-label-input"]}`}>
      <input
        type={type}
        id={id}
        placeholder={placeholder ? placeholder : " "}
        className={`block w-full bg-[#212121] focus:outline-none focus:shadow-outline border rounded-md py-3 px-3 leading-normal focus:border-blue-400 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...register(id, validationRules)}
        disabled={disabled ?? false}
      />
      <label
        htmlFor={id}
        className="absolute top-3 left-1 text-gray-400 pointer-events-none transition duration-200 ease-in-out bg-[#212121] px-2"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;