const image = document.getElementById("image");
const trys = document.getElementById("trys");
const cantry = document.getElementById("cantry");
const word = document.querySelector(".word");
const tryed = document.getElementById("tryed");
const newgame = document.getElementById("newgame");
const scr = document.getElementById("score");
const Data = [{wrd:"rich",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Pablo_Escobar_Mug.jpg"},{wrd:"strong",imageUrl:"https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F1125%2Fr780659_1288x1352cc.jpg&w=570&h=598&format=jpg"},{wrd:"nice",imageUrl:"https://modernpaintbynumbers.com/wp-content/uploads/2020/10/angelina-jolie-portrait.jpg"},{wrd:"kind",imageUrl:"https://cdn.shopify.com/s/files/1/0747/3829/products/mC0505_2899e0ff-761b-4924-8f1c-d1a73102be78_1024x1024.jpg?v=1571444638"},{wrd:"model",imageUrl:"https://i.dailymail.co.uk/1s/2020/01/15/06/23418170-7889105-image-a-128_1579070041957.jpg"},{wrd:"king",imageUrl:"https://i.pinimg.com/736x/e5/c1/0c/e5c10c9e7994d52c4d963339196908b6.jpg"}];
const getRandom = () => {
    const index = Math.floor(Math.random()*Data.length);
    return Data[index]
}
const FillChar = (word) => {
    const len = word.length;
    let generated = "";
    for(let i=0;i<len;i++){
        generated+="_ "
    }
    return generated
}
const Next = () => {
    level = getRandom();
    wrd = level.wrd;
    const gener = FillChar(wrd);
    image.src = level.imageUrl;
    word.innerText = gener
    tryed.innerHTML = "_";
    trys.innerText = 0;
    cantry.innerText = 13;
    tr=0

}
let score = 0;
let tr = 0;
Next();
newgame.addEventListener("click",(e)=>{
    Next()
})
    // console.log(gener)
    window.addEventListener("keyup",(e)=>{
        tr++
        if(tr>=13){
            tr = 0
            trys.innerText = tr;
            cantry.innerText = 13-tr;
        }
        trys.innerText = tr
        cantry.innerText = 13-tr
        let data = []
        const char = e.key;
        if(!tryed.innerText.includes(char)){
            tryed.innerHTML+=`${char},`;
        }
        console.log(wrd)
        let dt = word.innerText.split(" ");
        if(wrd.includes(char)){
            let index = wrd.indexOf(char);
            dt[index] = char
            word.innerText = dt.join(" ");
            // console.log(word.innerText.split(" ").join(""),wrd)
            if(word.innerText.split(" ").join("") === wrd){
                score++
                scr.innerText = score
                Next();
            }
        }
        
    })

// let dt = word.innerText.split(" ");
// dt[2] = "a";
// word.innerText = dt.join(" ")
// console.log(word.innerText.split(" "))
