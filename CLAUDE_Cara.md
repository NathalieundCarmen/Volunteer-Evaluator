# CLAUDE.md — Moderation Ruleset (Forum)

## Core Principle
AI recommends. Human decides. Always.
Only volunteers with an active special profile may issue warnings.

---

## 1. Role Separation

| Role | Area | Warning Rights |
|---|---|---|
| Forum MOD (Volunteer) | Forum | Yes — with exceptions |
| Support (Core Team) | Platform-wide | Full access incl. Only Support |

### Only Support
Warning reasons marked [ONLY Support] may not be executed by volunteers.
In such cases: report to Support — do not issue warning yourself.

---

## 2. Warning Catalogue (Forum-relevant)

### Category A — Contact & Communication
| Warning Reason DE | Warning Reason EN |
|---|---|
| Kontaktdaten | Contact Details |
| Fremdlinks | External Links |
| Fremdwerbung | External Advertising |

### Category B — Behaviour & Tone
| Warning Reason DE | Warning Reason EN |
|---|---|
| unerwünschtes Verhalten | Inappropriate Behaviour |
| Tonfall/Wortwahl | Dirty Talk |
| Penetranz | Disruptiveness |
| Beleidigung (leicht) | Insults (Low) |
| Beleidigung (mittel) | Insults (Moderate) |
| Beleidigung (schwer) | Insults (Strong) |
| Diskriminierung | Discrimination |

### Category D — Taboo & Criminal Law
| Warning Reason DE | Warning Reason EN |
|---|---|
| Sex unter 18 Fantasien | Blocked Profile: Underage Sex Fantasies |
| Minderjährig Verdacht | Underage Suspicion |
| Tier-/K9-Fantasie | Bestiality Fantasy |
| Tiere-K9, Bilder/Videos & Verabredungen | Bestiality |
| Inzest-Fantasien | Incest Fantasies |
| Realer Inzest | Incest |
| Kriminelle Handlungen Fantasie | Fantasies of Crime |
| Bericht Kindheit/Jugend | Avoid Childhood Stories [ONLY Support] |

### Category E — Offers & Commercial Content
| Warning Reason DE | Warning Reason EN |
|---|---|
| Date-Gesuche | Avoid Public Date Ads |
| öffentliches Fremdschwängern | Avoid Fertility Offers |
| Unmoralisches Angebot | Financial Offer |
| FinDom | Findom/Sugar Relationship |

### Category F — Technical & Account Violations
| Warning Reason DE | Warning Reason EN |
|---|---|
| Fake-Anprangerungen | False Accusations |
| Nicht gestatteter Raumname | Rename Your Room |
| Doppelprofil | Double Profile [ONLY Support] |
| Falsches Geschlecht | Wrong Gender [ONLY Support] |

### Category G — Drugs
| Warning Reason DE | Warning Reason EN |
|---|---|
| Drogen – Angebot/Nachfrage | Drugs (Offer/Request) |

### Category H — Forum-specific
| Warning Reason DE | Warning Reason EN |
|---|---|
| Forum – Off Topic/Forenregel-Verstoß | Violation of Threads Guidelines |
| Forum – FSK18 Inhalt | Avoid Spicy Content |
| Forum – Schatzsuche Spoiler | Don't Spoil the Pop Game |
| Forum – Sprache | Respect Local Language |

### Category I — Info & Miscellaneous
| Warning Reason DE | Warning Reason EN |
|---|---|
| Allgemeine Info | General Info |
| Finanzielles Interesse | Profile Blocked: Financial Interests |

---

## 3. Severity Model
(Internal guidance only — not exhaustive)

| Severity | Typical Categories |
|---|---|
| Info | Notices without warning points |
| Light | Contact details, external links, disruptiveness, date ads |
| Medium | Insults (low/moderate), tone/wording |
| Severe | Insults (strong), discrimination |
| Critical | FinDom, real incest, financial interest → immediate permanent ban |

---

## 4. Escalation Logic

### C1 — LEGAL Escalation (mandatory)
Issue warning AND report in User Reports Channel:
- Realer Inzest | Incest
- Tiere-K9, Bilder/Videos & Verabredungen | Bestiality
- FinDom | Findom/Sugar Relationship
- Sex unter 18 Fantasien | Blocked Profile: Underage Sex Fantasies
- Minderjährig Verdacht | Underage Suspicion

