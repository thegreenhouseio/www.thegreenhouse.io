import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';
import './page-layout.css';

const PageLayout = (props) => {
  return (
    <div className="layout">
      <section>
        <Header/>
      </section>

      <section>
        <Navigation/>
      </section>

      <section className="outlet">
        { props.children }
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default PageLayout;