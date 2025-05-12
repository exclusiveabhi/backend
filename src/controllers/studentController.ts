import { Request, Response } from 'express';
import studentService from '../services/studentService';

export class StudentController {
  async getAllStudents(req: Request, res: Response) {
    try {
      const students = await studentService.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching students', error });
    }
  }

  async getStudentById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const student = await studentService.getStudentById(id);
      res.json(student);
    } catch (error) {
      res.status(404).json({ message: 'Student not found', error });
    }
  }

  async createStudent(req: Request, res: Response) {
    try {
      const student = await studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ message: 'Error creating student', error });
    }
  }

  async updateStudent(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const student = await studentService.updateStudent(id, req.body);
      res.json(student);
    } catch (error) {
      res.status(400).json({ message: 'Error updating student', error });
    }
  }

  async deleteStudent(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const result = await studentService.deleteStudent(id);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: 'Error deleting student', error });
    }
  }
}

export default new StudentController();