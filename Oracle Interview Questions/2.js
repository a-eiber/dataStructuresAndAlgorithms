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
 * Complete the 'getUniqueCharacter' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
Time: O(n)
Space: O(s)

function getUniqueCharacter(s) {
    let memo = {}
    let finalLetter = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] in memo) {
            memo[s[i]] += 1
        } else {
            memo[s[i]] = 1
        }
    }
    for (const letter in memo) {
        if (memo[letter] === 1) {
            finalLetter = letter
            return s.indexOf(finalLetter) + 1
        }
    }
    if (finalLetter === '') return -1

    console.log(finalLetter)
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = getUniqueCharacter(s);

    ws.write(result + '\n');

    ws.end();
}
