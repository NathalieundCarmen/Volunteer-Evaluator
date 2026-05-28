# Chat-OP Decision Assistant

## Deutsch

### Was ist das?
Ein browserbasiertes KI-Tool das Chat-OPs auf POP und FET bei 
Moderationsentscheidungen unterstützt. Kein technisches Setup nötig — 
einfach im Browser öffnen und loslegen.

**KI empfiehlt — Mensch entscheidet. Immer.**

### Voraussetzungen
- Ein aktueller Browser (Firefox, Chrome, Edge)
- Ein Anthropic API-Schlüssel

### So funktioniert es
1. `chatop-assistant.html` im Browser öffnen
2. API-Schlüssel eingeben (wird nur für diese Sitzung gespeichert)
3. Die gemeldete Nachricht eingeben
4. Optional: Chatlog als Kontext hinzufügen
5. Auf "Klassifizieren & Vorlage erstellen" klicken

### Was kommt raus?
| Feld | Beschreibung |
|---|---|
| ACTION | Empfohlene Maßnahme in einem Satz |
| Kategorie | Regelkategorie (z.B. B — Beleidigung) |
| Schweregrad | Low / Medium / High |
| Konfidenz | Low / Medium / High |
| Warnungsentwurf | Vorlage zum Anpassen und Senden |
| Hinweise für Prüfer | Kontext und Begründung |

### Wichtige Hinweise
- DE-USER CHANNEL Alert = sofort eskalieren, keine Warnung senden
- HUMAN REVIEW REQUIRED = bitte selbst entscheiden, kein Entwurf
- Alle Ausgaben sind Vorschläge — nie ohne menschliche Prüfung senden

---

## English

### What is it?
A browser-based AI tool supporting Chat-OPs on POP and FET with 
moderation decisions. No technical setup required — just open in 
the browser and go.

**AI recommends — human decides. Always.**

### Requirements
- A modern browser (Firefox, Chrome, Edge)
- An Anthropic API key

### How it works
1. Open `chatop-assistant.html` in your browser
2. Enter your API key (stored for this session only)
3. Enter the reported message
4. Optionally add the chatlog for context
5. Click "Klassifizieren & Vorlage erstellen"

### What does the output mean?
| Field | Description |
|---|---|
| ACTION | Recommended action in one sentence |
| Category | Rule category (e.g. B — Insult) |
| Severity | Low / Medium / High |
| Confidence | Low / Medium / High |
| Warning draft | Template to adapt and send |
| Notes for reviewer | Context and reasoning |

### Important
- DE-USER CHANNEL alert = escalate immediately, do not send a warning
- HUMAN REVIEW REQUIRED = decide yourself, no draft provided
- All outputs are suggestions — never send without human review
