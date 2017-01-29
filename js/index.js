
var number = Number(prompt('Enter the order number'));
var myNumber = fibon(number);

function fibo(n) {
    var a = 1, b = 0 ;
    
    for (var i=0; i<n; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return c;
};

document.write('the value is ' + myNumber);



function fibon(n) {
    if (n<2) {return n}
        else { 
            return fibon(n-1) + fibon(n-2) 
            
        };
};