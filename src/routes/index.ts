import express from 'express';
import studentRoutes from './studentRoutes';
import employeeRoutes from './employeeRoutes';
// Import other routes as needed

const router = express.Router();

router.use('/students', studentRoutes);
router.use('/employees', employeeRoutes);
// Add other routes as needed

export default router;