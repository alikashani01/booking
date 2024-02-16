import { Service } from "../artist/service/entities/Service";

export interface Book {
    _id: string;
    code: string;
    artist: string;
    date: string;
    time: string;
    services: Service[];
}
