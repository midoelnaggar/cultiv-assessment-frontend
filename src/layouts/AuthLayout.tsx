import { RootState } from "@/store";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

interface IProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  footerText: string;
  footerLink: ReactNode;
  submit: () => void | Promise<void>;
}

const AuthLayout = ({
  children,
  title,
  subtitle,
  footerText,
  footerLink,
  submit,
}: IProps) => {
  const { token } = useSelector((state: RootState) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace("/");
    }
  }, [token]);

  return token ? null : (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <form
        onSubmit={submit}
        className="flex flex-col min-h-box items-center p-9 bg-box-background-color"
      >
        <h1
          className={`mb-6 ${
            router.pathname == "/sign-in" ? "mt-auto" : "mb-auto"
          } `}
        >
          {title}
        </h1>
        {subtitle && <p className="mb-12">{subtitle}</p>}
        {children}
        <div className="flex">
          {footerText}
          {footerLink}
        </div>
      </form>
    </div>
  );
};

export default AuthLayout;
