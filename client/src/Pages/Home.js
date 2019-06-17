import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Form from '../components/Form';
import api from '../utils/api';

const Home = () => {
  const getHomes = () => {
    api.houses.getHouses().then(res => {
      console.log(res.data);
    }, []);
  };

  useEffect(() => {
    getHomes();
    
  }, []);

  const [formData, setFormData] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault();


  }

  
  return (
    <Container>
      <Form onChange={handleInputChange} onSubmit={handleSubmit} />
    </Container>
  );
};

export default Home;
