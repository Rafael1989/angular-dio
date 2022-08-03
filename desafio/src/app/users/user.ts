export class User {
    id: number;
    name: string;
    email: string;
    box: string;
    creationDate: Date = new Date();
    imageUrl: string = '/assets/images/default.png';
}