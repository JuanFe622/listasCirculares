class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class ListasCirculares{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

	unshiftNode(value) {
        let newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        /* El nuevo nodo pasa a ser la cabeza de la lista */
        this.head = newNode;
        this.length++;
        return this;
    }

    modificarNodo(nodoBuscado, value){
    	let nodoActual = newNode;
    	nodoActual = this.head;

    	let encontrado=false;

    	if(nodoActual!=null){
    		do{
    			if (nodoActual.value === nodoBuscado) {
    				nodoActual.value = value;
    				encontrado = true;
    			}
    			nodoActual= nodoActual.next;
    		}while(nodoActual!=this.head && encontrado !=true);
    	}
    }

    imprimirArrayList() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        return arregloNodos;
    }
}

let lista = new ListasCirculares();
lista.añadirNodoF(8);
lista.añadirNodoF(7);
lista.añadirNodoF(6);
lista.añadirNodoF(5);
lista.añadirNodoF(4);
lista.añadirNodoF(3);
lista.añadirNodoF(2);
lista.añadirNodoF(1);
lista.modificarNodo(2,50);

console.log(lista); 