export class TestParentClass {
    constructor(
        Test="",
        Status="",
        StartTime="",
        EndTime="",
        Cycles="",
        Log=""
    )

    {
        this._Test = Test;
        this._Status = Status;
        this._StartTime = StartTime;
        this._EndTime = EndTime;
        this._Cycles = Cycles;
        this._Log = Log;
    }

    get getTest() {
        return this._Test;
    }

    get getTestString() {
        return `${this._Test}`;
    }

    set setTest(newTest) {
        return this._Test = newTest;
    }

    get getStatus() {
        return this._Status;
    }

    get getStatusString() {
        return `${this._Status}`;
    }

    set setStatus(newStatus) {
        return this._Status = newStatus;
    }
 
    get getStartTime() {
        return this._StartTime;
    }

    get getStartTimeString() {
        return `${this._StartTime}`;
    }

    set setStartTime(newStartTime) {
        return this._StartTime = newStartTime;
    }

    get getEndTime() {
        return this._EndTime;
    }

    get getEndTimeString() {
        return `${this._EndTime}`;
    }

    set setEndTime(newEndTime) {
        return this._EndTime = newEndTime;
    }

    get getCycles() {
        return this._Cycles;
    }

    get getCyclesString() {
        return `${this._Cycles}`;
    }

    set setCycles(newCycles) {
        return this._Cycles = newCycles;
    }

    get getLog() {
        return this._Log;
    }

    get getLogString() {
        return `${this._Log}`;
    }

    set setLog(newLog) {
        return this._Log = newLog;
    }
}