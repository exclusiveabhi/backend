export interface CreateStudentDto {
  studentName: string;
  registrationNo: string;
  class: string;
  dateOfAdmission: Date;
  discountInFees?: string;
  mobileNo: string;
  dateOfBirth: Date;
  studentBirthFormID?: string;
  gender: string;
  caste?: string;
  religion?: string;
  orphanStudent?: string;
  bloodGroup?: string;
  previousSchool?: string;
  previousID?: string;
  identificationMark?: string;
  disease?: string;
  additionalNote?: string;
  totalSiblings?: string;
  photoUrl?: string;
}

export interface StudentResponse extends CreateStudentDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}