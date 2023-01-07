/// <reference path="./crud.d.ts" />
// To include .d.ts files(declaration files)


import { RowID, RowElement } from './interface';
import * as CRUD from './crud';
// create an obj with type RowElement
// with fields firstName, lastName
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}


// create a const var named row with type RowID
// and assign the insertRow command from CRUD
const newRowID: RowID = CRUD.insertRow(row);

// create a const variable named updateRow with type RowElement
// then update row with an age field set to 23
const updateRow: RowElement = {
    ...row, age: 23
}

// Finally call the methods updateRow and deleteRow
console.log(CRUD.updateRow(newRowID, updateRow));
console.log(CRUD.deleteRow(newRowID));
