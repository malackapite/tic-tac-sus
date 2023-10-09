import Model from "../model/model.js"
import tablaView from "../view/tablaView.js"

class Controller {

    constructor() {
        const MODEL = new Model()
        const TABLA = new tablaView("#jatekter")
        TABLA.kiKov(MODEL.kor)
        $(window).on("select", event => {
            if (MODEL.ellenorzes() == null) {
                MODEL.valaszt(event.detail)
                TABLA.tablaBeallit(MODEL.allapot)
                TABLA.kiKov(MODEL.ellenorzes() === null ? MODEL.kor : undefined)
            }
            switch (MODEL.ellenorzes()) {
                case 1:
                    TABLA.szovegValt(`ඞ (amongus) nyert`);
                    break;
                case -1:
                    TABLA.szovegValt(`ය (sussy baka) nyert`);
                    break;
                case 0:
                    TABLA.szovegValt(`döntetlen`);
                    break;
                default:
                    break;
            }
        })
    }
}

export default Controller