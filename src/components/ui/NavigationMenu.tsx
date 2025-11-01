import React from "react";
export function NavigationMenu({ children }: React.PropsWithChildren) { return <nav>{children}</nav>; }
export function NavigationMenuList({ children }: React.PropsWithChildren) { return <ul className="flex items-center gap-2">{children}</ul>; }
export function NavigationMenuItem({ children }: React.PropsWithChildren) { return <li>{children}</li>; }
