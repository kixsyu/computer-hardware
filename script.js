function toggleIntro() {
    var introText = document.getElementById('intro-text');
    if (introText.style.display === 'none') {
        introText.style.display = 'block';
    } else {
        introText.style.display = 'none';
    }
}
