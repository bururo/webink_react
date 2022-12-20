import React from 'react';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import { Link } from 'react-router-dom';

export const MuiBottomNavigation = () => {
  const [value, setVale] = useState(0);
  return (
    <BottomNavigation
      className="bottom-nav"
      value={value}
      onChange={(event, newValue) => {
        setVale(newValue);
      }}
    >
      <Link to={'/'}>
        <BottomNavigationAction className="btn" label="Home" icon={<HomeRoundedIcon />} />
      </Link>
      <Link to={'/books'}>
        <BottomNavigationAction className="btn" label="My Books" icon={<BookRoundedIcon />} />
      </Link>
    </BottomNavigation>
  );
};
