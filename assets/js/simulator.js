/*
=====================================================
IBM Z OPERATIONS SIMULATOR
Stable Version
Author: Vagner Bellacosa
=====================================================
*/

let seconds = 0
let duration = 600

let cpuChart = null
let cpuData = []

function rand(min,max){

return Math.floor(Math.random()*(max-min+1))+min

}


/* =================================================
START SYSTEM
================================================= */

function startSystem(){

console.log("Simulator started")

let ipl = document.getElementById("ipl-screen")
let dash = document.getElementById("dashboard")

if(ipl) ipl.style.display="none"
if(dash) dash.style.display="block"

showTab("overview")

initChart()

setInterval(updateSystem,1000)

}


/* =================================================
TAB CONTROL
================================================= */

function showTab(tab){

let tabs = document.querySelectorAll(".tab")

tabs.forEach(function(t){

t.style.display="none"

})

let active = document.getElementById(tab)

if(active) active.style.display="block"

}


/* =================================================
MAIN LOOP
================================================= */

function updateSystem(){

seconds++

if(seconds > duration){

seconds = 0

}

updateTimer()

updateMetrics()

updateChart()

randomIncident()

}


/* =================================================
TIMER
================================================= */

function updateTimer(){

let m = Math.floor(seconds/60)
let s = seconds % 60

let timer = document.getElementById("timer")

if(timer){

timer.innerText =
String(m).padStart(2,"0") + ":" +
String(s).padStart(2,"0")

}

}


/* =================================================
METRICS
================================================= */

function updateMetrics(){

set("cpu", rand(20,95)+"%")
set("mem", rand(40,90)+"%")
set("jobs", rand(200,1200))
set("net", rand(100,900)+" MB/s")

set("jobsrun", rand(50,200))
set("jobsqueue", rand(20,100))
set("spool", rand(1000,8000))

set("cicsTps", rand(1000,5000))
set("cicsResp", rand(10,200))
set("cicsTask", rand(100,900))

set("db2Threads", rand(50,400))
set("db2Locks", rand(100,1000))
set("db2Buffer", rand(80,99))

set("dasd", rand(50,90))
set("io", rand(1000,9000))

set("tcp", rand(2000,8000))
set("band", rand(100,900))

set("lpar1cpu", rand(20,90)+"%")
set("lpar2cpu", rand(10,70)+"%")
set("lpar3cpu", rand(5,50)+"%")

set("lpar1mem", rand(50,90)+"%")
set("lpar2mem", rand(30,70)+"%")
set("lpar3mem", rand(20,60)+"%")

}


/* =================================================
SAFE DOM SET
================================================= */

function set(id,value){

let el = document.getElementById(id)

if(el){

el.innerText = value

}

}


/* =================================================
CPU CHART
================================================= */

function initChart(){

let ctx = document.getElementById("cpuChart")

if(!ctx || typeof Chart === "undefined"){

console.log("Chart disabled")

return

}

cpuChart = new Chart(ctx,{

type:"line",

data:{

labels:[],

datasets:[{

label:"CPU %",

data:cpuData,

borderColor:"lime",

tension:0.2

}]

},

options:{

animation:false,

responsive:true,

scales:{

y:{

min:0,
max:100

}

}

}

})

}


/* =================================================
UPDATE CHART
================================================= */

function updateChart(){

if(!cpuChart) return

let cpu = rand(20,95)

cpuData.push(cpu)

if(cpuData.length > 60){

cpuData.shift()

}

cpuChart.data.labels.push("")

if(cpuChart.data.labels.length > 60){

cpuChart.data.labels.shift()

}

cpuChart.update()

}


/* =================================================
INCIDENT SIMULATION
================================================= */

function randomIncident(){

if(rand(1,120) !== 10) return

let incidents=[

"CPU SPIKE DETECTED",
"DB2 LOCK ESCALATION",
"CICS RESPONSE DELAY",
"CHANNEL PATH BUSY"

]

let msg = incidents[rand(0,incidents.length-1)]

let div = document.getElementById("incident")

if(!div) return

div.innerText = msg
div.style.display="block"

setTimeout(()=>{

div.style.display="none"

},5000)

}


/* =================================================
OPERATOR CONSOLE
================================================= */

function sendCommand(){

let input = document.getElementById("consoleInput")
let output = document.getElementById("consoleOutput")

if(!input || !output) return

let cmd = input.value.trim()

if(cmd==="") return

let response="COMMAND NOT RECOGNIZED"

if(cmd==="D A,L"){

response="ACTIVE JOBS LISTED"

}

if(cmd==="D U,ALL"){

response="ALL DEVICES ONLINE"

}

if(cmd==="$D JOBQ"){

response="JOB QUEUE DISPLAYED"

}

output.innerHTML += "<div>&gt; "+cmd+"</div>"
output.innerHTML += "<div>"+response+"</div>"

input.value=""

output.scrollTop = output.scrollHeight

}