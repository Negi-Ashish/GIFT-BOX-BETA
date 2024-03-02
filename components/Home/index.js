import React, { useState, useEffect } from "react";
// import Card from './Card/Card';
// import Edition from './Card/Edition';
import { Dropdown } from "@nextui-org/react";
// import { fetchNFTS } from '../fe_call/routes';
// import Footer from './Footer/index.js';
// import CompanyInfo from './NFTDisplay/CompanyInfo';
// import Loader from './Loader';

export default function Home({ children, props }) {
  return (
    <>
      {
        <div
          className="w-full flex flex-col items-center "
          style={{ color: "black", marginTop: "5.5%" }}
        >
          <div
            className="w-full flex flex-col "
            style={{ borderRadius: "10px", backgroundColor: "blue" }}
          >
            {/* <CompanyInfo />
            <Footer /> */}
            HOME
          </div>
          <div
            className="w-full flex flex-col "
            style={{ borderRadius: "10px", backgroundColor: "blue" }}
          >
            {/* <CompanyInfo />
            <Footer /> */}
            HOME
          </div>
          <div
            className="w-full flex flex-col "
            style={{ borderRadius: "10px", backgroundColor: "blue" }}
          >
            {/* <CompanyInfo />
            <Footer /> */}
            HOME
          </div>
          <div
            className="w-full flex flex-col "
            style={{ borderRadius: "10px", backgroundColor: "blue" }}
          >
            {/* <CompanyInfo />
            <Footer /> */}
            HOME
          </div>

          <div className="text-3xl alteredprivacy inprivacy  ">
            <span style={{ float: "left" }}>Profile: </span>
          </div>
        </div>
      }
    </>
  );
}
