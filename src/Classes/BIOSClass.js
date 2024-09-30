export class BIOS {
    constructor(
        Vendor="",
        Version="",
        ReleaseDate=""
    )
    {
        this._Vendor = Vendor;
        this._Version = Version;
        this._ReleaseDate = ReleaseDate;
    }



    get getVendor() {
        return this._Vendor;
    }

    get getVendorString() {
        return `${this._Vendor}`; 
    }

    set setVendor(newVendor) {
        return this._Vendor = newVendor;
    }

    get getVersion() {
        return this._Version;
    }

    get getVersionString() {
        return `${this._Version}`;
    }

    set setVersion(newVersion) {
        return this._Version = newVersion;
    }
    
    get getReleaseDate() {
        return this._ReleaseDate;
    }

    get getReleaseDateString() {
        return `${this._ReleaseDate}`;
    }

    set setReleaseDate(newDate) {
        return this._ReleaseDate = newDate;
    }
}