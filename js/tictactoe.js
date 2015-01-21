var steps = 0
    matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    step = 0,
    userTurn = true;
    var td = document.getElementsByTagName('td');
    var txt = document.getElementById('txt');
    var restart = document.getElementById('restart');
window.onload = function(){
    for(var i = 0, length = td.length; i < length; i++){
        Util.addHandler(td[i], 'click', play);
    }
    Util.addHandler(restart, 'click', update);
}
function play(evt){
    var X = this.getAttribute('data-x');
    var Y = this.getAttribute('data-y');
    if(this.className.split(' ').length === 1 && steps % 2 === 0){
        this.className += ' pA';
        matrix[X][Y] = 1;
            steps += 1;  
        if(win(X, Y, 1)){
            alert('playerA win!');            
            update();
        }else if(steps === 9){
            alert('平局');
            update();
        }
    }else if(this.className.split(' ').length === 1 && steps % 2 === 1){
        this.className += ' pB';
        matrix[X][Y] = -1;
            steps += 1;  
        if(win(X, Y, -1)){
            alert('playerB win!');
            update();
        }else if(steps === 9){
            alert('平局');
            update();
        }
    }
}
function win(x, y, player){
    if(matrix[x][0] === player && matrix[x][1] === player && matrix[x][2] === player){
        return true;
    }
    if(matrix[0][y] === player && matrix[1][y] === player && matrix[2][y] === player){
        return true;
    }
    if(matrix[0][0] === player && matrix[1][1]  === player && matrix[2][2] === player){
        return true;
    }
    if(matrix[2][0] === player && matrix[1][1] === player && matrix [0][2] === player){
        return true;
    }
}
function update(evt){
    matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    steps = 0;
    for(var i = 0; i < td.length; i++){
        td[i].className="player";
    }
}