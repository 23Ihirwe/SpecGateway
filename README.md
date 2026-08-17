# ![SpecGateway]

---

## Project Overview

Choosing a BSE specialisation can be difficult when a student has not yet experienced enough of each field to know exactly where they fit.

SpecGateway was created to make that decision more reflective.

Instead of directly asking students which specialisation they already prefer, the assessment looks at **how they approach problems, what catches their attention and how they respond to different technical situations**.

Their responses build signals across four BSE specialisation pathways:

- **Low-Level Programming** — systems, memory, execution behaviour and performance
- **AR/VR** — immersive experiences, spatial interaction and 3D environments
- **Full-Stack Web Development** — interfaces, application logic, services and data
- **Machine Learning** — data, patterns, experimentation and prediction

At the end of the assessment, those signals are compared to identify the student's strongest pathway.

The result is supported by an explanation, a visual profile and practical next steps.

> **The result is not a permanent label. It is a direction worth exploring.**

---

## The SpecGateway Journey

SpecGateway is designed as a journey rather than a traditional questionnaire.

### EXPLORE → DECIDE → CALCULATE → REVEAL → CONTINUE

### 01 — Explore

Students are introduced to the four BSE pathways and begin reflecting on the kinds of technical problems and experiences that naturally interest them.

### 02 — Decide

Students move through interactive questions and scenarios where their choices reveal different interests and problem-solving preferences.

### 03 — Calculate

Behind the interface, JavaScript processes the student's responses and builds scores across all four specialisations.

### 04 — Reveal

The strongest pathway is presented together with personalised reasoning, compatibility information and a visual representation of the student's complete pathway profile.

### 05 — Continue

The recommendation becomes a starting point rather than an ending. Students receive practical ideas for what they can learn, build and test next as they continue developing their Learning Journey Plan.

---

## The Four Pathways

| Specialisation | What it explores |
| --- | --- |
| **Low-Level Programming** | Systems, memory, execution behaviour, performance and deeper software control |
| **AR/VR** | Immersive experiences, spatial interaction, 3D environments and interactive technologies |
| **Full-Stack Web Development** | Interfaces, application logic, services, databases and connected applications |
| **Machine Learning** | Data, patterns, experimentation, prediction and intelligent systems |

The pathways are not presented as obvious scoring labels throughout the assessment.

Instead, different responses contribute signals toward the four areas so that the recommendation develops from the student's overall pattern of decisions.

---

# Features

## Landing Page

The landing page introduces the purpose and visual identity of SpecGateway before the student enters the assessment.

Features include:

- Custom SpecGateway branding
- Responsive navigation
- Custom background imagery
- Introduction to all four BSE specialisations
- Interactive pathway cards
- Animated interface elements
- Student information form
- Real-time form validation
- Custom JavaScript validation
- Inline validation feedback
- Responsive layout
- Clear assessment entry point

The landing page is designed to give students context before asking them to make decisions about their possible pathway.

---

## Interactive Assessment

SpecGateway contains **8–10 interactive questions** designed around interests, technical instincts and problem-solving behaviour.

The questions are intentionally written so that the pathway connected to an answer is not always immediately obvious.

Instead of repeatedly asking questions such as:

> *"Do you like Machine Learning?"*

a question can reveal that preference through a student's instinct to investigate data, compare patterns or use evidence to understand a problem.

The assessment includes:

- Scenario-based questions
- Interactive answer cards
- Visual questions
- Interactive slider input
- Media-based assessment interaction
- Balanced choices across all four pathways
- Previous-question navigation
- Answer-state preservation
- Live progress tracking
- Progress percentage
- Live countdown timer
- Timeout handling
- Dynamic question updates
- JavaScript-driven scoring

This makes the assessment feel like a sequence of decisions rather than a standard multiple-choice questionnaire.

---

## Interactive Slider

One part of the assessment uses an interactive slider to explore where the student's preference sits between two different approaches.

