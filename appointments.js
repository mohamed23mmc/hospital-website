document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");
    const inputs = form.querySelectorAll("input");
    const messageBox = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        let formValid = true; 

        inputs.forEach(input => {
            let errorMsg = input.nextElementSibling;

            if (input.value.trim() === "") {
                formValid = false;
                input.style.border = "2px solid red";
                errorMsg.style.display = "block";
            } else {
                input.style.border = "2px solid green";
                errorMsg.style.display = "none";
            }
        });

        if (formValid) {
            showSuccessMessage();
        }
    });

    function showSuccessMessage() {
        messageBox.style.display = "block";

        setTimeout(() => {
            inputs.forEach(input => {
                input.value = "";
                input.style.border = "1px solid #ccc";
            });
            messageBox.style.display = "none";
        }, 3000);
    }
});
