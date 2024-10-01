
export class BOM {
    constructor(
        BOMSummary = "",
        SystemInfo = "",
        Motherboard = "",
        CPU = "",
        BIOS="",
        MemInfo = "",
        GPU = "",
        StorageDevices = "",
        StorageControllers = "",
        Network = "",
        Display = "",
        PS = "",
        IPMI = ""
    )

    {
        this._BOMSummary = BOMSummary;
        this._SystemInfo = SystemInfo;
        this._Motherboard = Motherboard;
        this._BIOS = BIOS;
        this._CPU = CPU;
        this._MemInfo = MemInfo;
        this._GPU = GPU;
        this._StorageDevices = StorageDevices;
        this._StorageControllers = StorageControllers;
        this._Network = Network;
        this._Display = Display;
        this._PS = PS;
        this._IPMI = IPMI;
    }

    get getBOMSummary() {
        return this._BOMSummary;
    }

    get getBOMSummaryString() {
        return `${this._BOMSummary}`;
    }

    set setBOMSummary(newBOMSummary) {
        return this._BOMSummary = newBOMSummary;
    }

    get getSystemInfo() {
        return this._SystemInfo;
    }

    get getSystemInfoString() {
        return `${this._SystemInfo}`;
    }

    set setSystemInfo(newSystemInfo) {
        return this._SystemInfo = newSystemInfo;
    }

    get getMotherboard() {
        return this._Motherboard;
    }

    get getMotherboardString() {
        return `${this._Motherboard}`;
    }

    set setMotherboard(newMotherboard) {
        return this._Motherboard = newMotherboard;
    }

    get getCPU() {
        return this._CPU;
    }

    get getCPUString() {
        return `${this._CPU}`;
    }

    set setCPU(newCPU) {
        return this._CPU = newCPU;
    }

    get getBIOS() {
        return this._BIOS;
    }

    set setBios(newBIOS) {
        return this._BIOS = newBIOS; 
    }

    get getMemInfo() {
        return this._MemInfo;
    }

    get getMemInfoString() {
        return `${this._MemInfo}`;
    }

    set setMemInfo(newMemInfo) {
        return this._MemInfo = newMemInfo;
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

    get getStorageDevices() {
        return this._StorageDevices;
    }

    get getStorageDevicesString() {
        return `${this._StorageDevices}`;
    }

    set setStorageDevices(newStorageDevices) {
        return this._StorageDevices = newStorageDevices;
    }
    
    get getNetwork() {
        return this._Network;
    }

    get getNetworkString() {
        return `${this._Network}`;
    }

    set setNetwork(newNetwork) {
        return this._Network = newNetwork; 
    }

    get getDisplay() {
        return this._Display;
    }

    get getDisplayString() {
        return `${this._Display}`;
    }

    set setDisplay(newDisplay) {
        return this._Display = newDisplay;
    }

    get getPS() {
        return this._PS;
    }

    get getPSString() {
        return `${this._PS}`;
    }

    set setPS(newPS) {
        return this._PS = newPS;
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