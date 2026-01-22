import { ValidationError } from "../../../shared/domain/exceptions/validation-error";


export class StudentAlreadyExistsException extends ValidationError {
    constructor(message: string = 'Student with the given email already exists.') {
        super(message);
    }
}