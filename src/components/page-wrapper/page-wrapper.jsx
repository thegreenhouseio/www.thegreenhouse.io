import React from 'react';
import Header from '../header/header';

const PageWrapper = (props) => {
  return (
    <div>
      <section>
        <Header/>
      </section>

      <section>
        {props.children}
      </section>

    </div>
  )
}

export default PageWrapper;