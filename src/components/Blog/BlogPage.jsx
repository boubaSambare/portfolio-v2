import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/NavBar';
import Blog from './Blog'
import { PortfolioProvider } from '../../context/context';

import {footerData } from '../../mock/data';

function BlogPage() {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{  footer }}>
      <NavBar />
      <Blog/>
      <Footer />
    </PortfolioProvider>
  );
}

export default BlogPage;
