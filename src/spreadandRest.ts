// SPREAD AND REST OPARETOR
const friends = ["rahim" , "karim"];
const closeFriends = ["chintu", "pintu"]
friends.push(...closeFriends)
console.log(friends);
// Object EXAMPLE 
const user = {name: "siam", phone: "3939"}
const userInfo = {hobby: "cooding"}
const otherInfo = {...user, ... userInfo}
// console.log(otherInfo);
// rest operator 
const sendInvite = (...friends: string[]) => {
    friends.forEach((friend) => console.log(`send invite ${friend}`))
}
sendInvite("kemon", "acho")