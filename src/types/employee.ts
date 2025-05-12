export interface CreateEmployeeDto {
  employeeName: string;
  employeeId: string;
  position: string;
  department?: string;
  email?: string;
  phoneNumber: string;
  joiningDate: Date;
  address?: string;
  qualification?: string;
  experience?: string;
  salary?: number;
  photoUrl?: string;
}

export interface EmployeeResponse extends CreateEmployeeDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}