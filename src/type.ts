type User = {
    id: number,
    name: {firstName: string, lastName: string},
    gender: "male"| "female",
    contactNO: string,
    address: {
        country: string,
        city: string
    }
}
const user1: User = {
    id: 12,
    name: {firstName: "a", lastName: "b"},
    gender: "male",
    contactNO: '33',
    address:{
        country: 'bangladesh',
        city: 'ctg'
    }
}
// console.log(user1);
// function alias 
type addFunc = (num1: number, num2: number) => number;
const add: addFunc = (num1, num2) => num1 + num2
// console.log(add(1, 2));
// union 
type UserRoles = 'admin' | 'user';
const getDeshboard = (role: UserRoles) =>{
    if(role === 'admin') return 'admin ami'
    else{return 'user ami'}
}
// console.log(getDeshboard('user'));
// intersection type 
type Employee = {
    id: number,
    name: string,
    phone: number
}
type Manager ={
    designation: string,
    teamSize: number
}
type EmployeeManager = Employee & Manager;
const chowdary: EmployeeManager = {
    id: 1,
    name: 'a',
    phone: 4,
    designation: 'c',
    teamSize: 6
}
console.log(chowdary);