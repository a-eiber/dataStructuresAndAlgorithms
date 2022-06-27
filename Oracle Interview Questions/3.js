'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'getMergedIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

/*

var arr = [[12, 'AAA'], [12, 'BBB'], [12, 'CCC'],[28, 'DDD'], [18, 'CCC'],[12, 'DDD'],[18, 'CCC'],[28, 'DDD'],[28, 'DDD'],[58, 'BBB'],[68, 'BBB'],[78, 'BBB']];

arr.sort(function(a,b) {
    return a[0]-b[0]
});

*/


function getMergedIntervals(intervals) {
    const result = []
    const sortedArr = intervals.sort((a,b) => a[0] - b[0])
    for (let i = 0; i < sortedArr.length; i++) {
        // console.log(sortedArr[i+1])
        if (sortedArr[i+1] === undefined) {
            result.push(sortedArr[i+1])
        }

        // i+1 intervals.length
        /*

        */

        if (sortedArr[i][1] >= sortedArr[i+1][0] && sortedArr[i][1] < sortedArr[i+1][1]) {
            result.push([sortedArr[i][0], sortedArr[i+1][1]])
        }
        if (sortedArr[i][1] >= sortedArr[i+1][0] && sortedArr[i][1] >= sortedArr[i+1][1]) {
            result.push([sortedArr[i][0], sortedArr[i][1]])
        }
    }
    return result
}



function main() {

    //getMergedIntervals([[7,7],[2,3],[6,11],[1,2]])


    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const intervalsRows = parseInt(readLine().trim(), 10);

    const intervalsColumns = parseInt(readLine().trim(), 10);

    let intervals = Array(intervalsRows);

    for (let i = 0; i < intervalsRows; i++) {
        intervals[i] = readLine().replace(/\s+$/g, '').split(' ').map(intervalsTemp => parseInt(intervalsTemp, 10));
    }

    const result = getMergedIntervals(intervals);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();

}
