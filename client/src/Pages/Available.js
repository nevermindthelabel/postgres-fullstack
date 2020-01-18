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
      <h2>Available Homes</h2>
      {
        loading ? <h2>loading...</h2> :
          available.map(house => (<Card style={{maxWidth:'50%', margin:'auto'}} key={house.id}>
            <h2>{house.address} in {house.city}</h2>
            <h3>{house.price}</h3>
            <h4>{house.square_feet}</h4>
          </Card>))
      }
    </Container>
  )
};

export default Available;
