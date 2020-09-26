var link = document.querySelector(".location-btn");

var popup = document.querySelector(".modal-send-us");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]")
var email = popup.querySelector("[name=email]")

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("email");
}   catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
    if (!name.value || email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (localStorageSupport) {
            localStorage.setItem("email", email.value);
        }
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
})