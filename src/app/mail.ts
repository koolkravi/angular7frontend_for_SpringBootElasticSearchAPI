export class Mail {
    id: string;
    sender: string;
    subject: string;
    recipients: string[];
    cc: string;
    bcc: string;
    date: string;
    to: string;
    text: string;
    constructor(id: string, sender: string) {
        this.id = id;
        this.sender = sender;
    }
}