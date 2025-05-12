import { Student } from '../models';
import { CreateStudentDto } from '../types/student';

export class StudentService {
  async getAllStudents() {
    return await Student.findAll();
  }

  async getStudentById(id: number) {
    const student = await Student.findByPk(id);
    if (!student) {
      throw new Error('Student not found');
    }
    return student;
  }

  async createStudent(data: CreateStudentDto) {
    return await Student.create(data as any);
  }

  async updateStudent(id: number, data: Partial<CreateStudentDto>) {
    const student = await this.getStudentById(id);
    return await student.update(data);
  }

  async deleteStudent(id: number) {
    const student = await this.getStudentById(id);
    await student.destroy();
    return { message: 'Student deleted successfully' };
  }
}

export default new StudentService();