import apiUrls from "@/helpers/apiUrls";
import { ILoginForm, IRegisterForm } from "@/interfaces/userInterfaces";
import axios from "axios";

const userServices = {
    login: (data: ILoginForm) => {
        return axios.post(process.env.NEXT_PUBLIC_API_URL + apiUrls.user.login, data)
    },
    register: (data: IRegisterForm) => {
        return axios.post(process.env.NEXT_PUBLIC_API_URL + apiUrls.user.register, data)
    }
}

export default userServices;