const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const middlewares = require('./middlewares');
const taskController = require('./controllers/taskController');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/tasks', taskController.getAll);
app.get('/tasks/:id', taskController.getById);
app.post('/tasks', middlewares.validateTask, taskController.create);
app.put('/tasks/:id', middlewares.validateTask, taskController.update);
app.delete('/tasks/:id', taskController.deleteTask);

app.use(middlewares.errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// teste heroku
