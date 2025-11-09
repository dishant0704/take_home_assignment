import { faHouse } from "@fortawesome/free-regular-svg-icons";

import omega_orion_logo from "../assets/images/omega_orion_logo.svg";

import {
  faTableColumns,
  faCoins,
  faChartLine,
  faSliders,
  faCircleHalfStroke,
  faRobot,
  faTerminal,
  faTv,
  faCartShopping,
  faQuestion,
  faChartColumn,
  faCircleQuestion,
  faTableCellsLarge,
  faBitcoinSign,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import IconList from "./IconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const menuItems = ["Terminal"];
  const sideNavData = {
    mainNav: [
      { icon: faTableColumns, title: "Dashboard" },
      { icon: faCoins, title: "Coins" },
      { icon: faChartLine, title: "Analytics" },
    ],
    trading: [
      { icon: faSliders, title: "Trading" },
      { icon: faCircleHalfStroke, title: "Control Panel" },
      { icon: faRobot, title: "Chainex Bots" },
      { icon: faTerminal, title: "Terminal" },
      { icon: faTv, title: "Pump Screener" },
      { icon: faCartShopping, title: "Marketplace" },
    ],
    preference: [
      { icon: faUserGroup, title: "Refer a Friend" }
    ],
  };

  return (
    <aside className="w-64 border-r dark:border-black border-borderColor flex flex-col justify-between p-4">
      <div className="">
        <div className="text-2xl font-bold text-green-600 mb-6 flex space-x-2">
          <img src={omega_orion_logo} alt="logo" />
          <span className="text-secondary dark:text-dark-secondary">Chainex</span>
        </div>
        <IconList items={sideNavData.mainNav} />
        <h1 className="sideHeader">Trading</h1>
        <IconList items={sideNavData.trading} />
        <h1 className="sideHeader">Preference</h1>
        <IconList items={sideNavData.preference} />
        <div className="sideFooter ">
        <div className="sideFooter-circle">
          <FontAwesomeIcon icon={faQuestion} /> 
        </div>
        <div className="sideFooter-container">
          <h4 className="sideFooter-container-title">Help Center</h4>
          <p className="text-sm text-gray-500 mb-3">
            Having trouble in Chainex?
          </p>
          <button className="">
            Contact us
          </button>
        </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
