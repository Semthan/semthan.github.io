document.addEventListener("DOMContentLoaded", function () {
    
    let minaBtn = document.getElementById("mina");
    let skolBtn = document.getElementById("skol");
    let p = document.getElementById("projects");
    let p2 = document.getElementById("projects2");

    let btn = document.getElementById("nav-btn")
    let btn2 = document.getElementById("closebtn")
    let link = document.querySelector('.overlay-content')

    
    //function to show and hide my projects
    minaBtn.addEventListener("click",function (){
        p2.classList.add("hidden");
        p.classList.remove("hidden");
        
    });

    //function to show and hide school projects
    skolBtn.addEventListener("click",function (){
        p.classList.add("hidden");
        p2.classList.remove("hidden");
        
    });

    //function to show nav menu
    btn.addEventListener("click", function(){
        document.getElementById("myNav").style.width = "100%";
    })
      
    //function to hide nav menu
    btn2.addEventListener("click", function(){
        document.getElementById("myNav").style.width = "0%";
    })

    //function to hide nav menu after clicking the nav links
    link.addEventListener("click", function(){
        document.getElementById("myNav").style.width = "0%";
    })

  });