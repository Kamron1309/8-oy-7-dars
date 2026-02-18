# 🚀 Loyihani O'rnatish va Ishga Tushirish

## 1️⃣ Dependencies O'rnatish

```bash
npm install
```

## 2️⃣ Environment Variables

`.env.local` faylini yarating:

```env
NEXT_PUBLIC_API_URL=https://admin-crm.onrender.com/api
```

## 3️⃣ Ishga Tushirish

```bash
npm run dev
```

Brauzer: [http://localhost:3000](http://localhost:3000)

## 4️⃣ Login Ma'lumotlari

API dan olingan login ma'lumotlarini kiriting.

## 📦 O'rnatilgan Paketlar

### Asosiy
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### shadcn/ui Komponentlar
- **@radix-ui/react-avatar** - Avatar
- **@radix-ui/react-dialog** - Modal/Dialog
- **@radix-ui/react-dropdown-menu** - Dropdown
- **@radix-ui/react-label** - Label
- **@radix-ui/react-select** - Select
- **@radix-ui/react-separator** - Separator
- **@radix-ui/react-slot** - Slot
- **@radix-ui/react-switch** - Switch/Toggle
- **@radix-ui/react-tabs** - Tabs
- **class-variance-authority** - CVA
- **clsx** - Class names
- **lucide-react** - Icons
- **tailwind-merge** - Tailwind merge
- **tailwindcss-animate** - Animations

### Boshqalar
- **Axios** - HTTP client
- **Recharts** - Charts

## 🎨 shadcn/ui Komponentlar

Loyihada quyidagi shadcn/ui komponentlar mavjud:

- ✅ Button
- ✅ Card
- ✅ Input
- ✅ Label

Qo'shimcha komponentlar qo'shish uchun:

```bash
npx shadcn-ui@latest add [component-name]
```

Masalan:
```bash
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add select
npx shadcn-ui@latest add switch
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add table
```

## 🎯 Loyiha Strukturasi

```
├── app/                      # Next.js sahifalar
│   ├── (auth)/              # Auth layout group
│   │   └── login/           # Login sahifasi
│   ├── (dashboard)/         # Dashboard layout group
│   │   ├── dashboard/       # Dashboard
│   │   ├── courses/         # Kurslar
│   │   ├── groups/          # Guruhlar
│   │   └── ...              # Boshqa sahifalar
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
│
├── components/              # Komponentlar
│   ├── ui/                  # shadcn/ui komponentlar
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   ├── Layout/              # Layout komponentlar
│   └── ...                  # Boshqa komponentlar
│
├── lib/                     # Utilities
│   ├── services/            # API services
│   ├── utils.ts             # cn() function
│   └── axiosClient.ts       # Axios config
│
└── context/                 # React Context
    ├── AuthContext.tsx      # Auth
    └── ThemeContext.tsx     # Theme
```

## 🔧 Konfiguratsiya Fayllari

- `components.json` - shadcn/ui config
- `tailwind.config.ts` - Tailwind config
- `tsconfig.json` - TypeScript config
- `next.config.js` - Next.js config

## 🎨 Theme

Loyihada Dark/Light mode mavjud. Theme o'zgartirish:

```tsx
import { useThemeMode } from '@/context/ThemeContext';

const { mode, toggleTheme } = useThemeMode();
```

## 🔐 Authentication

```tsx
import { useAuth } from '@/context/AuthContext';

const { login, logout, user, isAuthenticated } = useAuth();
```

## 📝 API Chaqirish

```tsx
import { getAllStudents } from '@/lib/services/studentService';

const students = await getAllStudents();
```

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📚 Qo'shimcha Ma'lumot

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com)
