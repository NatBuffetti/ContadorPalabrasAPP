/**
 * Created by Nat on 13/2/2016.
 */

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
contarPalabras("club atletico river plate river river plate");