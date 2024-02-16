export interface Service {
    _id?: string;
    skill: string;
    title: string;
    description: string;
    price: number;
    hour: number;
    minute: number;
    duration?: {
        hour: number;
        minute: number;
    };
}
