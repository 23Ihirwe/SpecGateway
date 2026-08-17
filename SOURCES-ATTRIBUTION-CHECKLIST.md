# SpecGateway — Sources & Attribution

This document records the visual assets, technical references and AI assistance used during the development of SpecGateway.

SpecGateway is a BSE Specialisation Advisor designed to help incoming students reflect on their interests, strengths and problem-solving preferences while exploring four BSE specialisation pathways:

- Low-Level Programming
- AR/VR
- Full-Stack Web Development
- Machine Learning

The application was developed using HTML5, CSS3 and vanilla JavaScript.

---

## Project Information

**Project Name:**  
SpecGateway

**Project Scenario:**  
BSE Specialisation Advisor

**GitHub Repository:**  
https://github.com/23Ihirwe/SpecGateway

---

# Media Assets

The visual assets used in SpecGateway help give each specialisation its own identity and make the different pathways easier for students to recognise throughout the experience.

## Background Image

**Local file:**  
`assets/images/backimage`

**Source:**  
Pinterest

**Source URL:**  
https://www.pinterest.com/pin/1138495980821553381/

**Use in SpecGateway:**  
Used as the main background image of the SpecGateway website and to establish the visual atmosphere of the application.

## SpecGateway Logo

**Local file:**  
`assets/logo/specgateway-logo.png`

**Designed by:**  use
Project author using Canva

**Design Link:**  
https://www.canva.com/design/DAXSG7FctbM/X5oiR-fu7a9RuT8wQXlXBg/edit?ui=eyJBIjp7fX0

**Use in SpecGateway:**  
The SpecGateway logo was designed specifically for this project using Canva.

The design was created to give SpecGateway its own visual identity and is used throughout the application as the main project branding.

# Technical References

Official web documentation was consulted while developing and reviewing some of the browser features used in SpecGateway.

## HTML5 Canvas API

**MDN Web Docs — Canvas API**

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

This documentation was referenced while working with the native HTML5 Canvas API used for the dynamic result visualisation and animated graphical effects.

Canvas allows the assessment result to become more than a block of text by giving students a visual representation of the pathway signals produced by their answers.

---

## JavaScript Regular Expressions

**MDN Web Docs — Regular Expressions**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

This documentation was referenced while developing and reviewing the regular-expression patterns used for real-time form validation.

The validation helps ensure that student information is checked as it is entered while providing immediate visual feedback instead of waiting until the entire form is submitted.

---

## HTML5 Video

**MDN Web Docs — Video Element**

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video

This documentation was referenced while working with HTML5 video and JavaScript media events used within the interactive assessment.

The media interaction adds variety to the assessment experience and allows a question to respond to media behaviour rather than relying entirely on traditional text-based questions.

---

## Web Storage API

**MDN Web Docs — Web Storage API**

https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

This documentation was referenced while working with browser-side storage in SpecGateway.

Browser storage is used to preserve information needed across different stages of the assessment and allows the Results page to access information produced during the student's assessment journey.

---

# Generative AI Transparency

ChatGPT by OpenAI was used as a supplementary development and learning tool during the creation of SpecGateway.

I used ChatGPT mainly as a debugging and discussion tool while developing the application. It helped me investigate problems, understand why parts of the implementation were not behaving as expected, and consider different approaches before modifying the project.

AI assistance was used in areas including:

- reviewing HTML, CSS and JavaScript structure;
- debugging CSS layout, positioning and overflow issues;
- improving responsive behaviour;
- reviewing real-time form validation;
- discussing regular-expression patterns;
- debugging JavaScript syntax and event handling;
- reviewing the flow of the assessment questions;
- balancing answer choices across the four specialisations;
- reviewing the multi-category scoring logic;
- working through countdown timer and timeout behaviour;
- discussing interactive media implementation;
- reviewing HTML5 Canvas functionality;
- improving the Results page;
- reviewing the project against the assessment requirements;
- and organising parts of the project documentation.

One important part of the development process was refining the assessment so that it would not simply ask students which technology they already preferred.

Instead, the questions focus more on problem-solving behaviour, interests and working preferences. This allows the recommendation to emerge from patterns across the student's answers rather than from one obvious choice.

AI-generated suggestions were reviewed and adapted during development to fit the structure, purpose and visual direction of SpecGateway.

The final implementation was tested and modified through the project's HTML, CSS and JavaScript files.

## AI Reference

 *ChatGPT* .  
https://chatgpt.com/

---

# Project Repository

The complete SpecGateway source code is maintained in the following GitHub repository:

https://github.com/23Ihirwe/SpecGateway

The repository contains the HTML, CSS, JavaScript and project assets used to build the SpecGateway web application.