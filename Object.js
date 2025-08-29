const user = {
     name: "Sharian Hadhi",
     age: 19,
     bio: "loner and traveller",
     image: "https://hips.hearstapps.com/hmg-prod/images/hailey-bieber-raw-unedited-selfie-1608716832.jpg?crop=1xw:0.7121212121212122xh;center,top&resize=1024:*",
}

//Use JavaScript to update HTML with object values
document.getElementById("user-name").textContent =user.name;
document.getElementById("user-age").textContent ="Age:" + user.age;
document.getElementById("user-bio").textContent =user.bio;
document.getElementById("user-image").src = user.image;


















