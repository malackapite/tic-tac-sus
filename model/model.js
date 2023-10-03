class Model {
    #kor
    #allapot = new Array(9)
    constructor() {
        for (let ix = 0; ix < this.#allapot.length; ix++)
            this.#allapot[ix] = ""
        this.#kor = 1
    }

    get allapot() {
        return [... this.#allapot]
    }

    valaszt(nth) {
        if (this.#allapot[nth] == "") {
            this.#allapot[nth] = this.#kor % 2 == 0 ? "ඞ" : "ය"
            this.#kor++
        }
    }

    ellenorzes() {
        if (this.#vizszint() != null)
            return this.#vizszint()
        else if (this.#fuggoleges() != null)
            return this.#fuggoleges()
        else if (this.#atlo() != null)
            return this.#atlo()
        let ix = 0
        while (ix < this.#allapot.length && this.#allapot[ix] != "")
            ix++
        return ix < this.#allapot.length ? null : 0

    }

    #vizszint() {
        let jatekos1nyert = true
        let jatekos2nyert = true
        for (let ix = 0; ix < this.#allapot.length / 3; ix++) {
            jatekos1nyert = true
            jatekos2nyert = true
            for (let jx = 0; jx < this.#allapot.length / 3 && (jatekos1nyert || jatekos2nyert); jx++) {
                if (this.#allapot[ix * 3 + jx] != "ඞ")
                    jatekos1nyert = false
                if (this.#allapot[ix * 3 + jx] != "ය")
                    jatekos2nyert = false
            }
            if (jatekos1nyert)
                return 1
            if (jatekos2nyert)
                return -1
        }
        return null
    }

    #fuggoleges() {
        let jatekos1nyert = true
        let jatekos2nyert = true
        for (let ix = 0; ix < this.#allapot.length / 3; ix++) {
            jatekos1nyert = true
            jatekos2nyert = true
            for (let jx = 0; jx < this.#allapot.length / 3 && (jatekos1nyert || jatekos2nyert); jx++) {
                if (this.#allapot[ix + jx * 3] != "ඞ")
                    jatekos1nyert = false
                if (this.#allapot[ix + jx * 3] != "ය")
                    jatekos2nyert = false
            }
            if (jatekos1nyert)
                return 1
            if (jatekos2nyert)
                return -1
        }
        return null
    }

    #atlo() {
        let jatekos1nyert = true
        let jatekos2nyert = true
        
        for (let ix = 0; ix < this.#allapot.length / 3 && (jatekos1nyert || jatekos2nyert); ix++) {
            if (this.#allapot[ix + ix * 3] != "ඞ")
                jatekos1nyert = false
            if (this.#allapot[ix + ix * 3] != "ය")
                jatekos2nyert = false
        }
        if (jatekos1nyert)
            return 1
        if (jatekos2nyert)
            return -1

        jatekos1nyert = true
        jatekos2nyert = true
        for (let ix = 0; ix < this.#allapot.length / 3 && (jatekos1nyert || jatekos2nyert); ix++) {
            if (this.#allapot[(2 - ix) + ix * 3] != "ඞ")
                jatekos1nyert = false
            if (this.#allapot[(2 - ix) + ix * 3] != "ය")
                jatekos2nyert = false
        }
        if (jatekos1nyert)
            return 1
        if (jatekos2nyert)
            return -1
        return null
    }
}

export default Model