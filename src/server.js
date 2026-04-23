const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  return res.status(200).json({
    status: 'ok',
    message: 'Task Manager API is running'
  });
});

app.use('/tasks', taskRoutes);

app.use((req, res) => {
  return res.status(404).json({
    error: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Task Manager API running on port ${PORT}`);
});
