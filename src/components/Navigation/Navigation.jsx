import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationLink>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavigationLink>
  );
};
