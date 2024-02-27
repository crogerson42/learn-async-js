const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sum2DArrayAsync(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            let rowSums = Array(arr.length);
            for (let i = 0; i < arr.length; i++) {
                rowSums[i] = sumRow(arr[i]);
            }
            console.log('resolving each row ... ');
            Promise.all(rowSums)
                .then((rowSums) => {
                    sumRow(rowSums, true)
                        .then((res) => {
                            console.log(res);
                        })
                })
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    })
}

function sumRow(arr, overall=false) {
    return new Promise((resolve, reject) => {
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i]
                }
                overall ? console.log('calculating total...') : console.log('resolving row ... ');
                resolve(sum);
            }, 0)
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    })
}

sum2DArrayAsync(array2D);