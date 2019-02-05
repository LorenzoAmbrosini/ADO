![alt text](https://github.com/drawwithcode/2018-group-work-group-08/blob/master/imgr/logo.PNG)
###### Our project perfectly works on Google Chrome. It seems like it's not working well on all browers due to problems with APIs, hope it will work also on other browsers in future. The project is supposed to be seen on pc desktop.

# Team members
**Lorenzo Ambrosini** : lorenzo.ambrosini@mail.polimi.it, 

**Davide Macchi** : davidemacchi97@gmail.com, 

**Matilde Mammana** : matilde.mammana@gmail.com, 

**Giorgia Piacentini** : giorgia.piacentini@mail.polimi.it


# Concept
Have you ever tried to search the web for any kind of news and to notice how many different articles are found to talk about the same information?
In fact, today, because of the multiple channels of information present, it's often difficult to capture the right information. 
In the information theory the word **NOISE** indicates everything that intervenes between the transmitter and the receiver, compromising the effectiveness of the communication (it is essentially a technical interference).
In other cases, the concept assumes a metaphorical value and refers to all types of disturbances that can intervene in the communicative process, reducing its effectiveness or even compromising the result.

On one hand, it can be difficult to find the information we need if there are **too many informations** so we can't reach the one we need. 

On the other hand, it is also difficult to understand an information if we are in a **noisy space**, in fact the information we want to transmit is overwhelmed by other information so it can be very difficult for the receiver to understand what we say.


![alt text](https://github.com/drawwithcode/2018-group-work-group-08/blob/master/imgr/schema.jpg)

# The Project

## The Naming

The term **`Ado`** is used to denote confusion, loss of time and trouble situation. We used this term as our logo naming refering to the fact that send a message and understand an information is often difficult.

## Our Aim
***Have you ever think about how noise can make your act of communicate a failure? How many times you look at a screen full of informations and you don't find the one you need?***

People often don't think about the phenomenon of the information noise and they suppose their speeches to be completely understandable in every situation. That not always happens instead. People also understimate with how many informations they keep in touch in a day, so many that the one they need is often too difficult to reach among the others. 
People should give more attention about that when they communicate. 

Pay attention: giving a lot of informations is not always a good idea. Also keep in mind your speeches can cover speeches of other people with the result that no communication act will be successfull. 

**You should be careful when you decide to communicate something.**

## The story and the metaphors
In order to make people understand what we are talking about we used some metahpors and daily situation which can well represent the information noise.

## First scenary:
![alt text](https://github.com/drawwithcode/2018-group-work-group-08/blob/master/imgr/Tabellone.png)
The first scenary we have chosen is a **train station**, a very chaotic place where it's easy to take the wrong train because of the chaos due to the crowd and the excess of information- such as too informations about destinations and train schedule - on the boards.

## Second scenary:
![alt text](https://github.com/drawwithcode/2018-group-work-group-08/blob/master/imgr/logo.PNG)
The second, and last scenary, represents the **busy city**, where the user will have to be able to take a taxi to reach his destination. Even the city, due to the its traffic noise and the large numbers of citizens, is the perfect environment to demonstrate how difficult is to communicate and receive information in a noisy place.

## Interactions:
We have chosen three different kind of interactions, coherent with our theme.

- In the first scenary there is an interaction with the **webcam** in which the user has to cover the camera of his PC, as if in reality he metaphorically has to focus (narrowing the objective) on the right information.
- The interaction that allows to access the second scenary, consists in **typing** a number **by the keyboard**, to simulate the real calling of a taxi.
- The last interaction, at the end, takes place through the **microphone**: the user will have to talk to the taxi driver and carry him to the destination. In the background, however, traffic noises and voices of citizens will be present, which will make this process more difficult and, at the same time, similar to reality.

## Design challenges
- The main difficulty has been to interface with a **new Javascript library** with its own way of code. It's hard to set a goal to reach if you don't deeply know the instruments you have to use. So this has been the first design challenge.
- It was also difficult to find metaphors and **make them simple to understand** for the one who will use this website, but then we found them and it seems like they work well.
- We *didn't want to focus on a single interaction* to represent a very complex phenomenon as the communication noise so we mainly choose to focus on 2 interactions with a direct link with communication: webcam for written informations and speech for verbally told information.
- Something could have been done better but we have not more **time** than we already spendt on this project.


## Code challenges
We were not masters in using p5.js (then we have become obviously;)) so we learnt to code watching **tutorials and reading some articles.** We don't even always found the perfect solutions for our problem but **we learnt how to solve** them. 

We found out that p5 is not that supported for some kind of stuffs (speech recognition for exemple is not that easy to use) so sometimes find a solution is not that easy in some cases. Then we had problem with input beacuse **not all browsers support the same APIs** so that our project seems to perfecty work only on Google Chrome.


## Best Code Results
**We have succeeded in coding all the interactions we wanted to do.**
We found **interesting solutions** to our problems that we are going to show below.

First of all, one of the most interesting solution is the one which makes the webcam understand if it's dark or bright on the room and it will show different writings according to bright value.
Here it is the display function with some of the code lines.




    this.display = function() {

    var c = capture.get(p.noise(capture.width / 2), p.noise(capture.height / 2));

    var colorRandomizer = p.random(0.3, 1);
    var bright = p.lightness(c);
    var correctBright = colorRandomizer *  p.map(bright, 0, 25, 0, 255);
    
     if (_name == "London") {

      p.fill(col);
      if (bright * 5 < 50) {
        p.fill(colLondon);
      }

      p.text(oraTreni + _time, this.x, this.y);
      p.text(_name, this.x + 150, this.y);
      p.text(_code, this.x + 560, this.y);
      p.text(_platform, this.x + 700, this.y);
      p.text(_status, this.x + 800, this.y);

    } else {
      p.fill(col);
      p.text(oraTreni + _time, this.x, this.y);
      p.text(_name, this.x + 150, this.y);
      p.text(_code, this.x + 560, this.y);
      p.text(_platform, this.x + 700, this.y);
      p.text(_status, this.x + 800, this.y);
    }
    }

We also used a JSON file we created: https://github.com/drawwithcode/2018-group-work-group-08/blob/master/assets/2/data.json.

In order to switch from the first interaction to the third (the one with speech recognition) we created a page where we worked with variables to make an animation of a **phone were you can type number.** We used **variables as buttons to enable and disable the typing on the keyboard.** We bet it is quite interesting how we did it even if it would seem a little complicated, so here our code lines:


    var primostep = 0;
    var secondostep = 0;
    var terzostep = 0;
    var quartostep = 0;
    var quintostep = 0;
    var sestostep = 0;
    var settimostep = 0;
    var ottavostep = 0;
    var nonostep = 0;
    var decimostep = 0;

    var schiaccio = 0;
    var schiacciodue = 0;

    var schiacciotre = 0;
    var schiaccioquattro = 0;
    
      p.draw = function() {
      
      if (p.keyIsPressed == true) {
      p.push(); // tasti
      p.fill('255');
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 140, 45); //0
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 80, 45); //1
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 80, 45); //2
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 80, 45); //3
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 10, 45); //4
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 10, 45); //5
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 10, 45); //6
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 65, 45); //7
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 65, 45); //8
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 65, 45); //9
      p.pop(); //tasti
    }

    if (p.keyIsPressed == false) {

      p.push(); // tasti
      p.fill(255);
      p.stroke(0);
      p.strokeWeight(2);

      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 80, 45); //1
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 80, 45); //2
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 80, 45); //3
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 10, 45); //4
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 10, 45); //5
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 10, 45); //6
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 65, 45); //7
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 65, 45); //8
      p.ellipse(correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 65, 45); //9
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 140, 45); //0
      p.pop(); //tasti

      p.push(); //text tasti
      p.textSize(20);
      p.textAlign(p.CENTER);
      p.textFont('Montserrat');
      p.noStroke();
      p.text('1', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 75);
      p.text('2', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 75);
      p.text('3', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 75);
      p.text('4', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 5);
      p.text('5', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 5);
      p.text('6', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 5);
      p.text('7', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 70);
      p.text('8', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 70);
      p.text('9', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 70);
      p.text('0', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 145);
      p.pop(); //text tasti

    }

    if ((p.keyIsPressed == true) && (p.key == '0') && (primostep === 0) && (schiaccio === 0)) {

      i = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 140, 45); //0
      p.pop();

    }

    if (i == 1) {

      p.text('0', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 145);

      primostep = 1;
      schiaccio = 1;

    }

    if ((p.keyIsPressed == true) && (p.key == '1') && (secondostep === 0) && (schiaccio === 1) && (schiacciodue === 1) && (schiacciotre === 1)) {

      t = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 80, 45); //1
      p.pop();
    }
    if (t == 1) {

      p.text('1', correctCanvasWidth / 2 - 170, correctCanvasHeight / 2 - 145);

      secondostep = 1;
      schiaccioquattro = 1;

    }

    if ((p.keyIsPressed == true) && (p.key == '2') && (terzostep === 1)) {

      p.text('2', correctCanvasWidth / 3 + 100, correctCanvasHeight / 2);

      terzostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '3') && (quartostep === 1)) {

      p.text('3', correctCanvasWidth / 3 + 120, correctCanvasHeight / 2);

      quartostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '4') && (quintostep === 1)) {

      p.text('4', width / 3 + 160, height / 2);

      quintostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '5') && (sestostep === 1)) {

      p.text('5', correctCanvasWidth / 3 + 140, correctCanvasHeight / 2);

      sestostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '6') && (settimostep === 1)) {

      p.text('6', correctCanvasWidth / 3 + 120, correctCanvasHeight / 2);

      settimostep = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '7') && (ottavostep === 0) && (schiaccio === 1) && (schiacciodue === 1)) {

      s = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 65, 45); //7
      p.pop();
    }
    if (s == 1) {

      p.text('7', correctCanvasWidth / 2 - 195, correctCanvasHeight / 2 - 145);

      ottavostep = 1;
      schiacciotre = 1;
    }
    if ((p.keyIsPressed == true) && (p.key == '8') && (nonostep === 0) && (schiaccio === 1)) {

      k = 1;

      p.push();
      p.fill(150);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 65, 45); //8
      p.pop();
    }

    if (k == 1) {

      p.text('8', correctCanvasWidth / 2 - 220, correctCanvasHeight / 2 - 145);

      nonostep = 1;
      schiacciodue = 1;
    }

    if ((p.keyIsPressed == true) && (p.key == '9') && (decimostep === 1)) {

      p.text('9', correctCanvasWidth / 3 + 180, correctCanvasHeight / 2);

      decimostep = 1;
    }
    if (schiaccioquattro === 1) {
      window.open("4_webcam.html", "_self")
    }

    p.push(); // text tasti
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.textFont('Montserrat');
    p.noStroke();
    p.text('1', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 75);
    p.text('2', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 75);
    p.text('3', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 75);
    p.text('4', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 - 5);
    p.text('5', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 - 5);
    p.text('6', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 - 5);
    p.text('7', correctCanvasWidth / 2 - 245, correctCanvasHeight / 2 + 70);
    p.text('8', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 70);
    p.text('9', correctCanvasWidth / 2 - 125, correctCanvasHeight / 2 + 70);
    p.text('0', correctCanvasWidth / 2 - 185, correctCanvasHeight / 2 + 145);
    p.pop(); // text tasti

     };
     };
     
 Ok it will seems less complicated looking at the whole interaction on the screen. 
 
 
 Then we guess it is quite interesting how we did the third interaction. We remixed sounds to create the sound of the page and we used **p5.speech.js** to **make pc speak and to enable the speech recognition**.
 
 
     var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
     var song;
     myRec.continuous = true; // do continuous recognition

     var mySpeech = new p5.Speech();
     mySpeech.setLang('en-UK');
     
     p.setup = function() {
     
     myRec.onResult = p.showResult;
     mySpeech.setVolume(0.8);
     mySpeech.listVoices();
     mySpeech.setVoice(3);
     mySpeech.setRate(0.8);
     mySpeech.setPitch(1);
    song.setVolume(0.3);
    
    p.noStroke();
    p.ellipseMode(p.CENTER);
    p.fill(50);
    p.ellipse(p.windowWidth - 130, 100, 70, 70)
    p.rectMode(p.CENTER);

    interruttore = 1;
    
      }
         p.showResult = function() {
    if (myRec.onResult) {
    //console.log("STO ASCOLTANDO");
    p.push()
    p.rectMode(p.CORNER)
    p.textAlign(p.CENTER);
    p.fill("white");
    p.rect(correctCanvasWidth/2 - 70, 105, 340, 100);
    p.fill("black");
    p.textAlign(p.LEFT);
    p.textSize(25);
    p.text(myRec.resultString, correctCanvasWidth/2 - 60, 110, 330, 100);
    p.fill(166, 237, 247);
         p.pop();
      }
    }





    p.mousePressed = function(){
    if (p.mouseX >= correctCanvasWidth/2 - 50 &&
      p.mouseX <= correctCanvasWidth/2 + 50 &&
      p.mouseY >= correctCanvasHeight/2 + 130  &&
      p.mouseY <= correctCanvasHeight/2 + 190) {
        if (p.mouseButton == p.LEFT ) {
           interruttore = 0;
           console.log("click");
           mySpeech.speak('Hey there! Where do you wanna go?');
           myRec.start();
           song.play();


        }
    }
     }


