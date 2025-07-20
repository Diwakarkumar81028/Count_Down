
const d2=new Date("2025/08/27");

function count_down(){
    const d1=new Date();
    const diff=d2-d1;
    //
    const day=Math.floor(diff/(1000*60*60*24));
    const hr=Math.floor(diff/(1000*60*60))%24;
    const min=Math.floor(diff/(1000*60))%60;
    const sec=Math.floor(diff/1000)%60;
   //
   const parent=document.getElementById("box");
   parent.innerHTML="";
   const ele1=document.createElement("h3");
   ele1.innerHTML=`Day: Hrs: Mins: Secs`;
   const ele2=document.createElement('h3');
   ele2.innerHTML=`${day} :  ${hr} :  ${min} :  ${sec}`;
   ele2.style.fontSize="2.2rem";
   ele1.style.fontSize="1.3rem";
   parent.appendChild(ele1);
   parent.appendChild(ele2);
}

setInterval(count_down,1000);