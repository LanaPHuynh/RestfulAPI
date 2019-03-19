const Task = require('./models');

module.exports = {

  displayAll: (req, res) => {
    Task.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  displayOneTask: (req, res) => {
    const id = req.params.id;
    Task.find({_id:id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createTask: (req, res) => {
    const DATA = req.body;
    Task.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  newTask: (req, res) => {
    const { title, description, completed } = req.body;
    const task = new Task({ 
      title: title,
      description: description,
      completed: completed
    });
    task.save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateTask: (req, res) => {
    const id = req.params.id;
    const DATA = req.body;
    Task.findOneAndUpdate({_id:id}, DATA, {runValidators:true, new:true})
      .then(results => res.json(results))
      .catch(errors => res.json(errors));
  },

  removeTask: (req, res) => {
    const id = req.params.id;
    Task.remove({_id:id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

};