import apiUrls from "@/helpers/apiUrls";
import { IContactForm } from "@/interfaces/contactInterfaces";
import axios from "axios";

const contactServices = {
    create: (data: IContactForm) => {
        return axios.post(process.env.NEXT_PUBLIC_API_URL + apiUrls.contact.create, data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    update: (data: IContactForm) => {
        return axios.put(process.env.NEXT_PUBLIC_API_URL + apiUrls.contact.update + data.id, { ...data, id: undefined }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    delete: (data: { id: string }) => {
        return axios.delete(process.env.NEXT_PUBLIC_API_URL + apiUrls.contact.delete + data.id)
    },
    get: (data: { id: string }) => {
        return axios.get(process.env.NEXT_PUBLIC_API_URL + apiUrls.contact.get + data.id)
    },
    getAll: () => {
        return axios.get(process.env.NEXT_PUBLIC_API_URL + apiUrls.contact.getAll)
    }
}

export default contactServices;