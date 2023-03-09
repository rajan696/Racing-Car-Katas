export default class DataHelper {

    _connectionEventsSimulator(min: number, max: number) {
        var delta = max + 1 - min;
        return min + Math.floor(delta * Math.random());
    }

}