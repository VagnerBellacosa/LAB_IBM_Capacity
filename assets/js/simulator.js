let seconds=0
let duration=600

function rand(min,max){
return Math.floor(Math.random()*(max-min+1))+min
}

function startSystem(){

document.getElementById("ipl-screen").style.display="none"
document.getElementById("dashboard").style.display="block"

showTab("overview")

setInterval(updateSystem,1000)

}

function showTab(tab){

document.querySelectorAll(".tab").forEach(t=>t.style.display="none")

document.getElementById(tab).style.display="block"

}

function updateSystem(){

seconds++

if(seconds>duration){
seconds=0
}

document.getElementById("timer").innerText=
Math.floor(seconds/60)+":"+("0"+seconds%60).slice(-2)

updateMetrics()

randomIncident()

}

function updateMetrics(){

cpu=rand(20,95)

document.getElementById("cpu").innerText=cpu+"%"
document.getElementById("mem").innerText=rand(40,90)+"%"
document.getElementById("jobs").innerText=rand(200,1200)
document.getElementById("net").innerText=rand(100,900)+" MB/s"

document.getElementById("jobsrun").innerText=rand(50,200)
document.getElementById("jobsqueue").innerText=rand(20,100)
document.getElementById("spool").innerText=rand(1000,8000)

document.getElementById("cicsTps").innerText=rand(1000,5000)
document.getElementById("cicsResp").innerText=rand(10,200)
document.getElementById("cicsTask").innerText=rand(100,900)

document.getElementById("db2Threads").innerText=rand(50,400)
document.getElementById("db2Locks").innerText=rand(100,1000)
document.getElementById("db2Buffer").innerText=rand(80,99)

document.getElementById("dasd").innerText=rand(50,90)
document.getElementById("io").innerText=rand(1000,9000)

document.getElementById("tcp").innerText=rand(2000,8000)
document.getElementById("band").innerText=rand(100,900)

document.getElementById("lpar1cpu").innerText=rand(20,90)+"%"
document.getElementById("lpar2cpu").innerText=rand(10,70)+"%"
document.getElementById("lpar3cpu").innerText=rand(5,50)+"%"

document.getElementById("lpar1mem").innerText=rand(50,90)+"%"
document.getElementById("lpar2mem").innerText=rand(30,70)+"%"
document.getElementById("lpar3mem").innerText=rand(20,60)+"%"

}

function randomIncident(){

if(rand(1,120)==10){

let incidents=[

"CPU SPIKE DETECTED",
"DB2 LOCK ESCALATION",
"CICS RESPONSE DELAY",
"CHANNEL PATH BUSY"

]

let msg=incidents[rand(0,incidents.length-1)]

let div=document.getElementById("incident")

div.innerText=msg
div.style.display="block"

setTimeout(()=>{

div.style.display="none"

},5000)

}

}

function sendCommand(){

let cmd=document.getElementById("consoleInput").value

let out=document.getElementById("consoleOutput")

if(cmd=="D A,L")
out.innerHTML+="<div>ACTIVE JOBS LISTED</div>"

else if(cmd=="D U,ALL")
out.innerHTML+="<div>ALL DEVICES ONLINE</div>"

else if(cmd=="$D JOBQ")
out.innerHTML+="<div>JOB QUEUE DISPLAYED</div>"

else
out.innerHTML+="<div>COMMAND NOT RECOGNIZED</div>"

document.getElementById("consoleInput").value=""

}

function rand(min,max){
return Math.floor(Math.random()*(max-min+1))+min
}

function updateCapacity(){

document.getElementById("cpu_h1").innerText = rand(40,90) + "%"
document.getElementById("cpu_h2").innerText = rand(40,90) + "%"
document.getElementById("cpu_h3").innerText = rand(40,90) + "%"
document.getElementById("cpu_h4").innerText = rand(40,90) + "%"

}

function simulateOverload(){

console.log("Simulating system overload...")

document.getElementById("cpu").innerText = "99%"
document.getElementById("mem").innerText = "95%"
document.getElementById("jobs").innerText = "1800"
document.getElementById("net").innerText = "1200 MB/s"

showIncident("CPU OVERLOAD DETECTED")

}

function showIncident(msg){

let div = document.getElementById("incident")

div.innerText = msg
div.style.display = "block"

setTimeout(()=>{

div.style.display="none"

},6000)

}

