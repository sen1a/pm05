<!-- HTML CODE -->
<!DOCTYPE html>
<html lang=ru dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script>
    function enter(){
      document.location.href = "reg.php";
    }
    </script>
  </head>
  <body>
    <?
    if ($_COOKIE["login"])
    {
      echo "<p>Профиль игрока ".$_COOKIE["login"].'. Рекорд: <span name="score" id="score">'.$_COOKIE["score"]."</span>.<br></p>";
      echo "<form action='game.php'>";
      echo "<button>Играть</button></form>";
      echo "<form action='exit.php'>";
      echo "<button>Выход</button></form>";
    }
    else
    {
      echo "<button id='enter' onclick='enter()'>Вход</button>";
    }
    ?>
  </body>
</html>
