<<<<<<< HEAD
=======
// Task #0
const liuKang = {
    name: 'liuKang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['nunchucks'],
    attack: function() {
        console.log(player1.name + '' + 'Fight...');
    }
};

const sonya = {
    name: 'Sonya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['garrotte'],
    attack: function() {
        console.log(player2.name + '' + 'Fight...');
    }
};


//Task #1
function createPlayer(player, obj) {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = obj.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = obj.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character =document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = obj.img;

    $character.appendChild($img);
    
    $player.appendChild($progressbar);
    $player.appendChild($character);

    
    $arenas.appendChild($player);
}

const $arenas = document.querySelector('.arenas');

//Task #2 and Task #3

createPlayer('player1', liuKang);
createPlayer('player2', sonya);
>>>>>>> homework-2
