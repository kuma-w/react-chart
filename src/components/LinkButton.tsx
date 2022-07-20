import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface LinkButton {
  name: string;
  url: string;
}

const LinkButton = ({ name, url }: LinkButton) => (
  <Link to={url} style={{ marginLeft: '1rem', textDecorationLine: 'none' }}>
    <Button variant='contained'>{name}</Button>
  </Link>
);

export default LinkButton;
