```
<!--
=====================================================
IBM Z OPERATIONS SIMULATOR
SEO OPTIMIZED README
Author: Vagner Bellacosa
=====================================================

SEO KEYWORDS
mainframe simulator
IBM Z simulator
zOS dashboard
mainframe monitoring
JES2 CICS DB2 simulator
mainframe training
IBM mainframe learning

These comments help maintain documentation clarity.
-->

# 🖥 IBM Z Operations Simulator

![IBM Z Operations Simulator](cover.png)

<!--
Short description optimized for GitHub and Google search results.
Include relevant keywords early.
-->

A **realistic IBM Z / zOS operations dashboard simulator** built using **HTML, CSS and JavaScript**.

This project simulates a **Mainframe Operations Center**, similar to dashboards used by:

- mainframe operators
- system programmers
- capacity planners
- performance analysts

It reproduces **mainframe workload behavior** including JES2 jobs, CICS transactions, DB2 activity, storage usage and network traffic.

Perfect for:

🎓 mainframe training  
🧑‍💻 demonstrations  
🏫 classrooms  
📊 technical presentations  
👨‍🚀 mainframe beginners (padawans)

---

# 🚀 Features

<!--
Feature list improves readability and SEO scanning.
-->

✔ IBM Z dashboard simulation  
✔ z/OS IPL startup screen  
✔ JES2 job queue monitoring  
✔ CICS transaction metrics  
✔ DB2 subsystem activity  
✔ TCP/IP network usage  
✔ DASD storage monitoring  
✔ Multiple LPAR environments  
✔ Operator console commands  
✔ Random incident simulation  
✔ 10-minute operational cycle

---

# 🖥 z/OS IPL Simulation

The simulator begins with a realistic **Initial Program Load (IPL)** sequence similar to what operators see on a real IBM Z system.
```

IPL 0A80
 IEA995I SY1 SYSTEM READY
 HASP373 JES2 INITIALIZATION COMPLETE
 VTAM INITIALIZED
 TCPIP STACK READY
 CICS REGION CICSPROD STARTED
 DB2 SUBSYSTEM DB2P ACTIVE

```
This gives students a sense of how a **z/OS system starts in production environments**.

---

# 🎛 Dashboard Sections

The simulator contains several monitoring screens.

---

## 📊 Overview

General system activity dashboard.

Metrics displayed:

- CPU utilization
- Memory usage
- Jobs running in the system
- Network bandwidth
- CPU performance chart

---

## 🗂 JES2 – Job Entry Subsystem

Simulates batch workload management.

Displays:
```

Running Jobs
 Queued Jobs
 Spool Usage

```
This represents the **batch processing environment** used in banking and large enterprise systems.

---

## ⚡ CICS – Transaction Processing

Simulates online transaction workload.

Metrics include:
```

Transactions per second
 Response time
 Active tasks

```
CICS powers many real-world systems including:

- ATMs
- airline reservations
- banking systems

---

## 🧠 DB2 – Database Activity

Represents the IBM DB2 subsystem.

Metrics simulated:
```

Active threads
 Lock usage
 Bufferpool hit ratio

```
This illustrates how **enterprise databases behave under workload**.

---

## 💾 Storage – DASD

Simulates disk usage and I/O activity.

Metrics include:
```

DASD utilization
 I/O operations per second

```
---

## 🌐 Network – TCP/IP Stack

Represents the z/OS TCP/IP environment.

Metrics:
```

Active sessions
 Network bandwidth

```
---

## 🖥 LPAR Monitoring

Simulates multiple logical partitions.

Example:
```

LPAR1  Production
 LPAR2  Batch
 LPAR3  Test

```
Each partition has its own CPU and memory workload.

This reflects how **IBM Z systems run multiple environments simultaneously**.

---

## 💻 Operator Console

Includes a simulated mainframe operator console.

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
This mimics commands used in **z/OS system consoles**.

---

# 🚨 Incident Simulation

The simulator randomly generates operational alerts.

Examples:
```

CPU SPIKE DETECTED
 DB2 LOCK ESCALATION
 CICS RESPONSE DELAY
 CHANNEL PATH BUSY

```
These events simulate real situations that operations teams must monitor.

---

# ⏱ Simulation Cycle

The simulator reproduces **10 minutes of mainframe activity**.

Every second:

- system metrics update
- workloads fluctuate
- incidents may occur

After the cycle completes, the simulation automatically restarts.

---

# 🧑‍🚀 Mainframe Padawan Guide

<!--
Educational section improves engagement and learning value.
-->

If you are new to mainframes, here are a few key concepts.

### What is an LPAR?

A **Logical Partition** is a virtual mainframe running inside the physical IBM Z hardware.

Multiple operating systems can run simultaneously in different LPARs.

---

### What is JES2?

The **Job Entry Subsystem** manages batch job execution.

Responsibilities include:

- job scheduling
- job queues
- spool management

---

### What is CICS?

CICS is a **transaction processing monitor** used worldwide.

Examples:

- ATM withdrawals
- credit card processing
- online banking

---

### What is DB2?

IBM DB2 is the relational database used by many enterprise applications on z/OS.

It handles:

- SQL queries
- transactions
- locks
- buffer pools

---

# 🛠 Technologies Used

The simulator is intentionally simple to help learning.
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

This project is ideal for:

- mainframe training courses
- university classes
- workshops
- technical demonstrations
- beginner onboarding

---

# 🤝 Contributing

Contributions are welcome!

Possible improvements:

- RMF performance graphs
- WLM workload simulation
- DASD volume visualization
- channel path monitoring
- RACF security events
- JES2 spool dashboards
- 3270 terminal emulator

---

# ⭐ Support the Project

If you enjoyed this simulator:

⭐ Star the repository  
🍴 Fork the project  
👨‍💻 Contribute improvements  
📢 Share with other mainframe learners

---

# 🧠 Final Thought

Mainframes have powered critical systems for more than **60 years**.

Learning how they work reveals the **infrastructure behind the digital world**.

Welcome to the engine room.
```