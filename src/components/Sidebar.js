import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faListCheck,
  faCalendarDays,
  faNoteSticky,
  faSquare,
  faPlus,
  faGear,
  faSignOutAlt,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
  const handleClick = (message) => {
    alert(`${message} clicked!`);
  };

  const menuItems = [
    {
      label: "Upcoming",
      count: 12,
      icon: faAnglesRight,
      color: "",
      animation: "",
    },
    {
      label: "Today",
      count: 5,
      icon: faListCheck,
      color: "",
      animation: "",
    },
    {
      label: "Calendar",
      icon: faCalendarDays,
      color: "",
      animation: "",
    },
    {
      label: "Sticky Wall",
      icon: faNoteSticky,
      color: "",
      animation: "",
    },
  ];

  const listItems = [
    {
      label: "Personal",
      count: 3,
      icon: faSquare,
      color: "#FF686A",
      animation: "",
    },
    {
      label: "Work",
      count: 6,
      icon: faSquare,
      color: "#69D6DE",
      animation: "",
    },
    {
      label: "List 1",
      count: 3,
      icon: faSquare,
      color: "#FFD438",
      animation: "",
    },
    {
      label: "Add New List",
      icon: faPlus,
      color: "",
      animation: "",
    },
  ];

  const tags = ["Tag 1", "Tag 2"];

  return (
    <div className="sidebar">
      <div className="menu">
        <h2>
          Menu{" "}
          <span className="menu-bullet" onClick={() => handleClick("Bullet")}>
            ☰
          </span>
        </h2>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="tasks">
          <h3>TASKS</h3>
          <ul>
            {menuItems.map((item) => (
              <li key={item.label} onClick={() => handleClick(item.label)}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className={item.animation}
                  style={{ color: item.color }}
                />
                <span className="icon-text">{item.label}</span>
                {item.count && <button>{item.count}</button>}
              </li>
            ))}
          </ul>
        </div>
        <div className="lists">
          <h3>LISTS</h3>
          <ul>
            {listItems.map((item) => (
              <li key={item.label} onClick={() => handleClick(item.label)}>
                <FontAwesomeIcon
                  icon={item.icon}
                  className={item.animation}
                  style={{ color: item.color }}
                />
                <span className="icon-text">{item.label}</span>
                {item.count && <button>{item.count}</button>}
              </li>
            ))}
          </ul>
        </div>
        <div className="tags">
          <h3>TAGS</h3>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <div className="tag-box">{tag}</div>
              </li>
            ))}
            <li>
              <div className="tag-box" onClick={() => handleClick("Add Tag")}>
                <span>+ Add Tag</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="settings">
        <ul>
          <li onClick={() => handleClick("Settings")}>
            <FontAwesomeIcon
              icon={faSliders}
              className=""
              style={{ color: "" }}
            />
            <span className="icon-text">Settings</span>
          </li>
          <li onClick={() => handleClick("Sign out")}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className=""
              style={{ color: "" }}
            />
            <span className="icon-text">Sign out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
