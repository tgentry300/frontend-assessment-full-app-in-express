const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
const userName = document.getElementById("username")
const userEmail = document.getElementById("email")
const favPokemon = document.getElementById("pokemon")
const friendID = document.getElementById("friend")
const password = document.getElementById("password")

let userInfo = {}

//Button Click Function
function placeFormInfoIntoObject() {
    event.preventDefault()
    userInfo.userName = userName.value
    userInfo.password = password.value
    userInfo.userEmail = userEmail.value
    userInfo.favoritePokemon = favPokemon.value
    userInfo.pokemonFriendID = friendID.value
    stringifiedUserInfo = JSON.stringify(userInfo)

    fetch("./api/user/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringifiedUserInfo,
        })
        .then(async response => {
            if(response.status !== 201){
                throw await response.json()
            }

            return response.json()
        })
        .then(data => console.log(data))
        .catch(error => {
            console.log("ERRORRRR", error)
        })

    }

    //Adding click to button
    userCreateSubmitButton.addEventListener("click", placeFormInfoIntoObject)