ScrollReveal({ reset: true });
ScrollReveal({
    distance:"80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content,heading",{origin:"top"})
ScrollReveal().reveal(".img,.project-container,contact,form",{origin:"button"});
ScrollReveal().reveal(".contact h2,.about-img",{origin :"left"});
ScrollReveal().reveal("home-content p,.about-content",{origin :"right"});

function sendMail(){
    let parms ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_oui0mzi","template_o2ypq4p",parms).then(alert("Email sent!!"))
};


    