// ternary operator
const eligible = (age: number) => {
    return age >= 21? "you eligible": "not eligible";
}
// console.log(eligible(20));
// nullish 
const userTheme = undefined;
const selectTheme = userTheme?? "dark theme"
// console.log(selectTheme);
// difference between ternary and nullish operator
const isAuthenticated = null 
const resulteWithTernary = isAuthenticated ? isAuthenticated: 'you guest'
const resultWithNullish = isAuthenticated?? "you guest";
// console.log(resultWithNullish, resulteWithTernary);
// nullable type 
const getUser = (input: string | null) =>{
    if(input)  console.log(`db user ${input}`);
    else console.log(`db all user `);
}
getUser("saidur")
getUser(null)
// unknown type 
const productDiscount = (input: unknown) => {
    if(typeof input === "number"){
        const disPrice = input * 0.1
        console.log(disPrice);
    }else if(typeof input === "string"){
        const [discountPrice] = input.split(" ")
        console.log(Number(discountPrice)* 0.1);
    }else{
        console.log("wrong input");
    }
}
productDiscount(100)
productDiscount("100 tk")
// never 
const throwErrors = (msg: string) : never => {
    throw new Error(msg);
    
}
throwErrors("error...")