import { Message } from './Message';
import { Language } from './Language';

export class Account {
    public accountId: number;

    public login: string;
    public password: string;

    public name: string;
    public surname: string;

    public email: string;

    public hasPhoto: boolean;

    constructor() {
        this.hasPhoto = false;
    }
}

export class User {
    public userId: number;

    public name: string;
    public surname: string;

    public email: string;

    public hasPhoto: boolean;

    public knownLanguages: Array<Language>;
    public learnLanguages: Array<Language>;

    constructor() {
        this.knownLanguages = new Array<Language>();
        this.learnLanguages = new Array<Language>();
    }
}
