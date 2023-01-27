import { useState } from 'react';
import {
  Form,
  Title,
  LabelGroup,
  LabelTitle,
  Input,
} from './ContactForm.styled';
import { Button } from '../App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      toast.success(`${name} is already in contacts.`, {
        style: {
          border: '1px solid #cca8e9',
          padding: '16px',
        },
        icon: '⚠',
      });
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Title>Add contact</Title>

      <Form onSubmit={onFormSubmit}>
        <LabelGroup>
          <label htmlFor="">
            <LabelTitle>Name:</LabelTitle>
            <Input
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            <LabelTitle>Number:</LabelTitle>
            <Input
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </LabelGroup>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};
