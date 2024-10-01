export class CPU {
    constructor(
        Model="",
        MHz="",
        PhysicalCPUs="",
        CoreCount=""
    ) {
        this._Model = Model;
        this._MHz = MHz;
        this._PhysicalCPUs = PhysicalCPUs;
        this._CoreCount = CoreCount;
    }

    get getModel() {
        return this._Model;
    }

    get getModelString() {
        return `${this._Model}`;
    }

    set setModel(newModel) {
        return this._Model = newModel;
    }


    get getMHz() {
        return this._MHz;
    }

    get getMHzString() {
        return `${this._MHz}`
    }

    set setMHz(newMHz) {
        return this._MHz = newMHz;
    }

    get getPhysicalCPUs() {
        return this._PhysicalCPUs;
    }

    get getPhysicalCPUsString() {
        return `${this._PhysicalCPUs}`;
    }

    set setPhysicalCPUs(newCPUs) {
        return this._PhysicalCPUs = newCPUs;
    }

    get getCoreCount() {
        return this._CoreCount;
    }

    get getCoreCountString() {
        return `${this._CoreCount}`;
    }

    set setCoreCount(newCoreCount) {
        return this._CoreCount = newCoreCount;
    }
}