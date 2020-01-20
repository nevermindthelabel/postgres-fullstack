import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../../utils/api';

const Forms = () => {
  const [formData, setFormData] = useState({
    address: '',
    price: 0,
    square_feet: 0,
    num_bed: 0,
    num_bath: 0,
    num_stories: 0,
    city: '',
    // garage: false,
    // swimming_pool: false,
    // available: true
  });

  const [garage, setGarage] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleClick = e => {
  //   setFormData(prevState => ({
  //     garage: !prevState.garage
  //   }))
  // }

  const { address, price, square_feet, num_bed, num_bath,
    num_stories, city, /*garage, swimming_pool, available*/ } = formData;

  // const { garage, swimming_pool, available } = formData.checked;

  console.log(garage);

  return (
    <div>
      <Form>
        <h2 className="text-center text-danger">Enter a new house</h2>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Property address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </Form.Group>
        <Form.Group controlId="formBasicRent">
          <Form.Label>Enter monthly Rent</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="Monthly Rent"
          />
        </Form.Group>
        <Form.Group controlId="formBasicSize">
          <Form.Label>Enter square footage</Form.Label>
          <Form.Control
            type="text"
            name="square_feet"
            value={square_feet}
            onChange={handleChange}
            placeholder="Home size"
          />
        </Form.Group>
        <Form.Group controlId="formBasicBedrooms">
          <Form.Label>Number of Bedrooms</Form.Label>
          <Form.Control
            type="text"
            name="num_bed"
            value={num_bed}
            onChange={handleChange}
            placeholder="Bedrooms"
          />
        </Form.Group>
        <Form.Group controlId="formBasicBath">
          <Form.Label>Number of Bathrooms</Form.Label>
          <Form.Control
            type="text"
            name="num_bath"
            value={num_bath}
            onChange={handleChange}
            placeholder="Bathrooms"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCityh">
          <Form.Label>What City is the Property in?</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="City"
          />
        </Form.Group>
        <Form.Group controlId="formBasicStories">
          <Form.Label>Number of Stories</Form.Label>
          <Form.Control
            type="number"
            name="num_stories"
            value={num_stories}
            onChange={handleChange}
            placeholder="Stories"
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicGarage">
          <Form.Label>Is there a Garage?</Form.Label>
          <Form.Control
            type="checkbox"
            name="garage"
            value={garage}
            onChange={handleClick}
          />
        </Form.Group> */}
        <label>
         Garage
          <input
            name="garage"
            type="checkbox"
            checked={garage}
            onChange={() => setGarage(!garage)} />
        </label>
        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            api.houses.newHouse(formData);
            setFormData({
              address: '',
              price: 0,
              square_feet: 0,
              num_bed: 0,
              num_bath: 0,
              num_stories: 0,
              city: '',
              garage: false,
              swimming_pool: false,
              available: true
            })
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
