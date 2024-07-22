import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenu = ({ menuItems }) => {
  const location = useLocation();

  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  const handleMenuItemclick = (menuItemUrl) => {
    setActiveMenuItem(menuItemUrl);
  };

  return (
    <div className="list-group mt-5 pl-4">
      {menuItems?.map((menuItem, index) => (
        <Link
          to={menuItem.url}
          onClick={() => handleMenuItemclick(menuItem.url)}
          key={index}
          className={`fw-bold list-group-item list-group-item-action ${
            activeMenuItem.includes(menuItem.url) ? "active" : ""
          }`}
          aria-current={`${
            activeMenuItem.includes(menuItem.url) ? "true" : "false"
          }`}
        >
          <i className={`${menuItem.icon} fa-fw pe-2`}></i> {menuItem.name}
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
