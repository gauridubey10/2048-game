// document.addEventListener('DOMContentLoader',()=>{
const cell=document.querySelector('.box')
const back=document.querySelector('.bg')

const width=4
let square=[]

function createboard(){
    for(let i=0;i<width*width;i++){
        block=document.createElement('div')
        block.innerHTML=""
        cell.appendChild(block);
        square.push(block)
    }
    generate();
}

createboard()
//console.log(square);

function generate(){
   let  num=Math.floor(Math.random()*square.length);
   if(square[num].innerHTML==0){
       square[num].innerHTML=2;
   }
   else{
      generate();
   }
}


//move right
function move_right(){
    for(let i=0;i<width*width;i++){
        if(i%width==0){
            let tot1=square[i].innerHTML;
            let tot2=square[i+1].innerHTML;
            let tot3=square[i+2].innerHTML;
            let tot4=square[i+3].innerHTML;

            let row=[parseInt(tot1),parseInt(tot2),parseInt(tot3),parseInt(tot4)];
           // console.log(row);
            one=row.filter(num=>num);
            let missing=width-one.length;
            let zero=Array(missing).fill(0);
           // console.log(one,zero);
           let newrow=zero.concat(one);
           
           for(let j=0;j<width;j++){
               square[i+j].innerHTML=newrow[j];
               if(square[i+j].innerHTML==0)square[i+j].innerHTML="";
           }

          // console.log(square);
        }
    }
}



//move left
function move_left(){
    for(let i=0;i<width*width;i+=width){
        if(i%width==0){
            let tot1=square[i].innerHTML;
            let tot2=square[i+1].innerHTML;
            let tot3=square[i+2].innerHTML;
            let tot4=square[i+3].innerHTML;

            let row=[parseInt(tot1),parseInt(tot2),parseInt(tot3),parseInt(tot4)];
           // console.log(row);
            one=row.filter(num=>num);
            let missing=width-one.length;
            let zero=Array(missing).fill(0);
           // console.log(one,zero);
           let newrow=one.concat(zero);
           
           for(let j=0;j<width;j++){
               square[i+j].innerHTML=newrow[j];
               if(square[i+j].innerHTML==0)square[i+j].innerHTML="";
           }

           //console.log(square);
        }
    }
}

function combinerow(){

    for(let i=0;i<width*width-1;i++){
        if( (i)%width!=width-1 && square[i].innerHTML==square[i+1].innerHTML){
            let cobinetot=parseInt(square[i].innerHTML)+parseInt(square[i+1].innerHTML);
            square[i].innerHTML=cobinetot;
            square[i+1].innerHTML=0;
        }
    }
}





function move_up(){
    for(let i=0;i<width;i++){
            let tot1=square[i].innerHTML;
            let tot2=square[i+1*width].innerHTML;
            let tot3=square[i+2*width].innerHTML;
            let tot4=square[i+3*width].innerHTML;
    

    let col=[parseInt(tot1),parseInt(tot2),parseInt(tot3),parseInt(tot4)]; 

    let one=col.filter(num=>num);
    let missing=width-one.length;

    let zero=Array(missing).fill(0);
   // console.log(one,zero);
   let newcol=one.concat(zero);
   
   for(let j=0;j<width;j++){
       square[i+j*width].innerHTML=newcol[j];
       if(square[i+j*width].innerHTML==0)square[i+j*width].innerHTML="";
     }
  }

}

//move_down

function move_down(){
    for(let i=0;i<width;i++){
            let tot1=square[i].innerHTML;
            let tot2=square[i+1*width].innerHTML;
            let tot3=square[i+2*width].innerHTML;
            let tot4=square[i+3*width].innerHTML;
    

    let col=[parseInt(tot1),parseInt(tot2),parseInt(tot3),parseInt(tot4)]; 

    let one=col.filter(num=>num);
    let missing=width-one.length;

    let zero=Array(missing).fill(0);
   // console.log(one,zero);
   let newcol=zero.concat(one);
   
   for(let j=0;j<width;j++){
       square[i+j*width].innerHTML=newcol[j];
       if(square[i+j*width].innerHTML==0)square[i+j*width].innerHTML="";
     }
  }

}

function combinecol(){

    for(let i=0;i<12;i++){
        if(  square[i].innerHTML==square[i+width].innerHTML){
            let cobinetot=parseInt(square[i].innerHTML)+parseInt(square[i+width].innerHTML);
            square[i].innerHTML=cobinetot;
            square[i+width].innerHTML=0;
        }
    }
}


function control(e){
   // console.log(e);
    if(e.keyCode===39)keyright();
    else if(e.keyCode===37)keyleft();
    else if(e.keyCode===38)keyup();
    else if(e.keyCode===40)keydown();
    result();
}

document.addEventListener('keyup',control);

  function keyright(){
    move_right();
    combinerow();
    move_right();
    generate();
}

function keyleft(){
    move_left();
    combinerow();
    move_left();
    generate();
}

function keydown(){
    move_down();
    combinecol();
    move_down();
    generate();
}

function keyup(){
    move_up();
    combinecol();
    move_up();
    generate();
}

let flag=-1;
function result(){
    for(let i=0;i<16;i++){
        if(square[i].innerHTML==2048){
            flag=1;
            square[i].s
            console.log("hello");
            break;
        }
        else if(square[i].innerHTML==="")flag=0;
    }

    if(flag==-1){
        //lose
        const win=document.createElement('div')
        win.innerHTML=" oops you lose"

        back.appendChild(win);
        console.log(win.innerHTML);
        back.classList.add('op');


    }
    if(flag==1){
        //win
        const win=document.createElement('div')
        win.innerHTML=" !! hurray you won  !!"

        back.appendChild(win);
        console.log(win.innerHTML);
        back.classList.add('op');

    }
    
}


// })