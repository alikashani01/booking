import { DateObject } from "react-multi-date-picker";
import { ArtistDetails } from "../artist/profile/entities/Artist";
import { Service } from "../artist/service/entities/Service";

export type DateTypes = DateObject | DateObject[] | null;

export interface Book {
    _id?: string;
    artist: string;
    date: DateTypes;
    time: number;
    services: Service[];
}

export interface BookingInfo {
    artist: ArtistDetails;
    services: Service[];
    date: DateTypes;
    times: number[];
}

export interface BookingStore {
    artist: ArtistDetails;
    services: Service[];
    date: DateTypes;
    times: number[];
    time?: number;
    setArtist: (artist: ArtistDetails) => void;
    toggleService: (service: Service) => void;
    setDay: (date: DateTypes) => void;
    setTimes: (data: number[]) => void;
    setTime: (data: number) => void;
}
