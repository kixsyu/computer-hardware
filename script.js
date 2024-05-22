function toggleIntro() {
    var introText = document.getElementById('intro-text');
    if (introText.style.display === 'none') {
        introText.style.display = 'block';
    } else {
        introText.style.display = 'none';
    }
}

function toggleBinaryInfo() {
    var info = document.getElementById('binary-info');
    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}
