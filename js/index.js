const photo = document.getElementById("photo")
const react = document.getElementById("react")
const react_description = document.getElementById("react-description")

const redux = document.getElementById("redux")
const redux_description = document.getElementById("redux-description")

const javascript = document.getElementById("javascript")
const javascript_description = document.getElementById("javascript-description")

const java = document.getElementById("java")
const java_description = document.getElementById("java-description")

const css = document.getElementById("css")
const css_description = document.getElementById("css-description")

const spring = document.getElementById("spring")
const spring_description = document.getElementById("spring-description")

const python = document.getElementById("python")
const python_description = document.getElementById("python-description")

const flask = document.getElementById("flask")
const flask_description = document.getElementById("flask-description")

const linux = document.getElementById("linux")
const linux_description = document.getElementById("linux-description")

const sql = document.getElementById("sql")
const sql_description = document.getElementById("sql-description")

photo.style.opacity = 1;



function skillsAnim(skill_1, skill_2, desc1,desc2, max, avg,min) {
    skill_1.onmouseover = () => {

        skill_1.style.width = max
        skill_1.style.height = max
        skill_2.style.width = min
        skill_2.style.height = min
        desc1.style.height = "100%"
        desc1.style.opacity = 1

        desc2.style.height = 0
        desc2.style.opacity = 0
    }
    skill_1.onmouseout = () => {

        skill_1.style.width = avg
        skill_1.style.height = avg
        skill_2.style.width = avg
        skill_2.style.height = avg

        desc2.style.height = 0
        desc2.style.opacity = 0
    }
    skill_2.onmouseover = () => {

        skill_2.style.width = max
        skill_2.style.height = max
        skill_1.style.width = min
        skill_1.style.height = min
        desc2.style.height = "100%"
        desc2.style.opacity = 1

        desc1.style.height = 0
        desc1.style.opacity = 0
    }
    skill_2.onmouseout = () => {

        skill_1.style.width = avg
        skill_1.style.height = avg
        skill_2.style.width = avg
        skill_2.style.height = avg

        desc1.style.height = 0
        desc1.style.opacity = 0
    }
}

skillsAnim(react,redux, react_description, redux_description, "20vw", "15vw", '10vw')
skillsAnim(javascript,java, javascript_description, java_description, "20vw", "15vw", '10vw')
skillsAnim(css,spring,css_description,spring_description, "20vw", "15vw", '10vw')
skillsAnim(python,flask,python_description, flask_description, "20vw", "15vw", '10vw')
skillsAnim(linux,sql,linux_description, sql_description, "20vw", "15vw", '10vw')


if(window.matchMedia('(max-width: 768px)').matches){

    skillsAnim(react,redux, react_description, redux_description, "30vw", "25vw", '20vw')
    skillsAnim(javascript,java, javascript_description, java_description, "30vw", "25vw", '20vw')
    skillsAnim(css,spring,css_description,spring_description, "30vw", "25vw", '20vw')
    skillsAnim(python,flask,python_description, flask_description, "30vw", "25vw", '20vw')
    skillsAnim(linux,sql,linux_description, sql_description, "30vw", "25vw", '20vw')
}