import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Title, LabelGroup, LabelTitle, Input } from './LoginForm.styled';
import { Button } from '../App.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title>Log in to your profile</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LabelGroup>
          <LabelTitle>Email</LabelTitle>
          <Input
            type="email"
            name="email"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            title="Email may contain letter, digits and @ symbol. For example Neo33@matrix.com"
            required
          />

          <LabelTitle>Password</LabelTitle>
          <Input type="password" name="password" minLength="8" required />
        </LabelGroup>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};
