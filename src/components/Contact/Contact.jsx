import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import s from './Contact.module.css';

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.item}>
      <span className={s.name}>{name}</span>
      <span className={s.number}>{number}</span>
      <Button
        className={s.button}
        variant="outline-secondary"
        size="sm"
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </Button>

    </li>
  );
}

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
