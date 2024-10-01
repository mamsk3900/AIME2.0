export class DIMM {
    constructor(
        Size="",
        Locator="",
        Speed="",
        Manufacturer="",
        SerialNum="",
        PartNum="",
        ConfigedMemSpeed=""
    ) {
        this._Size = Size;
        this._Locator = Locator;
        this._Speed = Speed;
        this._Manufacturer = Manufacturer;
        this._SerialNum = SerialNum;
        this._PartNum = PartNum;
        this._ConfigedMemSpeed = ConfigedMemSpeed;
    }

    get getSize() {
        return this._Size;
    }

    get getSizeString() {
       return `${this._Size}`;
    }

    set setSize(newSize) {
        return this._Size = newSize;
    }

    get getLocator() {
        return this._Locator;
    }

    get getLocatorString() {
        return `${this._Locator}`;
    }

    set setLocator(newLocator) {
        return this._Locator = newLocator;
    }

    get getSpeed() {
        return this._Speed;
    }

    get getSpeedString() {
        return `${this._Speed}`;
    }

    set setSpeed(newSpeed) {
        return this._Speed = newSpeed;
    }

    get getManufacturer() {
        return this._Manufacturer;
    }

    get getManufacturerString() {
        return `${this._Manufacturer}`;
    }

    set setManufacturer(newManufacturer) {
        return this._Manufacturer = newManufacturer;
    }

    get getSerialNum() {
        return this._SerialNum;
    }

    get getSerialNumString() {
        return `${this._SerialNum}`;
    }

    set setSerialNum(newSerial) {
        return this._SerialNum = newSerial;
    }

    get getPartNum() {
        return this._PartNum;
    }

    get getPartNumString() {
        return `${this._PartNum}`;
    }

    set setPartNum(newPartNum) {
        return this._PartNum = newPartNum;
    }

    get getConfigedMemSpeed() {
        return this._ConfigedMemSpeed;
    }

    get getConfigedMemSpeedString() {
        return `${this._ConfigedMemSpeed}`;
    }

    set setConfigedMemSpeed(newMemSpeed) {
        return this._ConfigedMemSpeed = newMemSpeed;
    }
}