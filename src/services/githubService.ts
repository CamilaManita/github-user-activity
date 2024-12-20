import https from 'https';

const getUserEvents = (username: string): Promise<any[]> => {
    const url = `https://api.github.com/users/${username}/events`;

    const options = {
        headers: {
            'User-Agent': 'nodejs-cli-app',
        },
    };

    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`API Error: ${res.statusCode} - ${res.statusMessage}`));
                }
            });
        }).on('error', (err) => {
            reject(new Error(`Network Error: ${err.message}`));
        });
    });
};

export default { getUserEvents };
