

function getNum(num){
for(i = 1; i <= num ; i++){
    switch (true) {
     case (i % 3 === 0 && i % 5 === 0) :
       console.log(i++, 'fizzBuzz');
       break;
     case (i % 3 == 0) :
       console.log(i++, 'fizz');
       break;
     case (i % 5 == 0) :
       console.log(i++, 'buzz',);
       break;
     default:
       console.log(i);
       break;
     } 
    }
   }

   console.log(getNum([45]));