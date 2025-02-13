let BlueKillCount=0
let BlueTacCount=0
let BlueCritCount=0
let BlueCP=0
let TurningPoint=0
let OrangeCP=0
let OrangeKillCount=0
let OrangeTacCount=0
let OrangeCritCount=0

document.getElementById("IncreaseKillBlue").onclick = function(){
    BlueKillCount+=1
    document.getElementById("BlueKillCount").innerHTML =BlueKillCount;
}

document.getElementById("DecreaseKillBlue").onclick = function(){
    BlueKillCount-=1
    if(BlueKillCount<=0){
        document.getElementById("BlueKillCount").innerHTML =0;
    }else{
        document.getElementById("BlueKillCount").innerHTML =BlueKillCount;
    }
    
}

document.getElementById("IncreaseTacBlue").onclick = function(){
    BlueTacCount+=1
    document.getElementById("BlueTacCount").innerHTML =BlueTacCount;
}

document.getElementById("DecreaseTacBlue").onclick = function(){
    BlueKillCount-=1
    if(BlueKillCount<=0){
        document.getElementById("BlueTacCount").innerHTML =0;
    }else{
        document.getElementById("BlueTacCount").innerHTML =BlueTacCount;
    }
    
}

document.getElementById("IncreaseCritBlue").onclick = function(){
    BlueCritCount+=1
    document.getElementById("BlueCritCount").innerHTML =BlueCritCount;
}
document.getElementById("DecreaseCritBlue").onclick = function(){
    BlueCritCount-=1
    if(BlueCritCount<=0){
        document.getElementById("BlueCritCount").innerHTML =0;
    }else{
        document.getElementById("BlueCritCount").innerHTML =BlueCritCount;
    }
    
}


document.getElementById("IncreaseCPBlue").onclick = function(){
    BlueCP+=1
    document.getElementById("BlueCP").innerHTML =BlueCP;
}
document.getElementById("DecreaseCPBlue").onclick = function(){
    BlueCP-=1
    if(BlueCP<=0){
        document.getElementById("BlueCP").innerHTML =0;
    }else{
        document.getElementById("BlueCP").innerHTML =BlueCP;
    }
    
}





document.getElementById("IncreaseTurningPoint").onclick = function(){
    TurningPoint+=1
    document.getElementById("TurnPointCount").innerHTML =TurningPoint;
}

document.getElementById("DecreaseTurningPoint").onclick = function(){
    TurningPoint-=1
    if(TurningPoint<=0){
        document.getElementById("TurnPointCount").innerHTML =0;
    }else{
        document.getElementById("TurnPointCount").innerHTML =TurningPoint;
    }
    
}



document.getElementById("IncreaseKillOrange").onclick = function(){
    OrangeKillCount+=1
    document.getElementById("OrangeKillCount").innerHTML =OrangeKillCount;
}
document.getElementById("DecreaseKillOrange").onclick = function(){
    OrangeKillCount-=1
    if(OrangeKillCount<=0){
        document.getElementById("OrangeKillCount").innerHTML =0;
    }else{
        document.getElementById("OrangeKillCount").innerHTML =OrangeKillCount;
    }
    
}

document.getElementById("IncreaseTacOrange").onclick = function(){
    OrangeTacCount+=1
    document.getElementById("OrangeTacCount").innerHTML =OrangeTacCount;
}
document.getElementById("DecreaseTacOrange").onclick = function(){
    OrangeKillCount-=1
    if(OrangeKillCount<=0){
        document.getElementById("OrangeTacCount").innerHTML =0;
    }else{
        document.getElementById("OrangeTacCount").innerHTML =OrangeTacCount;
    }
    
}

document.getElementById("IncreaseCritOrange").onclick = function(){
    OrangeCritCount+=1
    document.getElementById("OrangeCritCount").innerHTML =OrangeCritCount;
}
document.getElementById("DecreaseCritOrange").onclick = function(){
    OrangeCritCount-=1
    if(OrangeCritCount<=0){
        document.getElementById("OrangeCritCount").innerHTML =0;
    }else{
        document.getElementById("OrangeCritCount").innerHTML =OrangeCritCount;
    }
    
}

document.getElementById("IncreaseCPOrange").onclick = function(){
    OrangeCP+=1
    document.getElementById("OrangeCP").innerHTML =OrangeCP;
}

document.getElementById("DecreaseCPOrange").onclick = function(){
    OrangeCP-=1
    if(OrangeCP<=0){
        document.getElementById("OrangeCP").innerHTML =0;
    }else{
        document.getElementById("OrangeCP").innerHTML =OrangeCP;
    }
    
}

