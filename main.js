let x=document.querySelector(".fa-solid");
let yes=document.querySelector(".btn-yes");

yes.addEventListener("click",func);
x.addEventListener("click",func);

function func() {
    document.querySelector(".content_layout").classList.toggle("none");
}