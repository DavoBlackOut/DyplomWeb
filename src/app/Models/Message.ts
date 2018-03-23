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

    static ConvertToMessage(object: any): Message {
        const message = new Message(object.GetterId);

        message.messageId = object.MessageId;
        message.text = object.Text;
        message.sendTime = object.SendTime;
        message.readTime = object.ReadTime;
        message.senderId = object.SenderId;

        return message;
    }
}
