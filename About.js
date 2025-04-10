const textElement = document.querySelector(".about-text");
const text = "Elite Hospital is a state-of-the-art medical facility. We provide world-class healthcare services. Your health is our priority!";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(typeEffect, 20);
    }
}

typeEffect();

let conters = document.querySelectorAll(".counter");

conters.forEach(counter => {
    let target =+ counter.getAttribute("data-target")
    let count = 0;
    let upDateCounter = () => {
        count = count + Math.ceil(target / 200);
        if (count < target) {
            counter.innerText = count
            requestAnimationFrame(upDateCounter);
        } else {
            counter.innerText = target;

        }
    }

    upDateCounter()
})


