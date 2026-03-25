function submitForm() {

    const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nume = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mesaj = document.getElementById("message").value.trim();

    const feedback = document.getElementById("form-feedback");

    
    if (nume.length < 2) {
        feedback.textContent = "Nume prea scurt!";
        feedback.style.color = "red";
        return;
    }

    
    if (!email.includes("@")) {
        feedback.textContent = "Email invalid!";
        feedback.style.color = "red";
        return;
    }

    
    if (mesaj.length < 10) {
        feedback.textContent = "Mesajul trebuie să conțină cel puțin 10 caractere!";
        feedback.style.color = "red";
        return;
    }

    
    feedback.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
    feedback.style.color = "green";

});
}
window.onload = function () {

    const now = new Date();
    const hour = now.getHours();

    const headerParagraph = document.querySelector("header p");

    if (hour >= 6 && hour < 12) {
        headerParagraph.textContent = "Bună dimineața! Bine ai venit pe pagina mea.";
    } 
    else if (hour >= 12 && hour < 18) {
        headerParagraph.textContent = "Bună ziua! Bine ai venit pe pagina mea.";
    } 
    else {
        headerParagraph.textContent = "Bună seara! Bine ai venit pe pagina mea.";
    }

};
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkToggle.textContent = "🌙 Dark Mode";
    } else {
        darkToggle.textContent = " ☀️ Light Mode";
    }

});
const sections = document.querySelectorAll("main h2");

sections.forEach(function(h2) {

    h2.addEventListener("click", function() {

        const content = this.nextElementSibling; 
        const indicator = this.querySelector(".indicator");

        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
            indicator.textContent = "▼";
        } else {
            content.classList.add("hidden");
            indicator.textContent = "▶"; 
        }

    });

});
const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});


backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
