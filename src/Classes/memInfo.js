export class MemInfo {
    constructor(
        TotalMem="",
        DIMMS=[]
    )

    {
    this._TotalMem = TotalMem;
    this._DIMMS = DIMMS;
    }

    get getTotalMem() {
        return this._TotalMem;
    }

    get getTotalMemString() {
        return `${this._TotalMem}`;
    }

    set setTotalMem(newTotalMem) {
        return this._TotalMem = newTotalMem;
    }

    get getDIMMS() {
        return this._DIMMS;
    }

    get getDIMMSString() {
        return `${this._DIMMS}`;
    }

    set setDIMMS(newDIMMS) {
        return this._DIMMS = newDIMMS;
    }
}