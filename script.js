/* ==========================
   ENJOXSTUDIO
   SCRIPT.JS
========================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
});

/* Menü linkine basınca menüyü kapat */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});

/* Navbar Scroll Efekti */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(9,11,20,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.background = "rgba(10,10,18,.55)";
        header.style.boxShadow = "none";

    }

});

/* Scroll Reveal */

const revealElements = document.querySelectorAll(".card,.social-card,.section-title,.hero-content");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".8s ease";

    observer.observe(el);

});

/* Aktif Menü */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* Smooth Hover */

document.querySelectorAll(".btn,.card,.social-card").forEach(item=>{

    item.addEventListener("mousemove",(e)=>{

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.08),
        rgba(255,255,255,.04) 45%)`;

    });

    item.addEventListener("mouseleave",()=>{

        item.style.background="";

    });

});

console.log("🚀 EnjoxStudio Website Loaded Successfully");