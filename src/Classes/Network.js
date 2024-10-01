export class Network {
    constructor(
        Port1="",
        Port2="",
        Port3="",
        Eth0="",
        Usb="",
        Eth1="",
    )
    {
        this._Port1 = Port1;
        this._Port2 = Port2;
        this._Port3 = Port3;
        this._Eth0 = Eth0;
        this._Usb = Usb;
        this._Eth1 = Eth1;
    }

    get getPort1() {
        return this._Port1;
    }

    set setPort1(newPort1) {
        return this._Port1 = newPort1;
    }

    get getPort2() {
        return this._Port2;
    }

    set setPort2(newPort2) {
        return this._Port2 = newPort2;
    }

    get getPort3() {
        return this._Port3;
    }

    set setPort3(newPort3) {
        return this._Port3 = newPort3;
    }

    get getEth0() {
        return this._Eth0;
    }

    get getUsb() {
        return this._Usb;
    }

    set setUsb(newUsb) {
        return this._Usb = newUsb;
    }

    get getEth1() {
        return this._Eth1;
    }

    set setEth1(newEth1) {
        return this._Eth1 = newEth1;
    }
}