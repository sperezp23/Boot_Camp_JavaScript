function mayorArray(a = [1,2,3,4,5,6,7,8,9,0]){
    //Aarray vacio ?
    if (a.length <1) {
        return null;
    }
    //Array lleno :)
    else{
        //Declaación de vaiables
        var aux = 0, max = 0, impares = 0; 

        //Numero mas grande
        for (let i = 0; i < a.length; i++) {
            if(a[i]>aux){
                max = a[i];
            } 
        }

        //Impimir datos
        while(aux < a.length){
            console.log("Dato["+aux+"] "+a[aux]);
            aux++;
        }

        //reiniciar aux
        aux = 0;

        //Conteo de impares
        do {
            if (a[aux]%2 != 0) {
                impares++;   
            }

            aux++;

        } while (aux < a.length);

        //Salida
        return "Max: "+max + "\nImpares: "+impares;
    }
}