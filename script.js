function displayProphecy() {
    const prophecies = [
        "When the three blood moons align, the earth shall tremble and fall.",
        "The final war will be fought not with swords, but with silence and whispers.",
        "A storm of fire shall consume the sky, leaving only ashes behind.",
        "When the river runs black, the dead shall rise once more.",
        "The last king shall sit upon a throne of bones, watching the world fade into shadow."
    ];
    const randomIndex = Math.floor(Math.random() * prophecies.length);
    document.getElementById("prophecy").innerText = prophecies[randomIndex];
}
