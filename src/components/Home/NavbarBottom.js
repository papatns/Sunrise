import React from "react";
import styles from "@/app/styles/Navbar.module.css"
import Image from "next/image";

const NavbarBottom = () => {
  return (
    <>
      <div className="nb-container">
        <div className="nb-navbar">
          <span>Internet & TV</span>
          <span>Mobile</span>
          <span>Combi subscription</span>
          <span>Devices</span>
          <span>Young</span>
          <span>Top Deals</span>
        </div>

        <div className="nr-navbar">
          <div className="call">
            <Image
              src="https://www.sunrise.ch/eshop/icons/headset_black.svg"
              height={30}
              width={30}
            />
            Sales Hotline
          </div>
          <hr />
          <Image
            src="https://www.sunrise.ch/eshop/HeaderIcons/falcon-search.svg"
            height={30}
            width={30}
          />
          <hr />
          <div className="user">
            <Image
              src="https://www.sunrise.ch/eshop/HeaderIcons/new_profile_icon.svg"
              height={30}
              width={30}
            />{" "}
            My Sunrise
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarBottom;
