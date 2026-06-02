# Todo App — React 19 + TypeScript + Tailwind CSS v4

A modern, responsive, and production-ready **Todo App** built from scratch using React 19, TypeScript, Vite, and Tailwind CSS v4. This project was developed as a hands-on exercise to practice component-based architecture, state management with React hooks, and professional UI styling with utility-first CSS.

---

## Live Demo

> Coming soon — deploy via Vercel or Netlify

---

## Screenshots

| Desktop | Mobile |
|---|---|
| Clean card layout with gradient background | Fully responsive, stacks gracefully on small screens |

---

## Features

- **Add todos** — type a task and hit Add
- **Edit todos** — inline edit mode with Save / Cancel
- **Delete todos** — with a confirmation modal so you never delete by accident
- **Complete / Undo** — toggle todo completion with visual feedback (strikethrough + muted style)
- **Empty state** — friendly message when the list is empty
- **Icons on every button** — using Lucide React for clear visual affordance
- **Fully responsive** — works on mobile, tablet, and desktop
- **Delete confirmation modal** — blur overlay with task name, Cancel and Yes Delete buttons

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI library |
| TypeScript | ~6 | Type safety |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| Lucide React | latest | Icon library |

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Bunyamin-54/todo-app-react-ts.git
cd todo-app-react-ts

# 2. Install dependencies
yarn install

# 3. Start the development server
yarn dev

# 4. Build for production
yarn build
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # App title and subtitle
│   ├── TodoForm.tsx      # Controlled form to add new todos
│   └── TodoList.tsx      # Renders todos with edit, complete, delete
├── ts/
│   └── todos.ts          # ITodo interface (id, task, isDone)
├── original/             # Pre-styling originals kept for reference
│   ├── App.css.original
│   ├── App.tsx.original
│   ├── Header.tsx.original
│   ├── TodoForm.tsx.original
│   └── TodoList.tsx.original
├── App.tsx               # Root component, holds todos state
└── App.css               # Tailwind CSS import
```

---

## What I Learned

- Managing shared state with `useState` and prop drilling in React
- Building controlled form inputs in TypeScript
- Styling with Tailwind CSS v4 utility classes
- Making UI responsive with Tailwind breakpoints (`sm:`, `md:`)
- Using Lucide React icons to improve UX clarity
- Git workflow: initializing a repo, committing, and pushing to GitHub

---

## Author

**Bunyamin-54** — [github.com/Bunyamin-54](https://github.com/Bunyamin-54)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
