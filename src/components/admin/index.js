
const USERURL = "http://localhost:8080/v1/api/users"

export const getAllUser = (token) => {

    return fetch(`${USERURL}`, {
        method: "GET",
        headers: {

            Authorization: `Bearer ${token}`,
            // Accept: "application/json",

            // "Content-Type": "application/json",
        }


    }).then(data => {
        return data.json();
    }).catch(err => {
        console.log(err)
    }
    )

}

export const deleteUser = (id, token) => {

    return fetch(`${USERURL}/${id}`, {
        method: "DELETE",
        headers: {

            Authorization: `Bearer ${token}`,
            // Accept: "application/json",

            // "Content-Type": "application/json",
        }


    }).then(data => {
        return data.json();
    }).catch(err => {
        console.log(err)
    }
    )

}