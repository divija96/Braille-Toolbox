function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (e.keyCode == 9) {
    e.preventDefault();
    resetNotes(e, key);
  }
  if(e.keyCode==32)
  {
    var BrailleInput = document.getElementById("BrailleInput");
    var EnglishInput = document.getElementById("EnglishInput");
    BrailleInput.innerHTML+=" ";
    EnglishInput.innerHTML+=" ";

  }
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  recordNotes(e);
}

function playclip() 
{
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) 
  {
    if (document.all)
     {
        document.all.sound.src = "click.mp3";
     }
  }

  else 
  {
    {
      var audio = document.getElementsByTagName("audio")[0];
      audio.play();
    }
  }
}

function resetNotes(e, key) {
  var BrailleInput = document.getElementById("BrailleInput");
  var EnglishInput=document.getElementById("EnglishInput");

  BrailleInput.innerHTML = "Input in Braille:";
  EnglishInput.innerHTML="Input in English:";

}
var word="",we=0,ce=0,character="";
function recordNotes(e) {

  var BrailleInput = document.getElementById("BrailleInput");
  var EnglishInput = document.getElementById("EnglishInput");
 
  
  if(e.key=="z")
  {
    ce=1;
  }

  else
  {
    ce=0;
    character+=e.key;
  }

  if(ce==1)
  {
      if(character=="1")
      {
        BrailleInput.innerHTML+="⠁";//A
        EnglishInput.innerHTML+="A";
        ce=0;
        character="";
      }
      if(character=="1q")
      {
        BrailleInput.innerHTML+="⠃";//B
        EnglishInput.innerHTML+="B";
        ce=0;
        character="";
      }
      if(character=="12")
      {
        BrailleInput.innerHTML+="⠉";//C
        EnglishInput.innerHTML+="C";
        ce=0;
        character="";
      }
      if(character=="12w")
      {
        BrailleInput.innerHTML+="⠙";//D
        EnglishInput.innerHTML+="D";
        ce=0;
        character="";
      }
      if(character=="1w")
      {
        BrailleInput.innerHTML+="⠑";//E
        EnglishInput.innerHTML+="E";
        ce=0;
        character="";
      }
      if(character=="12q")
      {
        BrailleInput.innerHTML+="⠋";//F
        EnglishInput.innerHTML+="F";
        ce=0;
        character="";
      }
      if(character=="12qw")
      {
        BrailleInput.innerHTML+="⠛";//G
        EnglishInput.innerHTML+="G";
        ce=0;
        character="";
      }
      if(character=="1qw")
      {
        BrailleInput.innerHTML+="⠓";//H
        EnglishInput.innerHTML+="H";
        ce=0;
        character="";
      }
      if(character=="2q")
      {
        BrailleInput.innerHTML+="⠊";//I
        EnglishInput.innerHTML+="I";
        ce=0;
        character="";
      }
      if(character=="2qw")
      {
        BrailleInput.innerHTML+="⠚";//J
        EnglishInput.innerHTML+="J";
        ce=0;
        character="";
      }
      if(character=="1a")
      {
        BrailleInput.innerHTML+="⠅";//K
        EnglishInput.innerHTML+="K";
        ce=0;
        character="";
      }
      if(character=="1qa")
      {
        BrailleInput.innerHTML+="⠇";//L
        EnglishInput.innerHTML+="L";
        ce=0;
        character="";
      }
      if(character=="12a")
      {
        BrailleInput.innerHTML+="⠍";//M
        EnglishInput.innerHTML+="M";
        ce=0;
        character="";
      }
      if(character=="12wa")
      {
        BrailleInput.innerHTML+="⠝";//N
        EnglishInput.innerHTML+="N";
        ce=0;
        character="";
      }
      if(character=="1wa")
      {
        BrailleInput.innerHTML+="⠕";//O
        EnglishInput.innerHTML+="O";
        ce=0;
        character="";
      }
      if(character=="12qa")
      {
        BrailleInput.innerHTML+="⠏";//P
        EnglishInput.innerHTML+="P";
        ce=0;
        character="";
      }
      if(character=="12qwa")
      {
        BrailleInput.innerHTML+="⠟";//Q
        EnglishInput.innerHTML+="Q";
        ce=0;
        character="";
      }
      if(character=="1qwa")
      {
        BrailleInput.innerHTML+="⠗";//R
        EnglishInput.innerHTML+="R";
        ce=0;
        character="";
      }
      if(character=="2qa")
      {
        BrailleInput.innerHTML+="⠎";//S
        EnglishInput.innerHTML+="S";
        ce=0;
        character="";
      }
      if(character=="2qwa")
      {
        BrailleInput.innerHTML+="⠞";//T
        EnglishInput.innerHTML+="T";
        ce=0;
        character="";
      }
      if(character=="1as")
      {
        BrailleInput.innerHTML+="⠥";//U
        EnglishInput.innerHTML+="U";
        ce=0;
        character="";
      }
      if(character=="1qas")
      {
        BrailleInput.innerHTML+="⠧";//V
        EnglishInput.innerHTML+="V";
        ce=0;
        character="";
      }
      if(character=="2qws")
      {
        BrailleInput.innerHTML+="⠺";//W
        EnglishInput.innerHTML+="W";
        ce=0;
        character="";
      }
      if(character=="12as")
      {
        BrailleInput.innerHTML+="⠭";//X
        EnglishInput.innerHTML+="X";
        ce=0;
        character="";
      }
      if(character=="12was")
      {
        BrailleInput.innerHTML+="⠽";//Y
        EnglishInput.innerHTML+="Y";
        ce=0;
        character="";
      }
      if(character=="1was")
      {
        BrailleInput.innerHTML+="⠵";//Z
        EnglishInput.innerHTML+="Z";
        ce=0;
        character="";
      }
      if(character==" ")
      {
        BrailleInput.innerHTML+=" ";//Space
        EnglishInput.innerHTML+=" ";
        ce=0;
        character="";
      }
}



    


}

function removeTransition(e) {
  if(e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
