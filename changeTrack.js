console.log('VkTrackChanger is active');

changeTrack = (command) => {
    if (!document.getElementsByClassName("top_audio_player_playing")[0]) {
        console.log("Music not playing");
        return;
    }

    switch (command) {
        case "nextTrack" : document.getElementsByClassName("top_audio_player_next")[0].click();
            break;
        case "prevTrack" : document.getElementsByClassName("top_audio_player_prev")[0].click();
            break;
    }
};

chrome.runtime.onMessage.addListener((request) => {
    if (request.command) {
        changeTrack(request.command);
    }
});