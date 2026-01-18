import { NotFoundError, ValidationError } from "src/shared/domain/exceptions";

export class StudentAlreadyExistsException extends ValidationError {
    constructor(message: string = 'Student with the given email already exists.') {
        super(message);
    }
}