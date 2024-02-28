import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import { AppDispatch, RootState } from "@/store";
import { getAllContactThunk } from "@/store/thunks/contactThunks";
import axios from "axios";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  const { token } = useSelector((state: RootState) => state.user);
  const { loading } = useSelector((state: RootState) => state.contact);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      dispatch(getAllContactThunk());
    } else {
      router.replace("/sign-in");
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center grow min-h-screen w-screen ">
      {children}
      {loading && <LoadingOverlay />}
    </div>
  );
};

export default DefaultLayout;
