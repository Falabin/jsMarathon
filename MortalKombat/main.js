const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');
// const $randomButton = document.querySelector('.button');
// const $control = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};


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

//дополнительные функции

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}
//////////////////////////////////////////////////////////////////////////////////////////////

//ф-ии элементов

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

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $button = createElement('button', 'button');
    
    $button.innerText = "Restart";

    $button.addEventListener('click', function () {
        window.location.reload();
    });

    $reloadWrap.appendChild($button);
    $arenas.appendChild($reloadWrap);

    return $reloadWrap;
}
///////////////////////////////////////////////////////////////////

//ф-ии методы

function changeHP(num) {
    
    if(this.hp > 0) {
        this.hp -= num;
    }

    if(this.hp <= 0){
        this.hp = 0;
    }
    
}

function elHP() {
    // console.log(this);
   return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
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

//Task #2 and Task #3 homework-2
generateLogs('start', player1, player2);
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


function generateLogs(type, player1, player2) {
    const date = new Date();
    let text = '';
    let el = '';
    switch(type){
        case 'start':
           text = logs[type].replace('[time]', `${date .getHours()}:${date .getMinutes()}`)
           .replace('[player1]', player1.name)
           .replace('[player2]', player2.name);
           el = `<p>${text}</p>`;
           break;

        case 'hit':
            text = logs[type][getRandom(logs[type].length -1)]
            .replace('[playerDefence]', player1.name)
            .replace('[playerKick]', player2.name);
            el = `<p>${text}</p>`;
            break;

        case 'desence':
            text = logs[type][getRandom(logs[type].length -1)]
            .replace('[playerKick]', player1.name)
            .replace('[playerDefence]', player2.name);
            el = `<p>${text}</p>`;
            break;

        case 'end':
            text = logs[type][getRandom(logs[type].length -1)]
            .replace('[playerWins]', player1.name)
            .replace('[playerLose]', player2.name);
            el = `<p>${text}</p>`;
            break;

        case 'draw':
            text = logs[type]
            el = `<p>${text}</p>`;
            break;
    }
    console.log(text);
    $chat.insertAdjacentHTML('afterbegin', el);
}


$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    

    
    const attack = playerAttack();
    if(enemy.hit !== attack.defence){
        player1.changeHP(enemy.value);
        player1.renderHP();
        
        generateLogs('hit', player2, player1);
    }

    if(attack.hit !== enemy.defence) {
        player2.changeHP(attack.value);
        player2.renderHP();
        generateLogs('hit', player1, player2);
    }

    if(player1.hp === 0 || player2.hp === 0) {
        $formFight.disabled = true;
     
        createReloadButton();
       
        
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        generateLogs("end", player1, player2);
        $arenas.appendChild(playerWin(player2.name));
    } else if(player2.hp === 0 && player2.hp < player1.hp) {
        generateLogs("end", player1, player2);
        $arenas.appendChild(playerWin(player1.name));
    } else if(player1.hp === 0 && player2.hp === 0) {
        generateLogs('draw');
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

