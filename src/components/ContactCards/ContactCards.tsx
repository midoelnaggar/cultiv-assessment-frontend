import { RootState } from "@/store";
import { useSelector } from "react-redux";
import NoResults from "../NoResults/NoResults";
import ContactCard from "../ContactCard/ContactCard";

const ContactCards = () => {
  const { contacts, loading } = useSelector(
    (state: RootState) => state.contact
  );

  return (
    <div className=" container max-w-screen-xl  grid grid-cols-4 py-10 gap-14 flex-wrap  ">
      {contacts.length
        ? contacts.map((contact) => {
            return <ContactCard key={contact.id} contact={contact} />;
          })
        : !loading && <NoResults />}
    </div>
  );
};

export default ContactCards;
