function format(sentence) {
    let formattedSentence = removeNonAlphanumeric(sentence).toLowerCase().split(' ');

    for (let i = 0; i < formattedSentence.length; i++) {

        let max_cosine_similarity = Number.MIN_SAFE_INTEGER;
        let closest_index = 0;

        for (let j = 0; j < ENGLISH_DICTIONARY.length; j++) {
            const levenshtein_distance = levenshteinDistance(
                formattedSentence[i],
                ENGLISH_DICTIONARY[j]
            );

            const levenshtein_similarity = levenshteinSimilarity(
                levenshtein_distance,
                formattedSentence[i].length,
                ENGLISH_DICTIONARY[j].length
            );

            if (levenshtein_similarity > max_cosine_similarity) {
                max_cosine_similarity = levenshtein_similarity;
                closest_index = j;
            }
        }

        formattedSentence[i] = ENGLISH_DICTIONARY[closest_index];
    }

    customReplace(formattedSentence);

    return formattedSentence.join(' ');
}

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^a-zA-Z0-9\s]/g, "");
};