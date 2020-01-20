import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
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
          available.map(house => (<Card style={{ maxWidth: '50%', margin: 'auto' }} key={house.id}>
            <h2>{house.address} in {house.city}</h2>
            <h3>Price: {house.price}</h3>
            <h4>Square Feet: {house.square_feet}</h4>
            <h4>Bedrooms: {house.num_bed}</h4>
            <h4>Bathrooms: {house.num_bath}</h4>
            <h4>Pool: {!house.swimming_pool ? 'No' : 'Yes'}</h4>
            <h4>Available: {!house.available ? 'No' : 'Yes'}</h4>
            {/* <Button variant="danger" onClick={() => console.log(`you clicked a button with the id of ${house.id}`)}>Remove</Button> */}
          </Card>))
      }
    </Container>
  )
};

export default Available;
