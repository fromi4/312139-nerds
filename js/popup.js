    var link = document.querySelector(".map-button");
    var popup = document.querySelector(".modal-letter");
    var form = popup.querySelector("form");
    var close = document.querySelector(".modal-close");
    var letterName = popup.querySelector("[name=name]");
    var letterEmail = popup.querySelector("[name=email]");
    var letterText = popup.querySelector("[name=freetext]");
    var storageNameSupport = true;
    var storageName = "";
    var storageEmailSupport = true;
    var storageEmail = "";

    try {
        storageName = localStorage.getItem("letterName");
        } catch (err) {
        storageNameSupport = false;
        }

    try {
        storageEmail = localStorage.getItem("letterEmail");
        } catch (err) {
        storageEmailSupport = false;
        }

    link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");

        if (storageName && storageEmail) {
            letterName.value = storageName;
            letterEmail.value = storageEmail;
            letterText.focus();
        } else {
            letterName.focus();
        }
    });

    close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function(evt) {
       if (evt.keyCode === 27) {
            if (popup.classList.contains("modal-show")) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            }
        }
    });

    form.addEventListener("submit", function(evt) {
        if (!letterName.value || !letterEmail.value || !letterText.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        }	else {
            if (storageNameSupport) {
                localStorage.setItem("letterName", letterName.value);
                }
            if (storageEmailSupport) {
                localStorage.setItem("letterEmail", letterEmail.value);
                }
            }
    });
