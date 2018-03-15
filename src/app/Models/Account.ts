import { Message } from './Message';
import { Country } from './Country';

export class Account {
    public accountId: number;

    public login: string;
    public password: string;

    public name: string;
    public surname: string;

    public email: string;

    public countryId: number;
    public country = new Country();
}

export class User {
    public userId: number;

    public name: string;
    public surname: string;

    public email: string;

    public countryId: number;
    public country = new Country();
}
