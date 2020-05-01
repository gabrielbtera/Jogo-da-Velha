let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#mensagem");
let messageText = document.querySelector("#txt");
let placarX = document.getElementById("valor-x");
let placarO = document.getElementById("valor-o");
let secondPlayer;
let btnVolta = document.querySelector("#container-voltar");
let containerBtn = document.querySelector("#buttons-container");
// contador de jogadas
let player1 = 0;
let player2 = 0;
let playerX = false;
let playerO = false;

containerBtn.classList.remove("hide");


// controla as ações do menu principal bem como seleciona o tipo de jogo 2 players ou computador
const mainPlayer = () => {
    for(let i = 0; i < buttons.length; i ++){
        buttons[i].addEventListener("click", () => {
            secondPlayer = buttons[i].getAttribute("id");
            setTimeout(() =>{
                containerBtn.classList.add("hide");
            }, 50);

            setTimeout(() => {
                let container = document.querySelector("#container");
                let btnVolta = document.querySelector("#container-voltar");
                btnVolta.classList.remove("hide");
                container.classList.remove("hide");
            }, 1000);

        });
    }
}

// volta para o menu principal
const voltaMenu = () => {
    btnVolta.addEventListener("click", () => {

        setTimeout(() => {
            let container = document.querySelector("#container");
            let boxesRemove = document.querySelectorAll(".box div");

            for(let i = 0; i < boxesRemove.length; i++){
                boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
            }
            
            btnVolta.classList.add("hide");
            container.classList.add("hide");
            placarO.innerHTML = 0;
            placarX.innerHTML = 0;
            containerBtn.classList.remove("hide");

        }, 300);

    })
}


// função de controle principal =========================
function main() {
    mainPlayer();
    voltaMenu();
    for(let box = 0 ; box < boxes.length;  box++){
        let elemento;
        
        boxes[box].addEventListener("click", () => {
            if (boxes[box].childNodes.length == 0){
                if (player1 == player2){
                    elemento = x;
                    player1++;
                    let cloneEl = elemento.cloneNode(true);
                    boxes[box].appendChild(cloneEl);
                    
                    if(secondPlayer == "1-jogador"){
                        player2 ++;
                        fuctionIA();
                    }

                }else{
                    elemento = o;
                    player2 ++;
                    let cloneEl = elemento.cloneNode(true);
                    boxes[box].appendChild(cloneEl);
                    
                }
                getByWinner2Players();
                
            
            }
        });
    }
}


// função que faz a maquina jogar aleatoriamente
const fuctionIA = () => {
    setTimeout(()=> {

        while (true){

            let generateNumber = Math.floor(Math.random() * 9);
            let campo = boxes[generateNumber].childNodes.length == 0;
            let cont = 0;

            for (let i = 0; i < boxes.length; i++){
                if(boxes[i].childNodes.length == 0){
                    cont ++;
                }
            }
            if (campo){
                
                let cloneEl = o.cloneNode(true);
                boxes[generateNumber].appendChild(cloneEl);
                if(!playerX){
                    getByWinner2Players();
                }
                
                break;
            
            }if(cont == 0){
                break;
            }
        }
        if(playerX){
            playerX = false;
        }

    }, 300);
} 

// configura a jogada em cada campo do jogo chamando reloadScore quando satisfeita uma de suas condições
const getByWinner2Players = () => {
    let lista = [];
    for (let i = 0; i < boxes.length ; i++){
        lista.push(boxes[i].childNodes);
    }
    // horizontal
    let temp = 0;
    for(let hori = 0; hori < 3; hori++){

        if (lista[temp].length > 0 && lista[temp + 1].length > 0 && lista[temp + 2].length > 0){
            
            let b1 = lista[temp][0].className;
            let b2 = lista[temp + 1][0].className;
            let b3 = lista[temp + 2][0].className;
            
            if(b1 == "x" && b2 == "x" && b3 == "x"){
                reloadScore("x");
                break;
            }else if(b1 == "o" && b2 == "o" && b3 == "o"){
            
                reloadScore("o");
                break;
            }
        
        }if ((lista[hori].length > 0 && lista[hori + 3].length > 0 && lista[hori + 6].length > 0)){
            
            let b1 = lista[hori][0].className;
            let b2 = lista[hori + 3][0].className;
            let b3 = lista[hori + 6][0].className;
            
            if(b1 == "x" && b2 == "x" && b3 == "x"){
                reloadScore("x");
                break;
            }else if(b1 == "o" && b2 == "o" && b3 == "o"){
                reloadScore("o");
                break;
            }

        }if (lista[0].length > 0 && lista[4].length > 0 && lista[8].length > 0  || lista[2].length > 0 && lista[4].length > 0 && lista[6].length > 0){
            
            let n1, n2, n3;

            if (lista[2].length > 0 && lista[4].length > 0 && lista[6].length > 0){
                
                n1 = 2; n2 = 4; n3 = 6;
                
                let b1 = lista[n1][0].className;
                let b2 = lista[n2][0].className;
                let b3 = lista[n3][0].className;

                if(b1 == "x" && b2 == "x" && b3 == "x"){
                    reloadScore("x");
                    break;
                }else if(b1 == "o" && b2 == "o" && b3 == "o"){
                    reloadScore("o");
                    break;
                }

            }if (lista[0].length > 0 && lista[4].length > 0 && lista[8].length > 0){
                
                n1 = 0; n2 = 4; n3 = 8;
                
                let b1 = lista[n1][0].className;
                let b2 = lista[n2][0].className;
                let b3 = lista[n3][0].className;
                
                if(b1 == "x" && b2 == "x" && b3 == "x"){
                    reloadScore("x");
                    break;
                }else if(b1 == "o" && b2 == "o" && b3 == "o"){
                    reloadScore("o");
                    break;
            }

            }
        }
        
        let counter = 0;
        for (let i = 0; i < boxes.length; i++){
            if(boxes[i].childNodes[0] != undefined){
                boxes[i].childNodes[0];
                counter++;
            }
        }if (counter == 9){
            reloadScore("@");
            break;
        }
        
        

        temp += 3
    }
}


// Carrega o placar exibe quem venceu e limpa os campos para uma nova partida
const reloadScore = (type) => {
    
    let msg = "";

    if (type == "x"){
        placarX.innerHTML = parseInt(placarX.childNodes[0].nodeValue) + 1;
        playerX = true;
        msg = "O jogador X venceu";
    }else if(type == "o"){
        placarO.innerHTML = parseInt(placarO.childNodes[0].nodeValue) + 1;
        msg = "o jogador O venceu";
        
    }else{
        msg = "Deu velha";
    }
    
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");
    
    setTimeout(() => {
        messageContainer.classList.add("hide");
    }, 2000);

    player1 = 0;
    player2 = 0;

    setTimeout(() => {
        
        let boxesRemove = document.querySelectorAll(".box div");
        
        for(let i = 0; i < boxesRemove.length; i++){
            boxesRemove[i].parentNode.removeChild(boxesRemove[i]);

    }}, 500);
}




main();
