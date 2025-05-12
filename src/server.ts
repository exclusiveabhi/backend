import app from './app';
import sequelize from './config/database';
import { Student, Employee } from './models';

const PORT = process.env.PORT || 5000;

// Database initialization and sync
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync models with database
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Initialize the application
initializeDatabase();