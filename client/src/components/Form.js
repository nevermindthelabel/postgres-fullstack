import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Forms = () => {
  return (
    <div>
      <Form>
        <h2 className="text-center text-danger">Enter a new house</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Property address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter monthly Rent</Form.Label>
          <Form.Control type="text" placeholder="Monthly Rent" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Forms;
