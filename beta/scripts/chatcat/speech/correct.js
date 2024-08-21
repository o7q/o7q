// this function grammatically corrects common words to ensure the
// cosine similarity algorithm has as much of a clean input as possible
function correct(sentence) {
    let s1 = removeNonAlphanumeric(sentence).toLowerCase().split(' ');

    for (let i = 0; i < s1.length; i++) {

        let matched = false;

        // swap out each incorrectly spelled word
        for (let j = 0; j < VOCAB_DATASET.length; j += 2) {
            const incorrect_words_length = VOCAB_DATASET[j].length;
            for (let k = 0; k < incorrect_words_length; k++) {
                const incorrect_word = VOCAB_DATASET[j][k];
                if (s1[i] === incorrect_word) {
                    const correct_word = VOCAB_DATASET[j + 1][0];
                    s1[i] = correct_word;
                    matched = true;
                    break;
                }
            }

            if (matched) {
                break;
            }
        }
    }

    return s1.join(' ');
}

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^a-zA-Z0-9\s]/g, '');
};