import { expect } from 'chai';
import 'mocha';

import TelemetryClient from '../telemetry-system/telemetry-client';

describe('TelemetryClient', () => {

    describe('TelemetryClient test cases', () => {
        let telemetryClient = new TelemetryClient();
        it("should test onlineStatus method", async () => {
            let result = telemetryClient.getOnlineStatus();
            expect(result).to.equal(false);
        });

        it("should test connect method", async () => {
            let result = telemetryClient.connect("COnnecting");
            expect(result).to.equal(false);
        });
        it("should test connect method 2", async () => {
            let result = telemetryClient.connect("");
            expect(result).to.throw(new Error('missing telemetryServerConnectionString parameter'));
        });

        it("should test onlineStatus method", async () => {
            let telemetryClient = new TelemetryClient();
            telemetryClient.disconnect();
        });
    });

});