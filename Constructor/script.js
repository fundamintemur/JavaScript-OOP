//object literals
// let yigit={
//     name:"yiğit",
//     yearOfBirth:2010,
//     job:"student"
// }
// console.log(yigit)

// function Person(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.calculateAge=function(){
//         return 2018-this.yearOfBirth;
//     }

   
// }

let Person=function(name,yearOfBirth,job){

    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge=function(){
        return 2018-this.yearOfBirth;
    }

}

let yigit=new Person("yigit",2010,"student");
let funda=new Person("emel",1989,"teacher");

console.log(yigit.name);
console.log(yigit.yearOfBirth); 
console.log(yigit.job);
console.log(yigit.calculateAge())

console.log("***********");

console.log(funda.job);
console.log(funda.name);
console.log(funda.yearOfBirth);