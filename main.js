// création d'une constante pour lire ce que va entrer l'utilisateur
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let a, b;

readline.question('Que souhaitez vous faire additionner(0), soustraire(1), multipiler(2), diviser(3)?', choice => {
    const operateur=["additionner","soustraire", "multipiler", "diviser"]
    console.log(`vous avez choisit de ${operateur[choice]}!`);
    readline.close();
});



function multiplier (a,b){
    let result = a*b;
    return result
}

function additionner (a,b){
    let result = a+b;
    return result
}

function soustraire (a,b){
    let result = a-b;
    return result
}

function diviser (a,b){
    if (b==0){
        console.log("erreur on ne peut pas diviser par 0");
    } else {
        let result=a/b;
        return result
    }
}



