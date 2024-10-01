export class HardDrive {
    constructor(
        HardDriveMount="",
        Model="",
        Size="",
        Serial=""
    )
    {
        this._HardDriveMount=HardDriveMount;
        this._Model = Model;
        this._Size = Size;
        this._Serial = Serial;
    }

    get getHardDriveMount() {
        return this._HardDriveMount;
    }

    get getHardDriveMountString() {
        return `${this._HardDriveMount}`;
    }

    set setHardDriveMount(newHardDriveMount) {
        return this._HardDriveMount = newHardDriveMount;
    }

    get getModel() {
        return this._Model;
    }

    get getModelString() {
        return `${this._Model}`;
    }

    set setModel(newModel) {
        return this._Model = newModel
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

    get getSerial() {
        return this._Serial;
    }

    get getSerialString() {
        return `${this._Size}`;
    }

    set setSerial(newSerial) {
        return this._Serial = newSerial;
    }
}