// I am using the cosine similarity formula for speech comparison
// An article explaining it can be found here: https://en.wikipedia.org/wiki/Cosine_similarity
function cosineSim(sentence1, sentence2) {
    const s1 = sentence1.toLowerCase().split(" ");
    const s2 = sentence2.toLowerCase().split(" ");

    const words = removeDup(s1.concat(s2));

    let numerator_dot = 0;

    // bin = binary
    let bin_components1 = [], bin_components2 = [];

    // calculate numerator dot product
    for (let i = 0; i < words.length; i++) {
        const bc1 = binComp(i, s1, words);
        bin_components1.push(bc1);

        const bc2 = binComp(i, s2, words);
        bin_components2.push(bc2);

        numerator_dot += bc1 * bc2;
    }

    // calculate the magnitudes of the denominator
    let magnitude1 = 0, magnitude2 = 0;
    for (let i = 0; i < words.length; i++) {
        magnitude1 += Math.pow(bin_components1[i], 2);
        magnitude2 += Math.pow(bin_components2[i], 2);
    }

    // calculate the norms of the sentence vectors
    const norms = Math.sqrt(magnitude1) * Math.sqrt(magnitude2);

    // calculate the cosine similarity
    if (norms !== 0) {
        return numerator_dot / norms;
    }
    else {
        return 0;
    }
}

// binary component function
// returns the binary component based on word equality
function binComp(i, s1, s2) {
    let bc = 0;
    if (s1.length > i && s2.length > i) {
        if (s1[i] === s2[i]) {
            bc = 1;
        }
    }

    return bc;
}

// remove duplicates function
// removes duplicate elements from an array
function removeDup(arr) {
    return arr.filter(
        (item, index) => arr.indexOf(item) === index
    );
}