Rather than forcing every decision into a simple A/B choice, the slider allows the student to express a position along a scale.

This adds variety to the assessment and provides another way of collecting a pathway signal.

---

## Media-Based Scenario

The assessment also includes an interactive media scenario.

Students observe a technical situation and then respond to a question connected to what they have seen.

JavaScript media events connect the media behaviour with the assessment flow.

This gives the assessment more variety than a sequence of identical text-based questions.

---

## Progress Tracking

The assessment interface communicates how far the student has progressed.

Progress information updates dynamically as questions are completed.

This gives students a clear sense of:

- where they are in the assessment;
- how much they have completed;
- and how much remains.

---

## Countdown Timer

A live countdown timer runs during the assessment.

JavaScript manages the countdown and updates the interface while the assessment is active.

The application also handles the timeout state when the available assessment time reaches zero.

This adds a stronger sense of progression while demonstrating JavaScript timing and state-management behaviour.

---

## Four-Pathway Scoring

Every relevant assessment response contributes signals toward:

1. **Low-Level Programming**
2. **AR/VR**
3. **Full-Stack Web Development**
4. **Machine Learning**

The application accumulates these signals throughout the assessment.

The strongest overall score becomes the primary recommendation, while the remaining scores are preserved to show the student's broader profile.

The final result is therefore based on a pattern across several decisions rather than one isolated answer.

---

## Results Page

The Results experience is designed to explain the recommendation rather than simply display a specialisation name.

It includes:

- Assessment completion reveal
- Personalised student result
- Recommended BSE specialisation
- Primary compatibility percentage
- Explanation of why the pathway fits
- Comparison across all four specialisations
- HTML5 Canvas profile visualisation
- Profile signal map
- Secondary pathway information
- Reflection content
- Practical next steps
- Suggested areas to explore
- Celebration animation
- Sharing controls
- Restart assessment option

The Results page is designed to answer more than:

**"Which specialisation did I get?"**

It also helps the student understand:

**"Why does this direction fit my responses, and what could I explore next?"**

---

## HTML5 Canvas Profile Visualisation

The Results page includes a custom visualisation created with the native **HTML5 Canvas API**.

The visualisation represents the student's four pathway scores:

- Low-Level Programming
- AR/VR
- Full-Stack Web Development
- Machine Learning

The strongest pathway is displayed alongside the other three signals so that the student can understand the overall shape of their result.

This supports an important idea behind SpecGateway:

> **One pathway can lead while other strengths still remain visible.**

A student might receive AR/VR as their strongest recommendation while still showing meaningful Machine Learning, Full-Stack or Low-Level signals.

The visualisation is drawn directly with **Canvas and JavaScript**.

No external charting library such as Chart.js is required for the custom result visualisation.

---

## Next Steps

The recommendation does not end with the result.

SpecGateway provides practical next-step suggestions connected to the student's recommended pathway.

These suggestions are designed as small experiments students can use to test whether the specialisation continues to interest them.

Depending on the result, the next steps can encourage students to:

- explore the foundations of the pathway;
- experiment with relevant technologies;
- build a small project;
- test an idea through practice;
- observe which parts of the work feel natural or challenging;
- and refine their skills based on what they discover.

This connects the recommendation back to the student's wider **Learning Journey Plan**.

---

## Contact Page

The Contact page provides another interaction point within the SpecGateway experience.

Features include:

- Structured contact form
- Real-time validation
- Required-field checking
- Custom validation feedback
- Inline error messages
- Responsive form layout
- Consistent SpecGateway styling

---

# Technical Implementation

## HTML5

Semantic HTML5 is used to structure the application.

