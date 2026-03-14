import { useEffect, useState } from "react";

const Footer = ({ className }: { className: string }) => {
  const [year, setYear] = useState(2000);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="container mx-auto my-5 text-sm  border-gray-300 pb-3  border-t-2 py-5">
      <div className={`w-50 ${className} `}>
      <div className="logoWrapper relative h-7 w-30 m-auto">
        <img
          src="../images/ketanLogo_dark.svg"
          style={{ objectFit: "cover" }} // CSS styling
          alt="ketanLogo"
          sizes="(max-width: 200px) 100vw, 50vw" //
        />
      </div>
      <div className="clear-both my-2">
        &copy; {year} All rights reserved.
      </div>
      </div>
    </div>
  );
};

export default Footer;