const controllers = require('./controllers');

module.exports = function(app) {
    app.get('/tasks', function(req, res) {
        controllers.displayAll(req, res);
    }),

    app.get('/tasks/:id', function(req,res){
        controllers.displayOneTask(req, res);
    }),

    app.post('/tasks/new', function(req, res){
        controllers.newTask(req,res);
    }),

    app.put('/tasks/:id', function(req, res){
        controllers.updateTask(req, res);
    }),
    
    app.delete('/tasks/:id', function(req, res){
        controllers.removeTask(req, res);
    })
};
