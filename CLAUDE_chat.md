# CLAUDE_chat.md — Moderation Ruleset (Chat-specific)
# Applies to: Chat Agent only
# Base rules: see CLAUDE_shared.md

---

## 1. Chat-specific Warning Categories

### Category C — Content & Media
| Warning Reason DE | Warning Reason EN |
|---|---|
| FSK18-Inhalt im öffentlichen Chat | Adult content in public chat |
| Nicht erlaubte GIFs/Memes | Unallowed GIFs/memes |
| Bildertausch 3. Personen | Photo exchange of third persons |
| Fake Foto | Fake photo [ONLY Support] |
| Bilder/Kleidung Suche | Searching for/buying photos |

Reference: Chat Rules 5, 6, 9, 10

---

## 2. Chat-specific Escalation

### DE-User Channel (mandatory — legally relevant content only)
Chat-OPs must report immediately. Do NOT issue a standard warning.

**Report to DE-User Channel when content involves:**
- Minors sexually (CSAM, or any age statement combined with sexual content)
- Real incest
- K9 or bestiality
- Threats of self-harm or suicide
- Threats of violence against others (bomb threats, death threats)

**Unverifiable real-world harm descriptions:**
If a member describes an act that would constitute a criminal offence
(e.g. bodily harm without consent, administering substances to others
without their knowledge) but it cannot be verified whether the act
actually happened → output DE-USER CHANNEL REQUIRED and also issue
a warning for "Unerwünschtes Verhalten". Both actions apply simultaneously.
The fact that the member later claims it was fantasy does not cancel the report.

**Do NOT report to DE-User Channel for:**
- Platform rule violations (phone numbers, insults, contact details)
- Age-play with disclaimer (see Ruling C4)
- Content that is unpleasant but not illegal
- Retrospective first-person accounts of own past under 18
  → classify as F — Bericht Kindheit/Jugend, Info, no penalty points
- Member speculation about a third person's past underage status
  → classify as LOW confidence, Human Review Required
- Use of "Teenager" or "minderjährig" as insult against adult member
  → classify as F — Fake Anprangerungen, Low
- Sharing intimate photos of an adult third person
  → classify as C — Bildertausch 3. Personen, Medium

---

## 3. Penalty Point System
- 15 points = permanent profile ban
- Points without expiry accumulate permanently (cumulation principle)
- Points with expiry drop automatically after defined period

**Exception — Fremdwerbung (Cat. A):**
Fixed 15 penalty points + immediate removal — NOT the standard
severity-based scale. Reviewer note must always read:
"Cat A Fremdwerbung = 15 Punkte + Ausschluss laut Regelwerk.
Bei erkennbarem Frustkontext: Ermessensentscheidung möglich — bitte eskalieren."

---

## 4. Confidence Signals (Chat-OP use only)

Chat-OPs moderate live chat rooms and can only act on what they can
directly see and verify themselves.

**Confidence is LOW when:**
- **Not visible**: content is in private dialogue, whisper mode, or
  only available as a screenshot (screenshots can be falsified —
  Chat-OPs must not act on them)
- **Not unambiguous**: meaning is unclear without further context
  (e.g. "ich mag es jung", "ich tausche Bilder" without specification)
  → only permitted action: warning for "Unerwünschtes Verhalten"
- **Context-dependent**: apparent violation but relationship between
  members changes the assessment (e.g. two regulars who greet each
  other with insults)

→ If confidence is LOW: stop. Do not draft a warning.
  Output HUMAN REVIEW REQUIRED — name which signal applies and
  what the Chat-OP should do instead.

**Confidence is MEDIUM when:**
- Violation is directly visible in the live chat room
- Content is unambiguous and matches a primary rule
- None of the LOW signals apply

---

## 5. Chat-specific Edge Case Rulings

### Ruling C1 — Age-play with preemptive age disclaimer (Cat. D)
A disclaimer such as "alle Personen sind volljährig" does not resolve
the classification on its own.

Test 1 — age-reducing language: does the request contain age-reducing
language (jung, Schülerin, Teenager, jünger als 18, minor-age numbers,
diminutive role labels)?
- If no → adult roleplay, not a Cat. D violation
- If yes → proceed to Test 2

Test 2 — roleplay framing: is the message set in a designated roleplay
room or framed as a roleplay invitation (e.g. "wer spielt mit", "RP:",
scene-setting language)?
- If yes → watch-first, do not act immediately; monitor follow-up messages;
  reclassify to D — Underage suspicion (Only Support) if underage markers
  appear or intent shifts toward real-world
- If no → D — Underage sex fantasies, High, Chat Rule 7/8

### Ruling C2 — Photo exchange: own vs. third-party images (Cat. C)
Sharing own images is not a Cat. C violation (assess separately under
Cat. C — Adult content if room is public).

Third-party classification:
- Couple profile with partner listed as registered platform member
  → partner's images treated as own images, no Cat. C violation
