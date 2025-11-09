import React from "react";

type TabPro = {
  active: string;
  tabItems: string[];
};
interface ItabProps {
  items: TabPro;
}
const Tabs: React.FC<ItabProps> = ({ items }) => {
  const { active, tabItems } = items;
  return (
    <div className="cardTabs">
        {tabItems.map((item)=>{
            return <span className={item === active? "tab m-auto active": "tab m-auto"}>{item}</span>
        })}
      {/* <span className="tab  m-auto">Yearly</span>
      <span className="tab active  m-auto">Monthly</span>
      <span className="tab  m-auto">Weekly</span>
      <span className="tab  m-auto">24hrs</span> */}
    </div>
  );
};

export default Tabs;