We also implement Timer countdown on the first and the second interaction.
Here an exemple where a button enable the **countdown**:

      var counter = 900;
        p.setup = function() {
        p.frameRate(30)
        }
       if (interruttore === 0){
    p.countdown();
    p.showResult();
    }


  
    }

     p.countdown = function() {
     if (counter > 0) {
     counter--;

    }
    if (counter == 0) {
    window.open("5_final.html", "_self")
    }
   }
 
       


## Inspirations/References

* [Communication Noise](https://en.wikipedia.org/wiki/Communication_noise) - What is **Communication noise**
* [Information Theory](https://en.wikipedia.org/wiki/Information_theory) - Something about **Information Theory and noises** about transmission


## Credits

We used some ***p5 libreries***:
* [p5.dom.min.js](https://p5js.org/reference/#/libraries/p5.dom) - To set **webcam** interaction
* [p5.sound.min.js](https://p5js.org/reference/#/libraries/p5.sound) - To **load and play** sound
* [p5.speech.js](http://ability.nyu.edu/p5.js-speech/) - To make the pc able to **speak and understand** what you say
* [Train Schedule JSON](https://github.com/drawwithcode/2018-group-work-group-08/blob/master/assets/2/data.json) - We created a **JSON  file**for the Train Schedule of the first interaction.





***Graphics*** and drawings, we used some websites to inspire us for our illustrations:
* [Freepik](https://www.freepik.com/) 
* [TheNounProject](https://thenounproject.com/it/) 
* [Flaticon](https://www.flaticon.com/) 




***Sounds***: 
* [People speaking](http://www.pacdv.com/sounds/people_sounds.html) - For the **sound** of the interactions





# Visual

![alt text](https://github.com/drawwithcode/2018-group-work-group-08/blob/master/imgr/moodboard.jpg)

For the graphics we used the following elements:

- Strong colors like **yellow** (typically used for news as it calls attention) and **black**, neutral color that increases the contrast.
- We kept the same contrast even between the fonts using a simple and linear for the texts, the **Montserrat**, and a more exuberant for the logo and some titles, the **Chrome Black**.
- In the scenaries, we used **illustrations**.


# Course reference and academic year
Creative Coding 2018/2019 (https://drawwithcode.github.io/)

Politecnico di Milano - Scuola del Design

Faculty: Michele Mauri, Tommaso Elli


