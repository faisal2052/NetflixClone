let paragraphs = document.getElementsByClassName("para");
    let button = document.querySelectorAll(".on");
    let button1 = document.querySelectorAll(".x");
    // Add click event listener to the button
    for(let i=0;i<button.length;i++){
    button[i].addEventListener("click", (event) => {
        event.preventDefault();
        
        closeAllParagraphs()
            let css=window.getComputedStyle(paragraphs[i])
        console.log( css.display );
        if(css.display==="none"){
         // Corrected method to prevent the default behavior
        console.log("hii");
        
        paragraphs[i].style.display = "block";
       
        button1[i].style.display = "block";
       
       
        button[i].style.visibility="hidden"
        //paragraphs[1].style.display = "block";
       
        }
       
        
        
        
});
    }
    for(let i=0;i<button1.length;i++){
button1[i].addEventListener("click", (event) => {
    event.preventDefault();
    
    
        let css=window.getComputedStyle(paragraphs[i])
    console.log( css.display );
    if(css.display==="block"){
     // Corrected method to prevent the default behavior
    console.log("hii");
    
    paragraphs[i].style.display = "none";
    //paragraphs[1].style.display = "none";
    button1[i].style.display = "none";
   
    button[i].style.visibility="visible"
   
    }
   
    
    
    
});

function closeAllParagraphs() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
        button1[i].style.display = "none";
        button[i].style.visibility = "visible";
    }
    }
}
    


    

