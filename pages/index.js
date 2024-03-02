import React from 'react';
import Link from 'next/link';
// import { BaseAuthLayout } from '../components/Auth/Base';
import Centrebar from '@/components/Centrebar';
import { useEffect } from 'react';
// import Footer from '../components/Footer';
// import { removeToken } from '../service/browserToken';
import Router from 'next/router';
const Homepage = () => {

  let props = {
    component: 'home',
  };

  return <Centrebar props={props}></Centrebar>;
};
export default Homepage;
