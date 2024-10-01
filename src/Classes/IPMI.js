export class IPMI {
    constructor(
        InterfaceType="",
        SpecVersion="",
        SlaveAddr="",
        NVStorage="",
        BaseAddr="",
        RegisterSpacing=""
    )
    {
        this._InterfaceType = InterfaceType;
        this._SpecVersion = SpecVersion;
        this._SlaveAddr = SlaveAddr;
        this._NVStorage = NVStorage;
        this._BaseAddr = BaseAddr;
        this._RegisterSpacing = RegisterSpacing;
    }

    get getInterfaceType() {
        return this._InterfaceType;
    }

    get getInterfaceTypeString() {
        return `${this._InterfaceType}`;
    }

    set setInterfaceType(newInterfaceType) {
        return this._InterfaceType = newInterfaceType;
    }

    get getSpecVersion() {
        return this._SpecVersion;
    }

    get getSpecVersionString() {
        return `${this._SpecVersion}`;
    }

    set setSpecVersion(newSpecVersion) {
        return this._SpecVersion = newSpecVersion;
    }

    get getSlaveAddr() {
        return this._SlaveAddr;
    }

    get getSlaveAddrString() {
        return `${this._SlaveAddr}`;
    }

    set setSlaveAddr(newSlaveAddr) {
        return this._SlaveAddr = newSlaveAddr;
    }

    get getNVStorage() {
        return this._NVStorage;
    }

    get getNVStorageString() {
        return `${this._NVStorage}`;
    }

    set setNVStorage(newNVStorage) {
        return this._NVStorage = newNVStorage;
    }

    get getBaseAddr() {
        return this._BaseAddr;
    }

    get getBaseAddrString() {
        return `${this._BaseAddr}`;
    }

    set setBaseAddr(newBaseAddr) {
        return this._BaseAddr = newBaseAddr;
    }

    get getRegisterSpacing() {
        return this._RegisterSpacing;
    }

    get getRegisterSpacingString() {
        return `${this._RegisterSpacing}`
    }

    set setRegisterSpacing(newRegisterSpacing) {
        return this._RegisterSpacing = newRegisterSpacing;
    }
}