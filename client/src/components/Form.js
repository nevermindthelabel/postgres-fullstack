import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import API from '../utils/api';
import api from '../utils/api';

const Forms = () => {

   const [formData, setFormData] = useState({
     address: '',
     rent: ''
   });

   const handleChange = event => {
     const { name, value } = event.target;
     setFormData({ ...formData, [name]: value });
   };

   console.log(formData);

   const { address, rent } = formData;

  //  const handleSubmit = event => {
  //    event.preventDefault();
  //    console.log('submitted');
  //  };

  return (
    <div>
      <Form>
        <h2 className="text-center text-danger">Enter a new house</h2>
        <Form.Group>
          <Form.Label>Property address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            onChange={handleChange}
            value={address}
            placeholder="Enter address"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter monthly Rent</Form.Label>
          <Form.Control
            type="text"
            name="rent"
            onChange={handleChange}
            value={rent}
            placeholder="Monthly Rent"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            console.log('clicked');
            api.newHouse(formData);
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
