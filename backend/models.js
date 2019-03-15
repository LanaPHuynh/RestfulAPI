const mongoose = require('mongoose'),
    connect = 'mongodb://localhost/restfulAPI';
mongoose.connect(connect, {useNewUrlParser: true});

const TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: { type: String },
    completed: { type: Boolean, default: false }
}, { timestamps: true});

module.exports = mongoose.model('Task', TaskSchema);