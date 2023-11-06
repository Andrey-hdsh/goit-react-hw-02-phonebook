import { Formik, Field} from 'formik';
import { FormStyled } from './contacts_form.styled';

export const ContactForm = ({ hundleContact, contacts }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        if (contacts.some(contact => contact.name === values.name)) {
          alert(`${values.name} is already in contacts`);
        } else if (contacts.some(contact => contact.number === values.number)) {
          alert(`${values.number} is already in contacts`);
        } else {
          hundleContact(values);
        }
        actions.resetForm();
      }}
    >
      <FormStyled>
        <label>Name</label>
        <Field type="text" name="name" required />
        <label>Phone</label>
        <Field type="tel" name="number" required />
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};
