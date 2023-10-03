import Model from "../model/model.js"
import tablaView from "../view/tablaView.js"

class Controller{
    
    constructor(){
        const MODEL= new Model()
        const TABLA=new tablaView("main")
        $(window).on("select", event =>{
            if(MODEL.ellenorzes()==null){
                MODEL.valaszt(event.detail)
                TABLA.tablaBeallit(MODEL.allapot)
            }
            if(MODEL.ellenorzes()==1)
                console.log(`nyertél`);
            if(MODEL.ellenorzes()==-1)
                console.log(`vesztettél`);
            if(MODEL.ellenorzes()==0)
                console.log(`döntetlen`);
        })
    }
}

export default Controller