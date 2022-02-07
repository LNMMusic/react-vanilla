const { useState, useEffect } = React;

// Metadata
const CONNECTION = "http://127.0.0.1:8080"

// Utils
async function getData(url='', auth='') {
    const response = await fetch(url, {credentials:"omit"});
    return response.json();
}

async function postData(url='', body={}, auth='') {
    const response = await fetch(url, {
        method:         'POST',
        
        mode:           'cors',
        cache:          'no-cache',
        credentials:    'omit',

        headers:        {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:           JSON.stringify(body)
    });
    return response.json();
}