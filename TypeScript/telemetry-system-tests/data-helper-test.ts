import { expect } from 'chai';
import 'mocha';

import DataHelper from '../telemetry-system/data-helper';

describe('Data Helper', () => {

    describe('Data Helper test cases', () => {

        it("should test _connectionEventsSimulator method", async () => {
            let datahelper = new DataHelper();
            let result = datahelper._connectionEventsSimulator(2, 4);
            expect(result).to.be.a('number');
        });

    });

});
