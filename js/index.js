const photo = document.getElementById("photo")
const react = document.getElementById("react")
const redux = document.getElementById("redux")
const javascript = document.getElementById("javascript")
const java = document.getElementById("java")
const css = document.getElementById("css")
const spring = document.getElementById("spring")
const python = document.getElementById("python")
const flask = document.getElementById("flask")
const linux = document.getElementById("linux")
const sql = document.getElementById("sql")
photo.style.opacity = 1;



function skillsAnim(skill_1, skill_2) {
    skill_1.onmouseover = () => {
        skill_1.style.width = '256px'
        skill_1.style.height = '256px'
        skill_2.style.width = '168px'
        skill_2.style.height = '168px'
    }
    skill_1.onmouseout = () => {
        skill_1.style.width = '196px'
        skill_1.style.height = '196px'
        skill_2.style.width = '196px'
        skill_2.style.height = '196px'
    }
    skill_2.onmouseover = () => {
        skill_2.style.width = '256px'
        skill_2.style.height = '256px'
        skill_1.style.width = '168px'
        skill_1.style.height = '168px'
    }
    skill_2.onmouseout = () => {
        skill_1.style.width = '196px'
        skill_1.style.height = '196px'
        skill_2.style.width = '196px'
        skill_2.style.height = '196px'
    }
}

skillsAnim(react,redux)
skillsAnim(javascript,java)
skillsAnim(css,spring)
skillsAnim(python,flask)
skillsAnim(linux,sql)