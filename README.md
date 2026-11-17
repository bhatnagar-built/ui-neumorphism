<div align="center">

# 🎨 Neumorphic UI (React)

**A modern, tactile, and highly customizable Neumorphic (Soft UI) component library for React and TypeScript.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-61dafb.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff.svg)](https://vitejs.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/abhidp/neumorphic-ui/pulls)

[Live Interactive Showcase](#-interactive-showcase) • [Installation](#-installation) • [Quick Start](#-quick-start) • [Components](#-components) • [Theming](#-theming--customization)

---

</div>

## ✨ Highlights

- 📐 **Dual-Shadow Light Physics**: Realistically simulates 45° directional light sources with balanced highlight reflections and diffuse ambient drop-shadows.
- 🌓 **Instant Dark & Light Modes**: Seamless transition between soft tactile slate `#e2e8f0` and deep futuristic dark mode `#181d24`.
- ⚡️ **Zero Bloat & Blazing Fast**: Built with pure CSS variables and modern React hooks — no heavy CSS-in-JS runtimes or forced third-party framework plugins.
- 🛠 **Full TypeScript Precision**: 100% typed with comprehensive IntelliSense and pre-bundled `.d.ts` declaration maps.
- 🎛 **Interactive Theme Provider**: Adjust elevation distance, blur radius, and surface curvatures (flat, convex, concave, inset) at runtime.
- 🧩 **Production-Ready Components**: 12+ accessible components ready to drop into modern web apps, dashboards, and music/IoT interfaces.

---

## 📦 Installation

Install `neumorphic-ui-react` via npm, yarn, or pnpm:

```bash
# npm
npm install neumorphic-ui-react lucide-react

# yarn
yarn add neumorphic-ui-react lucide-react

# pnpm
pnpm add neumorphic-ui-react lucide-react
```

---

## 🚀 Quick Start

### 1. Import Styles and Wrap with `ThemeProvider`

Wrap your application root with `<ThemeProvider>` and import the pre-compiled stylesheet:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'neumorphic-ui-react';
import 'neumorphic-ui-react/style.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" defaultDistance={6} defaultBlur={14}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### 2. Use Neumorphic Components

```tsx
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Switch,
  Input,
  Slider,
  useNeumorphicTheme,
} from 'neumorphic-ui-react';
import { Mail, Sun, Moon } from 'lucide-react';

export default function App() {
  const { theme, toggleTheme } = useNeumorphicTheme();
  const [enabled, setEnabled] = useState(true);
  const [volume, setVolume] = useState(70);
  const [email, setEmail] = useState('');

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <Card variant="raised" radius="xl" padding="lg">
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <CardTitle>Tactile Control Center</CardTitle>
            <Button size="sm" shape="circle" variant="flat" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input
              label="Contact Email"
              placeholder="you@domain.com"
              leftIcon={<Mail size={18} />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              clearable
              onClear={() => setEmail('')}
            />

            <Switch
              checked={enabled}
              onChange={setEnabled}
              label="Enable ambient illumination"
            />

            <Slider
              label="Output Level"
              value={volume}
              onChange={setVolume}
              min={0}
              max={100}
            />

            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <Button variant="flat">Secondary</Button>
              <Button variant="raised" color="primary">
                Save Preferences
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## 🧩 Component Suite

| Component | Description | Variations / Props |
| :--- | :--- | :--- |
| **`Button`** | Tactile button with physical press feedback | `flat`, `raised`, `inset`, `convex`, `concave`, `pill`, `circle`, `loading` |
| **`IconButton`** | Circular / square icon controller | `flat`, `raised`, `inset`, `circle`, `rounded`, custom icons |
| **`Card`** | Soft elevated surface container | `flat`, `raised`, `inset`, `convex`, `concave`, `radius` (sm/md/lg/xl) |
| **`Switch`** | Recessed track slider with extruded knob | `sm`, `md`, `lg`, custom label, disabled state |
| **`Input`** | Carved inset textfield with glow on focus | Prefix/suffix icons, `clearable`, `helperText`, `error` |
| **`Slider`** | Recessed groove track with draggable knob | `min`, `max`, `step`, live numerical readout |
| **`Progress`** | Recessed meter with glowing status fill | `primary`, `success`, `warning`, `danger`, `sm`/`md`/`lg` |
| **`Avatar`** | Extruded circular/rounded user token | `online`, `busy`, `away` presence dots, fallback initials |
| **`Badge`** | Soft beveled tag or pill counter | Status dot, `flat`, `inset`, colored accents |
| **`Tabs`** | Segmented controller with floating active pill | Tab items array, smooth active transition |
| **`Modal`** | Floating elevated dialog with backdrop blur | Keyboard Escape dismiss, backdrop click, animated scale |
| **`Alert`** | Soft inset system notifications | `info`, `success`, `warning`, `danger` accent borders |
| **`Tooltip`** | Floating information bubble | Top / bottom positioning, hover & focus trigger |

---

## 🎨 Theming & Customization

The library exposes dynamic CSS Custom Properties that can be altered programmatically or via standard CSS:

```css
:root {
  /* Light Theme */
  --nm-bg: #e2e8f0;
  --nm-text: #334155;
  --nm-shadow-distance: 6px;
  --nm-shadow-blur: 14px;
  --nm-primary: #3b82f6;
  --nm-primary-shadow: rgba(59, 130, 246, 0.4);
}

[data-theme='dark'] {
  /* Dark Theme */
  --nm-bg: #181d24;
  --nm-text: #e2e8f0;
  --nm-shadow-dark: rgba(0, 0, 0, 0.75);
  --nm-shadow-light: rgba(255, 255, 255, 0.05);
}
```

You can also use the `useNeumorphicTheme()` hook directly:

```tsx
const {
  theme,          // 'light' | 'dark'
  toggleTheme,    // () => void
  setTheme,       // (mode: 'light' | 'dark') => void
  distance,       // number (px)
  setDistance,    // (d: number) => void
  blur,           // number (px)
  setBlur,        // (b: number) => void
} = useNeumorphicTheme();
```

---

## 💻 Local Development

Clone the repository and run the local development server:

```bash
# Clone repository
git clone https://github.com/abhidp/neumorphic-ui.git
cd neumorphic-ui

# Install dependencies
npm install

# Start interactive showcase development server
npm run dev

# Build production showcase website
npm run build

# Build standalone NPM library bundle
npm run build:lib
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — authored by **Abhishek Bhatnagar**.

---

<div align="center">

Crafted with ❤️ by **Abhishek Bhatnagar**  
[GitHub Profile](https://github.com/abhidp) • [LinkedIn](https://linkedin.com)

</div>
