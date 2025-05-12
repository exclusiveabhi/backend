import { Employee } from '../models';
import { CreateEmployeeDto } from '../types/employee';

export class EmployeeService {
  async getAllEmployees() {
    return await Employee.findAll();
  }

  async getEmployeeById(id: number) {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  async createEmployee(data: CreateEmployeeDto) {
    return await Employee.create(data as any);
  }

  async updateEmployee(id: number, data: Partial<CreateEmployeeDto>) {
    const employee = await this.getEmployeeById(id);
    return await employee.update(data);
  }

  async deleteEmployee(id: number) {
    const employee = await this.getEmployeeById(id);
    await employee.destroy();
    return { message: 'Employee deleted successfully' };
  }
}

export default new EmployeeService();