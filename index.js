// Code your solutions in this file
const gifts = ['Guadalupe', 'Ollie', 'Aki'];

const writeCards=(gifts)=> {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Thank you, ${gifts[i]}, for the wonderful suprise gift!`);
  }

  return gifts;
}
/* writeCards(gifts); */

const countDown=(integer)=>{
    let i=integer
    while(i>-1){
        console.log(i)
        i--
    }
}
/* countDown(10); */