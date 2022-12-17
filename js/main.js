window.addEventListener('load', () => {

    let menuIcon = document.getElementById("menuIcon")
    let menusContainer = document.getElementById("menusContainer")
    console.log(menusContainer)

    menuIcon.addEventListener("click", () => {
        console.log("menuIcon clicked")
        if(menusContainer.getAttribute('class') === 'menusContainer'){
            menusContainer.setAttribute("class", "menusContainerOpen")
        }else{
            menusContainer.setAttribute("class", "menusContainer")
        }
    })

    //*Form
    let form_suscribe = document.getElementById("form_suscribe")

    form_suscribe.addEventListener('submit', (e) => {
        e.preventDefault()
        let email_regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        let email_input = document.getElementById("email").value
        let data = {email: email_input}
        let emailCheck = email_regExp.test(email_input)
        if(emailCheck) {
            console.log(data)
            fetch('https://reqres.in/api/users',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((data) => data.json())
            .then((response) => alert(`El email ${response.email} se ha registrado con exito`))
            .catch((e) => {
                console.error(e)
            })
        }else{
            console.log("invalid email")
            return false
        }
    })
})