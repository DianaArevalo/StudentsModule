export type StudentStatusT = 'ACTIVE' | 'INACTIVE';
export type StudentStatusPrimitiveT = 0 | 1;

const StudentStatusTMap: Record<StudentStatusT, StudentStatusPrimitiveT> = {
  ACTIVE: 0,
  INACTIVE: 1,
};

const StudentStatusTReverseMap: Record<
  StudentStatusPrimitiveT,
  StudentStatusT
> = {
  0: 'ACTIVE',
  1: 'INACTIVE',
};

export class StudentStatus {
  private constructor(private readonly value: StudentStatusT) {}

  static active(): StudentStatus {
    return new StudentStatus('ACTIVE');
  }

  static inactive(): StudentStatus {
    return new StudentStatus('INACTIVE');
  }

  static fromPrimitives(value: StudentStatusPrimitiveT): StudentStatus {
    return new StudentStatus(StudentStatusTReverseMap[value]);
  }

  toPrimitives(): StudentStatusPrimitiveT {
    return StudentStatusTMap[this.value];
  }

  getValue(): StudentStatusT {
    return this.value;
  }
}
