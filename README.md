# 📖 LAP Dashboard — Mechatronics Lexicon

[![Live Demo](https://img.shields.io/badge/Live-lap--dashboard.vercel.app-000?logo=vercel)](https://lap-dashboard.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://typescriptlang.org)

A structured, searchable lexicon of electrical engineering and mechatronics terms — built for preparing for the Austrian final apprenticeship exam (Lehrabschlussprüfung / LAP).

**🔗 [Browse the lexicon → lap-dashboard.vercel.app](https://lap-dashboard.vercel.app)**

---

## Features

- **10 categories** with detailed term definitions and explanations
- **Fuzzy search** powered by Fuse.js — find terms instantly
- **Responsive design** — works on desktop, tablet, and mobile
- **Dark theme** with purple/blue gradient aesthetics
- **Animated UI** — smooth page transitions with Framer Motion

---

## Categories

| # | Category |
|---|----------|
| 1 | Safety concepts |
| 2 | Electrical engineering laws |
| 3 | Switchgear cabinets |
| 4 | Semiconductor technology |
| 5 | Cables, wires & connectors |
| 6 | Mechanical machining |
| 7 | Mechanical measurement & testing |
| 8 | Pneumatics |
| 9 | Control & automation / PLC |
| 10 | Power grid systems |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | App Router, static export |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Fuse.js | Fuzzy search |
| Radix UI | Accessible components |

---

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Terms

Edit the terms data file and add entries following this structure:

```typescript
{
  id: "my-term",
  title: "My Term",
  image: "/images/my-image.png",
  description: "Detailed explanation...",
  example: "Practical examples",
  category: "category-id",
}
```

---

## Related

- **[LAP Quiz](https://github.com/mx-town/lap-quiz)** — Interactive quiz app with exam simulation, blitz rounds, and more

---

## License

Built for LAP exam preparation in Austria.
