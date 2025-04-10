// ✅ Select the required elements
let menuBtn = document.querySelector(".menu-btn");  // Button to open the menu
let nav = document.querySelector("#navMenu");  // The navigation menu
let closeBtn = document.querySelector(".close-btn");  // Button to close the menu

// ✅ Function to toggle the navigation menu
let toggleNav = () => {
    nav.classList.toggle("show");  // Toggle 'show' class to display/hide the menu
};

// ✅ Add event listeners for menu open/close actions
menuBtn.addEventListener("click", toggleNav);  // Open menu on button click
closeBtn.addEventListener("click", toggleNav); // Close menu on button click



try {
    let CopyRight = document.querySelector(".copyright");
    if (!CopyRight) {
        throw new Error("Not Found on the Page Element .copyright")
    }
    CopyRight.innerHTML = `&copy; ${new Date().getFullYear()} All Rights Reserved | Elite Hospital;`
    CopyRight.style.color = "Black"
} catch (error) {
    console.error("Wrong" + error.message)
}


document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-right , .hidden-buttom");

    function checkScroll() {
        hiddenElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});


let subscribe =  () => {
    let email = document.querySelector("#emailInput").value;
    let Message = document.querySelector("#msg");
    


    if(email.includes("@")) {
        Message.style.color = "green";
        Message.textContent = "Successfully subscribed"
    } else {
         Message.style.color = "red";
        Message.textContent = "Please enter a valid email"
    }
}