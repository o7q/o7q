function talk(sentence) {
    const DEBUG_LOG = false;

    const corrected_sentence = correct(sentence);

    let cosine_sim_max_values = [];

    for (let i = 0; i < SLY_DATASET.length; i += 2) {
        const response_questions_length = SLY_DATASET[i].length;

        let max_cosine_similarity = Number.MIN_SAFE_INTEGER;

        // loop through each dataset question and find the closest match
        for (let j = 0; j < response_questions_length; j++) {
            const response_question = SLY_DATASET[i][j];
            const cosine_similarity = cosineSim(corrected_sentence, response_question);

            if (cosine_similarity > max_cosine_similarity) {
                max_cosine_similarity = cosine_similarity;
            }

            if (DEBUG_LOG) {
                console.log(cosine_similarity, response_question);
            }
        }

        cosine_sim_max_values.push(max_cosine_similarity);

        if (DEBUG_LOG) {
            console.log(max_cosine_similarity);
        }
    }

    const max_cosine_similarity = Math.max(...cosine_sim_max_values);

    let response;

    if (max_cosine_similarity < 0.2 && corrected_sentence.length > 30) {
        response = ILLEGIBLE00_LONG_RESPONSES[getRandomInt(0, ILLEGIBLE00_LONG_RESPONSES.length)];
    }
    else if (max_cosine_similarity < 0.2) {
        response = ILLEGIBLE00_RESPONSES[getRandomInt(0, ILLEGIBLE00_RESPONSES.length)];
    }
    else if (max_cosine_similarity < 0.3) {
        response = ILLEGIBLE01_RESPONSES[getRandomInt(0, ILLEGIBLE01_RESPONSES.length)];
    }
    else {
        const nearest_index = nearest(1.0, cosine_sim_max_values).index;
        const response_index = nearest_index * 2 + 1;

        const random_response_index = getRandomInt(0, SLY_DATASET[response_index].length);

        response = SLY_DATASET[response_index][random_response_index];
    }

    const response_data = response.split("<!>");

    let response_emotion = response_data[0];
    let response_speak_anim = response_data[1];
    let response_speak_audio = response_data[2];
    let response_idle_anim = response_data[3];
    let response_text = response_data[4] + (getRandomInt(0, 5) == 0 ? " :3" : ""); // random :3
    let response_action = response_data[5];

    let response_speed = 20;

    if (DEBUG_LOG) {
        console.log("corrected sentence:", corrected_sentence);
        console.log(`[${response_emotion}]`, response_text);
        console.log("confidence:", max_cosine_similarity);
        console.log("happiness:", HAPPINESS);
    }

    switch (response_action) {
        case "deletePage":
            setTimeout(function () {
                document.body.innerHTML = "";
            }, 1000);
            break;
        case "increaseHappiness":
            if (RAGE_COUNT <= 0) {
                HAPPINESS += 1;
            }
            break;
        case "decreaseHappiness":
            HAPPINESS -= 2;
            break;
        case "disableAudio":
            AUDIO_ENABLED = false;
            break;
        case "enableAudio":
            AUDIO_ENABLED = true;
            break;
    }

    if (HAPPINESS < 0) {
        let rage = rageEvent();

        response_text = rage.text;
        response_speak_anim = rage.speakAnim;
        response_speak_audio = rage.speakAudio;
        response_idle_anim = rage.idleAnim;
        response_speed = rage.speed;

        if (rage.abort) {
            ABORT_SPEAK = true;
            return;
        }
    }

    speak(response_text, response_speak_anim, response_speak_audio, response_idle_anim, response_speed);
}