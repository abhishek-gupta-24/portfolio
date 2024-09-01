let btns=document.querySelectorAll(".btn");
let next_page=["index.html","education.html","skills.html","project.html","contact.html"];

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function() {
        let link=next_page[i];
        window.location.href = link;
    });
}



    
