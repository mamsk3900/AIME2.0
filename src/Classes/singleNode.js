import { ThreeSixty } from "@mui/icons-material";

export class singleNode {
    constructor(
        AHash = "",
        Customer = "",
        NodeName = "",
        JobNum = "",
        Status = "",
        VLAN = "",
        BMCMAC = "",
        BMCIP = "",
        MCE = "",
        SUM = "",
        QA = "",
        CPU = "",
        UsedMem = "",
        LoadAvg = "",
        Uptime = "",
        IPMILogs = "",
        Tests = {
            "Disk": "",
            "Memory": "",
            "CPU/HPL": "",
            "GPU": "",
            "Network": "",
            "EOD": "",
            "Cycle": "",
            "USB": "",
            "IMPMI": ""
        },
        BOM = "",

    ){
        this._AHash = AHash;
        this._Customer = Customer;
        this._NodeName = NodeName;
        this._JobNum = JobNum;
        this._Status = Status;
        this._VLAN = VLAN;
        this._BMCMAC = BMCMAC;
        this._BMCIP = BMCIP;
        this._MCE = MCE;
        this._SUM = SUM;
        this._QA = QA;
        this._CPU = CPU;
        this._UsedMem = UsedMem;
        this._LoadAvg = LoadAvg;
        this._Uptime = Uptime;
        this._IPMILogs = IPMILogs;
        this._Tests = Tests;
        this._BOM = BOM;
    }




    get getAHash() {
        return this._AHash;
    }

    get getAHash() {
        return `${this._AHash}`;
    }

    set setAHash(newAHash) {
        this._AHash = newAHash;
    }





    get getCustomer() {
        return this._Customer;
    }

    get getCustomerString() {
        return `${this._Customer}`;
    }

    set setCustomer(newCustomer) {
        this._Customer = newCustomer;
    }





    get getNodeName() {
        return this._NodeName;
    }

    get getNodeNameString() {
        return `${this._NodeName}`;
    }

    set setNodeName(newNodeName) {
        this._NodeName = newNodeName;
    }





    get getJobNum() {
        return this._JobNum;
    }

    get getJobNumString() {
        return `${this._JobNum}`;
    }

    set setJobNum(newJobNum) {
        this._JobNum = newJobNum;
    }




    get getStatus() {
        return this._Status;
    }

    get getStatus() {
        return `${this._Status}`;
    }

    set setStatus(newStatus) {
        this._Status = newStatus;
    }




    get getVLAN() {
        return this._VLAN;
    }

    get getVLANString() {
        return `${this._VLAN}`;
    }

    set setVLAN(newVLAN) {
        this._VLAN = newVLAN;
    }




    get getBMCMAC() {
        return this._BMCMAC;
    }

    get getBMCMACString() {
        return `${this._BMCMAC}`;
    }

    set setBMCMAC(newBMCMAC) {
        this._BMCMAC = newBMCMAC;
    }




    get getBMCIP() {
        return this._BMCIP;
    }

    get getBMCIPString() {
        return `${this._BMCIP}`;
    }

    set setBMCIP(newBMCIP) {
        this._BMCIP = newBMCIP;
    }



    get getMCE() {
        return this._MCE;
    }

    get getMCEString() {
        return `${this._MCE}`;
    }

    set setMCE(newMCE) {
        this._MCE = newMCE;
    }



    get getSUM() {
        return this._SUM;
    }

    get getSUMString() {
        return `${this._SUM}`;
    }

    set setSUM(newSUM) {
        this._SUM = newSUM;
    }


    get getQA() {
        return this._QA
    }

    get getQAString() {
        return `${this._QA}`;
    }

    set setQA(newQA) {
        return this._QA = newQA;
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

    get getUsedMem() {
        return this._UsedMem;
    }

    get getUsedMemString() {
        return `${this._UsedMem}`
    }

    set setUsedMem(newUsedMem) {
        return this._UsedMem = newUsedMem;
    }

    get getLoadAvg() {
        return this._LoadAvg;
    }

    get getLoadAvgString() {
        return `${this._LoadAvg}`;
    }

    set setLoadAvg(newLoadAvg) {
        return this._LoadAvg = newLoadAvg;
    }

    get getUptime() {
        return this._Uptime;
    }

    get getUptimeString() {
        return `${this._Uptime}`;
    }

    set setUptime(newUptime) {
        return this._Uptime = newUptime;
    }
}