// =========================
// CORAÇÕES
// =========================

function criarCoracao(){

    const coracao = document.createElement("div");

    coracao.className = "coracao";

    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random()*100 + "vw";

    coracao.style.fontSize = (20+Math.random()*30)+"px";

    document.body.appendChild(coracao);

    setTimeout(()=>{
        coracao.remove();
    },6000);

}

setInterval(criarCoracao,500);


// =========================
// ABRIR PRESENTE
// =========================

function abrirPresente(){

    document.getElementById("story").style.display="block";

    document.getElementById("story").scrollIntoView({
        behavior:"smooth"
    });

    chuva(30);

}


// =========================
// CONTINUAR
// =========================

function proxima1(){

    document.getElementById("story2").style.display="block";

    document.getElementById("story2").scrollIntoView({
        behavior:"smooth"
    });

    chuva(30);

}

function proxima2(){

    document.getElementById("story3").style.display="block";

    document.getElementById("story3").scrollIntoView({
        behavior:"smooth"
    });

    chuva(40);

}

function proxima3(){

    document.getElementById("love").style.display="block";

    document.getElementById("love").scrollIntoView({
        behavior:"smooth"
    });

    chuva(60);

}


// =========================
// SURPRESA FINAL
// =========================

function finalSurprise(){

    document.getElementById("final").style.display="block";

    document.getElementById("final").scrollIntoView({
        behavior:"smooth"
    });

    chuvaGigante();

    setTimeout(()=>{

        alert(

        "❤️ Maria Vitória ❤️\n\n"+
        "Feliz aniversário!\n\n"+
        "Eu te amo infinitamente.\n\n"+
        "Espero que seu dia seja maravilhoso! 🎂✨"

        );

    },1000);

}


// =========================
// CHUVAS
// =========================

function chuva(qtd){

    for(let i=0;i<qtd;i++){

        setTimeout(()=>{

            criarCoracao();

        },i*50);

    }

}

function chuvaGigante(){

    for(let i=0;i<250;i++){

        setTimeout(()=>{

            criarCoracao();

        },i*20);

    }

}


// =========================
// MENSAGEM
// =========================

console.log("❤️ Feliz aniversário Maria Vitória ❤️");
