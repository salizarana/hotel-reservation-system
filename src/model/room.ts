export class Room {
    public id: number;
    public roomNumber: number;
    public roomType: string;
    public capacity: number;
    public pricePerNight: number;
    public photos: string[];
    public isBooked: boolean;
    public description: string;
    public features: string[];
    constructor() {}
}