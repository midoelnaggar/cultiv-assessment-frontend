import { IContact } from "./contactInterfaces";

export interface IUser {
    id?: string;
    name: string;
    email: string;
    number: string;
    last_login?: Date | null;
    created_at: Date;
    contacts: IContact[];
}

export interface IUserState {
    loading: boolean;
    token: string | null,
    userInfo: IUser | null,
}

export interface ILoginForm {
    email: string;
    password: string;
}


export interface IRegisterForm {
    name: string
    email: string;
    password: string;
    confirmPassword?: string;
    number: string;
}