# יעל אנגל - אתר רשמי

אתר רשמי ל-[יעל אנגל](https://yael_music_official.co.il) - שרת, יוצרת ומפיקה מוזיקה.

## טכנולוגיות

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Storage**: Supabase Storage

## תכונות

- 🎵 הצגת שירים ואלבומים
- 🎤 ניהול הופעות וקונצרטים
- 🎧 Backing tracks להורדה
- 📧 טופס יצירת קשר
- 👑 Admin Panel לניהול תוכן
- 📱 Responsive Design (Mobile + Desktop)
- 🌙 Dark Mode עיצוב מודרני

## התקנה

### 1. Clone את הRepos

```bash
git clone https://github.com/BrachiA/yael-music-official.git
cd yael-music-official
```

### 2. התקן Dependencies

```bash
npm install
```

### 3. צור Supabase Account

1. עבור ל-[supabase.com](https://supabase.com)
2. צור project חדש
3. העתק את URL ו-ANON_KEY מהـ Settings

### 4. הגדר Environment Variables

צור קובץ `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_CONTACT_EMAIL=y.e0525787073@gmail.com
```

### 5. הפעל את Development Server

```bash
npm run dev
```

פתח את [http://localhost:3000](http://localhost:3000) בדפדפן.

## Admin Panel

כניסה: `/admin`
סיסמה: `official-y.e`

## Deployment

### Vercel (מומלץ)

```bash
npm install -g vercel
vercel
```

עקוב אחרי ההוראות.

## מבנה הקובץ

```
yael-music-official/
├── app/
│   ├── admin/              # Admin Panel
│   ├── albums/             # Albums Page
│   ├── contact/            # Contact Page
│   ├── performances/       # Performances Page
│   ├── playbacks/          # Playbacks Page
│   ├── studio/             # Studio Page
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Home Page
│   └── globals.css         # Global Styles
├── components/             # Reusable Components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts         # Supabase Client
└── public/                 # Static Assets
```

## לכל השאלות

📧 Email: y.e0525787073@gmail.com
📱 Phone: 050-410-5887
🎵 STUDIO Y: רחוב הלל 11, ברן

---

בנוי בעם ❤️ עבור יעל אנגל
