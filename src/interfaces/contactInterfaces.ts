export interface IContact {
    id?: string;
    name: string;
    number: string;
    created_at: Date;
    updated_at?: Date | null;
    imageUrl?: string | null;
    email?: string | null;
}

export interface IContactForm {
    id?: string;
    name: string;
    number: string;
    email?: string |null;
    image?: File;
}

export interface IContactState {
    loading: boolean;
    contacts: IContact[],
}
