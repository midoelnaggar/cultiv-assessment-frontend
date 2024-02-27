export interface IContact {
    id?: string;
    name: string;
    number: string;
    created_at: Date;
    updated_at?: Date | null;
    imageUrl?: string | null;
}

export interface IContactForm {
    id?: string;
    name: string;
    number: string;
    email: string;
    image: File;
}

export interface IContactState {
    loading: boolean;
    contacts: IContact[],
}
