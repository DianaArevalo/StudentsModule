export class Student {
  private id?: string;
  private name: string;
  private lastName: string;
  private email: string;
  private birthDate: Date;
  private status: boolean;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: string,
    name: string,
    lastName: string,
    email: string,
    birthDate: Date,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,

  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email
    this.birthDate = birthDate;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}