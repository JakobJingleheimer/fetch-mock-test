import { expect } from 'chai';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import React from 'react';

import TestCmpt from './TestComponentWithFetch';



import util from 'util';




describe('Test Component', function() {
    const url = '/example';

    before(function() {
        fetchMock.mock(url, {});
    });
    beforeEach(fetchMock.reset);
    after(fetchMock.reset);

    it('should trigger a fetch', function() {
        const wrapper = shallow(<TestCmpt />);
console.log(util.inspect(fetchMock._calls, {depth: 5}));
console.log(util.inspect(fetchMock.calls(), {depth: 5}));
        const lastUrl = fetchMock.lastUrl(url);
console.log(lastUrl);

        expect(lastUrl).to.be.ok;
    });
});
