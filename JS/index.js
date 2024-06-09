

// break/continue ga oid masalalar

// 1-masala

// for (let i = 0; i <= 50; i++){
//      if (i === 30){
//           break
//      }
//      console.log(i)
// }    

// 2-masala

// for(let i = 1; i <= 50; i++){
//      if (i % 5 === 0){
//           continue
//           }
//      console.log(i)
// }

// 3-masala

// for (let i = 1; i <= 100; i++){
//      if (i === 75){
//           break
//      }
//      console.log(i)
// }

// 4- asala

// for (let i = 1; i <= 30; i++){
//      if(i % 3 === 0){
//           continue
//      }
//      console.log(i)
// }

// While hamda do…while yordamida ishlanadigan masalalar

// 1-masala
// let son = 1;
// while(son <= 20){
//      console.log(son)
//      son++;
//      }

// 2-masala
// let son = 10;
// while(son >= 1){
//      console.log(son);
//      son--
// }

// 3-masala
// let son = 2;
// while(son <= 50){
//      console.log(son);
//      son += 2
// }

// 4-masala

// let son = 1;
// while(son <= 50){
//      console.log(son);
//      son += 2
// }

// 5-masala
// let son = 1;
//  let yigindi = 0;
// while(son <= 50){
// yigindi = yigindi + son;
// son++
// }
// console.log(yigindi)

// 6-masala

// let kv = 1;
// while(kv <= 10){
//      let kvadrat = kv * kv;
//      console.log(kvadrat);
//      kv++;
// }

// 7-masala

// let a = prompt('son kiriting');
// while()

// 8-masala

// let a = 1;
// let b;
// while(a < 1024){
//       b = a * 2;
//       console.log(b);
//      a = b;
// }

// 9-masala


// 10-masala

// let a = 3;
// while(a <= 20){
//           console.log(a)
//      a += 3
// }

// 11-masala

// let a = 0;
// do{
//      console.log(a)
//      a++
// } while(a <= 10)

// 12-masala

// let a = 20;
// do{
//      console.log(a)
//      a--
// } while(a >= 1)

// 13-masala

// let a = 2;
// do{
//      console.log(a)
//      a += 2
// } while(a <= 100)

// 14-masala

// let a = prompt('son kiriting');
// let b;
// do{
//      b = a * a;
//      console.log(b)
//      // if(b === 0){
//      //      break
//      // }
// } while(a === 0 )

// 15-masala

// Umumiy masalalar.

// 1-masala
// for (let i = 1; i <= 50; i++){
//      if ( i % 5 === 0 && i % 7 ==0){
//           console.log(i,'5 va 7ga karrali')
//      } else if (i % 5 === 0){
//           console.log(i,'5ga karali')
//      } else if (i % 7 === 0){
//           console.log(i,'7ga karali')
//      } else{
//           console.log(i)
//      }
// }

// 2-masala
// for(let i = 1; i <= 12; i++){
//      switch(i){
//           case(1): console.log(i,'yanvar')
//           break
//           case(2): console.log(i,'fevral')
//           break
//           case(3): console.log(i,'mart')
//           break
//           case(4): console.log(i,'aprel')
//           break
//           case(5): console.log(i,'may')
//           break
//           case(6): console.log(i,'iyun')
//           break
//           case(7): console.log(i,'iyul')
//           break
//           case(8): console.log(i,'avgust')
//           break
//           case(9): console.log(i,'sentabr')
//           break
//           case(10): console.log(i,'oktabr')
//           break
//           case(11): console.log(i,'noyabr')
//           break
//           case(12): console.log(i,'dekabr')
//           break
//      }
// }

// 3-masala

// let a = 1;
// while(a <= 100){
//      if(a % 2 == 0){
//           continue
//      }else if (a >= 77){
//           break
//      }else {
//           console.log(a);
//      }
//      a++
// }

// 4-masala
// for(let i = 1; i <= 12; i++){
//      switch(i){
//           case(1): console.log(i,'dushanba')
//           break
//           case(2): console.log(i,'seshanba')
//           break
//           case(3): console.log(i,'chorshanba')
//           break
//           case(4): console.log(i,'payshanba')
//           break
//           case(5): console.log(i,'juma')
//           break
//           case(6): console.log(i,'shanba')
//           break
//           case(7): console.log(i,'yakshanba')
//           break
// }
// }

// 5-masala

// do{
//      let a = prompt('son kiriting')
//      if(a > 0){
//           alert('musbat')
//      } else if(a < 0){
//         alert('manfi')
//      } else{
//           break
//      }
// } while( a > 0 || a < 0)

// 6-masala  bajaralmadim

// let a;
// let kun;
// do{
//     kun = a - 7;
     
// }while( a > 7)
// switch (kun){
//      case(1): console.log('dushanba')
// }

// 7-masala

// for(let i = 1; i <= 100; i++){
//      if( i % 3 === 0 && i % 5 === 0){
//           console.log('FizzBuzz')
//      } else if(i % 3 === 0){
//           console.log('Fizz')
//      } else if(i % 5 === 0){
//           console.log('Buzz')
//      } else { console.log(i)}
// }

// 8-masala
// var son = 1;
// while(son > 0){
//      let son = prompt('son kiriting');
//      if(son > 100){
//           break
//      } else if(son > 10 || son % 5 === 0){
//           alert(son)
//           break
//      } 
// }

// 9-masala

// do{
//      let son = prompt('son kirit');
//      if(son > 1 && son < 10){
//           alert(son)
//      } else if(son === 0){
//           break
//      } else {
//          son = prompt('son kirit')
//      }
// }while(son > 0)

// 10-masala

// for(let i = 1; i <= 30; i++){

//      if(i % 2 === 0){
//           console.log('juft')
//      } else if(i === 15) {
//           console.log('ortacha son')
//      } else {
//           console.log('toq son')
//      }
// }

// 11masala
// let a = prompt('son');
// while(a < 50){
//      if(a % 2 === 0 || a % 3 === 0){
//           switch(a){
//                case()
//           }
//      } else 
// }