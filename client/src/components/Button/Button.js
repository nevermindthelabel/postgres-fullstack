import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import api from '../../utils/api';

const Buttons = ({ id }) => {

  const remove = () => {
    api.houses.removeHouse(id)
  }

  return (
    <Button variant='danger' onClick={remove}>Remove</Button>
  )
}

export default Buttons;
