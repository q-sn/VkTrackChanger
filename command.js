sendMessage = (tabInfo, command) => {
    chrome.tabs.query(tabInfo, (tabs) => {
        if (tabs.length) {
            chrome.tabs.sendMessage(tabs[0].id, command);
        }
    });
};

changeTrack = (command) => {
    if (command == "nextTrack" || command == "prevTrack") {
        sendMessage({url: "*://*.vk.com/*", audible: true}, {command: command});
    }
};

chrome.commands.onCommand.addListener(changeTrack);