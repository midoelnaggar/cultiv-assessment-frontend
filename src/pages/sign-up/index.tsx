import Button from "@/components/Button/Button";
import FormControl from "@/components/FormControl/FormControl";
import { IRegisterForm } from "@/interfaces/userInterfaces";
import AuthLayout from "@/layouts/AuthLayout";
import { AppDispatch, RootState } from "@/store";
import { loginThunk, registerThunk } from "@/store/thunks/userThunks";
import Link from "next/link";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
  const { loading } = useSelector((state: RootState) => state.user);

  const [form, setForm] = useState<IRegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(registerThunk({ ...form, confirmPassword: undefined }));
  };

  return (
    <AuthLayout
      title="Create My Account"
      footerText={`Already have an account?`}
      footerLink={
        <Link className="ms-1" href={"/sign-in"}>
          Sign in
        </Link>
      }
    >
      <div className="flex max-w-5xl flex-wrap gap-9 mb-10">
        <FormControl
          labelProps={{
            children: "Name:",
          }}
          inputProps={{
            name: "name",
            type: "text",
            value: form.name,
            onChange: handleInputChange,
            required: true,
            placeholder: "John Doe",
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
            children: "Confirm Password:",
          }}
          inputProps={{
            name: "confirmPassword",
            type: "password",
            value: form.confirmPassword,
            onChange: handleInputChange,
            required: true,
            disabled: loading,
          }}
        />
        <FormControl
          labelProps={{
            children: "Number:",
          }}
          inputProps={{
            name: "number",
            type: "tel",
            value: form.number,
            onChange: handleInputChange,
            required: true,
            placeholder: "+1(123)456-789",
            disabled: loading,
          }}
        />
      </div>
      <Button
        className="px-5 mb-6"
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        loading={loading}
      >
        Sign Me Up
      </Button>
      <text className="mb-10 text-sm text-neutral-500 *:text-inherit *:font-normal">
        By contiuing you accept our <Link href="">terms and conditions</Link>{" "}
        and our <Link href="">privacy policy</Link>.
      </text>
    </AuthLayout>
  );
}
