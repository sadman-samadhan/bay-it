# Nexvia Limited — website

Showcase website for a Bangladesh-based ITES / BPO and software company. Services mirror itxlimited.com: US real estate operations (property preservation, maintenance & renovation, rehab), back-office services, and software development. Alpine Infotech and AmatechBD contributed QA, UI/UX, cloud, marketing, engagement models and pricing ideas.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · framer-motion · lucide-react. No CMS. All content is typed data.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where content lives

| File | What it controls |
| --- | --- |
| `src/data/company.ts` | Brand, phones (BD + US), emails, office, hours, stats, memberships, tech stack. **All placeholder.** |
| `src/data/services.ts` | 3 practices and 16 services: capabilities, deliverables, outcomes, tools, FAQs |
| `src/data/content.ts` | Industries, engagement models and pricing, process, case studies, testimonials, FAQs, jobs, benefits, insights |

## Interactive features

- Live "operations desk" dashboard in the hero, plus Dhaka / New York clocks with US-desk online status
- Practice explorer tabs, tech-stack filter, case-study filter, testimonial slider, searchable FAQ, filterable job board
- Offshore savings calculator, which hands the chosen team to the project brief
- **Get Started** wizard: needs → scope → discovery call in the visitor's time zone (DST-aware conversion to Dhaka time) → contact → review. It sends via email or WhatsApp (no backend).

## Before launch

- Replace placeholder name, contacts, address, stats, memberships (BASIS, ISO wording), leadership and testimonials.
- Case studies are written anonymously ("client names withheld under NDA"). Replace them with real, approved results.
- Have the privacy and terms text reviewed.
- Set `siteUrl` in `company.ts`.
