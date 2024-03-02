import React, { useState, useEffect } from "react";
// import Card from './Card/Card';
// import Edition from './Card/Edition';
import { Dropdown } from "@nextui-org/react";
// import { fetchNFTS } from '../fe_call/routes';
// import Footer from './Footer/index.js';
// import CompanyInfo from './NFTDisplay/CompanyInfo';
// import Loader from './Loader';

export default function LandingPage({ children, props }) {
  //   const [showEditions, setShowEditions] = useState(false);
  //   const [specificNFT, setSpecificNFT] = useState(false);
  //   const [filterNfts, setFilterNfts] = useState(false);

  // let nfts = window.localStorage.getItem('nfts');
  // console.log('nfts', nfts);

  //   let nfts = [];
  //   let filters = [];

  //   if (props.nfts) {
  //     nfts = JSON.parse(window.localStorage.getItem('nfts'));
  //     filters = JSON.parse(window.localStorage.getItem('filters'));
  //   }
  //   function handelEditions(e) {
  //     e.preventDefault();
  //     setSpecificNFT(false);
  //     setShowEditions(false);
  //   }
  //   async function handelFilter(filter_option) {
  //     filter_option = filter_option.split(',').map(String);

  //     if (filter_option == 'All') {
  //       setFilterNfts(false);
  //     } else {
  //       let filtered_nfts = await fetchNFTS({ key: filter_option[0], value: filter_option[1] });
  //       // console.log('filtered_nfts', filtered_nfts.payload);
  //       setFilterNfts(filtered_nfts.payload);
  //     }
  //   }

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
            TEST MY BOY{" "}
          </div>
          <div
            className="w-full flex flex-col "
            style={{ borderRadius: "10px", backgroundColor: "blue" }}
          >
            {/* <CompanyInfo />
            <Footer /> */}
            TEST MY BOY{" "}
          </div>
          <div
            className="w-full flex flex-col "
            style={{ borderRadius: "10px", backgroundColor: "blue" }}
          >
            {/* <CompanyInfo />
            <Footer /> */}
            TEST MY BOY{" "}
          </div>
          <div
            className="w-full flex flex-col "
            style={{ borderRadius: "10px", backgroundColor: "blue" }}
          >
            {/* <CompanyInfo />
            <Footer /> */}
            TEST MY BOY{" "}
          </div>

          <div className="text-3xl alteredprivacy inprivacy  ">
            <span style={{ float: "left" }}>Profile: </span>
          </div>
        </div>
      }
    </>
  );
}
