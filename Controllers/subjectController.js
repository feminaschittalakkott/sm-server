const subjects = require('../Models/subjectModel')

exports.addSubject = async (req, res) => {
    try {
        const { subjectkey, subjectname } = req.body
        if (!subjectkey || !subjectname) {
            return res.status(400).json("Please fill all fields")
        }
        else {
            const subject = new subjects({ subjectkey, subjectname })
            await subject.save()
            res.status(200).json(subject)
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.getSubjects = async (req, res) => {
    try {
        const sub = await subjects.find()
        res.status(200).json(sub)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}