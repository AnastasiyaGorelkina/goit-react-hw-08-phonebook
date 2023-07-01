import { Item, List, Button, Loading } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { deleteContact } from "redux/contacts/contactsAPI";

export const ContactList = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);
  const filterContact = useSelector(state => state.filters.filter);
  const dispatch = useDispatch();

  const delContact = id => {
    Notiflix.Notify.failure('Contact delet');
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContact)
    );
  };

  const visible = getVisibleContacts();

  return (
    <>
      <Loading>{isLoading && <p>Loading...</p>}</Loading>

      <List>
        {visible.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <p>{name}: {number}</p>
              <Button type="button" onClick={() => delContact(id)}>Delete</Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};