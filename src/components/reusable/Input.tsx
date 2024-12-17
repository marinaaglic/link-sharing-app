import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  type: "text" | "number" | "email" | "password";
  label: string;
  id: string;
  className?: string;
  error?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<"input">;

export default function Input({
  type,
  label,
  id,
  className,
  error,
  disabled,
  ...props
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input id={id} name={id} {...props} />
    </div>
  );
}
