const about = document.getElementById("about-link")
const skills = document.getElementById("skills-link")
const projects = document.getElementById("projects-link")
const contacts = document.getElementById("contacts-link")

function linkAnim(link) {
    const fontsize = link.style.fontSize
    link.onmouseover = () => {
        link.style.fontSize = '24px'
    }
    link.onmouseout = () => {
        link.style.fontSize = fontsize
    }

}

linkAnim(about)
linkAnim(skills)
linkAnim(projects)
linkAnim(contacts)