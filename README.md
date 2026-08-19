# HuquqAI Design Studio

PROJECT: "HuquqAI" — UI/UX va Frontend qurish (faqat dizayn bosqichi)

Build the frontend UI/UX for "HuquqAI" — an AI-powered legal, tax, and notarial assistant platform for individuals and small businesses in Uzbekistan. At this stage, focus ONLY on visual design, layout, responsiveness, and user experience. Use mock/placeholder data and static components — no real backend, no real API calls, no real authentication logic yet. All buttons and forms should be visually complete and interactive (state changes, transitions) but can submit to nowhere for now.

=== LANGUAGE REQUIREMENT (CRITICAL) ===

The PRIMARY and DEFAULT language of the entire UI is Uzbek (Latin script) — every single piece of text: headlines, buttons, navigation, form labels, placeholder text, chat bubbles, tooltips, error messages, footer — must be in Uzbek by default when the app first loads.

A language switcher (O'zbekcha / Русский / English) must be visible in the header, allowing the user to change the interface language. Russian and English are secondary — build the switcher UI and make sure text elements are structured so translations can be swapped in later, but the app must open in Uzbek by default, no exceptions, no mixed-language screens.

=== TECH STACK ===

React + TypeScript + Tailwind CSS + shadcn/ui components. Fully component-based, clean and reusable.

=== DESIGN DIRECTION ===

- Color palette: deep navy blue as primary (trust, legal, serious), white/light gray background, ONE accent color (teal or muted gold) for CTAs and highlights only

- Typography: Inter or similar clean sans-serif; generous line-height especially for legal/dense text blocks

- Avoid generic "AI startup" look: no purple/blue gradient blobs, no overly playful shapes, no trendy neon accents — this must feel credible, calm, professional, like a serious legal/financial product

- Generous whitespace — never let sections feel cramped, since legal content itself is already dense

- Icons: simple outline-style (e.g. lucide-react), never cartoonish or filled/3D style

- Buttons: clear primary/secondary hierarchy, minimum 44x44px touch targets everywhere

- Consistent spacing scale (e.g. Tailwind's default 4/8/12/16/24/32px system) across all pages — no ad hoc spacing

=== RESPONSIVE REQUIREMENTS (CRITICAL) ===

- Mobile-first: design and verify every screen starting at 375px width, then scale to tablet (640–1024px) and desktop (1024px+)

- Header: hamburger menu on mobile, full horizontal nav on desktop

- Chat interface: full-screen on mobile with a collapsible sidebar (slide-in drawer), fixed sidebar on desktop

- All forms: large touch-friendly inputs, correct keyboard types implied for phone/email fields

- No horizontal scrolling, no overflow, no elements cut off at any breakpoint

- Test and confirm layout integrity at 375px, 768px, and 1440px before considering a screen "done"

- Site must load and feel fast — avoid heavy unnecessary animations, large unoptimized images, or bloated components that slow down first paint

=== PAGES TO BUILD (in this order) ===

1. PUBLIC MARKETING HOMEPAGE

   - Hero: strong Uzbek headline + subheadline + primary CTA ("Bepul sinab ko'ring") + secondary CTA ("Narxlarni ko'rish")

   - Trust indicator badge ("O'zbekiston rasmiy huquqiy manbalariga asoslangan")

   - "Qanday ishlaydi" — 3-step visual (Savol bering → AI qonunlarni qidiradi → Manba bilan javob oling)

   - Interactive sample Q&A demo widget (mock data, in Uzbek)

   - Testimonials section (placeholder)

   - Pricing preview section

   - FAQ accordion

   - Footer: legal disclaimer, contact, social links

2. PRICING PAGE

   - Free / Pro / Business comparison table

   - Clear feature checklist per tier

   - FAQ about billing

3. ABOUT PAGE

   - Mission statement

   - "AI qanday ishlaydi" — simple RAG explanation for non-technical users

   - Data sources disclosure section

4. CHAT / Q&A INTERFACE (core screen — most important)

   - Category selector at top (Soliq, Biznes ro'yxatdan o'tkazish, Notarial, Mehnat huquqi, Shartnomalar)

   - Message input + send button

   - AI response bubbles showing: plain-language javob, expandable "Manba" section with article citation, thumbs up/down feedback icons, "Davom savol berish" quick action

   - Sidebar: searchable, deletable past conversations list (collapsible on mobile)

5. ACCOUNT / SETTINGS PAGE (mock)

   - Profile fields, subscription plan display with upgrade button, language preference selector

Build and show me ONE page at a time, starting with the Public Marketing Homepage. Wait for my confirmation before moving to the next page. Every page must be verified responsive at mobile, tablet, and desktop before we proceed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b0a9c101-bb11-4046-a559-4dad4851484d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
