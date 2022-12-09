let container = document.getElementById('container')
fetch("./JS/users.json")                                        //fetch
    .then(response => response.json())
    .then(result => {                                           // array
        result.forEach(element => {                             // 4each
            let card = document.createElement("div");
            container.append(card)
            card.innerHTML = `<img src="${element.profileURL}" >`
            card.innerHTML += `<h3>${element.firstName} ${element.lastName}</h3>`
            card.innerHTML += `<a href="mailto:${element.email}">${element.email}</a>`
        });
    });

