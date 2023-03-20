/**
 * Capaz de proporcionar información sobre
 * unidades de longitud en el sistema metrico
 * Capaz de trabajar con centímetros, metros y kilómetros
 * @param numero_ está en magnitud en metros
 */

export class MetricLength {
    private numero_ : number; // magnitud en metros


    /**
     * Constructor de la clase ImperialLength
     * @param numero 
     */
    constructor (numero : number) {
        this.numero_ = numero;
    } 

    /**
     * Establece el valor en centimetros haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set centimetros(numero : number) {
        this.numero_ = numero / 100;
    }

    /**
     * Retorna el valor en centimetros haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en centimetros
     */
    get centimetros() {
        return (this.numero_ * 100);
    }

    /**
     * Establece el valor en metros haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set metros(numero : number) {
        this.numero_ = numero;
    }

    /**
     * Retorna el valor en metros haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en metros
     */
    get metros() {
        return this.numero_;
    }

    /**
     * Establece el valor en kilometros haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     */
    set kilometros(numero : number) {
        this.numero_ = numero / 0.001;
    }

    /**
     * Retorna el valor en kilometros haciendo
     * la conversión en la magnitud predefinida
     * de la clase
     * @param numero 
     * @return número en kilometros
     */
    get kilometros() {
        return (this.numero_ * 0.001);
    }
}