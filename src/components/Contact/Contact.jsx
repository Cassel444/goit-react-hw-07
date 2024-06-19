import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

export const Contact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <div className={css.element}>
          <span className={css.icon}>
            <BsFillPersonFill size={30} color="black" />
          </span>
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.element}>
          <span className={css.icon}>
            <BsFillTelephoneFill size={30} color="black" />
          </span>
          <p className={css.text}>{number}</p>
        </div>
      </div>

      <button className={css.btn} onClick={handleDelete} type="submit">
        Delete
      </button>
    </>
  );
};
