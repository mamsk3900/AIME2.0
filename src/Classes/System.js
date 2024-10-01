export class System{
    constructor(
        Manufacturer= "",
        Model= "",
        Serial= "",
    ) 
      {
        this._Manufacturer = Manufacturer;
        this._Model = Model;
        this._Serial = Serial;
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

    get getModel() {
       return this._Model;
    }

    get getModelString() {
        return `${this._model}`;
    }

    set setModel(newModel) {
        return this._Model = newModel;
    }

    get getSerial() {
        return this._Serial;
    }

    get getSerialString() {
        return `${this._Serial}`;
    }

    set setSerial(newSerial) {
        return this._Serial = newSerial;
    }
}