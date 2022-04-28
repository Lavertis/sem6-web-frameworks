const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: Number,
    city: String,
})
const Student = mongoose.model("Student", studentSchema)

function insert(req, res) {
    const student = new Student();
    student.fullName = req.body.fullName
    student.email = req.body.email
    student.mobile = req.body.mobile
    student.city = req.body.city
    student.save((err, doc) => {
        if (!err)
            res.redirect("/students/list")
        else
            console.log(err)
    })
}

function update(req, res) {
    Student.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
            if (!err)
                res.redirect("/students/list")
            else
                console.log(err)
        }
    )
}

module.exports = {Student, update, insert}