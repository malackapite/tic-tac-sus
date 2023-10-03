class mezoView{
    constructor(szuloElem, nth, val){
        this.szuloElem=szuloElem
        this.nth=nth
        this.val=val

        this.szuloElem.append(`<p>${this.val}</p>`)
        this.elem=szuloElem.children("p:last-child")
        this.elem.on("click",()=>{
            this.#esemenyTrigger()
        })
    }

    #esemenyTrigger(){
        window.dispatchEvent(new CustomEvent("select", {detail:this.nth}))
    }
}

export default mezoView