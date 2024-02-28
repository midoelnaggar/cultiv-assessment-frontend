import ContactActions from "@/components/ContactActions/ContactActions";
import FormControl from "@/components/ui/FormControl/FormControl";
import { IContactForm } from "@/interfaces/contactInterfaces";
import DefaultLayout from "@/layouts/DefaultLayout";
import { AppDispatch, RootState } from "@/store";
import {
  createContactThunk,
  updateContactThunk,
} from "@/store/thunks/contactThunks";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const Contact = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);

  const { loading, contacts } = useSelector(
    (state: RootState) => state.contact
  );

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { contactId } = router.query;
  const isNew: boolean = contactId == "new";

  useEffect(() => {
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
        formik.setValues({ ...values, image: uploadedImage });
      };
      reader.readAsDataURL(uploadedImage);
    }
  }, [uploadedImage]);

  useEffect(() => {
    if (contactId && contacts && !isNew) {
      const contact = contacts.find((contact) => contact.id == contactId);
      if (contact?.id)
        formik.setValues({
          id: contact.id,
          name: contact.name,
          number: contact.number,
          email: contact?.email,
        });
      setImageUrl(contact?.imageUrl as string);
    }
  }, [contactId, contacts]);

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required").trim(),
    email: Yup.string().email("Invalid email format"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Phone number is not valid")
      .min(10, "Number must be at least 10 characters"),
  });

  const formik = useFormik<IContactForm>({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: schema,
    onSubmit: async () => {
      if (isNew) {
        const created = await dispatch(createContactThunk(values));
        created.meta.requestStatus == "fulfilled" && router.push("/");
      } else {
        const updated = await dispatch(updateContactThunk(values));
        updated.meta.requestStatus == "fulfilled" && router.push("/");
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit} className="w-full flex flex-col ">
        <ContactActions />
        <div className="flex w-full container justify-between items-center p-9 pb-32 self-center ">
          <div className="group relative">
            <img
              src={(imageUrl as string) || "/images/placeholder.png"}
              width={456}
              height={548}
              alt="placeholder"
              onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
            />
            <h1 className="absolute opacity-0 drop-shadow-sm top-16 left-1/2 -translate-x-1/2 text-foreground-secondary-color  group-hover:opacity-100 transition-all ">
              {imageUrl ? "Edit" : "Add"} Photo
            </h1>
            <input
              className="absolute opacity-0 top-0 left-0 w-full h-full bg-transparent cursor-pointer  "
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files?.length && setUploadedImage(e.target.files[0])
              }
            />
          </div>
          <div className="flex flex-col gap-10 px-9">
            <FormControl
              labelProps={{
                children: "Name:",
              }}
              inputProps={{
                name: "name",
                type: "text",
                value: values.name,
                onChange: handleChange,
                required: true,
                placeholder: "John Doe",
                disabled: loading,
              }}
              error={errors.name}
            />

            <FormControl
              labelProps={{
                children: "Number:",
              }}
              inputProps={{
                name: "number",
                type: "tel",
                value: values.number,
                onChange: handleChange,
                required: true,
                placeholder: "+1(123)456-789",
                disabled: loading,
              }}
              error={errors.number}
            />
            <FormControl
              labelProps={{
                children: "Email:",
              }}
              inputProps={{
                name: "email",
                type: "email",
                value: values.email || "",
                onChange: handleChange,
                placeholder: "example@email.com",
                disabled: loading,
              }}
              error={errors.email}
            />
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default Contact;
