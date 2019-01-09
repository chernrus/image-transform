
var loadBtn = document.getElementById('loadFileBtn'),
    saveBtn = document.getElementById('saveFileBtn'),
    reverseBtn = document.getElementById('reverseBtn'),
    imageContainer = document.getElementById('workImage');

loadBtn.onchange = function(event) {
    var file = event.target.files[0],
        reader = new FileReader();

    reader.onload = function(event) {
        imageContainer.setAttribute('src', event.target.result);
    };

    reader.readAsDataURL(file);
}

reverseBtn.onclick = function(event) {
    // imageContainer.style.webkitTransform = 'scaleX(-1)';
    // imageContainer.style.transform = 'scaleX(-1)';

    var c = document.createElement('canvas');

    c.width = imageContainer.width;
    c.height = imageContainer.height;
    var ctx = c.getContext('2d');
    ctx.scale(-1,1);
    ctx.drawImage(imageContainer,-imageContainer.width,0);

    imageContainer.src = c.toDataURL();
}

saveBtn.onclick = function(event) {
    var dataURL = imageContainer.src;
}
