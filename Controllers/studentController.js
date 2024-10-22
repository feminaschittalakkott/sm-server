const students = require('../Models/studentModel')

exports.addStudent = async (req, res) => {
    try {
        const { studkey, studname, subkey, grade } = req.body
        if (!studkey || !studname || !subkey || !grade) {
            res.status(406).json("Please fill all fields!")
        }
        else{
            const student = new students({studkey, studname, subkey, grade})
            await student.save()
            res.status(200).json(student)
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.getStudents = async(req, res)=>{
    try{
        const stud = await students.find()
        res.status(200).json(stud)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

exports.updateStudent = async(req, res)=>{
    try{
        const {studkey, studname, subkey, grade} = req.body
        const {id} = req.params
        const updatedStudent = await students.findByIdAndUpdate(id, {
            studname,
            subkey,
            grade
        }, { new: true });
        res.status(200).json("Student updated successfully");
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

exports.deleteStudent = async(req, res)=>{
    try{
        const {id} = req.params
        await students.findByIdAndDelete(id)
        res.status(200).json("Student deleted successfully");
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}