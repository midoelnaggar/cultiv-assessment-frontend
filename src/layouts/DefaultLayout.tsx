import { RootState } from "@/store";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  const { token } = useSelector((state: RootState) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.replace("/sign-in");
    }
  }, [token]);

  return token ? (
    <div className="flex-col container">{children}</div>
  ) : null;
};

export default DefaultLayout;
