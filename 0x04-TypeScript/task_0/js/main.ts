
interface Student {
    firstName:string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Nati",
    lastName: "Dessie",
    age: 0,
    location: "USA"
}

const student2: Student = {
    firstName: "Meuz",
    lastName: "lemlem",
    age: 0,
    location: "Canada"
}

let studentsList: (Student)[] = [student1, student2];

// creates a <table> and a <table body> element
const tbl = document.createElement('table');
const tblBody = document.createElement('tbody')

// attach the table body to the table
tbl.appendChild(tblBody);
tbl.style.background = "red"

studentsList.forEach(function (student) {
    // for student element in the list; create a table row and table data
    // each row contains first name and location table data
    var row = document.createElement('tr');
    var fName = document.createElement('td');
    var location = document.createElement('td');

    // then add text data to the table data
    fName.textContent = student.firstName;
    location.textContent = student.location;

    // customize the text data to add into each row
    fName.style.border = " 2px solid white";
    location.style.border = "2px solid white";

    fName.style.padding = "4px";
    location.style.padding = "4px";

    // Then append each text data into the row 
    row.appendChild(fName);
    row.appendChild(location);

    // finally append the row to the table
    tbl.appendChild(row);
});

// Finally append the created table to the body of the DOM obj
document.body.appendChild(tbl);