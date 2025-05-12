import { Request, Response } from 'express';
import employeeService from '../services/employeeService';

export class EmployeeController {
  async getAllEmployees(req: Request, res: Response) {
    try {
      const employees = await employeeService.getAllEmployees();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employees', error });
    }
  }

  async getEmployeeById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const employee = await employeeService.getEmployeeById(id);
      res.json(employee);
    } catch (error) {
      res.status(404).json({ message: 'Employee not found', error });
    }
  }

  async createEmployee(req: Request, res: Response) {
    try {
      const employee = await employeeService.createEmployee(req.body);
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ message: 'Error creating employee', error });
    }
  }

  async updateEmployee(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const employee = await employeeService.updateEmployee(id, req.body);
      res.json(employee);
    } catch (error) {
      res.status(400).json({ message: 'Error updating employee', error });
    }
  }

  async deleteEmployee(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const result = await employeeService.deleteEmployee(id);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: 'Error deleting employee', error });
    }
  }
}

export default new EmployeeController();