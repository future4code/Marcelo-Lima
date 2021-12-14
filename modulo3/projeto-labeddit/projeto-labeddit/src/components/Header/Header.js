import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './Styled';
import { goToFeed, goToLogin } from '../../routers/Coordinator';
import { useHistory } from 'react-router-dom/';
import { useState } from 'react';

const Header = ({rightButtonText, setRightButtonText}) => {
  const history = useHistory()

  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText('Login')
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(history)} color="inherit">LabEddit</Button>
        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header