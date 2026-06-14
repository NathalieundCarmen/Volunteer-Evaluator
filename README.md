# Volunteer Evaluator

AI-assisted moderation support for volunteer teams at POP and FET.

The project provides browser-based moderation assistants that help volunteers classify content, identify rule violations, recommend moderation actions and support escalation workflows.

The assistants are decision-support tools only.

**Human moderators always make the final decision.**

---

## Project Goals

The Volunteer Evaluator was developed to:

- improve moderation consistency
- reduce review time for common cases
- support volunteer moderators and chat operators
- provide structured moderation recommendations
- document moderation reasoning transparently

---

## Components

### Forum Moderation Assistant

Supports volunteer forum moderators.

**Input**
- Forum post content
- Optional thread context

**Output**
- Incident classification
- Recommended moderation actions
- Escalation guidance
- Alternative classifications
- Uncertainty assessment

Typical actions include:

- Hide post
- Edit post
- Issue warning
- Escalate to User Reports Channel

---

### Chat-OP Assistant

Supports volunteer chat operators.

**Input**
- Chat message
- Optional chatlog context

**Output**
- Incident classification
- Recommended moderation actions
- Escalation guidance
- Draft warning text
- Uncertainty assessment

Typical actions include:

- Issue warning
- Escalate to User Reports Channel
- Human review recommendation

---

## Human-in-the-Loop Principle

The assistants provide recommendations only.

Volunteers remain responsible for:

- reviewing all outputs
- selecting appropriate actions
- issuing warnings
- escalating cases when required
- applying platform policies correctly

No moderation action should be taken solely on the basis of AI output.

---

## Escalation Workflows

Certain high-risk cases require additional escalation.

Examples include:

- Minors in sexual context
- Real incest
- Bestiality / K9 content
- Self-harm threats
- Violence threats

Escalation recommendations are provided by the assistants, but final responsibility remains with the moderator.

---

## Languages

The assistants support:

- German (DE)
- English (EN)

Language can be switched directly in the UI.

---

## Current Development Status

Current focus areas include:

- UI harmonization between assistants
- moderation workflow alignment
- escalation workflow refinement
- usability improvements
- validation and testing

The project is under active development.

---

## Repository Structure

```text
chat/
├── chatop-assistant.html
├── CLAUDE_chat.md

forum/
├── moderator-assistant.html
├── CLAUDE_forum.md

assets/
└── Ghosty.png
```

(Structure may evolve during development.)

---

## Development Notes

Recent improvements include:

- Unified avatar integration using external PNG assets
- Reduced HTML file size by removing embedded Base64 images
- Improved consistency between Forum and Chat assistant UIs
- Ongoing alignment of moderation decision workflows

## Local Testing

The assistants currently run via a local Node.js server.

### Requirements

- Node.js installed
- Valid company API key
- Local copy of the project repository

### Configure API Key

Before starting the server, open:

```text
server_shared.js
```

Replace the API key placeholder with a valid company API key.

⚠️ Never commit a real API key to the repository.

The placeholder exists intentionally because hosted environments provide the API key separately during startup.

### Start Forum Moderation Assistant

Open a terminal in the project root and run:

```bash
node server_shared.js 3000
```

Then open:

```text
http://localhost:3000
```

### Start Chat-OP Assistant

Open a terminal in the project root and run:

```bash
node server_shared.js 3001
```

Then open:

```text
http://localhost:3001
```

---

### Notes

- A valid company API key is required.
- The assistants are intended for internal testing and moderation support.
- Final moderation decisions always remain with the human moderator.
  
