//bazı  yazdıgmız kodlarımızın sadece uygulama çalışmaya başladığında çalıştırmak isteriz


// (function(){

// })();
//1.kullanım

//2.kullanım
//immediate function
(function(name){
    var days=["sunday","monday","tuesday","wednesday","thursday","friday","Saturday"];
    var today=new Date();
    var msg="welcome.today is"+name
   + days[today.getDay()];
   
   console.log(msg)
}("çınar"));


