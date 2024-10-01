export class Tests {
    constructor(
        Disk = "",
        Memory = "",
        CPUHPL = "",
        GPU = "",
        Network = "",
        EOD = "",
        Cycle = "",
        USB = "",
        IPMI = ""
    )

    {
        this._Disk = Disk;
        this._Memory = Memory;
        this._CPUHPL = CPUHPL;
        this._GPU = GPU;
        this._Network = Network;
        this._EOD = EOD;
        this._Cycle = Cycle;
        this._USB = USB;
        this._IPMI = IPMI;
    }

    get getDisk() {
        return this._Disk;
    }

    get getDiskString() {
        return `${this._Disk}`;
    }
    
    set setDisk(newDisk) {
        return this._Disk = newDisk;
    }

    get getMemory() {
        return this._Memory;
    }

    get getMemoryString() {
        return `${this._Memory}`;
    }

    set setMemory(newMemory) {
        return this._Memory = newMemory;
    }

    get getCPUHPL() {
        return this._CPUHPL;
    }

    get getCPUHPLString() {
        return `${this._CPUHPL}`;
    }

    set setCPUHPL(newCPUHPL) {
        return this._CPUHPL = newCPUHPL;
    }

    get getGPU() {
        return this._GPU;
    }

    get getGPUString() {
        return `${this._GPU}`;
    }

    set setGPU(newGPU) {
        return this._GPU = newGPU;
    }

    get getNetwork() {
        return this._Network;
    }

    set setNetwork(newNetwork) {
        return this._Network = newNetwork
    }

    get getNetworkString() {
        return `${this._Network}`;
    }


    get getEOD() {
        return this._EOD;
    }

    set setEOD(newEOD) {
        return this._EOD = newEOD;
    }

    get getEODString() {
        return `${this._EOD}`;
    }

    get getCycle() {
        return this._Cycle;
    }

    set setCycle(newCycle) {
        return this._Cycle = newCycle;
    }

    get getCylceString() {
        return `${this._Cycle}`;
    }
    
    get getUSB() {
        return this._USB;
    }

    get getUSBString() {
        return `${this._USB}`;
    }

    set setUSB(newUSB) {
        return this._USB = newUSB;
    }


    get getIPMI() {
        return this._IPMI;
    }

    get getIPMIString() {
        return `${this._IPMI}`;
    }

    set setIPMI(newIPMI) {
        return this._IPMI = newIPMI;
    }
}