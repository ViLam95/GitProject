function ket_qua(){
    let cannang = +document.getElementById("cannang").value;
    let chieucao = +document.getElementById("chieucao").value;
    let bmi = cannang /Math.pow(chieucao,2);
    if (bmi <18.5){
       alert("underweight");
    }
        else if (18.5<= bmi && bmi< 25.0){
            alert("normal");
        }
        else if (25.0 <= bmi && bmi < 30.0){
           alert("overweight");
    }
        else{
            alert("obse")
    }

}