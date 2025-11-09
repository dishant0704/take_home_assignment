// import React from 'react'
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChartEarnings from "../components/ChartEarnings";
import ChartSpending from "../components/ChartSpending";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoinSign,
  faCompass,
  faS,
  faEllipsisVertical,
  faDollarSign,
  faDiceD6,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import chart from "../assets/images/char_img.jpg";
import chart02 from "../assets/images/char02_img.jpg";
import backgroundImageLight from "../assets/images/cardBgImg.png"
import backgroundImageDark from "../assets/images/cardBgImgDark.png"
import Tabs from "../components/Tabs";

import type { RootState } from "../store/store";

const Dashboard = () => {
  const tabObject = {
    Portfolio:{active:"All Market", tabItems:["All Market", "Crypto", "USDT", "BNB"]},
    Upcoming:{active:"All Time", tabItems:["All Time", "Weekly"]},
    Spending:{active:"Monthly", tabItems:["Yearly", "Monthly", "Weekly", "24hrs"]},
  }

  const mode = useSelector((state: RootState) => state.mode);
  const backgroundImage = mode? backgroundImageDark : backgroundImageLight
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 space-y-6">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          {/* Row 01 - column 03 */}
          <div className="grid grid-cols-3 gap-6">
            <div className="card flex gap-4">
              {/* icon */}
              <div>
                <div className="iConWrapper bg-orange text-white">
                  <FontAwesomeIcon
                    icon={faBitcoinSign}
                    className="origin-center rotate-22 "
                  />
                </div>
              </div>
              <div>
                <h5 className="font-secondary font-medium ">Bitcoin</h5>
                <h6 className="font-sideTitle">BTC</h6>
              </div>
              <div className="flex-auto flex justify-center items-center">
                <img
                  className="h-auto max-w-full"
                  src={chart}
                  alt="Chart"
                ></img>
              </div>
              <div>
                <h5 className="font-secondary font-medium ">$54908</h5>
                <h6 className="font-sideTitle">0.25BTC</h6>
              </div>
            </div>
            <div className="card flex gap-4">
              {/* icon */}
              <div>
                <div className="iConWrapper bg-blue text-white">
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="origin-center -rotate-45 "
                  />
                </div>
              </div>
              <div>
                <h5 className="font-secondary font-medium ">Ethereum</h5>
                <h6 className="font-sideTitle">ETH</h6>
              </div>
              <div className="flex-auto flex justify-center items-center">
                <img
                  className="h-auto max-w-full"
                  src={chart}
                  alt="Chart"
                ></img>
              </div>
              <div>
                <h5 className="font-secondary font-medium ">$54908</h5>
                <h6 className="font-sideTitle">0.25BTC</h6>
              </div>
            </div>
            <div className="card flex gap-4">
              {/* icon */}
              <div>
                <div className="iConWrapper bg-radial-[at_75%_25%] from-primary to-purple to-75% text-white">
                  <FontAwesomeIcon icon={faS} className="origin-center " />
                </div>
              </div>
              <div>
                <h5 className="font-secondary font-medium ">Solana</h5>
                <h6 className="font-sideTitle">20OK</h6>
              </div>
              <div className="flex-auto flex justify-center items-center">
                <img
                  className="h-auto max-w-full"
                  src={chart02}
                  alt="Chart"
                ></img>
              </div>
              <div>
                <h5 className="font-secondary font-medium ">$54908</h5>
                <h6 className="font-sideTitle">0.25BTC</h6>
              </div>
            </div>
          </div>
          {/* Row 02 - column 03 */}
          <div className="grid grid-cols-3 gap-6">
            <div className="card">
              <div className="cardHeader">
                <h3 className="flex-auto font-bold">Portfolio Tokens</h3>
                <div className="cardHeader-icon ">
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="origin-center "
                  />
                </div>
              </div>
              <Tabs items={tabObject.Portfolio}/>              
              <div className="card">
                {/* Row 01 */}
                <div className="flex gap-4">
                  <div>
                    <div className="iConWrapper w-10 h-10 border-8 border-borderColor bg-primary text-white text-[16px]">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="origin-center "
                      />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <h5 className="font-secondary font-medium ">2500 USDT</h5>
                    <h6 className="font-sideTitle">$98,265.55</h6>
                  </div>
                  <div>
                    <button>Withdraw</button>
                  </div>
                </div>
                {/* Row 02 */}
                <div className="flex gap-4">
                  <div>
                    <div className="iConWrapper w-10 h-10 border-8 border-borderColor bg-blue text-white text-[16px]">
                      <FontAwesomeIcon
                        icon={faDiceD6}
                        className="origin-center "
                      />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <h5 className="font-secondary font-medium ">2500 LINK</h5>
                    <h6 className="font-sideTitle">$89,569.15</h6>
                  </div>
                  <div>
                    <button>Withdraw</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card col-span-2 block">
              <div className="cardHeader">
                <div className="flex-auto ">
                  <h3 className="font-bold">Upcoming Events</h3>
                  <h4 className="font-sideTitle">
                    Brief of events in the future
                  </h4>
                </div>
                <div className="iConWrapper my-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSliders}
                    className="origin-center "
                  />
                </div>
                <div>
                  <Tabs items={tabObject.Upcoming}/>
                </div>
              </div>
              <div className="card my-6">
                {/* Row 01 */}
                <div className="grid grid-cols-6 gap-4">
                    <div className="border-l border-l-2 border-primary px-2 columns-[120vw] align-middle truncate py-2">Bitcoin Halving Event </div>
                    <div className="align-middle text-center  py-2">$64,000</div>
                    <div className="align-middle text-center py-2"><span className="px-3 py-1.5 bg-greenGray rounded-full text-primary">10%</span></div>
                    <div className="align-middle text-center  py-2">$680M</div>
                    <div className="align-middle text-center"> <img
                  className="h-auto max-w-full"
                  src={chart}
                  alt="Chart"
                ></img></div>
                <div className="align-middle text-center py-2">Trade</div>
                </div>
                {/* Row 02 */}
                <div className="grid grid-cols-6 gap-4 bg-bodyColor dark:bg-dark-listEven">
                    <div className="border-l border-l-2 border-primary px-2 columns-[120vw] align-middle truncate py-2">Solana Partnership</div>
                    <div className="align-middle text-center  py-2">$52,000</div>
                    <div className="align-middle text-center py-2"><span className="px-3 py-1.5 bg-greenGray rounded-full text-primary">10%</span></div>
                    <div className="align-middle text-center  py-2">$520M</div>
                    <div className="align-middle text-center"> <img
                  className="h-auto max-w-full"
                  src={chart}
                  alt="Chart"
                ></img></div>
                <div className="align-middle text-center py-2">Trade</div>
                </div>
                {/* Row 01 */}
                <div className="grid grid-cols-6 gap-4">
                    <div className="border-l border-l-2 border-primary px-2 columns-[120vw] align-middle truncate py-2">Bitcoin Halving Event </div>
                    <div className="align-middle text-center  py-2">$64,000</div>
                    <div className="align-middle text-center py-2"><span className="px-3 py-1.5 bg-greenGray rounded-full text-primary">10%</span></div>
                    <div className="align-middle text-center  py-2">$680M</div>
                    <div className="align-middle text-center"> <img
                  className="h-auto max-w-full"
                  src={chart}
                  alt="Chart"
                ></img></div>
                <div className="align-middle text-center py-2">Trade</div>
                </div>
              </div>
            </div>
          </div>
          {/* Row 03 - column 03 */}

          <div className="grid grid-cols-3 gap-6">
            <div className="card">
              <div className="cardHeader">
                <div className="flex-auto ">
                  <h3 className="font-bold">Earnings Activity</h3>
                  <h4 className="font-sideTitle">
                    Your revenue stats simplified
                  </h4>
                </div>
                <div className="iConWrapper my-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSliders}
                    className="origin-center "
                  />
                </div>                
              </div>
              <div className="card">
              <ChartEarnings />
              </div>              
            </div>
            <div className="card">
              <div className="cardHeader">
                <div className="flex-auto ">
                  <h3 className="font-bold">Spending Activity</h3>
                  <h4 className="font-sideTitle">
                    Your spending Stats simplified
                  </h4>
                </div>
                <div className="iConWrapper my-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSliders}
                    className="origin-center "
                  />
                </div>                
              </div>
              <Tabs items={tabObject.Spending}/>               
              <div className="card">
              <ChartSpending />
              </div>
            </div>

            <div style={{ backgroundImage: `url(${backgroundImage})` }}  className="card dashBgImg">
              <div className="md:w-3/4">
                <h1 className="text-secondary dark:text-white font-[900] mb-2 text-[35px]">
                  Get best offers for yourself
                </h1>
                <p className="font-semibold font-sideTitle my-4 w-3/4 text-[20px]">
                  Unlock exclusive deals tailored just for you
                </p>
              <button className="self-start">Get Pro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
