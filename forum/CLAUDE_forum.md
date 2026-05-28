# CLAUDE_forum.md — Moderation Ruleset (Forum-specific)
# Applies to: Forum Agent only
# Base rules: see CLAUDE_shared.md

---

## 1. Forum-specific Warning Categories

### Category H — Forum-specific
| Warning Reason DE | Warning Reason EN |
|---|---|
| Forum – Off Topic/Forenregel-Verstoß | Violation of Threads Guidelines |
| Forum – FSK18 Inhalt | Avoid Spicy Content |
| Forum – Schatzsuche Spoiler | Don't Spoil the Pop Game |
| Forum – Sprache | Respect Local Language |

---

## 2. Forum-specific Escalation

### C2 — Internal Escalation (Forum additions)
- Fremdwerbung | External Advertising
  → Advertising for external commercial platforms (e.g. OnlyFans)
  → Note: Kaufmich belongs to the company group
    and may be mentioned — not a rule violation
- Finanzielles Interesse | Profile Blocked: Financial Interests
  → Financial interest directly on the platform

---

## 3. Forum-specific Edge Case Rulings

### Ruling F1 — FSK18 Content & Platform Context
POP/FET are adult platforms — but FSK18 content is not
generally permitted in the forum.

In the forum:
- Generally not permitted
- Exception: "Erotische Geschichten" (accessible only to members
  with FSK18 approval) — not mapped in prompt,
  moderators know this from training

Warning categories:
- FSK18 content in the Kink Akademie (FET)
  → "Forum – FSK18 Inhalt | Avoid Spicy Content"
  (only FSK12 content permitted there)
- FSK18 content in the general forum
  → "Forum – Off Topic/Forenregel-Verstoß |
  Violation of Threads Guidelines"

### Ruling F2 — Permitted External Links
Not every external link is a rule violation.
Permitted:
- YouTube / Vimeo: music videos only
- Wikipedia articles
- Instagram posts
- Internal links (articles, topics, profiles on the platform)

Not permitted: all other external links
→ Classification depends on the linked content, not just the link itself
→ If linked content is unknown: Type B2 — request context

### Ruling F3 — Inappropriate Behaviour vs. Insult (Light)
Decision rule:
- Statement directed at a specific person
  → Insult (light/moderate/severe)
- Generally dismissive statement without direct personal attack
  → unerwünschtes Verhalten | Inappropriate Behaviour
- If unclear → Type B1, Uncertainty: medium
  Moderator decides on severity

### Ruling F4 — Unmoralisches Angebot vs. Finanzielles Interesse
- Angebot von Geld für ein Treffen/Sex →
  Unmoralisches Angebot | Financial Offer (Category E)
  → Type A, Severity: medium, NOT C2
- Kommerzielle/professionelle Absicht auf der Plattform →
  Finanzielles Interesse | Profile Blocked: Financial Interests (C2)
  → sofortige permanente Sperre
- Bei Unklarheit → Type B1, Moderator entscheidet
- IMPORTANT: "Finanzielles Interesse" must NEVER appear as an
  alternative classification for personal payment offers for meetings.
  It only applies when there is clear evidence of a
  commercial/professional business model on the platform.

---

## 4. Solicitation & User Activity Rules

### Solicitation Rule
Solicitation-style posts are always treated as such —
regardless of whether the thread context fits thematically.
Example: "Who wants to meet me?" in a discussion thread
is a solicitation post, even if the thread topic covers
contacts/dating.

### User Activity Rule (only for date ads / solicitation)
- 1–10 posts (Newbie): no warning — notice + redirect to Dating
- 11–100 posts (Active User): moderator discretion
- 100+ posts (Regular): warning
  "Forum – Off Topic/Forenregel-Verstoß |
  Violation of Threads Guidelines"
