import {StringUtils} from "./util/stringUtils";

export default class Main {

    constructor() {
        document.getElementById("debugMeBtn")
            .addEventListener('click', () => {
                document.getElementById("debugMeMsg").innerHTML = this.debugMe()
            });
    }

    private debugMe() {
        let msg = StringUtils.toUpperCase("debug");
        return (`... did you ${msg} me?`);
    }
}

new Main();