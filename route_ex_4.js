var express = require('express');
var app= express();
app.get('/get_student_details',function(req, res){
var stdObj = {
seatNo: 14096,
PRN: 202003380012567,
name: "Saliya Nensi",
semester:5,
batch:'2022-2025'
}
res.send(stdObj);
});
app.listen(3000);
