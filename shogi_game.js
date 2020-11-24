function onPiece(element) {
    let selectPiece = element; // 駒の要素を取得

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
};

document.getElementById('shogi_board').addEventListener('click', function(e) {
    let selectedArea = e.target; //クリックした要素を取得
    let myKing = document.getElementById('my-king');
    let myKingColumn = Number(myKing.parentNode.id[12]);
    // 
    if (selectedArea.classList.contains('choose-area')) { //クリックした場所が選択可能エリアだったら(choose-area)myKingを移動
        if (selectedArea.id[12] == String(myKingColumn - 1)) {
            myKing.classList.remove('shadow');
            selectedArea.appendChild(myKing);
            let allColumn = document.getElementsByClassName('column');
            for (const column of allColumn) {
                if (column.classList.contains('choose-area')) {
                    column.classList.remove('choose-area');
                }
            }
        } else if (selectedArea.id[12] == String(myKingColumn)) {
            myKing.classList.remove('shadow');
            selectedArea.appendChild(myKing);
            let allColumn = document.getElementsByClassName('column');
            for (const column of allColumn) {
                if (column.classList.contains('choose-area')) {
                    column.classList.remove('choose-area');
                }
            }
        } else if (selectedArea.id[12] == String(myKingColumn + 1)) {
            myKing.classList.remove('shadow');
            selectedArea.appendChild(myKing);
            let allColumn = document.getElementsByClassName('column');
            for (const column of allColumn) {
                if (column.classList.contains('choose-area')) {
                    column.classList.remove('choose-area');
                }
            }
        } 
    }
});