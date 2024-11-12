// script.js
const affirmations = [
    "فعل يرى خير من ألف كلمة تقال",
    "You are loved beyond measure ❤️",
    "You make the world a brighter place 🌟",
    "Your kindness is your strength 🌷",
    "ou are more than enough 💖"
];

function newAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    document.getElementById("affirmation").innerText = affirmations[randomIndex];
}
