let btns=document.querySelectorAll(".btn");
let next_page=["index.html","education.html","skills.html","project.html","contact.html"];

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function() {
        let link=next_page[i];
        window.location.href = link;
    });
}

let submit=document.querySelector("#submit");
let textarea = document.querySelector("#submit textarea");
let input= document.querySelector("#submit input");

submit.addEventListener("click",function (){
    alert("your request has been submitted!! I will contact you soon.");
    textarea.value="";
    input.value="";
});



    
