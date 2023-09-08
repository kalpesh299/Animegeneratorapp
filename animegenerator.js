const btn=document.getElementById("btn");
console.log("btn");

const result=document.getElementById("resultscontainer");
const image=document.getElementById("image");

let n=-1;
let k=1
btn.addEventListener("click",()=>{
 
   if(n<9){
    n++;
   } else{
    n=0;
    k++;
   }

    const response=fetch(`https://api.unsplash.com/search/photos?page=${k}&query=anime&client_id=RLwobsJNMr8FNibUGNt6VWqgE7h8375yiUwiwDbfVl0`);

    response.then((res)=>res.json()).then((data)=>{

   
     image.src=data.results[n].urls.small;
    
    })
    

});

