"use strict";
exports.__esModule = true;
var mysql = require("mysql");
;
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'studentsdb',
    password: ''
});
db.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Mysql started...');
    }
});
var createStudentsTable = function () {
    var sql = "\n    CREATE TABLE Students (\n        id int NOT NULL AUTO_INCREMENT,\n        lastName varchar(255) NOT NULL,\n        firstName varchar(255) NOT NULL,\n        groupName VARCHAR(255) NOT NULL,\n        PRIMARY KEY (id)\n    );\n\n    ";
    db.query(sql, function (error, result) {
        console.log(error);
        // console.log(result);
    });
};
var createExamsTable = function () {
    var sql = "\n    CREATE TABLE Exams (\n        studentId INT,\n        result  INT,\n        examName VARCHAR(255),\n        FOREIGN KEY (studentId)  REFERENCES Students (id)\n    );\n    ";
    db.query(sql, function (error, result) {
        if (error) {
            console.log(error);
        }
        // console.log(result);
    });
};
var addStudent = function (name, lastname, group) {
    var student = { firstName: name, lastName: lastname, groupName: group };
    var sql = "INSERT INTO students SET ?";
    db.query(sql, student, function (error, result) {
        if (error) {
            console.log(error);
        }
        // console.log(result);
    });
};
var addExamResults = function (exam) {
    var examData = { studentId: exam.studentId, examName: exam.examName, result: exam.result };
    var sql = "INSERT INTO exams SET ?";
    db.query(sql, examData, function (error, result) {
        if (error) {
            console.log(error);
        }
        // console.log(result);
    });
};
var getStudents = function () {
    var sql = 'SELECT * FROM students';
    return new Promise(function (data) {
        db.query(sql, function (error, result) {
            if (error) {
                console.log(error);
            }
            var jsonString = JSON.stringify(result);
            var json = JSON.parse(jsonString);
            try {
                data(json);
            }
            catch (error) {
                data([]);
                console.log(error);
            }
        });
    });
};
var getExams = function () {
    var sql = 'SELECT * FROM exams';
    return new Promise(function (data) {
        db.query(sql, function (error, result) {
            if (error) {
                console.log(error);
            }
            var jsonString = JSON.stringify(result);
            var json = JSON.parse(jsonString);
            try {
                data(json);
            }
            catch (error) {
                data([]);
                console.log(error);
            }
        });
    });
};
// Query 1
var getStudentsWithBadResult = function () {
    var sql = "\n        SELECT students.firstName, students.lastName \n        FROM students INNER JOIN exams\n        ON students.id = exams.studentId\n        WHERE exams.result < 3\n        GROUP BY students.id\n        HAVING count(*) > 1;\n    ";
    return new Promise(function (data) {
        db.query(sql, function (error, result) {
            if (error) {
                console.log(error);
            }
            var jsonString = JSON.stringify(result);
            var json = JSON.parse(jsonString);
            try {
                data(json);
            }
            catch (error) {
                data([]);
                console.log(error);
            }
        });
    });
};
// Query 2
var getGroupsWhitBadResutls = function () {
    var sql = "\n        SELECT students.groupName\n        FROM students \n        WHERE students.id IN (\n            SELECT students.id\n            FROM students INNER JOIN exams\n            ON students.id = exams.studentId\n            WHERE exams.result < 3\n            GROUP BY students.id\n            HAVING COUNT(students.id) > 1\n        )  \n        GROUP BY students.groupName\n        HAVING COUNT(students.groupName) > 10;\n    ";
    return new Promise(function (data) {
        db.query(sql, function (error, result) {
            if (error) {
                console.log(error);
            }
            var jsonString = JSON.stringify(result);
            var json = JSON.parse(jsonString);
            try {
                data(json);
            }
            catch (error) {
                data([]);
                console.log(error);
            }
        });
    });
};
var createRandomExamResult = function () {
    var min = 2;
    var max = 5;
    return Math.round(Math.random() * (max - min)) + min;
};
// Create Data 
// createStudentsTable();
// createExamsTable();
// for (let i = 0; i < 40; i++) {
//     addStudent("Daniil" + i.toString(), "Belousov", "181-722");
//     addStudent("Maxim" + i.toString(), "Lebedev", "181-723");
// }
// for (let i = 0; i < 15; i++) {
//     addStudent("Vadim" + i.toString(), "Denishev", "181-721");
// }
// getStudents().then((students) => {
//     students.forEach((value) => {
//         addExamResults({ studentId: value.id, examName: 'math', result: 2 });
//         addExamResults({ studentId: value.id, examName: 'history', result: createRandomExamResult() });
//         addExamResults({ studentId: value.id, examName: 'physics', result: createRandomExamResult() });
//     })
// });
// getStudents().then((students) => {
//     students.forEach((value) => {
//         if (value.groupName === "181-721") {
//             addExamResults({ studentId: value.id, examName: 'math', result: createRandomExamResult() });
//             addExamResults({ studentId: value.id, examName: 'history', result: createRandomExamResult() });
//             addExamResults({ studentId: value.id, examName: 'physics', result: createRandomExamResult() });
//         }
//     })
// });
getStudentsWithBadResult().then(function (students) {
    students.forEach(function (value) {
        console.log(value.firstName, value.lastName);
    });
});
getGroupsWhitBadResutls().then(function (groups) {
    console.log(groups);
});
db.end();
