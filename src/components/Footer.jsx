import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 py-8 px-6">
      <div className="flex gap-20">
        <div className="text-slate-100 font-montserrat">
          <ul>
            <li>Contact us</li>
            <li>destinations</li>
            <li>Bonus plocies</li>
            <li>Perks</li>
          </ul>
        </div>
        <div className="text-slate-100 font-montserrat">
          <ul>
            <li>Cookie Ploicies</li>
            <li>About</li>
            <li>Service</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-96 flex mt-20 justify-evenly">
        <div className="text-sm text-slate-400 font-palanquin">
          @tourism.ghost.com
        </div>
        <div className="text-sm text-slate-400 font-palanquin">
          All copy rights are reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