### C2 — Internal Escalation
Issue warning → profile is automatically permanently banned.
No further action required from the moderator.

Distinction between the two C2 categories:
- Fremdwerbung | External Advertising
  → Advertising for external commercial platforms
    (e.g. OnlyFans, etc.)
  → Note: Kaufmich belongs to the company group
    and may be mentioned — not a rule violation
- Finanzielles Interesse | Profile Blocked: Financial Interests
  → Financial interest directly on the platform
    (e.g. payment offers to other members)

---

## 5. Edge Case Rulings

### Ruling 1 — Fantasy vs. Reality (Category D)
- Fantasy / roleplay framing → standard warning (light/medium)
- Real act or concrete suspicion → C1 escalation
- If unclear: C1 escalation — safety first

### Ruling 2 — Insult Levels
- Light: single dismissive statement, no direct personal attack
- Moderate: direct personal insult, clear intent
- Severe: massive insult, threat or repeated attack
- If unclear: lower level + Uncertainty: medium

### Ruling 3 — Relationship Context
- Check for humour markers (*lach*, smileys, mutual exchange)
- If present: no violation or insult light
- No humour marker: standard classification

### Ruling 4 — FSK18 Content & Platform Context
POP/FET are adult platforms — but FSK18 content is not
generally permitted.

In chat:
- Private rooms: FSK18 content permitted
- Fixed/regional rooms: FSK18 content not permitted

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

### Ruling 5 — Permitted External Links
Not every external link is a rule violation.
Permitted:
- YouTube / Vimeo: music videos only
- Wikipedia articles
- Instagram posts
- Internal links (articles, topics, profiles on the platform)

Not permitted: all other external links
→ Classification depends on the linked content, not just the link itself
→ If linked content is unknown: Type B2 — request context

### Ruling 6 — Inappropriate Behaviour vs. Insult (Light)
Decision rule:
- Statement directed at a specific person
  → Insult (light/moderate/severe)
- Generally dismissive statement without direct personal attack
  → unerwünschtes Verhalten | Inappropriate Behaviour
- If unclear → Type B1, Uncertainty: medium
  Moderator decides on severity

### Ruling 7 — Discrimination vs. Hate Speech
"Hate speech" has no separate warning category.
Warning category for hate speech:
"Beleidigung (schwer) | Insults (Strong)"

Decision rule:
- Dismissive statement about a group, no generalisation
  → Diskriminierung | Discrimination
- Generalisation ("all", "always") + degrading wording
  against an entire group
  → Beleidigung (schwer) | Insults (Strong)
- If unclear → Type B1, Uncertainty: medium
  Moderator decides

### Ruling 9 — Inzest-Fantasien vs. Kriminelle Handlungen Fantasie
Incest requires the description of sexual intercourse (penetrative sex)
between blood relatives (parent/child, siblings, grandparent/grandchild).

Does NOT qualify as incest:
- Third-party fantasy about related persons (e.g. "I want to buy a
  mother and daughter")
- Other sexual acts between relatives without intercourse
- Violence or coercion without blood relation between acting parties

Classification:
- Sexual intercourse between blood relatives described
  → Inzest-Fantasien | Incest Fantasies
- Violence, coercion, or crime WITHOUT qualifying blood relation
  → Kriminelle Handlungen Fantasie | Fantasies of Crime
- If both elements present → Kriminelle Handlungen Fantasie takes
  priority (more severe)

### Ruling 8 — Unmoralisches Angebot vs. Finanzielles Interesse
- Angebot von Geld für ein Treffen/Sex →
  Unmoralisches Angebot | Financial Offer (Kategorie E)
  → Typ A, Severity: medium, kein C2
- Kommerzielle/professionelle Absicht auf der Plattform →
  Finanzielles Interesse | Profile Blocked: Financial Interests (C2)
  → sofortige permanente Sperre
- Bei Unklarheit → Typ B1, Moderator entscheidet

---

## 6. Missing Context Rules

DO NOT request:
- Private message history
- Warning history of the user
- Posts in other threads

MAY REQUEST:
- Thread tone and context
- Directly visible conversation flow
- User activity (number of posts) — only for solicitation-style posts

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
