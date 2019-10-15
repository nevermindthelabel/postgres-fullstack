import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../utils/api';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, price } = formData;

  console.log(formData);

  return (
    <div>
      <Form>
        <h2 className="text-center text-danger">Enter a new house</h2>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Property address</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </Form.Group>

        <Form.Group controlId="formBasicRent">
          <Form.Label>Enter monthly Rent</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="Monthly Rent"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            console.log('clicked');
            api.houses.newHouse(formData);
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
