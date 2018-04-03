console.log('VkTrackChanger 0.0.1');

changeTrack = (command) => {
    switch (command) {
        case "nextTrack":
            if (!document.getElementsByClassName("top_audio_player_enabled")[0]) {
                document.getElementsByClassName("top_audio_play__button")[0].click();
                document.getElementsByClassName("top_audio_player_next")[0].click();
            } else {
                document.getElementsByClassName("top_audio_player_next")[0].click();
            }
            break;
        case "prevTrack": document.getElementsByClassName("top_audio_player_prev")[0].click();
            break;
        case "changeAudioTime":
            let script = document.createElement("script");

            script.innerHTML = "window.getAudioPlayer()._impl._currentAudioEl.currentTime = window.getAudioPlayer()._impl._currentAudioEl.currentTime + 25;";

            document.body.appendChild(script);
            break;
    }
};

chrome.runtime.onMessage.addListener((request) => {
    if (request.command) {
        changeTrack(request.command);
    }
});
