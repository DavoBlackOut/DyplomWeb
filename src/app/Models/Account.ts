import { Message } from './Message';
import { Country } from './Country';
import { Post } from './Post';

export class Account {
    public accountId: number;

    public login: string;
    public password: string;

    public name: string;
    public surname: string;

    public email: string;

    public countryId: number;
    public country = new Country();

    public hasPhoto: boolean;

    public Posts: Array<Post>;
}

export class User {
    public userId: number;

    public name: string;
    public surname: string;

    public email: string;

    public countryId: number;
    public country = new Country();

    public hasPhoto: boolean;

    public unreadedMessagesCount: number;
}
