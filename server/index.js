var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://localhost/webdxd');

var studentSchema = {
	firstName:String,
	lastNmae:String,
	email:String
}

var Student = mongoose.model('Student', studentSchema, 'student');

var app = express();
app.use(cors());

app.get('/student', function(req, res) {
	Student.find().select('firstName').exec(function(err,doc) {
		res.send(doc);
	})
});

app.get('/student/:id', function(req, res) {
	Student.findById(req.params.id, function(err,doc) {
		res.send(doc);
	})
});

app.listen(3000);