const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

const middlewares = require('./middlewares');
const taskController = require('./controllers/taskController');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/tasks', taskController.getAll);
app.get('/tasks/:id', taskController.getById);
app.post('/tasks', taskController.create);
app.put('/tasks/:id', taskController.update);
app.delete('/tasks/:id', taskController.deleteTask);

app.use(middlewares.errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
