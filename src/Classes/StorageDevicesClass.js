export class StorageDevices {
    constructor(
        HardDrive="",
        TotalDiskCount="",
        TotalRegularOfSize=""
    )
    {
        this._HardDrive = HardDrive;
        this._TotalDiskCount = TotalDiskCount;
        this._TotalOfRegularSize = TotalRegularOfSize;
    }

    get getHardDrive() {
        return this._HardDrive;
    }

    get getHardDriveString() {
        return `${this._HardDrive}`
    }

    set setHardDrive(newHardDrive) {
        return this._HardDrive = newHardDrive;
    }

    get getTotalDiskCount() {
        return this._TotalDiskCount;
    }

    get getTotalDiskCountString() {
        return `${this._TotalDiskCount}`;
    }

    set setTotalDiskCount(newTotalDiskCount) {
        return this._TotalDiskCount = newTotalDiskCount;
    }

    get getTotalRegularOfSize() {
        return this._TotalOfRegularSize;
    }

    get getTotalRegularOfSizeString() {
        return `${this._TotalOfRegularSize}`;
    }

    set setTotalRegularOfSize(newTotalOfRegularSize) {
        return this._TotalOfRegularSize = newTotalOfRegularSize;
    }
}