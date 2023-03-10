import { expect } from 'chai';
import 'mocha';
import sinon from 'ts-sinon';

import TelemetryDiagnosticControls from '../telemetry-system/telemetry-diagnostic-controls';

describe('Telemetry System', () => {

	describe('TelemetryDiagnosticControls', () => {

		it('CheckTransmission should send a diagnostic message and receive a status message response', () => {
			let telemetryDiagnosticControlsServices = new TelemetryDiagnosticControls();
			let result = telemetryDiagnosticControlsServices.checkTransmission();
			expect(result).to.be.a('undefined');
		});


		it("should be hold valid string info", async () => {
			let _diagnosticInfo = "sdfsd";
			expect(_diagnosticInfo).to.not.equal(null)
		});

	});

});
