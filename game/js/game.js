// JAVASCRIPT CODE //

const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

//Объявление изображений

//Игрок
const player = new Image();
player.src = "img/спрайт-09.png";

//Фон
const backgr = new Image();
backgr.src = "img/фон.png";

//Шкала здоровья и счет
const score_line = new Image();
score_line.src = "img/score.png";

//Монстр 3 вида
const im_mon3 = new Image();
im_mon3.src = "img/спрайт-10.png";

//Монстр 2 вида
const im_mon2 = new Image();
im_mon2.src = "img/спрайт-11.png";

//Монстр 1 вида
const im_mon1 = new Image();
im_mon1.src = "img/спрайт-13.png";

//Счетчик кадров
let frames = 0;

//Счет
let score = 0;

//Здоровье
let hp = 100;

//Опыт
let xp = 0;

//Игрок
var Player = {
  x:50,
  y:470,
  v:0,
  stay : function() {
    ctx.drawImage(player, 710, 310, 90, 90, this.x, this.y, 90, 90);
  },
  go_right : function() {
    if(this.v < 5) {
      ctx.drawImage(player, 610, 20, 90, 90, this.x, this.y, 90, 90);
      this.v++;
    } else if (this.v >= 5 && this.v < 10) {
      ctx.drawImage(player, 710, 20, 90, 90, this.x, this.y, 90, 90);
      this.v++;
    } else if (this.v == 10){
      ctx.drawImage(player, 710, 20, 90, 90, this.x, this.y, 90, 90);
      this.v = 0;
    }
  },
  go_left : function() {
    if(this.v < 5) {
      ctx.drawImage(player, 610, 20, 90, 90, this.x, this.y, 90, 90);
      this.v++;
    } else if (this.v >= 5 && this.v < 10) {
      ctx.drawImage(player, 710, 20, 90, 90, this.x, this.y, 90, 90);
      this.v++;
    } else if (this.v == 10){
      ctx.drawImage(player, 710, 20, 90, 90, this.x, this.y, 90, 90);
      this.v = 0;
    }
  },
  heat_swear : function() {
    ctx.drawImage(player, 310, 420, 90, 90, this.x, this.y, 90, 90);
  },
  heat_fire : function() {
    ctx.drawImage(player, 400, 10, 90, 90, this.x, this.y, 90, 90);
  },
  block : function() {
    ctx.drawImage(player, 400, 320, 90, 90, this.x, this.y, 90, 90);
  }

};

//Монстры

var monstr1 = {
  killed:true,
  x:0,
  y:0,
  view:0,
  hp:0,
  dm:0,
  heat_time:0,
  update:function(pl_x) {
    this.x-=3;
    if (pl_x >= 700)
      this.x-=2;
    if (this.heat_time != 0)
      this.heat_time--;
    if (this.hp <= 0) {
      this.killed = true;
      score++;
      console.log(score);
      this.y = 10000;
    }
  },
  draw:function() {
    switch (this.v) {
      case 3:
        ctx.drawImage(im_mon3, 395, 395, 250, 250, this.x, this.y, 250, 250);
      break;
      case 2:
        ctx.drawImage(im_mon2, 0, 0, 120, 155, this.x, this.y, 120, 155);
      break;
      case 1:
        ctx.drawImage(im_mon1, 0, 0, 70, 80, this.x, this.y, 70, 80);
      break;
      default:
    }
  }
};

var monstr2 = {
  killed:true,
  x:0,
  y:0,
  view:0,
  hp:0,
  dm:0,
  heat_time:0,
  update:function(pl_x) {
    this.x-=3;
    if (pl_x >= 700)
      this.x-=2;
    if (this.heat_time != 0)
      this.heat_time--;
    if (this.hp <= 0) {
      this.killed = true;
      score++;
      console.log(score);
      this.y = 10000;
    }
  },
  draw:function() {
    switch (this.v) {
      case 3:
        ctx.drawImage(im_mon3, 395, 395, 250, 250, this.x, this.y, 250, 250);
      break;
      case 2:
        ctx.drawImage(im_mon2, 0, 0, 120, 155, this.x, this.y, 120, 155);
      break;
      case 1:
        ctx.drawImage(im_mon1, 0, 0, 70, 80, this.x, this.y, 70, 80);
      break;
      default:
    }
  }
};

