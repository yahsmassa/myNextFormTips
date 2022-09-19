import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import React from "react";

export interface IFormValues {
  FirstName: string;
  LastName: string;
  Telephone: string;
  Age: number;
  Yasumasa: string;
}

export type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  className: string;
};

export const MyInput = ({
  label,
  register,
  required,
  className,
}: InputProps) => (
  <>
    <label>{label}</label>
    <input className={className} {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
export const MySelect = React.forwardRef<
  HTMLSelectElement,
  { label: string; className: string } & ReturnType<
    UseFormRegister<IFormValues>
  >
>(function _mySelect({ onChange, onBlur, name, label, className }, ref) {
  return (
    <>
      <label>{label}</label>
      <select
        className={className}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  );
});
