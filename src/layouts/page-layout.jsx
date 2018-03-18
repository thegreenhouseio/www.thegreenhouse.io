import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Navigation from '../components/navigation/navigation';

const PageLayout = (props) => {
  return (
    <div>
      <section>
        <Navigation/>
      </section>

      <section>
        <Header/>
      </section>

      <section>
        { props.children }
      </section>

      <section>
        <Footer/>
      </section>

    </div>
  )
}

export default PageLayout;