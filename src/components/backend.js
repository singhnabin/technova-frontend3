
const URL = "http://localhost:8080/v1/api/auth"
export const createUser = (user) => {
    return fetch(`${URL}/users`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    }).then(data => {
        return data.json();
    }).catch(err => {
        console.log(err)
    }
    )


}

export const logUsers = (user) => {
    return fetch(`${URL}/login`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    }).then(data => {
        return data.json();
    }).catch(err => {
        console.log(err)
    }
    )

}

export const isAutheticated = () => {
    if (typeof window === "undefined") return false;
    if (localStorage.getItem("user")) return JSON.parse(localStorage.getItem("user"));
    else return false
}
