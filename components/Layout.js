import React, { Component } from 'react';
import Head from 'next/head'
import config from '../config';

import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <>
        <Head>
          <title> {config.siteTitle} </title>
        </Head>
        <div
          className={
            isPreloaded
              ? 'landing main-body is-preload'
              : 'landing main-body'
          }
        >
          <div id="page-wrapper">
            <SideBar fullMenu={fullMenu} />
            {children}
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default Layout;
