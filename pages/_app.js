import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";

import { useSSR } from "@nextui-org/react";
// import { getImage } from '../fe_call/routes';

function MyApp({ Component, pageProps }) {
  const [showLogout, setLogOut] = useState("");
  const { isBrowser } = useSSR();
  // const [user, setUser] = useState({});

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         fetchColor().then(() => {});
  //       } catch (error) {
  //         document.documentElement.style.setProperty('--primary-color', '#ffbe33');
  //       }
  //     })();
  //   }, []);

  //   // Function to fetch Color
  //   const fetchColor = async () => {
  //     let color = await getImage({ img_name: 'site_color' });
  //     if (color.isSuccessful) {
  //       if (color.payload) {
  //         const fetchedColor = color.payload.URI;
  //         // Update the global CSS variable value
  //         document.documentElement.style.setProperty('--primary-color', fetchedColor);
  //       }
  //     }
  //   };

  return (
    isBrowser && (
      <Navbar props={showLogout} props2={setLogOut}>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component props2={setLogOut} {...pageProps} />
      </Navbar>
    )
  );
}
export default MyApp;
