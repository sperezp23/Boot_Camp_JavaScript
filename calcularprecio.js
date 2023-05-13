function calcularprecio(pB, des) {
    if (pB <= 0||des <= 0 ||des >= 100) {
        return "Valores Invalidos :c";
    }
    else{
        return pB*(1-des/pB);
    }
}
