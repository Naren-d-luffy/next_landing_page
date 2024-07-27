"use client";

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import leftimg from '../app/images/Left.png'
import style from './page.module.css'

export default function Home() {
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
    <div className="App">
      {data.length > 0 && (
        <>
          <div className={style.head}>
            <div className='body1'>
              <h1 className='bh1'>{data[1].bh1}</h1>
              <p className='ph1'>{data[1].ph1}</p>
              <p className='ph1'>{data[1].ph12}</p>
              <div className='btd'>
                <Link href='#' className='b1tn-1'>{data[1].b1tn_1}</Link>
                <Link href='#' className='b1tn-2'>{data[1].b1tn_2}</Link>
              </div>
            </div>
          </div>

          <div className={style.part-2}>
            <div className='word2'> 
              <h1 className='p2h1'>{data[3].p2h1}</h1>
              <p className='p2p1'>{data[3].p2p1}</p>
              <p className='p2p1'>{data[3].p2p2}</p>
            </div>
            <div className='eleft'>
              <div className='left1'>
                <Image src={leftimg} alt='Left Image' />
                <h2 className='lh2'>{data[3].lh2}</h2>
                <p className='lp2'>{data[3].lp2}</p>
              </div>
              
              <div className='left2'>
                <Image src={leftimg} alt='Left Image' />
                <h2 className='lh2'>{data[3].lh2}</h2>
                <p className='lp2'>{data[3].lp2}</p>
              </div>
            </div>
          </div>

          <div className='part-3'>
            <div className='word3'> 
              <h1 className='p2h1'>{data[3].p2h1}</h1>
              <p className='p2p1'>{data[3].p2p1}</p>
              <p className='p2p1'>{data[3].p2p2}</p>
            </div>
          </div>

          <div className='part-4'>
            <div className='word3'> 
              <h1 className='p2h1'>{data[3].p2h1}</h1>
              <p className='p2p1'>{data[3].p2p1}</p>
              <p className='p2p1'>{data[3].p2p2}</p>
            </div>
          </div>

          <div className='part-5'>
            <div className='word3'> 
              <h1 className='p2h1'>{data[3].p2h1}</h1>
              <p className='p2p1'>{data[3].p2p1}</p>
              <p className='p2p1'>{data[3].p2p2}</p>
            </div>
          </div>

          <div className='price'>
            <h2 className='ph2'>{data[4].ph2}</h2>
            <p className='p1'>{data[4].p1}</p>
            <p className='p2'>{data[4].p2}</p>
            <p className='p3'>{data[4].p3}</p>
            <p className='p4'>{data[4].p4}</p>
            <Link href='#' className='b1tn-3'>{data[4].b1tn3}</Link>
          </div>
        </>
      )}
    </div>
  );
}
