import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import { NavBlock } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavBlock>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </NavBlock>
  );
};
