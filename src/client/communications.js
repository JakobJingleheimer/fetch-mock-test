function send(opts) {
    return new Promise(reqExecutor)
        .catch((err) => {
            console.error(err);
            return err;
        });

    function reqExecutor(resolve, reject) {
        const call = fetch(opts.endpoint)
            .then((rsp) => {
                if (rsp.ok) return rsp;
console.log('Rsp NOT okay');
                throw new Error('Response Error');
            })
            .then((rsp) => rsp.json())
            .then((data = {}) => data);

        Promise.race([call])
            .then(resolve)
            .catch(reject);
    }
}

export default send;
