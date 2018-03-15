export class Message {
    public messageId: number;

    public text: string;

    public sendTime: Date;
    public readTime: Date;

    public senderId: number;
    public getterId: number;

    constructor(getterId: number) {
        this.getterId = getterId;
    }
}
