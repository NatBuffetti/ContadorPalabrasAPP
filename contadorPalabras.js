/**
 * Created by Nat on 13/2/2016.
 */
var WordCounterAPP = {
cantidadPalabras:0,
    contar:function(){
        var text = document.getElementById("text").value;
        var wordMap = this.doMagic(text);
        console.log(wordMap);
        for (var key in wordMap){
        var item = $('<li class = "list-group-item">'+key+":"+wordMap[key]+'</li>');
        $("#words").append(item);
        }
    }
    ,doMagic:function(text){
        var palabrasCant = {};
        var fraseA = text.split(" ");
        console.log(fraseA);
        for (var i = 0; i < fraseA.length; i++) {
            if (palabrasCant[fraseA[i]]) {
                palabrasCant[fraseA[i]]++;
            } else {
                palabrasCant[fraseA[i]] = 1;
            }
        }
        return palabrasCant;
    }
};
window.APP = WordCounterAPP;



/*        this.mostrar(text);
    },
    mostrar:function(text){
        console.log(text);
    }
};

window.APP = WordCounterAPP;

function contarPalabras (frase) {
    var palabrasCant = {};
    var fraseA = frase.split(" ");
    console.log(fraseA);
    for (var i = 0; i < fraseA.length; i++) {
        if (palabrasCant[fraseA[i]]) {
            palabrasCant[fraseA[i]]++;
        } else {
            palabrasCant[fraseA[i]] = 1;
        }
    }
    console.log(palabrasCant);
}
contarPalabras(text);*/