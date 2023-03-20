/**
 * Capaz de proporcionar información sobre
 * unidades de longitud en el sistema imperial
 * Capaz de trabajar con pulgadas, pies, yardas y millas
 * @param numero_ está en magnitud en pulgadas
 */

export class ImperialLength {
    private numero_ : number; // magnitud en pulgadas


    /**
     * Constructor de la clase ImperialLength
     * @param numero 
     */
    constructor (numero : number) {
        this.numero_ = numero;
    } 

    /**
     * Establece el valor en yardas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set yardas(numero : number) {
        this.numero_ = numero * 0.0277778;
    }

    /**
     * Retorna el valor en yardas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en yardas
     */
    get yardas() {
        return (this.numero_ * 0.0277778);
    }

    /**
     * Establece el valor en pulgadas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set pulgadas(numero : number) {
        this.numero_ = numero;
    }

    /**
     * Retorna el valor en pulgadas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en pulgadas
     */
    get pulgadas() {
        return this.numero_;
    }

    /**
     * Establece el valor en pies haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set pies(numero : number) {
        this.numero_ = numero * 0.0833333;
    }

    /**
     * Retorna el valor en pies haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en pies
     */
    get pies() {
        return (this.numero_ * 0.0833333);
    }

    /**
     * Establece el valor en millas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set millas(numero : number) {
        this.numero_ = numero * 1.5783;
    }

    /**
     * Retorna el valor en millas haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en millas
     */
    get millas() {
        return (this.numero_ * 1.5783);
    }
    
}