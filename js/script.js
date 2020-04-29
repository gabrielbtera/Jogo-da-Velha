let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container");
let messageContainer = document.querySelector("#mensagem");
let messageText = document.querySelector("#mensagem #texto-msg");
let secondPlayer;


// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionandi o evento de click ao boxes
function main() {
    for(let box = 0 ; box < boxes.length;  box++){
        let elemento;
        
        boxes[box].addEventListener("click", () => {
            if (boxes[box].childNodes.length == 0){
                if (player1 == player2){
                    elemento = x;
                    player1++;
                }else{
                    elemento = o;
                    player2 ++;
                }
        
                let cloneEl = elemento.cloneNode(true);
                boxes[box].appendChild(cloneEl);
                getByWinner();
            }
            
            
        });
    }
}


const getByWinner = () => {
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
                console.log("x venceu horizontal");

            }else if(b1 == "o" && b2 == "o" && b3 == "o"){
                console.log("o venceu horizontal");
                
            }
        }if ((lista[hori].length > 0 && lista[hori + 3].length > 0 && lista[hori + 6].length > 0)){
            let b1 = lista[hori][0].className;
            let b2 = lista[hori + 3][0].className;
            let b3 = lista[hori + 6][0].className;
            
            if(b1 == "x" && b2 == "x" && b3 == "x"){
                console.log("x venceu vertical");
            }else if(b1 == "o" && b2 == "o" && b3 == "o"){
                console.log("o venceu vertical");
        }
        }if (lista[0].length > 0 && lista[4].length > 0 && lista[8].length > 0  || lista[2].length > 0 && lista[4].length > 0 && lista[6].length > 0){
            let n1, n2, n3;
            if (lista[2].length > 0 && lista[4].length > 0 && lista[6].length > 0){
                n1 = 2; n2 = 4; n3 = 6;
            }else{
                n1 = 0; n2 = 4; n3 = 8;
            }

            let b1 = lista[n1][0].className;
            let b2 = lista[n2][0].className;
            let b3 = lista[n3][0].className;
            if(b1 == "x" && b2 == "x" && b3 == "x"){
                console.log("x venceu diagonal");
            }else if(b1 == "o" && b2 == "o" && b3 == "o"){
                console.log("o venceu diagonal");
        }
        }

        let counter = 0;
        for (let i = 0; i < boxes.length; i++){
            if(boxes[i].childNodes[0] != undefined){
                boxes[i].childNodes[0];
                counter++;
            }
        }
        
        if (counter == 9){
            console.log("deu velha");
        }
        

        temp += 3
    }
    
}


main();

/* */