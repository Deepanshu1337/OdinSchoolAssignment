let numbers = [1, 2, 3, 4, 1,5,3,7,9,4,5,2,1,4,7,5,6,8,6,3,5,6,3,6];
let count = {};
numbers.forEach(items => {
    if (count[items]) {
        count[items]++;
    }
    else {
        count[items] = 1;
    }
});
console.log(count);
    


