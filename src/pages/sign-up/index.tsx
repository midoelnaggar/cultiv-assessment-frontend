import Button from "@/components/ui/Button/Button";
import FormControl from "@/components/ui/FormControl/FormControl";
import { IRegisterForm } from "@/interfaces/userInterfaces";
import AuthLayout from "@/layouts/AuthLayout";
import { AppDispatch, RootState } from "@/store";
import { registerThunk } from "@/store/thunks/userThunks";
import { useFormik } from "formik";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

export default function SignUp() {
  const { loading } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required").trim(),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Phone number is not valid") 
      .min(10, "Number must be at least 10 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formik = useFormik<IRegisterForm>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      number: "",
    },
    validationSchema: schema,
    onSubmit: async ({ name, email, number, password }) => {
      dispatch(registerThunk({ name, email, number, password }));
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  return (
    <AuthLayout
      title="Create My Account"
      footerText={`Already have an account?`}
      footerLink={
        <Link className="ms-1" href={"/sign-in"}>
          Sign in
        </Link>
      }
      submit={handleSubmit}
    >
      <div className="flex max-w-5xl flex-wrap gap-9 mb-10">
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
            children: "Password:",
          }}
          inputProps={{
            name: "password",
            type: "password",
            value: values.password,
            onChange: handleChange,
            required: true,
            disabled: loading,
          }}
          error={errors.password}
        />
        <FormControl
          labelProps={{
            children: "Email:",
          }}
          inputProps={{
            name: "email",
            type: "email",
            value: values.email,
            onChange: handleChange,
            required: true,
            placeholder: "example@email.com",
            disabled: loading,
          }}
          error={errors.email}
        />
        <FormControl
          labelProps={{
            children: "Confirm Password:",
          }}
          inputProps={{
            name: "confirmPassword",
            type: "password",
            value: values.confirmPassword,
            onChange: handleChange,
            required: true,
            disabled: loading,
          }}
          error={errors.confirmPassword}
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
      </div>
      <Button
        className="px-5 mb-6"
        type="submit"
        disabled={loading}
        loading={loading}
      >
        Sign Me Up
      </Button>
      <p className="mb-10 text-sm text-neutral-500 *:text-inherit *:font-normal">
        By contiuing you accept our <Link href="">terms and conditions</Link>{" "}
        and our <Link href="">privacy policy</Link>.
      </p>
    </AuthLayout>
  );
}
