import Button from "@/components/ui/Button/Button";
import FormControl from "@/components/ui/FormControl/FormControl";
import { ILoginForm } from "@/interfaces/userInterfaces";
import AuthLayout from "@/layouts/AuthLayout";
import { AppDispatch, RootState } from "@/store";
import { loginThunk } from "@/store/thunks/userThunks";
import { useFormik } from "formik";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function SignIn() {
  const { loading } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik<ILoginForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async () => {
      dispatch(loginThunk(values));
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Enter your email and password to access your account"
      footerText={`Don't have an account?`}
      footerLink={
        <Link className="ms-1" href={"/sign-up"}>
          Sign up
        </Link>
      }
      submit={handleSubmit}
    >
      <div className="flex flex-col gap-9 mb-12">
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
      </div>
      <Button
        className="px-28 mb-24"
        type="submit"
        disabled={loading}
        loading={loading}
      >
        Sign In
      </Button>
    </AuthLayout>
  );
}
