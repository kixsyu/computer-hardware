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

    const image = document.getElementById('myImage');

    // Example: Change image source on button click
    const changeImageButton = document.createElement('button');
    changeImageButton.innerText = 'Change Image';
    changeImageButton.onclick = function() {
        image.src = 'https://www.totalphase.com/media/blog/2022/08/Intel-CPU1.jpg';
    };

    document.body.appendChild(changeImageButton);
}
