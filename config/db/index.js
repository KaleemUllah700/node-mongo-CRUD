import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/crudDB').then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Database connection error:', err));

  const db = mongoose.Connection;


export default db;