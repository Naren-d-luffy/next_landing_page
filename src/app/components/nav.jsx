"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';


const Nav = () => {
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
    <div className='nav'>
      <div className='hap-container'>
        <Link className='hap' href='/'>{data[0].ha1}</Link>
        <Link className='hap' href='#'>{data[0].ha2}</Link>
        <Link className='hap' href='/contact'>{data[0].ha3}</Link>
        <Link className='hap' href='/dashboard'>{data[0].dash}</Link>
      </div>
      <p className='lan'>{data[0].lan}</p>
      <Link href='#' className='buybtn'>Buy now</Link>
    </div>
  );
};

export default Nav;
