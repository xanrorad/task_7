function count(a, b, operation){  
    a=Number(a);  
    b=Number(b);  
    if (a > 0 && b > 0){  
    return operation(a,b);  
    }  
    return "Error";  
}  
    
function squad(x, y){  
    return x*y;  
}  
    
function per(x, y){  
    return x+y;  
}  
    

var a = prompt("Enter first side:", "")
var b = prompt("Enter second side:", "")
alert(count(a,b,squad))


