// ===============================
// IBM Z Operations Simulator
// ===============================

let seconds = 0
let duration = 600

// ===============================
// RANDOM NUMBER
// ===============================

function rand(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min
}

// ===============================
// SYSTEM START
// ===============================

function startSystem(){

let ipl = document.getElementById("ipl-screen")
let dash = document.getElementById("dashboard")

if(ipl) ipl.style.display="none"
if(dash) dash.style.display="block"

showTab("overview")

setInterval(updateSystem,1000)

}

// ===============================
// TAB NAVIGATION
// ===============================

function showTab(tab){

document.querySelectorAll(".tab").forEach(t => t.style.display="none")

let target = document.getElementById(tab)

if(target) target.style.display="block"

}

// ===============================
// MAIN SYSTEM LOOP
// ===============================

function updateSystem(){

seconds++

if(seconds > duration){
seconds = 0
}

let timer = document.getElementById("timer")

if(timer){
timer.innerText =
Math.floor(seconds/60)+":"+("0"+seconds%60).slice(-2)
}

updateMetrics()
updateCapacity()
randomIncident()

}

// ===============================
// METRICS SIMULATION
// ===============================

function updateMetrics(){

let cpu = rand(20,95)

set("cpu", cpu+"%")
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

// ===============================
// CAPACITY TABLE
// ===============================

function updateCapacity(){

set("cpu_h1", rand(40,90)+"%")
set("cpu_h2", rand(40,90)+"%")
set("cpu_h3", rand(40,90)+"%")
set("cpu_h4", rand(40,90)+"%")

}

// ===============================
// INCIDENT SIMULATION
// ===============================

function randomIncident(){

if(rand(1,120) === 10){

let incidents = [

"CPU SPIKE DETECTED",
"DB2 LOCK ESCALATION",
"CICS RESPONSE DELAY",
"CHANNEL PATH BUSY"

]

let msg = incidents[rand(0,incidents.length-1)]

showIncident(msg)

}

}

// ===============================
// INCIDENT DISPLAY
// ===============================

function showIncident(msg){

let div = document.getElementById("incident")

if(!div) return

div.innerText = msg
div.style.display = "block"

setTimeout(()=>{
div.style.display="none"
},5000)

}

// ===============================
// CONSOLE COMMANDS
// ===============================

function sendCommand(){

let input = document.getElementById("consoleInput")
let out = document.getElementById("consoleOutput")

if(!input || !out) return

let cmd = input.value.trim().toUpperCase()

if(cmd === "D A,L")
out.innerHTML += "<div>ACTIVE JOBS LISTED</div>"

else if(cmd === "D U,ALL")
out.innerHTML += "<div>ALL DEVICES ONLINE</div>"

else if(cmd === "$D JOBQ")
out.innerHTML += "<div>JOB QUEUE DISPLAYED</div>"

else
out.innerHTML += "<div>COMMAND NOT RECOGNIZED</div>"

input.value = ""

}

// ===============================
// SIMULATE OVERLOAD
// ===============================

function simulateOverload(){

console.log("Simulating system overload...")

set("cpu","99%")
set("mem","95%")
set("jobs","1800")
set("net","1200 MB/s")

showIncident("CPU OVERLOAD DETECTED")

}

// ===============================
// SAFE DOM SETTER
// ===============================

function set(id,value){

let el = document.getElementById(id)

if(el){
el.innerText = value
}

}// ===============================
// IBM Z Operations Simulator
// ===============================

let seconds = 0
let duration = 600

// ===============================
// RANDOM NUMBER
// ===============================

function rand(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min
}

// ===============================
// SYSTEM START
// ===============================

function startSystem(){

let ipl = document.getElementById("ipl-screen")
let dash = document.getElementById("dashboard")

if(ipl) ipl.style.display="none"
if(dash) dash.style.display="block"

showTab("overview")

setInterval(updateSystem,1000)

}

// ===============================
// TAB NAVIGATION
// ===============================

function showTab(tab){

document.querySelectorAll(".tab").forEach(t => t.style.display="none")

let target = document.getElementById(tab)

if(target) target.style.display="block"

}

// ===============================
// MAIN SYSTEM LOOP
// ===============================

function updateSystem(){

seconds++

if(seconds > duration){
seconds = 0
}

let timer = document.getElementById("timer")

if(timer){
timer.innerText =
Math.floor(seconds/60)+":"+("0"+seconds%60).slice(-2)
}

updateMetrics()
updateCapacity()
randomIncident()

}

// ===============================
// METRICS SIMULATION
// ===============================

function updateMetrics(){

let cpu = rand(20,95)

set("cpu", cpu+"%")
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

// ===============================
// CAPACITY TABLE
// ===============================

function updateCapacity(){

set("cpu_h1", rand(40,90)+"%")
set("cpu_h2", rand(40,90)+"%")
set("cpu_h3", rand(40,90)+"%")
set("cpu_h4", rand(40,90)+"%")

}

// ===============================
// INCIDENT SIMULATION
// ===============================

function randomIncident(){

if(rand(1,120) === 10){

let incidents = [

"CPU SPIKE DETECTED",
"DB2 LOCK ESCALATION",
"CICS RESPONSE DELAY",
"CHANNEL PATH BUSY"

]

let msg = incidents[rand(0,incidents.length-1)]

showIncident(msg)

}

}

// ===============================
// INCIDENT DISPLAY
// ===============================

function showIncident(msg){

let div = document.getElementById("incident")

if(!div) return

div.innerText = msg
div.style.display = "block"

setTimeout(()=>{
div.style.display="none"
},5000)

}

// ===============================
// CONSOLE COMMANDS
// ===============================

function sendCommand(){

let input = document.getElementById("consoleInput")
let out = document.getElementById("consoleOutput")

if(!input || !out) return

let cmd = input.value.trim().toUpperCase()

if(cmd === "D A,L")
out.innerHTML += "<div>ACTIVE JOBS LISTED</div>"

else if(cmd === "D U,ALL")
out.innerHTML += "<div>ALL DEVICES ONLINE</div>"

else if(cmd === "$D JOBQ")
out.innerHTML += "<div>JOB QUEUE DISPLAYED</div>"

else
out.innerHTML += "<div>COMMAND NOT RECOGNIZED</div>"

input.value = ""

}

// ===============================
// SIMULATE OVERLOAD
// ===============================

function simulateOverload(){

console.log("Simulating system overload...")

set("cpu","99%")
set("mem","95%")
set("jobs","1800")
set("net","1200 MB/s")

showIncident("CPU OVERLOAD DETECTED")

}

// ===============================
// SAFE DOM SETTER
// ===============================

function set(id,value){

let el = document.getElementById(id)

if(el){
el.innerText = value
}

}