export class GPU {
    constructor(
        Model="",
    )

    {
        this._Model = Model;
    }

    get getModel() {
        return this._Model;
    }

    set setModel(newModel) {
        return this._Model = newModel;
    }
}