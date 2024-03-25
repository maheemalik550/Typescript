// Q2
// let personName: string = "maheen";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);
// Q3
// var Name :string = "maHEen"
// console.log(Name.toLowerCase())
// console.log(Name.toUpperCase())
// Q 4
// const quote: string = "A person who never made a mistake never tried anything new.";
// const author: string = "Albert Einstein ";
// console.log(`${author} once said,"${quote}"`)
// Q5
// Define the quote and its author
// const quote: string = "A person who never made a mistake never tried anything new.";
// const author: string = "Albert Einstein";
// const Combine: string = author;
// const message: string = `"${quote}" - ${Combine}`;
// console.log(message);
// Q 6 
// const Name : string = "I am maheen\tmalik\nA Frontent Developer"
// console.log(Name)
// Q7 and 8
// console.log("Addition: ", 5 + 3);
// console.log("Subtraction: ", 10 - 2); 
// console.log("Multiplication: ", 4 * 2); 
// console.log("Division: ", 16 / 2);
// Q9
// program written by maheen 
// const favNumb = 9
// console.log(`My favourite number is ${favNumb}`)
// Q 10 
// Program written by [maheen]
// Current Date: [15march]
// var Name : string  = "maheen";
// console.log(Name)
// Q11
// const NameArray = ["faria","ayesha","safa"]
// console.log(NameArray[0])
// console.log(NameArray[1])
// console.log(NameArray[2])
// Q12
// console.log(`hello my name is ${NameArray[0]}`)
// Q13
// const array =["car","bike","Aeroplane"]
// console.log(`i would lika a own a ${array[0]}`)
// Q14
// var GuestName = ["alina","habiba","ayesha"];
// function Invitate(guest:string){
// return `
// Dear ${guest},
// I am honored to extend an invitation to you for a dinner at my place. Your presence would undoubtedly enrich the evening with wisdom and intellect.
// Looking forward to your response.
// Warm regards,
// `
// }
// GuestName.forEach(guest=>{
//     const result = Invitate(guest)
//     console.log(result)
// })
// Q15
// var GuestName = ["alina","habiba","ayesha"];
// GuestName.splice(1,2,"jaweria","alina") 
// console.log(GuestName)
// function Invitate2(guest:string){
// return `
// Dear ${guest},
// I am honored to extend an invitation to you for a dinner at my place. Your presence would undoubtedly enrich the evening with wisdom and intellect.
// Looking forward to your response.
// Warm regards,
// `
// }
// GuestName.forEach(guest=>{
//     const result = Invitate2(guest)
//     console.log(result)
//     })  
// Q 16
// var GuestName = ["alina","habiba","ayesha"];
// var MoreGuest = [...GuestName,"kinza","maryam","aniqa"]
// console.log(MoreGuest)
// function Invitate3(guest:string){
// return `
// Dear ${guest},
// I am honored to extend an invitation to you for a dinner at my place. Your presence would undoubtedly enrich the evening with wisdom and intellect.
// Looking forward to your response.
// Warm regards,
// `
// }
// MoreGuest.forEach(guest=>{
//     const result = Invitate3(guest)
//     console.log(result)
//     }) 
// Q 17
// console.log("Sorry, due to space constraints, I can only invite two people for dinner.");
// while(MoreGuest.length > 2){
//     const removedGuest: string = MoreGuest.pop()!;
//     console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
// }
// console.log(MoreGuest)
// Q 18
// let placesToVisit: string[] = ["Tokyo", "Paris", "Turkey", "America", "Japan","China"];
// console.log(placesToVisit.sort());
// console.log(placesToVisit.sort().reverse());
// console.log(placesToVisit.reverse())
// let result = placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log(result)
// Q19
// let guests: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// console.log(`Number of people being invited to dinner: ${guests.length}`);
// for (const guest of guests) {
//     console.log(`Dear ${guest}, you're invited to dinner!`);
// }
// Q20
// const array = ["canada","japan","Tokyo","turkey","china"] 
// console.log(array)
// Q21
// const movies = {
//     Inception:{
//         director: "Christopher Nolan",
//         year:2010 
//     },
//     The_Godfather:{
//         director: "Francis Ford Coppola",
//         year:1972  
//     },
//     Forrest_Gump:{
//         director: "Robert Zemeckis",
//         year:1994  
//     }
// }
// for(let movie in movies){
//     console.log(`${movie}: Directed by ${movies[movie].director}, Released in ${movies[movie].year}`);
// }
// Q 22
// let fruits: string[] = ["apple", "banana", "orange"];
// console.log(fruits[3]);  
// console.log(fruits[1]);
// Q23
// console.log(5 != 3);
// console.log(10 == 10);
// console.log("car" == "mobile")
// console.log("car" == "car")
// Q24
// console.log(10 == 10)
// console.log(10 !== 10)
// console.log(10 <20)
// console.log(10 >8)
// console.log(10 <= 20)
// console.log(10 >=20)
// Q 25
// const alien_color:string = "red";
// if(alien_color == "green"){
// console.log("The player just earned 5 points!");
// }
// Q 26
// var alien_color: string = 'green'; 
// if (alien_color === 'green') {
//     console.log("The player just earned 5 points for shooting the green alien!");
// } else {
//     console.log("The player just earned 10 points for shooting the alien, which is not green.");
// }
// Q 27
// var alien_color: string = 'yellow';
// if (alien_color === 'green') {
//     console.log("The player earned 5 points!");
// } else if (alien_color === 'yellow') {
//     console.log("The player earned 10 points!");
// } else if (alien_color === 'red') {
//     console.log("The player earned 15 points!");
// } else {
//     console.log("Invalid alien color!"); 
// }
// Q 28
// var age: number = 30;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// Q 29
// var array : string[] = ["apple","mango","banana"] 
// if(array.includes("apple")){
//     console.log("i love apples")
// }else{
//     console.log('none')
// }
// Q 30
// let usernames: string[] = ['admin', 'eric', 'alice', 'john', 'sarah'];
// for (let username of usernames) {
//     if (username === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
// Q 31
// let username_array  =[]
// if (username_array.length === 0) {
//     console.log("We need to find some users!");
// }
// Q 32
// let current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let new_users: string[] = ['user6', 'user7', 'user3', 'user8', 'user9'];
// let current_users_lower: string[] = current_users.map(user => user.toLowerCase());
// new_users.forEach(newUser =>{
//     if(current_users_lower.includes(newUser.toLowerCase())) {
//         console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
//     }else {
//         console.log(`Congratulations, the username '${newUser}' is available!`);
//     }
// })
// Q 33
// var arr = [1,2,3,4,5,6,7,8,9]
// for(let arrays in arr){
//     console.log(arrays)
// }
// Q 34
// const pizza_array = ["Pizza1","Pizza2","Pizza3"]
// for(var i=0; i<=pizza_array.length;i++ ){
//     console.log(`i like ${pizza_array[i]}`)
// }
// Q 35
// Define a list of animals
// const animals: string[] = ["Dog", "Cat", "Rabbit"];
// console.log("Animals:");
// for (const animal of animals) {
//     console.log(animal);
// }
// console.log("\nStatements about each animal:");
// for (const animal of animals) {
//     switch(animal) {
//         case "Dog":
//             console.log("A dog would make a great pet.");
//             break;
//         case "Cat":
//             console.log("A cat can be a wonderful companion.");
//             break;
//         case "Rabbit":
//             console.log("A rabbit is a cute and low-maintenance pet.");
//             break;
//         default:
//             console.log("This animal's characteristics are unknown.");
//     }
// }
// Q 36
// function Shirts(size:string,message:string){
// console.log(`You've ordered a ${size}-sized shirt with the message: "${message}".`)
// }
// Shirts("mediam","hello world")
// Q37
// function Shirts(size: string = "Large", message: string = "I love TypeScript") {
//     console.log(`You've ordered a ${size}-sized shirt with the message: "${message}".`);
// }
// Shirts();
// Shirts("Medium");
// Shirts("Small", "Hello, JavaScript!");
// Q38
// function describe_city(city: string, country: string = "Unknown"){
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("Karachi", "Pakistan");
// describe_city("New York", "USA");
// describe_city("Tokyo"); 
// function city_country(city: string, country: string){
//     return `${city}, ${country}`;
// }
// const city1 = city_country("Lahore", "Pakistan");
// const city2 = city_country("New York", "USA");
// const city3 = city_country("Tokyo", "Japan");
// console.log(city1);
// console.log(city2);
// console.log(city3);
// Q 40
// interface Album {
//     artist: string;
//     title: string;
//     tracks?: number;
// }
// function make_album(artist: string, title: string, tracks?: number){
//     const album: Album = {
//         artist: artist,
//         title: title
//     };
//     console.log(album)
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//         console.log("ans",album.tracks = tracks)
//         console.log(album.tracks)        
//     }
//     return album;
// }
// const album1 = make_album("Artist1", "Album Title 1");
// const album2 = make_album("Artist2", "Album Title 2", 12); 
// const album3 = make_album("Artist3", "Album Title 3");
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Q41
// function show_magicians(magicians: string[]){
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// show_magicians(magicians);
// Q42
// function show_magicians(magicians: string[]) {
//     console.log("Magicians:");
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians: string[]){
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i];
//     }
// }
// let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// make_great(magicians);
// show_magicians(magicians);
// Q 43
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (const magician of magicians) {
//         greatMagicians.push("the Great " + magician);
//     }
//     return greatMagicians;
// }
// const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// const greatMagicians: string[] = make_great([...magicians]);
// console.log("\nOriginal Magicians:");
// show_magicians(magicians);
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians);
// Q 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- " + item);
        }
    }
    console.log("----------------------");
}
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato", "Mayonnaise", "Pickles");
make_sandwich("Peanut Butter", "Jelly");
