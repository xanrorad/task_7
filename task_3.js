var arr = [];
var count = 0;
for (var i = 0; i <= 2; i++) {
    
    arr[i] = function () {
        console.log(count)
        count += 2;
    };

}

arr[0](); // 0
arr[arr.length - 1](); // 2