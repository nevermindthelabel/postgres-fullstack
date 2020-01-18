import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';

const Available = () => {
  const [available, setAvilable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/houses').then(data => {
      console.log(data.data);
      setAvilable(data.data);
      setLoading(false);
    })
  }, []);

  return (
      <Container>
        <h2>things and stuff</h2>
        {
          loading ? <h2>loading...</h2> :
available.map(house => (<Card key={house.id}><h2>{house.address}</h2><p>{house.price}</p></Card>))
        }
      </Container>
  )
};

export default Available;
