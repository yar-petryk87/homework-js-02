btnLoop.addEventListener('click' , function(e){
    e.preventDefault();
    var numberLoop = loop.value;
    var myNumberLoop = fiboLoop(numberLoop);
    function fiboLoop(n) {
        var a = 1, b = 0 ;
        for (var i=0; i<n; i++) {
        var c = a + b;
        a = b;
        b = c;
        }
        return c;
    };
    resultLoop.innerHTML = myNumberLoop;
});

btnRecursion.addEventListener('click' , function(e){
    e.preventDefault();
    var numberRecursion = recursion.value;
    var myNumberRecursion = fiboRecursion(numberRecursion);
    function fiboRecursion(n) {
        if (n<2) {return n}
        else { 
            return fiboRecursion(n-1) + fiboRecursion(n-2) 
        };
    };
    resultRecursion.innerHTML = myNumberRecursion;
    
});

