export default Response = class Response {
    #done = false;
    #result = null;

    constructor(done, result) {
        this.#done = done;
        this.#result = result || "-"; // valor por expresión, si result es undefined, null, false o cero, entonces se asignará la segunda parte de la expresión ('-').
    }
    /**
     * 
     * @param {boolean} value
     * Si se llama sin parametro (undefined) devuelve el atributo this.#done
     * Si se llama con parametro le asigna ese valor a this.#done
     * @returns {boolean} el valor de #done
     */
    hasDone = value => typeof value === "undefined" ? this.#done : this.#done = value ; // sobrecarga de metodos

    /**
     * 
     * @param {string} value
     * Si se llama sin parametro (undefined) devuelve el atributo this.#result
     * Si se llama con parametro le asigna ese valor a this.#result
     * @returns {object} el valor de #result
     */
    result = value => typeof value === "undefined" ? this.#result : this.#result = value; // sobrecarga de métodos

    

}