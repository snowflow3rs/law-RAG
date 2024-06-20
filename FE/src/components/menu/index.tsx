"use client";

import { useMenu } from "@refinedev/core";
import Link from "next/link";

export const Menu = () => {
  const { menuItems, selectedKey } = useMenu();

  return (
    <nav className="menu">
      <div>
        {menuItems.map((item) => (
          <div key={item.key}>
            <Link
              href={item.route ?? "/"}
              className={selectedKey === item.key ? "active" : ""}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