The project makes use of elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<form>`
- `<input>`
- `<button>`
- `<video>`
- `<canvas>`
- `<footer>`

HTML provides the structure for the landing experience, assessment questions, interactive controls, forms and Results page.

---

## CSS3

CSS controls the visual system, responsive layouts and interactive states of SpecGateway.

The project uses:

- CSS custom properties
- Flexbox
- CSS Grid
- Responsive media queries
- Fluid typography
- Background imagery
- Gradient effects
- Hover states
- Focus states
- Validation states
- Interactive cards
- Progress transitions
- Result animations
- Glow effects
- Responsive navigation
- Mobile layout adjustments

CSS also maintains a consistent visual identity across the landing page, assessment, Results page and Contact page.

---

## JavaScript

Vanilla JavaScript powers the interactive behaviour of SpecGateway.

JavaScript is responsible for:

- DOM selection and manipulation
- Event handling
- Student form validation
- Regular-expression validation
- Question navigation
- Answer selection
- Answer-state management
- Progress calculation
- Countdown timer behaviour
- Timeout handling
- Four-category scoring
- Result calculation
- Dynamic result content
- Browser-side storage
- HTML5 Canvas drawing
- Canvas animation
- Media events
- Result sharing behaviour
- Interface interactions

No front-end JavaScript framework is required.

---

## Real-Time Validation

Student information is validated while the user interacts with the form.

The validation system includes:

- Required-field checking
- Custom validation rules
- Regular-expression matching
- Input events
- Blur events
- Inline error messages
- Valid states
- Invalid states
- Form progression control

This gives students immediate feedback instead of waiting until the end of the form.

---

## Browser-Side State

SpecGateway runs as a client-side application.

Browser storage is used where information needs to remain available between different stages of the experience.

This allows information collected during the assessment to remain available when the Results page is generated.

No backend database is required for the specialisation calculation.

---

# Project Structure

```text
SpecGateway/
│
├── index.html
│   └── Landing page and student entry
│
├── quiz.html
│   └── Interactive BSE specialisation assessment
│
├── results.html
│   └── Personalised results and Canvas visualisation
│
├── contact.html
│   └── Contact and feedback
│
├── styles.css
│   └── Main styling, responsive layouts and animations
│
├── script.js
│   └── Validation, assessment logic, scoring,
│       timer, Canvas and interactions
│
├── assets/
│   │
│   ├── images/
│   │   ├── backimage
│   │   ├── low
│   │   ├── VR
│   │   ├── Full-Stack Development Web
│   │   └── Machine Learning
│   │
│   └── logo/
│       └── specgateway-logo.png
│
├── README.md
└── Sources & Attribution
```

---

# Design Direction

SpecGateway uses a modern and immersive visual direction built around the idea of entering a digital gateway.

The interface combines:

- Dark foundations
- Red atmospheric accents
- Cyan highlights
- Violet pathway accents
- Large display typography
- Soft glow effects
- Custom imagery
- Interactive cards
- Canvas graphics
- Smooth transitions
- Responsive spacing

The experience follows the same visual journey as the assessment:

### EXPLORE → DECIDE → CALCULATE → REVEAL → CONTINUE

Different stages have their own purpose while still remaining part of the same SpecGateway identity.

---

# Responsive Design

SpecGateway is designed to adapt across desktop, tablet and mobile screens.

The responsive system uses:

- Flexible containers
- CSS Grid
- Flexbox
- Fluid typography
- Responsive spacing
- Media queries
- Flexible assessment layouts
- Responsive Results sections
- Mobile navigation adjustments

---

## Responsive Breakpoints

The interface adapts to different viewport sizes using the media queries defined in `styles.css`.

The main responsive ranges support:

- **Desktop** — full multi-column experience
- **Tablet** — adjusted grids, typography and spacing
- **Mobile** — stacked layouts and compact navigation
- **Small Mobile** — further typography and spacing adjustments

---

# Accessibility

Accessibility was considered while structuring the interface and interactive elements.

The project includes:

- Semantic HTML structure
- Associated form labels
- Keyboard-accessible controls
- Visible focus states
- Clear validation feedback
- Readable text contrast
- Responsive typography
- Meaningful button labels
- Clear interactive states

These features help make the assessment understandable and usable beyond purely visual interaction.

---

# Privacy

SpecGateway runs entirely on the client side.

Assessment responses are processed in the browser and the recommendation does not require a backend database or student account.

Browser-side storage is used where information needs to remain available between stages of the application.

---

# Getting Started

## Prerequisites

- Modern web browser (Chrome, Edge, Firefox, Brave or Safari)
- Git for cloning the repository
- Python or Node.js if using one of the local-server options below
- No additional project dependencies required

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/23Ihirwe/SpecGateway.git
```

