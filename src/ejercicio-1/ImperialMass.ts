/**
 * Capaz de proporcionar información sobre
 * unidades de masa en el sistema imperial
 * Capaz de trabajar con onzas, libras, piedras, centenas, tonleadas
 * @param
 */

export class ImperialMass {
    private numero_ : number; // magnitud en libras


    /**
     * Constructor de la clase ImperialLength
     * @param numero 
     */
    constructor (numero : number) {
        this.numero_ = numero;
    } 

    /**
     * Establece el valor en libras haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set libras(numero : number) {
        this.numero_ = numero;
    }

    /**
     * Retorna el valor en libras haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en libras
     */
    get libras() {
        return (this.numero_);
    }

    /**
     * Establece el valor en onzas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set onzas(numero : number) {
        this.numero_ = (numero * 16);
    }

    /**
     * Retorna el valor en onzas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en onzas
     */
    get onzas() {
        return (this.numero_ * 16);
    }

    /**
     * Establece el valor en piedras haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set piedras(numero : number) {
        this.numero_ = numero * 0.07;
    }

    /**
     * Retorna el valor en piedras haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en piedras
     */
    get piedras() {
        return (this.numero_ * 0.07);
    }

    /**
     * Establece el valor en centenas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set centenas(numero : number) {
        this.numero_ = numero * 0.00892857;
    }

    /**
     * Retorna el valor en centenas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en centenas
     */
    get centenas() {
        return (this.numero_ * 0.00892857);
    }

    /**
     * Establece el valor en toneladas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set toneladas(numero : number) {
        this.numero_ = numero * 0.000453592;
    }

    /**
     * Retorna el valor en toneladas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en toneladas
     */
    get toneladas() {
        return (this.numero_ * 0.000453592);
    }
    
}