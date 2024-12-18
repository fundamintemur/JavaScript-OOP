//Prototype
// let Person=function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
   
// }
// Person.prototype.calculateAge=function(){
//     return 2018-this.yearOfBirth;
   
// }
// Person.prototype.getName=function(){
//     return this.name;
// }


// let funda=new Person("funda",2020,"teacher");
// let emre=new Person("emre",2034,"inşaat")
// console.log(funda)
// console.log(funda.calculateAge());
// console.log(funda.getName());
// console.log("******")
// console.log(emre);
// console.log(emre.calculateAge());
// console.log(emre.getName());

// DEMO:Creating objects
// DIŞARIDAN NAME VE SALARY BİLGİLERİNİ ALAN EMPLOYEE
// CONSTRUCTOR TANIMLAYINIZ
// YIL İÇİNDE O ANA KADAR ALINAN TOPLAM MAAŞ VE ALINAN TOPLAM ENERJİ
// TUTARINI HESAPLAYAN FONKSİYONU OLUŞTURUN.
// VERGİ DİLİMLERİ
// **20.000 KADAR %20 VERGİ
// **30.000 KADAR %25 VERGİ
// **30.000 SONRA %27 VERGİ

function Emplyoee(name,salary){
    if(!this instanceof Emplyoee){
        return new Emplyoee(name,salary);
    }
    this.name=name;
    this.salary=salary;
}
Emplyoee.prototype.calculateSalary=function(){
    var month=new Date().getMonth()+1;
    var tax=0;
    var total=this.salary*month;
    if(total<=20000){
        tax=total*0.2;
    }
    else if(total>20000 && total<=30000){
     tax=total*0.25;
    }
    else{
        tax=total*0.3;
    }
    return{
        tax:tax,
        paid:total-tax
    }
}
 var emp1=Emplyoee("funda",45000);
 console.log(emp1.calculateSalary());
 
 var emp2=new Emplyoee("deniz",30000);
 console.log(emp2);