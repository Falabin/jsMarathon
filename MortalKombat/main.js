const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
// Task #0
const liuKang = {
    player: 1,
    name: 'liuKang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['nunchucks'],
    attack: function() {
        console.log(player1.name + '' + 'Fight...');
    }
};

const sonya = {
    player:2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['garrotte'],
    attack: function() {
        console.log(player2.name + '' + 'Fight...');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}


//Task #1
function createPlayer(obj) {
    const $player = createElement('div', 'player' + obj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');

    $life.style.width = obj.hp;
    $name.innerText = obj.name;
    $img.src = obj.img;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    return $player;
    
}

 

function changeHP(obj) {
    const $playerLife = document.querySelector('.player' + obj.player + ' .life');
    //homework-3 Task#2
    obj.hp -= (Math.ceil(Math.random() * 20));
    $playerLife.style.width = obj.hp + '%';
   //homework-3 Task#1
    if(obj.hp <= 0){
        obj.hp = 0;
        $randomButton.disabled = true;
    }
   
    if(obj.hp <= 0){
        $arenas.appendChild(playerWin(compareWin()));
    }
    
}

//homework-3 Task#3
function compareWin () {
    if(sonya.hp === 0 && liuKang.hp !== 0) {
        return liuKang.name;
     } else if (liuKang.hp === 0 && sonya.hp !== 0) {
         return sonya.name;
     } else if (liuKang.hp === 0 && sonya.hp === 0) {
        window.location.reload();
     }
     
}

function playerWin(name) {
    const $playerWin = createElement('div', 'loseTitle');
    $playerWin.innerText = name + ' WIN';

    return $playerWin;
}

$randomButton.addEventListener('click', function() {
    console.log("###: Click Random Button");
    
    changeHP(liuKang);
    changeHP(sonya);
});
//Task #2 and Task #3 homework-2

$arenas.appendChild(createPlayer(liuKang));
$arenas.appendChild(createPlayer(sonya));


