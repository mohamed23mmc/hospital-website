const tips = [
    {
        title: "Stay Hydrated",
        description: "Drink at least 8 cups of water a day to keep your body hydrated and healthy."
    },
    {
        title: "Regular Exercise",
        description: "Engage in physical activity for at least 30 minutes a day to maintain your fitness and prevent diseases."
    },
    {
        title: "Healthy Eating",
        description: "Include fruits, vegetables, and whole grains in your diet to stay healthy and strong."
    },
    {
        title: "Get Enough Sleep",
        description: "Make sure to get at least 7-8 hours of sleep each night to promote overall well-being."
    }
];

let getRandomTip = () => {
    let randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

let updateTip = () => {
    let randomTip = getRandomTip();
    document.getElementById("tipTitle").textContent = randomTip.title;
    document.getElementById("tipDescription").textContent = randomTip.description;
}

document.getElementById("nextBtn").addEventListener("click", updateTip);
document.getElementById("prevBtn").addEventListener("click", updateTip);

updateTip();
