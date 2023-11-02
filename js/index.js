function calcular(){
    let numeroSim = document.getElementById("input-simulaciones").value;

    const limSuperior = 3;
    const limInferior = 2;

    var sumaResultados = 0;
    var porcentajeError = 0;

    const resultadoExacto = (Math.pow(3, limSuperior) + Math.pow(3, limInferior)) - (Math.pow(2, limSuperior) + Math.pow(2, limInferior));

    function evaluarIntegral(num){
        const resultado = Math.pow(num, 3) + Math.pow(num, 2);
        return resultado;
    }

    if(numeroSim === "" || typeof numeroSim === NaN){
        alert("Ingrese una cantidad de simulaciones válida")
    } else if(numeroSim < 0 || numeroSim > 1000000) {
        alert("Ingrese una cantidad entre 1 y menos de 100.000");
    } else {

        for(var i=0; i < numeroSim ; i++){
            let randSup = Math.random()*(limSuperior - limInferior) + limInferior;
            let randInf;

            // do {
            //     let inferior = Math.random()*(limSuperior - limInferior) + limInferior;

            //     if(inferior < randSup){
            //         continuar = true;
            //         randInf = inferior;
            //     } else {
            //         continuar = false;
            //     }
            // } while(continuar === false);

            
            let resultadoIntegral = evaluarIntegral(randSup);

            sumaResultados += resultadoIntegral;

            // console.log(`Sup: ${randSup}`);
            // console.log(`Inf: ${randInf}`);
            // console.log(`Integral: ${evaluarIntegral(randSup)}`)
            // console.log("-------------")
        }

        let intAproximada = (limSuperior-limInferior) * (sumaResultados / numeroSim);
        porcentajeError = Math.abs((resultadoExacto - intAproximada) / resultadoExacto)*100;
        
        document.getElementById("resultadoMath").innerHTML = resultadoExacto;
        document.getElementById("resultadoAprox").innerHTML = intAproximada.toFixed(3);
        document.getElementById("porcentajeError").innerHTML = porcentajeError.toFixed(2) +"%";
        
        console.log(`Resultado aproximado de la integral: ${intAproximada}`)
        console.log(`Porcentaje de error: ${porcentajeError}%`)
    }
}