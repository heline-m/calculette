//créé la constante prompt en utilisant une librairie (qui doit être installée aparavent avec npm install prompt-sync)
// à l'aide de require() sigint est une option de configuration si l'utilisateur fait ctrl + C pour que ça ressorte 0 si sigint est false ou 130 si c'est true
const prompt = require('prompt-sync')({sigint: true});

// création d'une constante pour lire ce que va entrer l'utilisateur
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
//
//
// readline.question('Que souhaitez vous faire additionner(0), soustraire(1), multipiler(2), diviser(3)?', choice => {
//     const operateur=["additionner","soustraire", "multipiler", "diviser"]
//     console.log(`vous avez choisit de ${operateur[choice]}!`);
//     readline.close();
// });

let choice = prompt('Que souhaitez vous faire additionner(0), soustraire(1), multipiler(2), diviser(3)?');
const operateur=["additionner","soustraire", "multipiler", "diviser"]
console.log(`vous avez choisit de ${operateur[choice]}!`);

let a = prompt('Entrer votre premier nombre :');
let b = prompt('Entrer votre deuxième nombre :');


switch (parseInt(choice)){
    case 0:
        additionner(a,b);
        break;
    case 1:
        soustraire(a,b);
        break;
    case 2:
        multiplier(a,b);
        break;
    case 3:
        diviser(a,b);
        break;
    default:
        console.log("oupss je n'ai pas compris");
        break;
}

function multiplier (a,b){
    let result = a*b;
    console.log(result)
}

function additionner (a,b){
    let result = a+b;
    console.log(result)
}

function soustraire (a,b){
    let result = a-b;
    console.log(result)
}

function diviser (a,b){
    if (parseInt(b)===0){
        console.log("ERREUR ! On ne peut pas diviser par 0");
    } else {
        let result=a/b;
        console.log(result)
    }
}



