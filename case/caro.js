
    let clickcount=0;

    function play(playtic){
        if(clickcount%2==0){
     playtic.innerText="O"
     playtic.classList.add("obtn")
     playtic.classList.add("background1")
        }
        else{
            playtic.innerText="X"
            playtic.classList.add("xbtn")
            playtic.classList.add("background2")
        }
     playtic.setAttribute("disabled","disabled")//vo_hieu_hoa_nut_do class.setAttribute(name,value),
        clickcount++
        
    if(clickcount==81){
        alert("Game is finish")
    }
    }
    function resetGame(){
        
        if(!confirm("Do you want to reset game")){
         return;
        }
        else{
            let btns=document.getElementsByClassName("playtic");
            for(const element of btns){
                element.innerText=" ";
                element.classList.remove("obtn")
                element.classList.remove("xbtn")
                element.removeAttribute("disabled")
                element.classList.remove("background1")
                element.classList.remove("background2")
            }
            clickcount=0;
        }
      

    }
    let btn2=document.getElementsByClassName("playtic")
    for(const element in btn2){
        element.classList.add(a[i][j])
        if(i<a.length-1){
            i++
        }
        else{
            j++
        }
    }
function check(playtic){
let a=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
let i=1;
let j=1;
let win=document.getElementsByClassName(a[i][j])
}