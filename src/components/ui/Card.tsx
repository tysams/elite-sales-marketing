import React from "react";
export function Card({ className = "", children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={"rounded-2xl border bg-white shadow-sm " + className}>{children}</div>;
}
export function CardHeader({ className = "", children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={"p-4 border-b " + className}>{children}</div>;
}
export function CardTitle({ className = "", children }: React.PropsWithChildren<{className?: string}>) {
  return <h4 className={"text-lg font-semibold tracking-tight " + className}>{children}</h4>;
}
export function CardDescription({ className = "", children }: React.PropsWithChildren<{className?: string}>) {
  return <p className={"text-sm text-gray-500 " + className}>{children}</p>;
}
export function CardContent({ className = "", children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={"p-4 " + className}>{children}</div>;
}
export function CardFooter({ className = "", children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={"p-4 border-t flex items-center gap-2 " + className}>{children}</div>;
}
