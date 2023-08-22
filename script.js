
let str="";
let buttons=document.querySelectorAll('.btn');

Array.from(buttons).forEach((b)=>{

  b.addEventListener('click',(e)=>{
   
    if(e.target.innerHTML=="="){
       try{
      let gap=" ";
      str+=gap+e.target.innerHTML+gap+eval(str);
         
     }
    catch(error){
     let str1="(Invalid Exp try again)...";
      str=str1;
    
    }
      document.querySelector('.op').value=str;
      str="";
  
     
    }
    else if(e.target.innerHTML=="c"){
      str="";
      document.querySelector('.op').value=str;
    }
    else if(e.target.innerHTML=="x"){
      
       let str1=str.slice(0, str.length-1);
      
       document.querySelector('.op').value=str1;
      str=str1;
    
    }
    else{
    console.log(e.target.innerHTML);
    str+=e.target.innerHTML;
    document.querySelector('.op').value=str;
    }
   
      
    
  });
});