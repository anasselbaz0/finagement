export const API = 'http://localhost:8080';


export function getRequest(uri) {
    return fetch(uri, {method: 'GET'})
        .then(response => response.json());
}

export function deleteRequest(uri) {
    return fetch(uri, {method: 'DELETE'});
}

export function postRequest(uri, body) {
    return fetch(uri,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json());

    //return fetch(uri, { method: 'POST', body: body });
}
