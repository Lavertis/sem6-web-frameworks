const express = require('express');
const {Student, insert, update} = require("../models/Student");
const router = express.Router();

router.get("/", (req, res) => {
    const data = '<h3 style="text-align:center">Baza danych studentów</h3>' +
        '<h4 style="text-align:center">Kliknij <a href="students/list"> tutaj</a>, aby uzyskać dostęp do bazy.</h4>'
    res.send(data);
})

router.get("/list", (req, res) => {
    Student.find((err, docs) => {
        if (!err) {
            res.render("./students/list", {
                list: docs
            })
        } else {
            console.log(err)
        }
    })
})

router.get("/addOrUpdate", (req, res) => {
    res.render("students/addOrUpdate", {
        viewTitle: "Add new student"
    })
})

router.post("/", (req, res) => {
    if (req.body._id === "")
        insert(req, res)
    else
        update(req, res)
})

router.get("/:id", (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("students/addOrUpdate", {
                viewTitle: "Update student details",
                student: doc
            });
        }
    })
})

router.get("/delete/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect("/students/list")
        } else {
            console.log(err)
        }
    })
})

module.exports = router;
