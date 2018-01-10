export class ValidationError {
    errors: string;
    exceptionsMessage: string;

    constructor(errors: string, exceptionsMessage: string) {
        this.errors = errors;
        this.exceptionsMessage = exceptionsMessage;
    }
}
