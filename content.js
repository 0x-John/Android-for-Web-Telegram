// === хелперы ===

(function() {
    window.changeHashPlatform = () => {
        var lochash = location.hash.toString();
        if (lochash.indexOf('tgWebAppPlatform=weba') !== -1) {
            lochash = lochash.replaceAll("tgWebAppPlatform=weba", "tgWebAppPlatform=android");
        } else if (lochash.indexOf('tgWebAppPlatform=web') !== -1) {
            lochash = lochash.replaceAll("tgWebAppPlatform=web", "tgWebAppPlatform=android");
        }
        location.hash = lochash;
        if (index == 0) {
            location.reload();
            index = 1;
        }
        if (code != "") {
            eval(code);
        }
    };
    window.changeHashPlatform();
    addEventListener("hashchange", (event) => {
        window.changeHashPlatform();
    });
})();
var index = 0;
var code = "";
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Проверка, содержит ли сообщение JavaScript код
    if (message && message.code) {
        try {
            code = message.code;
            // Выполнение JavaScript кода в контексте веб-страницы
            eval(message.code);
        } catch (error) {
            console.error('Ошибка выполнения JavaScript кода:', error);
        }
    }
});
