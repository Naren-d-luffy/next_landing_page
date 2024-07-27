"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import instagram from '../images/Instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';


const Foot = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/landing');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='fo'>
      <div className='foot'>
        <div className='foot1'>
          <p className='fp1'>{data[5].cop}</p>
          <p className='flan'>{data[5].flan}</p>
          <Link href='#' className='b1tn-3'>{data[5].b1tn3}
          </Link>
        </div>
        <hr className='footer-divider' />
      </div>

      <div className='footer'>
        <div className='footad'>
          <Link href='#'className='hm'>{data[6].hm1}
          </Link>
          <Link href='#' className='hm'>{data[6].hm2}
          </Link>
          <Link href='/contact'className='hm'>{data[6].hm3}
          </Link>
          <Link href='/dashboard'className='hm'>{data[6].das}
          </Link>
        </div>
        <div className='footlo'>
          <Link href='#'>
              <Image src={facebook} alt='Facebook' width={30} height={30} />

          </Link>
          <Link href='#'>
              <Image src={twitter} alt='Twitter' width={30} height={30} />

          </Link>
          <Link href='#' >
  
              <Image src={instagram} alt='Instagram' width={30} height={30} />
    
          </Link>
          <Link href='#' >
  
              <Image src={linkedin} alt='LinkedIn' width={30} height={30} />
    
          </Link>
          <Link href='#' >
  
              <Image src={youtube} alt='YouTube' width={30} height={30} />
    
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Foot;
