import CheckIcon from "../ui/icons/CheckIcon";
import CloseIcon from "../ui/icons/CloseIcon";
import Link from "next/link";

const ContactActions = () => {
  return (
    <div className="flex w-full container px-9 pt-20 self-center justify-end gap-6 items-center">
      <button type="submit">
        <CheckIcon />
      </button>
      <Link href="/">
        <CloseIcon />
      </Link>
    </div>
  );
};

export default ContactActions;
