//person constructor
 function Person(name){
    this.name=name;
 }
 Person.prototype.Introduce=function(){
    console.log("hello my name is"+this.name);
 }

 //Teacher constructor
 function Teacher(name,branch){
    Person.call(this,name);
    this.branch=branch;
 }
 Teacher.prototype=Object.create(Person.prototype);
 Teacher.prototype.constructor=Teacher;
 Teacher.prototype.teach=function(){
    console.log("I teach"+this.branch);
 }

//student constructor
function Student(name,number){
    Person.call(this,name);
    this.number=number;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.study=function(){
    console.log("I study"+ this.number);
}

//HEADMASTER
function HeadMaster(name,branch){
    Teacher.call(this,name,branch);

}
HeadMaster.prototype=Object.create(Teacher.prototype);
HeadMaster.prototype.constructor=HeadMaster;
HeadMaster.prototype.shareTask=function(){
    console.log("I headmaster"+ this.branch)
}



 let p1=new Person("çınar");
 p1.Introduce();

 let t1=new Teacher("sadık","math");
 t1.Introduce();
 t1.teach();
 let s1=new Student("funda",134);
 s1.Introduce();
 s1.study();
 let h1=new  HeadMaster("emre",1234);
 h1.shareTask();
 h1.teach();
 h1.Introduce();
 //example
  var num=50;
  var account={
    name:"yiğit",
    accountNumber:"1213456"
  }

  function update(a,b){

    a=100;
    b.accountNumber="222222";
  }
  update(num,account);
  console.log(num);
  console.log(account);