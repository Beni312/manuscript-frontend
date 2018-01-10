import {ValidationError} from '../../helpers/validation.error';

export class RegistrationResult {
    success: boolean;
    errors: ValidationError[] = [];

    constructor() {
        this.success = false;
    }
}
