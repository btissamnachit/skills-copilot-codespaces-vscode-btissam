function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");

    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";

    member.style.animation = "fadeIn 1s";
    skills.style.animation = "fadeOut 1s";
    projects.style.animation = "fadeOut 1s";
    contact.style.animation = "fadeOut 1s";
}