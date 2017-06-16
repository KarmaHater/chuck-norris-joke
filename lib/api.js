export const getJoke = ()=>  {
    let BASE_URL = 'https://api.icndb.com/';
    const url = 'jokes/random';

    return fetch(BASE_URL + url, {method: 'GET'})
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response;
        }).then((response) => {
            return response.json();
        }).then((data) => {
            return data.value.joke;
        });
};


export const sendToSlack = (TOKEN, CHANNEL, text) =>
    fetch(`https://hooks.slack.com/services/${TOKEN}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text,
            channel: CHANNEL,
        })
    });
