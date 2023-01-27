import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  Form,
  Title,
  LabelGroup,
  LabelTitle,
  Input,
} from './RegisterForm.styled';
import { Button } from '../App.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title>Registration form</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LabelGroup>
          <LabelTitle>Username</LabelTitle>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

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
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};
