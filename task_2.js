function createArrayIterator(array) {
    var arr=[];  

    var i = 0;  

    return function itr(){  

        return array[i++];  
    }    
 }
 
 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined