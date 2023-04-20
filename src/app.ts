/// <reference types="chrome" />

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const error = document.getElementById('error') as HTMLElement;
    const success = document.getElementById('success') as HTMLElement;
    const good = document.getElementById('good') as HTMLElement;
    const bad = document.getElementById('bad') as HTMLElement;

    const url = tabs[0].url;

    fetch('http://api.9creator.com/api/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        if (data.value === 'O site é autêntico.') {
            error.style.visibility =  'hidden';
            success.style.visibility =  'visible';   
            good.style.visibility =  'visible';  
            bad.style.visibility =  'hidden';  
        } else {
            error.style.visibility =  'visible';
            success.style.visibility =  'hidden';  
            bad.style.visibility =  'visible';  
            good.style.visibility =  'hidden'; 
        }
    })
    .catch(error => console.error(error));
});
