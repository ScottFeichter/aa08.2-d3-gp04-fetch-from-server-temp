export function getAllDogs() {
    // Your code here
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    // Your code here
    return fetch("/dogs/2");
}

export function postNewDog() {
    // Your code here
    return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: "little bear",
            age: 14
        })
    })
}

export function postNewDogV2(name, age) {
     // Your code here
     return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: "big bear",
            age: 7
        })
    })
}

export function deleteDog(id) {
      // Your code here

      return fetch(`/dogs/${id}`, {
        method: "POST",
        headers: {
            AUTH:"ckyut5wau0000jyv5bsrud90y"
        }
      })
}
