var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData () {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu () {
    console.log('1. Show all');
    console.log('2. Create new');
    console.log('3. Save and exit');

    var option = readlineSync.question('> ');
    switch (option) {
        case '1':
            showAll();
            showMenu();
            break;
        case '2':
            showCreate();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}

function showAll () {
    for (var student of students) {
        console.log(student.name, student.age);
    }
} 

function showCreate () {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student);
}

function saveAndExit () {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, {endcoding: 'utf8'});
}

function main () {
    loadData();
    showMenu();
}

main();