import { Item, List, Button, Loading } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { deleteContact } from "redux/contacts/contactsAPI";

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterContact = useSelector(state => state.filters.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const deletContact = id => {
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
      {visible.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <Button type="button" onClick={() => deletContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
      </List>
      </>
  );
};