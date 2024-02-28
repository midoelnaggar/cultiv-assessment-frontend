import { IContact } from "@/interfaces/contactInterfaces";
import Link from "next/link";
import EditIcon from "../ui/icons/EditIcon";
import DeleteIcon from "../ui/icons/DeleteIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { deleteContactThunk } from "@/store/thunks/contactThunks";

interface IProps {
  contact: IContact;
}

const ContactCard = ({ contact }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteClick = () => {
    if (contact.id) {
      dispatch(deleteContactThunk({ id: contact.id }));
    }
  };
  return (
    <div className="w-full group relative min-h-card border-2 border-neutral-500 ">
      <img
        className="w-full h-80 object-cover"
        src={contact.imageUrl || "/images/placeholder.png"}
        height={300}
        alt="contact"
        onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
      />
      <div className="absolute flex gap-4 scale-0 top-3 right-3 drop-shadow-sm group-hover:scale-100 transition-all">
        <Link href={`/contact/${contact.id}`}>
          <EditIcon />
        </Link>
        <button onClick={handleDeleteClick}>
          <DeleteIcon />
        </button>
      </div>
      <div className="group flex flex-col gap-2 justify-between border-t-2 items-center p-2 border-t-neutral-500 *:text-center">
        <h1 className="font-bold text-3xl">{contact.name}</h1>
        <a
          className="no-underline text-neutral-500 group-hover:scale-110 group-hover:text-foreground-primary-color transition-all "
          href={`tel:${contact.number}`}
        >
          {contact.number}
        </a>
        <a
          className="no-underline text-neutral-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
