class Array {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get (index){
        return this.data[index];
    }


    agregar = (item) => {
        this.data[this.length] = item;
        this.length++;
        return this.length;

    }

    reducir = () => {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
}


const newArr = new Array();
newArr.agregar('Enoc')
newArr.agregar('Pineda')
newArr.reducir()
console.log(newArr.data);