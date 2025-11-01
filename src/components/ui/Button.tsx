import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };
export function Button({ className = "", ...props }: Props) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm border " +
        "bg-blue-600 text-white hover:bg-blue-700 transition " + className
      }
      {...props}
    />
  );
}
