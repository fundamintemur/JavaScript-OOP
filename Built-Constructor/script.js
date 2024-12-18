//string
var str1="Sadık";
var str2=new String("Sadık");
console.log(str1)
console.log(typeof str1)
console.log(str2)
console.log(typeof str2)
if(str2 =="Sadık"){
    console.log("yes")
}
else{
    console.log("no")
}
String.prototype.repeat=function(n){
    return new Array(n+1).join(this);
}
console.log("sadık".repeat(2));
//number
var num1=10;
var num2=new Number(10);
//boolean
var bool1=true;
var bool2=new Boolean(true);

//object
var obj1={
    name:"Sadık"
}
var obj2=new Object({
    name:"Sadık"
})

//array
var arr1=["ada","yiğit","sena","çınar"];
var arr2=new Array("ada","yiğit","sena","çınar");

Array.prototype.remove=function(member){
    var index=this.indexOf(member);
    if(index>-1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr1.remove("sena"));

