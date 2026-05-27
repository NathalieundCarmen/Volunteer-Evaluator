# Volunteer-Evaluator
AI-assisted moderation decision support tool for volunteer moderators on POP and FET . Built with Claude API. Supports forum and chat moderation. Human-in-the-loop: AI recommends, humans decide. Developed as part of an AI learning project at IdeaWise Group.
# Moderation Assistant

AI-assisted triage and warning drafting for moderation at POP and FET. Classifier reads rules from CLAUDE.md. Drafter writes warnings from templates. Low-confidence cases skip drafting and go straight to human review.

Related Jira: DFT-11467

## What it does

- Takes a case description
- Returns ACTION (one sentence at the top), category, severity, confidence
- If confidence is High or Medium: drafts a warning
- If confidence is Low: flags for human review without drafting
- If DE-User Channel signals fire: stops immediately, no classification

## How to run

1. Open a terminal in this folder: `cd C:\Users\NatiG\Projects\moderation-assistant`
2. Start Claude Code: `claude`
3. Tell Claude: "Read prompts/classify.md. I will paste cases one at a time. For each, apply classify and - if confidence is High or Medium - also apply prompts/draft.md."
4. Paste a case. Read the structured output. Review before sending any warning.

## Important

- Never send a draft warning without human review. The drafter is a drafter, not an enforcer.
- Hard No list in CLAUDE.md — items there must never be drafted automatically.
- Update CLAUDE.md when rules change. No code changes needed.

## Known gaps (Sprint 3 end)

- No warning templates for Cat C (photo exchange) and Cat F (false accusations) — drafter runs but produces no output
- Output language is English — German language support parked for Sprint 4
- No live queue integration — cases must be pasted manually
- No external interface — currently requires Claude Code; volunteers cannot run this without access
