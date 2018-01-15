import { expect } from 'chai';
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';

import comms from './communications';



import util from 'util';




const testJSON = {
    first_name: 'first',
    last_name: 'last',
    dateJoined: (new Date()).getTime(),
    address: {
        street: '101 - 555 Main St.',
        city: 'Montréal', // unicode char
        zip: 54321, // numeric
    },
};

describe('Communications Util', function () {
    const url = '/api/v2/test';

    before(function() {
        fetchMock.mock(url, {});
    });
    beforeEach(fetchMock.reset);
    after(fetchMock.reset);

    describe('Request', function() {
        it('should call mock', function() {
            return comms({
                endpoint: url,
            }).then(function() {
console.log(util.inspect(fetchMock._calls, {depth: 5}));
console.log(util.inspect(fetchMock.calls(), {depth: 5}));
                const lastUrl = fetchMock.lastUrl(url);
console.log(lastUrl);

                expect(lastUrl).to.be.ok;
            });
        });
    });
});
