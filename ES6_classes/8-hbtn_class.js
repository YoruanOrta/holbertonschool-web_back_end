class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // When cast to a Number, return the size
    valueOf() {
        return this._size;
    }

    // When cast to a String, return the location
    toString() {
        return this._location;
    }
}

export default HolbertonClass;