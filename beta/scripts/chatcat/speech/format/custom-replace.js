// this function replaces words with their custom replacements
function customReplace(sentence) {
    for (let i = 0; i < sentence.length; i++) {

        let matched = false;

        // swap out each incorrectly spelled word
        for (let j = 0; j < ENGLISH_CUSTOM_DATASET.length; j += 2) {
            const incorrect_words_length = ENGLISH_CUSTOM_DATASET[j].length;
            for (let k = 0; k < incorrect_words_length; k++) {
                const incorrect_word = ENGLISH_CUSTOM_DATASET[j][k];
                if (sentence[i] === incorrect_word) {
                    const correct_word = ENGLISH_CUSTOM_DATASET[j + 1][0];
                    sentence[i] = correct_word;
                    matched = true;
                    break;
                }
            }

            if (matched) {
                break;
            }
        }
    }
}