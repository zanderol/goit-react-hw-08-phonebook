import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <ul>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
        </ul>
      )}
    </nav>
  );
};
