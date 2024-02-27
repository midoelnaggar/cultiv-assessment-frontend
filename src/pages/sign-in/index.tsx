import Button from "@/components/Button/Button";
import FormControl from "@/components/FormControl/FormControl";
import Loading from "@/components/Loading";
import { ILoginForm } from "@/interfaces/userInterfaces";
import AuthLayout from "@/layouts/AuthLayout";
import { AppDispatch, RootState } from "@/store";
import { loginThunk } from "@/store/thunks/userThunks";
import Link from "next/link";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const { loading } = useSelector((state: RootState) => state.user);

  const [form, setForm] = useState<ILoginForm>({ email: "", password: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginThunk(form));
  };

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
    >
      <div className="flex flex-col gap-9 mb-12">
        <FormControl
          labelProps={{
            children: "Email:",
          }}
          inputProps={{
            name: "email",
            type: "email",
            value: form.email,
            onChange: handleInputChange,
            required: true,
            placeholder: "example@email.com",
            disabled: loading,
          }}
        />
        <FormControl
          labelProps={{
            children: "Password:",
          }}
          inputProps={{
            name: "password",
            type: "password",
            value: form.password,
            onChange: handleInputChange,
            required: true,
            disabled: loading,
          }}
        />
      </div>
      <Button
        className="px-28 mb-24"
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        loading={loading}
      >
        Sign In
      </Button>
    </AuthLayout>
  );
}
