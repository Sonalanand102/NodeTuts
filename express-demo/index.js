const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json());

const schema1 = Joi.object({
    name: Joi.string().min(3).required()
});

let a = schema1.validate({name :1});
console.log(a);

const courses = [
    { id: 1, name : 'course1' },
    { id: 2, name : 'course2' },
    { id: 3, name : 'course3' },
    { id: 4, name : 'course4' },
];
app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
 const course = courses.find(c => c.id === parseInt(req.params.id))
 if(!course){ //404
    res.status(404).send('course not found!!');
 }
 res.send(course);
});

app.post('/api/courses',(req,res)=>{
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = schema.validate(req.body);

    if(result.error){
        //404 Bad request
        res.status(404).send(result.error.details[0].message);
        return;
    }
    const course = {
        id : courses.length + 1,
        name : req.body.name
    };
    courses.push(course);
    res.send(course);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening to port ${port}...`));
