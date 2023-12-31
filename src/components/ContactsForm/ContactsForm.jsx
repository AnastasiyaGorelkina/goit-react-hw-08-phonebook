import { Label, Form, Title, Input, Add } from './ContactsForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContacts } from 'redux/contacts/contactsAPI';


export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
   
    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.phone.value,
    };
   
    if (contacts.find(({ name }) => name === contact.name)) {
      Notiflix.Notify.warning('Such a contact already exists! Try again.');
      return;
    }
    dispatch(addContacts(contact));
    Notiflix.Notify.success('Add contact');
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
      <Label htmlFor={nameInputId}>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>

      <Label htmlFor={numberInputId}>
        <Title>Number</Title>
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
      </Label>
      <Add type="submit">Add contact</Add>
      </div>
    </Form>
  );
};