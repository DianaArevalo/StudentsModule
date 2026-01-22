import { StudentRepository } from "../../../domain/students/repositories/student-repository";
import { StudentEmail } from "../../../domain/students/value-objects/email.vo";
import { StudentStatus } from "../../../domain/students/value-objects/student-status.vo";
import { Student } from "../../../entities/students/students";

export class PostgresStudentRepository implements StudentRepository {
  constructor(private readonly client: any) {}

  async create(student: Student): Promise<Student> {
  const query = `
    INSERT INTO students (
      id,
      name,
      lastname,
      email,
      birth_date,
      status,
      created_at,
      updated_at
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *
  `;

  const values = [
    student.id,
    student.name,
    student.lastName,
    student.email.value,
    student.birthDate,
    student.status,
    student.createdAt,
    student.updatedAt,
  ];

  const { rows } = await this.client.query(query, values);

  return this.mapToStudent(rows[0]);
}

  async edit(student: Student): Promise<Student> {
  const query = `
    UPDATE students
    SET
      name = $1,
      lastname = $2,
      email = $3,
      birth_date = $4,
      status = $5,
      updated_at = $6
    WHERE id = $7
    RETURNING *
  `;

  const values = [
    student.name,
    student.lastName,
    student.email.value,
    student.birthDate,
    student.status.value,
    student.updatedAt,
    student.id,
  ];

  const { rows } = await this.client.query(query, values);

  return this.mapToStudent(rows[0]);
}


  async getStudentById(id: string): Promise<Student | null> {
    const { rows } = await this.client.query(
      `SELECT * FROM students WHERE id = $1`,
      [id],
    );

    return rows[0] ? this.mapToStudent(rows[0]) : null;
  }

  async getStudentByEmail(email: StudentEmail): Promise<Student | null> {
    const { rows } = await this.client.query(
      `SELECT * FROM students WHERE email = $1`,
      [email.value],
    );

    return rows[0] ? this.mapToStudent(rows[0]) : null;
  }

  async getAllStudent(): Promise<Student[]> {
    const { rows } = await this.client.query(`SELECT * FROM students`);
    return rows.map(this.mapToStudent);
  }

  async findByStatus(status: StudentStatus): Promise<Student[]> {
    const { rows } = await this.client.query(
      `SELECT * FROM students WHERE status = $1`,
      [status.toPrimitives()],
    );

    return rows.map(this.mapToStudent);
  }

  async softDelete(status: StudentStatus, id: string): Promise<void> {
    await this.client.query(
      `UPDATE students SET status = $1 WHERE id = $2`,
      [status.toPrimitives(), id],
    );
  }

  private mapToStudent(row: any): Student {
    return new Student(
      row.id,
      row.name,
      row.lastname,
      StudentEmail.create(row.email).value,
      row.birth_date,
      StudentStatus.fromPrimitives(row.status).toPrimitives(),
      row.created_at,
      row.updated_at,
    );
  }
}
