import mezoView from "./mezoView.js"

class tablaView{
    constructor(szuloElem){
        this.szuloElem=$(szuloElem).eq(0)
        this.szuloElem.html("<div id='tabla'></div>")
        for (let ix = 0; ix < 9; ix++) {
            new mezoView($("#tabla"), ix, "")
        }
    }

    tablaBeallit(allapot){
        $("#tabla").empty()
        for (let ix = 0; ix < 9; ix++) {
            new mezoView($("#tabla"), ix, allapot[ix])
        }
    }
}

export default tablaView