browser.runtime.onMessage.addListener((message, sender) => {    
    const element = document.querySelector('.html5-main-video')

    element.click()

    return Promise.resolve();
});
