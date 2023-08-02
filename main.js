









document.getElementById("ANS").onclick = function (){

    let x = document.getElementById("aBox").value;
    x = Number(x);
    
    let y = document.getElementById("bBox").value;
    y = Number(y);

    let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    document.getElementById("Lc").innerHTML = "C :" + z;
}
