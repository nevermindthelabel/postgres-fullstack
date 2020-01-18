import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import api from '../utils/api';
import axios from 'axios';

const Available = () => {
  const [available, setAvilable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/houses').then(data => {
      console.log(data)
    })
  }, []);

  return (
    <div>
      <Container>
        <h2>things and stuff</h2>
      </Container>
    </div>
  )
};

export default Available;