var monstr3 = {
  killed:true,
  x:0,
  y:0,
  view:0,
  hp:0,
  dm:0,
  heat_time:0,
  update:function(pl_x) {
    this.x-=3;
    if (pl_x >= 700)
      this.x-=2;
    if (this.heat_time != 0)
      this.heat_time--;
    if (this.hp <= 0) {
      this.killed = true;
      score++;
      console.log(score);
      this.y = 10000;
    }
  },
  draw:function() {
    switch (this.v) {
      case 3:
        ctx.drawImage(im_mon3, 395, 395, 250, 250, this.x, this.y, 250, 250);
      break;
      case 2:
        ctx.drawImage(im_mon2, 0, 0, 120, 155, this.x, this.y, 120, 155);
      break;
      case 1:
        ctx.drawImage(im_mon1, 0, 0, 70, 80, this.x, this.y, 70, 80);
      break;
      default:
    }
  }
};

//Созданий функций для отлавливания нажатия на клавиши
var pressed = new Set();

document.addEventListener("keydown",function(event) {
  if (event.code == 'ArrowLeft') {pressed.add(event.code);;}
  if (event.code == 'ArrowRight') {pressed.add(event.code);;}
  if (event.code == 'Digit1') {pressed.add(event.code);;}
  if (event.code == 'Digit2') {pressed.add(event.code);;}
  if (event.code == 'Digit3') {pressed.add(event.code);;}
});

document.addEventListener('keyup',function(event) {
  pressed.delete(event.code);
});

//Функция для случайного поиска величины
function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Переменная для движения фона
let move_al = 0;

//Переменная для задержки появления монстров
let mon_time = 0;

//Переменная для задержки оружия
let fire_time = 0;

let swear_time = 0;

