var readlineSync = require('readline-sync');
var fs = require('fs');


var contacts = [];

function loadData () {
    var fileContent = fs.readFileSync('./data.json');
    contacts = JSON.parse(fileContent);
}

function showMenu () {
    console.log('1. Show all');
    console.log('2. Create new');
    console.log('3. Edit contact');
    console.log('4. Delete contact');
    console.log('5. Search contact');
    console.log('6. Save and exit');

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
            editContact();
            showMenu();
            break;
        case '4':
            deleteContact();
            showMenu();
            break;
        case '5':
            searchContact();
            showMenu();
            break;
        case '6':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}

function showAll () {
    for (var contact of contacts) {
        console.log(contact.name, contact.phone);
    }
} 

function showCreate () {
    var name = readlineSync.question('Name: ');
    var phone = readlineSync.question('Phone: ');
    var contact = {
        name: name,
        phone: phone
    }
    contacts.push(contact);
}

function saveAndExit () {
    var content = JSON.stringify(contacts);
    fs.writeFileSync('./data.json', content, {endcoding: 'utf8'});
}

function editContact () {
    var indexContact = readlineSync.question('Input index of contact: ');
    indexContact = parseInt(indexContact);
    if ((indexContact >= 0) && (indexContact < contacts.length)) {
        var name = readlineSync.question('Name: ');
        var phone = readlineSync.question('Phone: ');
        contacts[indexContact].name = name;
        contacts[indexContact].phone = phone;
    } else {
        console.log('Invalid index');
    }
}

function deleteContact () {
    var indexContact = readlineSync.question('Input index of contact: ');
    indexContact = parseInt(indexContact);
    if ((indexContact >= 0) && (indexContact < contacts.length)) {
        contacts.splice(indexContact, 1);
    } else {
        console.log('Invalid index');
    }
}

function searchContact () {
    console.log('Waiting for search...');
}

function main () {
    loadData();
    showMenu();
}

main();