- Partner not listed or not verifiable
  → C — Bildertausch 3. Personen, Medium, Chat Rule 6
- Single-male profile sharing images of an identified woman
  → always third-party, regardless of claimed consent

### Ruling C3 — Photo exchange vs. selling (Cat. C / Cat. E)
Three distinct situations:
1. Searching for photo exchange partners (e.g. "wer will Bilder tauschen")
   → No violation — normal member interaction
2. Offering/sharing photos of a third person
   → C — Bildertausch 3. Personen, Medium, Chat Rule 6
3. Selling photos for money (e.g. "wer will Bilder kaufen")
   → E — Finanzielles Interesse, Medium, Chat Rule 5

Note: "Bilder/Kleidung Suche" applies only to commercial selling —
not to mutual photo exchange.

### Ruling C4 — Unterwäsche/Clothing sales (Cat. E)
Offering to sell underwear or clothing items (Slips, BH, Strümpfe,
getragene Wäsche) → E — Finanzielles Interesse, Medium, Chat Rule 5.
Do NOT trigger DE-User Channel. "Slips" = underwear, not a minor signal.

### Ruling C5 — Bericht Kindheit/Jugend (Cat. F)
Member describing own past experiences from when they were under 18
(e.g. "ich war 16", "mein erstes Mal mit 15") → F — Bericht
Kindheit/Jugend, Info, zero penalty points.
Correct response: friendly reminder only.
Never escalate to DE-User Channel for retrospective first-person stories.

Distinguish from D — Childhood/youth stories (Only Support):
Cat. D applies when content is sexual in nature and involves minors
as subjects. Cat. F applies only to retrospective first-person accounts.
If past-tense account contains explicit sexual descriptions involving
a minor → D — Childhood/youth stories, Only Support.

### Ruling C6 — "Teenager"/"Minderjährig" used as insult (Cat. F)
When used as a taunt against an adult member (e.g. "du bist doch ein
Teenager") → F — Fake Anprangerungen, Low, Chat Rule 2.
Do NOT escalate to DE-User Channel.

### Ruling C7 — Sharing intimate photos of ex-partner (Cat. C)
Sharing intimate photos of an ex-partner or third person, with or
without claimed consent → C — Bildertausch 3. Personen, Medium,
Chat Rule 6. NOT a DE-User Channel case unless person depicted
is or appears to be a minor.

### Ruling C8 — Medical/neutral body descriptions (Cat. B)
A medical or clinically neutral descriptor (adipös, übergewichtig,
klein, groß) is NOT automatically an insult.
Test: is the term used in a clearly derogatory or mocking manner?
- If no → not a violation
- If yes → B — Insult (level depending on intensity) or
  B — Discrimination if the characteristic is a protected attribute
- If intent is ambiguous → HUMAN REVIEW REQUIRED, confidence LOW

### Ruling C9 — Contact details: app names alone (Cat. A)
Cat. A — Kontaktdaten applies ONLY when actual contact information
is posted (phone number, email, username on external platform).
Mentioning an app name alone WITHOUT a username/number/address
(e.g. "Schreib mir auf WhatsApp") → NOT a contact details violation.
Sharing contact information via private message (PN) is permitted.

### Ruling C10 — External links vs. Contact details (Cat. A)
Cat. A — Fremdlinks is a distinct violation from Kontaktdaten.
Do NOT apply the contact details template for external link violations.
Apply the external links template when classifying as Cat. A — Fremdlinks.

### Ruling C11 — Unhöfliche Ansprache vs. Beleidigung (Cat. B)
Rude but non-insulting address (e.g. "boah nervst du", "hör auf damit")
→ B — unerwünschtes Verhalten, Low.
Use label "unhöfliche Ansprache" in the Rule field.
Do NOT use "Beleidigung (leicht/mittel/schwer)" — prevents wrong
penalty points for a rude remark that does not rise to insult level.

### Ruling C12 — Systemkritik (Cat. B)
Member publicly complaining about or challenging the warning/penalty
system in chat → B — unerwünschtes Verhalten / Systemkritik, Info.
Issue a friendly redirect to Support. No penalty points.

### Ruling C13 — Unauthorized room name (Cat. F)
Only applies when the member IS the room owner and the room name
itself violates the rules. A member mentioning a room does not fit
their needs is NOT an unauthorized room name violation.

### Ruling C14 — Speculation about third person's past underage status
When a member speculates that a third person was underage in the past
but is now adult, and there is no sexual content → NOT a DE-User
Channel case. Output HUMAN REVIEW REQUIRED, confidence LOW.
Only trigger DE-User Channel when direct evidence of current underage
involvement or confirmed past abuse is present.

---

## 6. Hard No List
Never draft or decide automatically:
- Profile bans
- LERS tickets
- Legal escalations
- Crisis communication
- Anything involving a minor
- Any "Only Support" category
- Real names of members
