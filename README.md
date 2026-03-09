```
# 🖥 IBM Z Operations Simulator

![Mainframe Simulator](cover.png)


> A realistic **IBM Z / zOS operations dashboard simulator** built with **HTML, CSS and JavaScript**.

This project simulates a **Mainframe Operations Center**, similar to what capacity planning teams, system programmers and operators use to monitor a running **IBM Z environment**.

Perfect for:

- 🎓 teaching mainframe concepts
- 🧑‍💻 demonstrations
- 🏫 classrooms
- 📊 presentations
- 👨‍🚀 mainframe beginners (padawans)

---

# 🚀 What This Simulator Does

The simulator recreates a **10-minute operational cycle** of a mainframe environment including:

- CPU usage
- Memory usage
- DASD storage
- JES2 job queues
- CICS transactions
- DB2 activity
- TCP/IP network
- LPAR workloads
- operator console
- system incidents

After 10 minutes, the simulation **automatically restarts**.

---

# 🖥 System IPL Simulation

When the system starts, the simulator reproduces a classic **z/OS IPL sequence**:
```

IPL 0A80
 IEA995I SY1 SYSTEM READY
 HASP373 JES2 INITIALIZATION COMPLETE
 VTAM INITIALIZED
 TCPIP STACK READY
 CICS REGION CICSPROD STARTED
 DB2 SUBSYSTEM DB2P ACTIVE

```
This simulates the moment a system programmer or operator sees the system coming online.

---

# 🎛 Dashboard Tabs

The interface contains multiple operational views.

### 📊 Overview
General system performance.

Metrics:

- CPU utilization
- memory usage
- jobs in system
- network throughput
- CPU performance chart

---

### 🗂 JES2

Simulates batch workload control.

Displays:

- running jobs
- job queue
- spool usage

Example scenario:
```

JOB RUNNING: 145
 JOB QUEUED: 87
 SPOOL DATASETS: 5621

```
---

### ⚡ CICS

Simulates an online transaction processing environment.

Metrics include:

- transactions per second
- response time
- active tasks

---

### 🧠 DB2

Simulates database subsystem activity.

Metrics:

- active threads
- lock usage
- bufferpool hit ratio

---

### 💾 Storage

Represents DASD usage and I/O activity.

Metrics:

- DASD utilization
- I/O per second

---

### 🌐 Network

Simulates the TCP/IP stack.

Metrics:

- active sessions
- bandwidth usage

---

### 🖥 LPAR

Displays multiple logical partitions running simultaneously.

Example:
```

LPAR1  PRODUCTION
 LPAR2  BATCH
 LPAR3  TEST

```
Each LPAR has independent:

- CPU load
- memory usage

---

### 💻 Operator Console

Simulates basic system commands used by operators.

Supported commands:
```

D A,L
 D U,ALL
 $D JOBQ

```
Example output:
```

ACTIVE JOBS LISTED
 ALL DEVICES ONLINE
 JOB QUEUE DISPLAYED

```
---

# 🚨 Incident Simulator

Random incidents are generated to simulate real operational problems.

Examples:
```

CPU SPIKE DETECTED
 DB2 LOCK ESCALATION
 CICS RESPONSE DELAY
 CHANNEL PATH BUSY

```
These events help illustrate how operations teams detect abnormal conditions.

---

# ⏱ Simulation Cycle

The system simulates **10 minutes of activity**.

Every second:

- metrics change
- workloads fluctuate
- incidents may occur

After 10 minutes:
```

Simulation automatically restarts

```
This makes it ideal for **continuous demonstration environments**.

---

# 🧑‍🚀 Mainframe Padawan Guide

If you are new to mainframes, this simulator helps visualize important concepts.

### What is an LPAR?

A **Logical Partition** is a virtual mainframe running inside the physical IBM Z machine.

A single system can run many LPARs at the same time.

---

### What is JES2?

**JES2 (Job Entry Subsystem)** manages batch jobs.

Responsibilities include:

- job scheduling
- job queues
- spool management

---

### What is CICS?

**Customer Information Control System**

A transaction processing monitor used by banks, airlines and governments.

Example:
```

ATM withdrawals
 credit card authorization
 online banking

```
---

### What is DB2?

IBM's enterprise relational database running on z/OS.

It manages:

- transactions
- locks
- buffer pools
- SQL workloads

---

# 🛠 Technologies Used

The simulator is intentionally simple so students can study it easily.
```

HTML5
 CSS3
 JavaScript
 Chart.js

```
No frameworks required.

---

# 📂 Project Structure
```

mainframe-simulator

index.html
 style.css
 simulator.js
 README.md
 cover.png

```
---

# 🎓 Educational Use

This simulator was designed for:

- training sessions
- mainframe courses
- technical workshops
- live demonstrations
- beginner orientation

---

# 🌍 Why This Project Exists

Mainframes power:

- banking systems
- stock exchanges
- airlines
- governments
- global payment networks

Yet most people **never see how a mainframe operates**.

This project helps visualize that environment.

---

# 🤝 Contributions

Contributions are welcome!

Ideas for future improvements:

- RMF performance charts
- WLM workload simulation
- DASD volume maps
- channel path monitoring
- RACF security events
- JES2 spool visualization
- 3270 terminal emulator

---

# ⭐ Support the Project

If you enjoyed this project:

⭐ Star the repository  
🍴 Fork the project  
👨‍💻 Improve the simulator  
📢 Share with other mainframe learners

---

# 🧠 Final Thought

Mainframes have powered the digital world for **more than 60 years**.

Understanding them is like discovering the **engine room of the internet**.

Welcome aboard.
```
