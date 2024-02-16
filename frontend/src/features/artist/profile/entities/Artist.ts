import { Service } from "../../service/entities/Service";

export interface ArtistDetails {
    _id?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    mobile: string;
    services?: Service[];
    photo?: string;
}
