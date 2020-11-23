document.getElementById('my-king').addEventListener('click', function(e) {
    let selectPiece = e.target.parentNode; // 駒の要素を取得(e.targetが<p>に反応しているため、parentNode使用)
    let currentArea = selectPiece.parentNode; //駒のいるマス（親要素）を取得
    
    let currentCulumn = Number(currentArea.id[12]); //駒の存在するカラムの番号を取得
    let currentLine = currentArea.parentNode; //駒のいる行の行を取得(ex : line)   [memo] == let area = e.target.closest('.line');
    let prevLineChildren = currentLine.previousElementSibling.children;
    let nextLineChildren = currentLine.nextElementSibling.children;

    let chooseArea_1 = prevLineChildren[currentCulumn - 2];
    let chooseArea_2 = prevLineChildren[currentCulumn - 1];
    let chooseArea_3 = prevLineChildren[currentCulumn];
    let chooseArea_4 = currentArea.previousElementSibling;
    let chooseArea_5 = currentArea.nextElementSibling;
    let chooseArea_6 = nextLineChildren[currentCulumn - 2];
    let chooseArea_7 = nextLineChildren[currentCulumn - 1];
    let chooseArea_8 = nextLineChildren[currentCulumn];
    
    if (selectPiece.classList.contains('shadow')) {
        selectPiece.classList.remove('shadow');
        chooseArea_1.classList.remove('choose-area');
        chooseArea_2.classList.remove('choose-area');
        chooseArea_3.classList.remove('choose-area');
        chooseArea_4.classList.remove('choose-area');
        chooseArea_5.classList.remove('choose-area');
        chooseArea_6.classList.remove('choose-area');
        chooseArea_7.classList.remove('choose-area');
        chooseArea_8.classList.remove('choose-area');
    } else {
        selectPiece.classList.add('shadow');
        chooseArea_1.classList.add('choose-area');
        chooseArea_2.classList.add('choose-area');
        chooseArea_3.classList.add('choose-area');
        chooseArea_4.classList.add('choose-area');
        chooseArea_5.classList.add('choose-area');
        chooseArea_6.classList.add('choose-area');
        chooseArea_7.classList.add('choose-area');
        chooseArea_8.classList.add('choose-area');
    }
});

// document.getElementsByClassName('column').addEventListener('click', function(e) {
//     choosedArea = e.target.closest('.column');
//     console.log(choosedArea.id);
// });