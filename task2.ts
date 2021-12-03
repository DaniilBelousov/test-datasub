import mysql = require('mysql');

interface Student {
    id: number;
    firstName: string;
    lastName: string;
    groupName: string;
};

interface Exam {
    studentId: number;
    examName: string;
    result: number;
}

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'studentsdb',
    password: '',
});

db.connect((error: mysql.MysqlError) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Mysql started...');
    }
});

const createStudentsTable = () => {
    const sql = `
    CREATE TABLE Students (
        id int NOT NULL AUTO_INCREMENT,
        lastName varchar(255) NOT NULL,
        firstName varchar(255) NOT NULL,
        groupName VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

    `;

    db.query(sql, (error, result) => {
        console.log(error);
        // console.log(result);
    })
};

const createExamsTable = () => {
    const sql = `
    CREATE TABLE Exams (
        studentId INT,
        result  INT,
        examName VARCHAR(255),
        FOREIGN KEY (studentId)  REFERENCES Students (id)
    );
    `;

    db.query(sql, (error, result) => {
        if (error) {
            console.log(error);
        }
        // console.log(result);
    })
};

const addStudent = (name: string, lastname: string, group: string) => {
    const student = { firstName: name, lastName: lastname, groupName: group };
    const sql = "INSERT INTO students SET ?";

    db.query(sql, student, (error, result) => {
        if (error) {
            console.log(error);
        }
        // console.log(result);
    })
};

const addExamResults = (exam: Exam) => {
    const examData: Exam = { studentId: exam.studentId, examName: exam.examName, result: exam.result };
    const sql = "INSERT INTO exams SET ?";

    db.query(sql, examData, (error, result) => {
        if (error) {
            console.log(error);
        }
        // console.log(result);
    })
};

const getStudents = () => {
    const sql = 'SELECT * FROM students';

    return new Promise<Student[]>((data) => {
        db.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            }

            const jsonString = JSON.stringify(result);
            const json = JSON.parse(jsonString);

            try {
                data(json);
            } catch (error) {
                data([]);
                console.log(error);
            }

        });
    });
};

const getExams = () => {
    const sql = 'SELECT * FROM exams';
    return new Promise<Exam[]>((data) => {
        db.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            }

            const jsonString = JSON.stringify(result);
            const json = JSON.parse(jsonString);

            try {
                data(json);
            } catch (error) {
                data([]);
                console.log(error);
            }

        });
    });
};

// Query 1

const getStudentsWithBadResult = () => {
    const sql = `
        SELECT students.firstName, students.lastName 
        FROM students INNER JOIN exams
        ON students.id = exams.studentId
        WHERE exams.result < 3
        GROUP BY students.id
        HAVING count(*) > 1;
    `;

    return new Promise<{ firstName: string, lastName: string }[]>((data) => {
        db.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            }

            const jsonString = JSON.stringify(result);
            const json = JSON.parse(jsonString);

            try {
                data(json);
            } catch (error) {
                data([]);
                console.log(error);
            }

        });
    });
};

// Query 2

const getGroupsWhitBadResutls = () => {
    const sql = `
        SELECT students.groupName
        FROM students 
        WHERE students.id IN (
            SELECT students.id
            FROM students INNER JOIN exams
            ON students.id = exams.studentId
            WHERE exams.result < 3
            GROUP BY students.id
            HAVING COUNT(students.id) > 1
        )  
        GROUP BY students.groupName
        HAVING COUNT(students.groupName) > 10;
    `;

    return new Promise<{ firstName: string, lastName: string }[]>((data) => {
        db.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            }

            const jsonString = JSON.stringify(result);
            const json = JSON.parse(jsonString);

            try {
                data(json);
            } catch (error) {
                data([]);
                console.log(error);
            }

        });
    });
};

const createRandomExamResult = () => {
    const min = 2;
    const max = 5;
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

getStudentsWithBadResult().then((students) => {
    students.forEach((value) => {
        console.log(value.firstName, value.lastName);
    });
});

getGroupsWhitBadResutls().then((groups) => {
    console.log(groups);
});

db.end();