const $arenas = document.querySelector('.arenas');
// const $randomButton = document.querySelector('.button');
// const $control = document.querySelector('.control');

const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

// Task #0
const player1 = {
    player: 1,
    name: 'liuKang',
    hp: 100,
    changeHP,
    renderHP, 
    elHP, 
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['nunchucks'],
    attack: function() {
        console.log(player1.name + '' + 'Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    changeHP,
    renderHP, 
    elHP, 
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

function changeHP(num) {
    
    if(this.hp > 0) {
        this.hp -= num;
    }

    if(this.hp <= 0){
        this.hp = 0;
    }
    
}

function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

function playerWin(name) {
    const $playerWin = createElement('div', 'loseTitle');
    if (name) {
        $playerWin.innerText = name + ' WIN';
    } else {
        $playerWin.innerText = "DRAW";
    }

    return $playerWin;
}


// $randomButton.addEventListener('click', function() {
//     player1.changeHP(getRandom(20));
//     player2.changeHP(getRandom(20));
//     player1.renderHP();
//     player2.renderHP();


// });
//Task #2 and Task #3 homework-2

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    };
    
}

function playerAttack(){
    const attack = {};

    for (let item of $formFight) {
        if(item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;        
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }
    return attack;
    
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    console.dir($formFight);
    const enemy = enemyAttack();
    
    const attack = playerAttack();

    if(enemy.hit !== attack.defence){
        player1.changeHP(enemy.value);
        player1.renderHP();
    }

    if(attack.hit !== enemy.defence) {
        player2.changeHP(attack.value);
        player2.renderHP();
    }

    if(player1.hp === 0 || player2.hp === 0) {
        $formFight.disabled = true;
        createReloadButton();
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name));
    } else if(player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name));
    } else if(player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin());
    }

});

//Homework-4 
//Task #1
function elHP() {
    console.log(this);
   return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

//Task #2 
function showButton (){
    $control.appendChild(createReloadButton());
    const $button = document.querySelector('.reloadWrap', '.button');
    
    
    $button.addEventListener('click', function(){
        return window.location.reload();
    });

}

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $button = createElement('button', 'button');
    
    $button.innerText = "Restart";
    $reloadWrap.appendChild($button);


    return $reloadWrap;
}

