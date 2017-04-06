/**
 *
 * Created by private on 2017/4/6.
 */

let instance = null;

export default class DataManager {

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

}
