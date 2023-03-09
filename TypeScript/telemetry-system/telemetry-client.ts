import DataHelper from "./data-helper";

export default class TelemetryClient {

	public onlineStatus: boolean;
	private DataHelper = new DataHelper();

	constructor() {
		this.onlineStatus = false;
	}

	public getOnlineStatus() {
		return this.onlineStatus;
	}

	public connect(telemetryServerConnectionString: string) {
		if (telemetryServerConnectionString === '') {
			throw new Error('missing telemetryServerConnectionString parameter');
		}

		// simulate the operation on a real modem
		const success = this.DataHelper._connectionEventsSimulator(1, 10) <= 8;

		this.onlineStatus = success;
	}

	public disconnect() {
		this.onlineStatus = false;
	}
}