2. Navigate to the project directory:

```bash
cd SpecGateway
```

3. Open `index.html` in your browser or run the project using a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. If you are using the Python server, visit:

```text
http://127.0.0.1:5500/SpecGateway/quiz.html```

You can also run SpecGateway directly from **Visual Studio Code** using the **Live Server** extension.

Open `index.html`, right-click inside the file and select:

```text
Open with Live Server
```

No database or backend configuration is required.

---

# Media & Attribution

External visual assets and technical references used during the development of SpecGateway are documented separately in the project's **Sources & Attribution** file.

The external visual assets include:

- Website background image
- Low-Level Programming image
- AR/VR image
- Full-Stack Web Development image
- Machine Learning image

The **SpecGateway logo was designed by the project author using Canva**.

Individual image source links and technical references are recorded in the Sources & Attribution document.

---

# AI Transparency

Generative AI was used as a supplementary learning, discussion and debugging tool during the development of SpecGateway.

ChatGPT was used to assist with reviewing and troubleshooting areas including:

- HTML structure
- CSS layout and responsive behaviour
- JavaScript functionality
- Form validation
- Regular expressions
- Assessment flow
- Question balancing
- Four-pathway scoring
- Countdown timer behaviour
- Interactive media
- HTML5 Canvas
- Results presentation
- Project documentation

AI suggestions were reviewed and adapted during development to fit the purpose, structure and visual direction of SpecGateway.

Further information about AI assistance is recorded in the project's **Sources & Attribution** document.

---

# Why SpecGateway?

The name **SpecGateway** combines two ideas behind the project.

**Spec** represents the BSE specialisation a student is trying to understand.

**Gateway** represents the role of the application.

SpecGateway is not intended to make a permanent academic or career decision for a student.

Instead, it provides a gateway into exploring a direction that matches patterns in how the student thinks, solves problems and responds to technical situations.

That idea influenced the assessment questions, scoring system and Results experience.

> **A direction worth exploring, not a permanent label.**

---

# Author

** HILDEGARDINE Ihirwe**

BSE Student  
African Leadership College of Higher Education

**GitHub:**  
https://github.com/23Ihirwe

**Project Repository:**  
https://github.com/23Ihirwe/SpecGateway

---

# Acknowledgments

Special thanks to:

- **African Leadership College of Higher Education** for the academic project context
- The **BSE programme** for the four specialisation pathways explored through SpecGateway
- **MDN Web Docs** for browser API and web-development documentation
- **Canva** for the design environment used to create the SpecGateway logo
- Students and peers who test the application and provide feedback on the experience

---
# ![SpecGateway](https://img.shields.io/badge/SpecGateway-8B5CF6?style=for-the-badge&logo=code&logoColor=white)

### Explore how you think. Discover where it could take you.

An interactive **BSE Specialisation Advisor** designed to help incoming Software Engineering students reflect on their interests, strengths and problem-solving preferences before choosing a direction for their Learning Journey Plan.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Canvas](https://img.shields.io/badge/HTML5-Canvas-8B5CF6?style=flat-square)
![Responsive](https://img.shields.io/badge/Design-Responsive-22C55E?style=flat-square)

---

# Repository

The complete source code for SpecGateway is available on GitHub:

**SpecGateway**  
https://github.com/23Ihirwe/SpecGateway

---

### Explore how you think. Discover where it could take you.

**SpecGateway — your result opens a direction, not a limit.**