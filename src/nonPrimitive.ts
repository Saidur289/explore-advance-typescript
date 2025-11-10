// function, array, object 
let bazarlist: string[] = ["a", "b", "c"];
console.log(bazarlist);
// bazarlist.push(5)give me error 

let mixArray : (string | number)[] = ["eggs", 11, "mango"]
// tuple  fixed array
let coordinate: [number, number] = [10, 20]
coordinate.push(45)
console.log(coordinate);
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);
let couple : [string, string] = ["hus", "wife"] //fixed length and type 
// Object type Or reference type 
const user: {
    organization: string,
    firstName: string,
    lastName: string,
    isMarried: boolean;
} = {
    organization: "ph Hero",
    firstName: 'saidur',
    lastName: 'riaz',
    isMarried: false
}
// console.log(user);
// wa can use value as a type 

           const user1: {
    organization: "ph course",
    firstName: string,
    lastName: string,
    isMarried: boolean;
} = {
    organization:"ph course",
    firstName: 'saidur',
    lastName: 'riaz',
    isMarried: false
}            
// console.log(user1);                                                                                             