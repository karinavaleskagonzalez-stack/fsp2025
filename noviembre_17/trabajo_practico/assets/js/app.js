fetch("menu.html")
    .then(res=> res.text())
    .then(html=>{
        const menu =document.getElementById("menu");
        menu.innerHTML=html;
        menu.style.display ="block";
        });