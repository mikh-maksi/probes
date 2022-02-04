# GameDev
<img src = "img/gamedev01.jpg"><br>
<img src = "img/gamedev02.jpg"><br>
<img src = "img/gamedev03.jpg"><br>
<img src = "img/gamedev04.jpg"><br>

## Код по-умолчанию 
```C#
using System;

class Program {
  public static void Main (string[] args) {
    Console.WriteLine ("Hello World");
  }
}
```

<img src = "img/gamedev05.jpg"><br>
<img src = "img/gamedev06.jpg"><br>

## Ввод, вывод. Работа с переменной. 
```C#
using System;

class Program {
  public static void Main (string[] args) {
    Console.WriteLine ("Как вас зовут?");
    string name = Console.ReadLine();
    Console.WriteLine("Ваше имя: "+name);
  }
}
```
<img src = "img/gamedev07.jpg"><br>

Данный код позволят разобраться с объектом **Console**. С помощью метода **WriteLine**, который выводит текст в консоль.


## Игра "Отгадай число"  

"Поиграем в игру": Загадайте число от 0 до 4. Я сейчас попробую угадать число. Если я угадаю - вы скажете "Угадал", если не угадаю - скажете "Не угадал" и скажете какое число угадали.  

### Загадаем случайное число.

```C#
using System;

class Program {
  public static void Main (string[] args) {
    Random rnd = new Random();
    int n = rnd.Next(0,4);
    Console.WriteLine(n);
  }
}
```

<img src = "img/gamedev08.jpg">

**Random rnd = new Random();** - создаем "переменную специального типа Random"  
**int n = rnd.Next(0,4);** - создаем числовую переменную **n**, которое получает случайное число, сгенерированное методом **Next**
**Console.WriteLine(n);** - выводим значение переменной **n** в консоль.

### Получим значение от пользователя и сравним его с заданным случайным образом.
До этого - удалим строку №7, чтобы пользователь не видел значение, которое "загадал компьютер".  
<img src = "img/gamedev09.jpg">  

```C#
using System;

class Program {
  public static void Main (string[] args) {
    Random rnd = new Random();
    int n = rnd.Next(0,4);
    
    Console.WriteLine("Введит число");
    int player = Convert.ToInt32(Console.ReadLine());

    if (n == player){
      Console.WriteLine("Угадали!");
    }  else {
      Console.WriteLine("Не угадали! Правильный ответ: "+n);
    }
  }
}

```
<img src = "img/gamedev10.jpg">  