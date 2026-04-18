# UI Refactor Plan (Landing Page)

## 🎯 Objective

Upgrade the existing working Next.js landing page UI to a modern SaaS-level design (Stripe / Linear style) without changing any business logic.

This is a UI-only refactor project.

---

## 🚨 Global Rules (STRICT)

- Do NOT modify business logic
- Do NOT modify API calls or data flow
- Do NOT refactor backend or state management
- UI changes ONLY (layout, spacing, typography, colors, visual hierarchy)
- Use Tailwind CSS only
- No introduction of new architectural patterns
- Maintain strict design consistency across all sections

---

## 🎨 Design System Constraints

All UI must follow a unified design system:

### Spacing
- Use consistent vertical rhythm (e.g. py-24 / py-32 per section)
- Avoid arbitrary spacing values
- Maintain consistent padding across all sections

### Typography
- Clear hierarchy: H1 > H2 > H3 > body
- No random font sizes
- Consistent line-height system

### Colors
- Primary color only for accent
- Neutral background system
- No multi-theme inconsistency

### Components
- Reuse Button styles across all sections
- Reuse Card styles across all sections
- Section layout must follow same structure pattern

### Visual Style
- Modern SaaS aesthetic (Stripe / Linear level)
- Minimal + clean
- Subtle shadows only
- Optional soft gradients (light usage only)

---

## 🧱 Page Structure (DO NOT CHANGE ORDER)

Home page sections:

1. HeroSection
2. ServicesSection
3. CapabilitiesSection
4. AdvantagesSection
5. FooterSection

---

## 📊 Execution Strategy

- Tasks must be executed sequentially
- Each task MUST be completed and verified before moving to the next
- No parallel refactoring
- No skipping steps

---

# ✅ TASK 0 — Baseline Audit (READ ONLY)

## Goal
Understand current UI structure before changes.

## Instructions
- List all sections in Home page
- Identify shared UI patterns (buttons, cards, layouts)
- Identify inconsistencies in spacing, typography, colors

## Output
A short structured report.

## Restrictions
- DO NOT modify any code

## Acceptance Criteria
- All sections identified
- UI inconsistencies documented
- No code changes made

---

# ✅ TASK 1 — Design System Alignment

## Goal
Normalize reusable UI primitives.

## Scope
- Button styles
- Card styles
- Section container layout
- Basic typography system

## Rules
- Only modify shared/reusable UI components
- Do NOT modify section structure yet

## Acceptance Criteria
- Buttons consistent across all sections
- Cards visually unified
- Section padding system standardized

---

# ✅ TASK 2 — HeroSection Refactor (CRITICAL)

## Goal
Upgrade HeroSection to premium SaaS landing page quality.

## Requirements
- Strong typography hierarchy
- Clear CTA structure
- Balanced spacing system
- Optional subtle gradient background
- Modern SaaS style (Stripe / Linear)

## Rules
- Do NOT modify other sections
- Do NOT modify logic or props
- UI changes only

## Acceptance Criteria
- Hero visually “premium”
- Clear visual hierarchy
- No layout breaking

---

# ✅ TASK 3 — ServicesSection Refactor

## Goal
Convert ServicesSection into modern card/grid layout.

## Requirements
- Clean grid layout
- Consistent card design
- Matching Hero design system
- Improved spacing consistency

## Rules
- Must reuse Hero button/card styles

## Acceptance Criteria
- Visual consistency with HeroSection
- Clean grid alignment

---

# ✅ TASK 4 — CapabilitiesSection Refactor

## Goal
Improve readability and hierarchy.

## Requirements
- Clear content hierarchy
- Consistent typography system
- Alignment with overall design system

## Acceptance Criteria
- Readable structure
- No visual mismatch with previous sections

---

# ✅ TASK 5 — AdvantagesSection Refactor

## Goal
Enhance benefit/comparison presentation.

## Requirements
- Strong visual hierarchy
- Clean structured layout
- Consistent spacing and typography

## Acceptance Criteria
- Clear value presentation
- Consistent styling

---

# ✅ TASK 6 — FooterSection Polish

## Goal
Make footer minimal and clean.

## Requirements
- Reduce visual noise
- Align with overall design system
- Keep it simple and structured

## Acceptance Criteria
- Clean SaaS-style footer
- No visual dominance

---

# ✅ TASK 7 — Final Consistency Audit

## Goal
Ensure entire page is visually consistent.

## Checks
- Spacing consistency across all sections
- Typography hierarchy consistency
- Button/Card reuse consistency
- Color consistency

## Rules
- Only fix inconsistencies
- Do NOT introduce new design patterns

## Acceptance Criteria
- Full-page visual harmony
- No section feels different
- Unified design system applied

---

# 🔒 Execution Rules (IMPORTANT)

- Execute tasks strictly in order
- Stop after each task and wait for confirmation
- Do not proceed automatically to next task
- Do not refactor unrelated components
- Keep changes incremental and reversible

---

# 🧠 Expected Outcome

After completion:

- Landing page looks like Stripe / Linear quality UI
- No logic changes
- Fully consistent design system
- Clean reusable component structure