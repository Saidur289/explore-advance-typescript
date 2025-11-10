const user = {
    name: {
        firstName: "saidur",
        lastName: "raiz",
    },
    gender: "male"
    
}
const {gender: gene, name: {lastName}} = user;
// console.log(gene, lastName);
// array  destructure 
const friends = ['rahim', "mahim", 'fahim'];
const [, myFri, ] = friends
// console.log( myFri);