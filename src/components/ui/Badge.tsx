import React from "react";
type Props = React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" | "outline" };
export function Badge({ className = "", variant = "secondary", ...props }: Props) {
  const styles = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-700",
  }[variant];
  return <span className={"inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium " + styles + " " + className} {...props} />;
}
