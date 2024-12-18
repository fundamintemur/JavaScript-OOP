//bazen yazdığımız bir fonksiyonun bize bir fonksiyon döndürmesini isteyebiliriz.
//functions that return functions
function Question(hobby){
    switch(hobby){
        case "car":
          return function(name){
            console.log(name +"do you have a car?");
        }
        break;
        case "book":
            return function(name){
                console.log(name +"what is your favourite book?");
            }
        break;

        case "software":
            return function(name){
                console.log(name +"are you interested in asp.net?");
            }
        break;
      
        default:
            return function(name){
                console.log(name +"how are you?");
            }
    }
}

 var carQuestion=Question("car");
 carQuestion("çınar");
 carQuestion("emel");

 var bookQuestion=Question("book");
 bookQuestion("yiğit")