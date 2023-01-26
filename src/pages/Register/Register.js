import styles from './Register.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { selectIsLoading, selectError } from 'redux/auth/authSelectors';
import { resetAuthError } from 'redux/auth/authSlice';

const Register = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(resetAuthError());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    event.currentTarget.reset();
  };

  const registerForm = (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Username <input type="text" name="name" />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Invalid email address"
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          pattern="(?=.*[a-z])(?=.*[1-9]).{8,}"
          title="The password cannot be less than 7 characters and must contain at least one number, one lowercase latin letter."
        />
      </label>
      <button className={styles.btnRegister} type="submit">
        Register
      </button>
    </form>
  );

  return (
    <div className={styles.registerWrapper}>
      {isLoading}
      {!isLoading && registerForm}
      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
    </div>
  );
};

export default Register;
