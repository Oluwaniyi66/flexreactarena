import React, { useEffect } from 'react';
import Section1Left from './Section1Left';
import Section1Middle from './Section1Middle';
import Section1Right from './Section1Right';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import './superstore.css';

function Section1() {


  return (
    <div>
      <div id='section-1-super-store'>
        <div className='container-fluid'>
          <Section1Left /> 
          <Section1Middle />
          <Section1Right />
        </div>

        <div id='section-2-super-store'>
          <div className='container-fluid-2'>
            <Section2 />
          </div>
        </div>

        <div id='section-2-super-store'>
          <div className='container-fluid-3'>
            <Section3 />
          </div>
        </div>

        <div id='section-2-super-store'>
          <div className='container-fluid-3'>
            <Section4 />
          </div>
        </div>

        <div id='section-2-super-store'>
          <div className='container-fluid-3'>
            <Section5 />
          </div>
        </div>

        <div id='section-2-super-store'>
          <div className='container-fluid-3'>
            <Section6 />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section1;
