"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';  
import style from './dash.module.css'

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dash');
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("Deleting item with id:", id); 
      await axios.post('http://localhost:5000/delete', { id });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item) => {
    router.push(`/edit/${item._id}`); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className= {style.main}>
      <div className={style.dash}>
        {data.map((item, index) => (
          <div key={index} className={style.dataitem}>
            <div> 
              <h2 className={style.na}>Name: {item.name}</h2>
              <p className={style.em}>Email: {item.email}</p>
              <p className={style.em}>Subject: {item.subject}</p>
              <p className={style.em}>Message: {item.message}</p>
            </div>
            <div>
              {/* <button className="edi" onClick={() => handleEdit(item)}>Edit</button> */}
              <button className={style.del} onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
