// inizialmente i è uguale a 1
// si ripete fino a quando i è minore uguale a 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) { // se il resto di i/3 uguale 0, ma il resto di i/5 diverso da 0 
    console.log('Fizz');
  } else if (i % 3 !== 0 && i % 5 === 0) { // se il resto di i/3 dicerso da 0, ma il resto di i/5 uguale 0 
    console.log('Buzz');
  } else if (i % 3 === 0 && i % 5 === 0) { // se il resto di i/3 e  di i/5 uguale 0
    console.log('FizzBuzz');
  } else { // in tutti gli  altri casi
    console.log(i);
  }
}
// i viene incrementato di 1