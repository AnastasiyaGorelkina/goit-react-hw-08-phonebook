import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsAPI";
import { ContactForm } from "components/ContactsForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.isLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <HelmetProvider>
            <Helmet>
                <title>My phonebook</title>
            </Helmet>
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactForm />
            <Filter />
            <ContactList />
        </HelmetProvider>
    );
};