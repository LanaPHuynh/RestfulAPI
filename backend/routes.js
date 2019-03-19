const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/tasks', controllers.displayAll)
    .get('/api/tasks/:id', controllers.displayOneTask)
    .post('/api/tasks', controllers.newTask)
    .put('/api/tasks/:id', controllers.updateTask)
    .delete('/api/tasks/:id', controllers.removeTask);
};
