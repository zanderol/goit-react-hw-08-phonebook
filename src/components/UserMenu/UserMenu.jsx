import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { BTNWrapper } from './UserMenu.styled';
import { Button } from '../App.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <BTNWrapper>
      <p>Welcome, {user.name}</p>
      <Button
        style={{ height: '30px' }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </BTNWrapper>
  );
};
