let container = document.querySelector(".grid-container");
let hitCounter = document.querySelector("#hitCounter");
let missCounter = document.querySelector("#missCounter");
let pCounter = document.querySelector("#pCounter");
let hitNum = 0;
let missNum = 0;

main()

function EventOnClick(e){
    let qwe = e.target;
    if (qwe.classList.contains("rty")) {
        qwe.classList.toggle("rty");
        NextBlack();
        hitNum++;
        hitCounter.innerHTML = hitNum;
    }
    else {
        missNum++;
        missCounter.innerHTML = missNum;
    }
    pCounter.innerHTML = Math.floor(hitNum / (hitNum + missNum) * 100) + "%";
}

function main(){
    for(let i = 0; i < 100; i++){
        let asd = document.createElement("div");
        asd.classList.add("item");
        asd.id = "a"+i;
        container.appendChild(asd);
    }

    document.querySelectorAll(".item").forEach(element => {
        element.addEventListener("click", EventOnClick);
    });

    NextBlack();
}

function NextBlack(){
    let next = Math.floor(Math.random()*100);
    let nextElement = document.querySelector("#a" + next);
    nextElement.classList.toggle("rty");
}