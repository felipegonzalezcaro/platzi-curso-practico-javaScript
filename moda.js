const lista1 = [];


function moda(lista1){
    lista1.map(
    function(elemento){
        if (lista1Count[elemento]){
        lista1Count[elemento] = lista1Count[elemento]+ 1;
    } else {
        lista1Count[elemento]= 1;
    }
    }
);
const lista1Count = {};
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);
const resultado = lista1Array[lista1Array.length - 1];
};