//Главная функция, отрисовывающая контекст каждый кадр
function draw() {

  //Обновление фона
    if (move_al == -1200)
      move_al = 0;

  //Перемещение фона, если игрок в правой части экрана
    if (Player.x >= 700)
      move_al-=2;

  //Отрисовка фона и шкалы здоровья и счета
    ctx.drawImage(backgr, move_al, 0, 2400, 720);
    ctx.drawImage(score_line, 0, 640, 1000, 80);
    ctx.textAlign = "right";
    ctx.strokeStyle = "black";
    ctx.font = 'bold 90px sans-serif';
    ctx.strokeText(score, 440, 712);

    ctx.strokeText(Math.round(hp), 250, 712);

  //Возобновление оружия
    if (swear_time > 0)
      swear_time--;
    if (fire_time > 0)
      fire_time--;

  //Действия игрока по горизонтали
    if (pressed.has('ArrowRight')) {
      Player.x = Player.x + 5;
      if (Player.x <= -20) {
        Player.x = Player.x - 5
      }
      //Удар монстров мечом
      if (pressed.has('Digit1')) {
        Player.heat_swear();
        if (monstr1.x < Player.x + 100){
          if (swear_time == 0) {
            monstr1.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr2.x < Player.x + 100){
          if (swear_time == 0) {
            monstr2.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr3.x < Player.x + 100){
          if (swear_time == 0) {
            monstr3.hp -= 15;
            swear_time = 15;
          }
        }
      }
      //Удар монстров огнем
      else if (pressed.has('Digit2')) {
        Player.heat_fire();
        if (monstr1.x < Player.x + 120){
          if (fire_time == 0) {
            monstr1.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr2.x < Player.x + 120){
          if (fire_time == 0) {
            monstr2.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr3.x < Player.x + 120){
          if (fire_time == 0) {
            monstr3.hp -= 5;
            fire_time = 10;
          }
        }
      }
      else if (pressed.has('Digit3'))
        Player.block();
      else
        Player.go_right();
    } else if (pressed.has('ArrowLeft')) {
      Player.x = Player.x - 5;
      if (Player.x >= 920) {
        Player.x = Player.x + 5
      }
      //Удар монстров мечом
      if (pressed.has('Digit1')) {
        Player.heat_swear();
        if (monstr1.x < Player.x + 100){
          if (swear_time == 0) {
            monstr1.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr2.x < Player.x + 100){
          if (swear_time == 0) {
            monstr2.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr3.x < Player.x + 100){
          if (swear_time == 0) {
            monstr3.hp -= 15;
            swear_time = 15;
          }
        }
      }
      //Удар монстров огнем
      else if (pressed.has('Digit2')) {
        Player.heat_fire();
        if (monstr1.x < Player.x + 120){
          if (fire_time == 0) {
            monstr1.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr2.x < Player.x + 120){
          if (fire_time == 0) {
            monstr2.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr3.x < Player.x + 120){
          if (fire_time == 0) {
            monstr3.hp -= 5;
            fire_time = 10;
          }
        }
      }
      else if (pressed.has('Digit3'))
        Player.block();
      else
        Player.go_right();
    } else if (Player.x >= 700) {
      //Удар монстров мечом
      if (pressed.has('Digit1')) {
        Player.heat_swear();
        if (monstr1.x < Player.x + 100){
          if (swear_time == 0) {
            monstr1.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr2.x < Player.x + 100){
          if (swear_time == 0) {
            monstr2.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr3.x < Player.x + 100){
          if (swear_time == 0) {
            monstr3.hp -= 15;
            swear_time = 15;
          }
        }
      }
      //Удар монстров огнем
      else if (pressed.has('Digit2')) {
        Player.heat_fire();
        if (monstr1.x < Player.x + 120){
          if (fire_time == 0) {
            monstr1.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr2.x < Player.x + 120){
          if (fire_time == 0) {
            monstr2.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr3.x < Player.x + 120){
          if (fire_time == 0) {
            monstr3.hp -= 5;
            fire_time = 10;
          }
        }
      }
      else if (pressed.has('Digit3'))
        Player.block();
      else
        Player.go_right();
    } else {
      //Удар монстров мечом
      if (pressed.has('Digit1')) {
        Player.heat_swear();
        if (monstr1.x < Player.x + 100){
          if (swear_time == 0) {
            monstr1.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr2.x < Player.x + 100){
          if (swear_time == 0) {
            monstr2.hp -= 15;
            swear_time = 15;
          }
        }
        if (monstr3.x < Player.x + 100){
          if (swear_time == 0) {
            monstr3.hp -= 15;
            swear_time = 15;
          }
        }
      }
      //Удар монстров огнем
      else if (pressed.has('Digit2')) {
        Player.heat_fire();
        if (monstr1.x < Player.x + 120){
          if (fire_time == 0) {
            monstr1.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr2.x < Player.x + 120){
          if (fire_time == 0) {
            monstr2.hp -= 5;
            fire_time = 10;
          }
        }
        if (monstr3.x < Player.x + 120){
          if (fire_time == 0) {
            monstr3.hp -= 5;
            fire_time = 10;
          }
        }
      }
      else if (pressed.has('Digit3'))
        Player.block();
      else
        Player.stay();
    }

  //Появление и передвижение монстров
    if (!monstr1.killed) {

      monstr1.update(Player.x);
      monstr1.draw();

    }
    else
      if (Player.x >= 700 && mon_time == 0) {
        spawn(monstr1, 1);
        mon_time = 50;
      }

    if (!monstr2.killed) {

        monstr2.update(Player.x);
        monstr2.draw();

    }
    else
      if (Player.x >= 700 && mon_time == 0) {
        spawn(monstr2, 2);
        mon_time = 150;
      }

    if (!monstr3.killed) {

        monstr3.update(Player.x);
        monstr3.draw();

    }
    else
    if (Player.x >= 700 && mon_time == 0) {
      spawn(monstr3, 3);
      mon_time = 300;
    }

    if (mon_time > 0)
      mon_time--;

  //Проверка, дошел ли кто-то из монстров до игрока
    if (monstr1.x < Player.x + 60 && !monstr1.killed) {
      hp -= monstr1.dm;
      monstr1.x += 100;
    }
    if (monstr2.x < Player.x + 60 && !monstr2.killed) {
      hp -= monstr2.dm;
      monstr2.x += 100;
    }
    if (monstr3.x < Player.x + 60 && !monstr3.killed) {
      hp -= monstr3.dm;
      monstr3.x += 100;
    }

    frames++;

    if (hp <= 0) {
      //Отправка счета
      let form = document.createElement('form');
      form.action = 'new_sc.php';
      form.method = 'POST';
      form.innerHTML = '<input name="score" value="'+score+'">';
      document.body.append(form);
      setTimeout(() => form.submit(), 3000);
    }
    else if (hp > 0 && hp < 100) {
      hp += 0.01;
      requestAnimationFrame(draw);
      //console.log(hp);
    }
    else if (hp >= 100) {
      requestAnimationFrame(draw);
    }
}

function spawn(monstr, i) {
  monstr.v = Random(1,3);
  if (i == 1)
    while (monstr.v == monstr2.v || monstr.v == monstr3.v) {
      monstr.v = Random(1,3);
    }
  else if (i == 2)
    while (monstr.v == monstr1.v || monstr.v == monstr3.v) {
      monstr.v = Random(1,3);
    }
  else if (i == 3)
    while (monstr.v == monstr1.v || monstr.v == monstr2.v) {
      monstr.v = Random(1,3);
    }
  monstr.killed = false;
  switch (monstr.v) {
    case 3:
      monstr.dm = 10;
      monstr.hp = 60;
      monstr.y = 370;
      monstr.x = 1000;
    break;
    case 2:
      monstr.dm = 5;
      monstr.hp = 30;
      monstr.y = 405;
      monstr.x = 1000;
    break;
    case 1:
      monstr.dm = 2;
      monstr.hp = 15;
      monstr.y = 480;
      monstr.x = 1000;
    break;
    default:
  }
}

draw();
