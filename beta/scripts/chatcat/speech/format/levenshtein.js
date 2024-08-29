// I am using the Wagner-fischer algorithm for word similiarity
// An article explaining it can be found here: https://en.wikipedia.org/wiki/Levenshtein_distance / https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm
function levenshteinDistance(input, match) {
    const inputLength = input.length;
    const matchLength = match.length;

    let matrix = new Array(inputLength + 1);

    for (let i = 0; i <= inputLength; i++) {
        matrix[i] = new Array(matchLength + 1);
    }

    matrix[0][0] = 0;

    for (let i = 1; i <= inputLength; i++) {
        matrix[i][0] = i;
    }

    for (let j = 1; j <= matchLength; j++) {
        matrix[0][j] = j;
    }

    for (let j = 1; j <= matchLength; j++) {
        for (let i = 1; i <= inputLength; i++) {
            let substitutionCost;
            if (input[i - 1] == match[j - 1]) {
                substitutionCost = 0;
            }
            else {
                substitutionCost = 1;
            }

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + substitutionCost
            );
        }
    }

    // DEBUG OUTPUT
    // for (let j = 0; j < matchLength + 1; j++) {
    //     let temp = "";
    //     for (let i = 0; i < inputLength + 1; i++) {
    //         temp += matrix[i][j] + " ";
    //     }
    //     console.log(temp + "\n");
    // }
    // console.log(matrix[inputLength][matchLength]);

    // return levenshtein distance
    return matrix[inputLength][matchLength];
}

function levenshteinSimilarity(levenshtein_distance, inputLength, matchLength)
{
    return 1 - levenshtein_distance / Math.max(inputLength, matchLength);
}