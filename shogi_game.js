document.getElementById('my-king').addEventListener('click', function() {
    // selectPiece = document.getElementById('my-king');
    // selectPiece.classList.add('shadow');
    if (document.getElementById('my-king').classList.contains('shadow')) {
        document.getElementById('my-king').classList.remove('shadow');
    } else {
        document.getElementById('my-king').classList.add('shadow');
        document.getElementById('line8-column5').style.backgroundColor='red';
    }
});