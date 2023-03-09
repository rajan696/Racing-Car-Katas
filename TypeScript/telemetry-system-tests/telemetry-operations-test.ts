import { expect } from 'chai';
import 'mocha';

import TelemetryOperation from '../telemetry-system/telemetery-operations';

describe('Telemetery Operations', () => {
    describe('Telemetery Operations test cases', () => {
        let telemetryOperation = new TelemetryOperation();
        it("should test diagnosticMessage method", async () => {
            let result = telemetryOperation.diagnosticMessage();
            expect(result).to.equal('AT#UD');
        });
        it("should test send method", async () => {
            let result = telemetryOperation.send("Hi");
            expect(result).to.be.a('undefined');
        });
        it("should test _connectionEventsSimulator method", async () => {
            let result = telemetryOperation.receive();
            expect(result).to.be.a('string');
        });
    });

});
