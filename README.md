# Next.js Admin Dashboard

Next.js + React + TypeScript + Tailwind CSS bilan yaratilgan admin dashboard.

## 🚀 O'rnatish

```bash
npm install
```

## 🏃 Ishga tushirish

```bash
npm run dev
```

Brauzerda [http://localhost:3000](http://localhost:3000) ochiladi.

## 📁 Struktura

```
├── app/                      # Next.js App Router sahifalari
│   ├── admins/              # Adminlar sahifasi
│   ├── courses/             # Kurslar sahifasi
│   ├── dashboard/           # Dashboard sahifasi
│   ├── groups/              # Guruhlar sahifasi
│   ├── login/               # Login sahifasi
│   ├── logout/              # Logout sahifasi
│   ├── managers/            # Menejerlari sahifasi
│   ├── payments/            # To'lovlar sahifasi
│   ├── profile/             # Profil sahifasi
│   ├── settings/            # Sozlamalar sahifasi
│   ├── students/            # O'quvchilar sahifasi
│   ├── teachers/            # O'qituvchilar sahifasi
│   ├── layout.tsx           # Root layout (AuthProvider, ThemeProvider)
│   └── page.tsx             # Home page (redirect)
│
├── components/              # React komponentlar
│   ├── Dashboard/           # Dashboard komponentlari
│   ├── Layout/              # Layout komponentlari (Sidebar, Navbar)
│   ├── Table/               # Table komponentlari
│   └── ...                  # Boshqa komponentlar
│
├── context/                 # React Context
│   ├── AuthContext.tsx      # Authentication context
│   └── ThemeContext.tsx     # Theme (Dark/Light) context
│
├── lib/                     # Utility funksiyalar
│   ├── services/            # API servis funksiyalari
│   └── axiosClient.ts       # Axios konfiguratsiyasi
│
└── public/                  # Static fayllar
```

## 🔐 API

`.env.local` faylida API URL ni sozlang:

```env
NEXT_PUBLIC_API_URL=https://admin-crm.onrender.com/api
```

## 📄 Sahifalar

| Route | Tavsif |
|-------|--------|
| `/` | Home (dashboard yoki login ga redirect) |
| `/login` | Login sahifasi |
| `/logout` | Logout sahifasi |
| `/dashboard` | Dashboard (statistika, chart'lar) |
| `/courses` | Kurslar ro'yxati |
| `/groups` | Guruhlar ro'yxati |
| `/admins` | Adminlar ro'yxati |
| `/managers` | Menejerlari ro'yxati |
| `/teachers` | O'qituvchilar ro'yxati |
| `/students` | O'quvchilar ro'yxati |
| `/payments` | To'lovlar ro'yxati |
| `/settings` | Sozlamalar |
| `/profile` | Profil |

## 🎨 Xususiyatlar

- ✅ **Dark/Light Mode** - Barcha sahifalarda
- ✅ **Authentication** - Login/Logout tizimi
- ✅ **Protected Routes** - Himoyalangan sahifalar
- ✅ **Responsive Design** - Barcha qurilmalarda ishlaydi
- ✅ **TypeScript** - Type safety
- ✅ **Tailwind CSS** - Modern styling
- ✅ **Recharts** - Chart'lar uchun
- ✅ **Next.js Image** - Rasm optimizatsiyasi
- ✅ **LocalStorage** - Ma'lumotlarni saqlash

## 🔧 Texnologiyalar

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Recharts** - Chart library

## 📝 API Servislar

Barcha API servislar `lib/services/` papkasida:

- `adminService.ts` - Admin API
- `courseService.ts` - Course API
- `groupService.ts` - Group API
- `paymentService.ts` - Payment API
- `settingsService.ts` - Settings API
- `studentService.ts` - Student API
- `teacherService.ts` - Teacher API

## 🎯 Ishlatish

### Login

```typescript
import { useAuth } from '@/context/AuthContext';

const { login } = useAuth();
await login(email, password);
```

### Theme Toggle

```typescript
import { useThemeMode } from '@/context/ThemeContext';

const { mode, toggleTheme } = useThemeMode();
```

### API Chaqirish

```typescript
import { getAllStudents } from '@/lib/services/studentService';

const students = await getAllStudents();
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "^14",
    "axios": "^1.6.0",
    "recharts": "^2.10.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "tailwindcss": "^3.4.0",
    "postcss": "^8",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "^14"
  }
}
```

## 🚀 Build

```bash
npm run build
npm start
```

## 📄 License

MIT

