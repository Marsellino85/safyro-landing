This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables Setup

### Local Development

Create `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://jfajqvywhlumhjqobgiy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYWpxdnl3aGx1bWhqcW9iZ2l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MDMwMDQsImV4cCI6MjA4MDE3OTAwNH0.Ivf_rwrM6ulg_5xsibipBKe8Zc6IdVP4Le2Namqq94w
```

### Production (Vercel) - **DŮLEŽITÉ PRO FUNKČNOST NA SAFYRO.IO**

Environment variables musí být nastavené na Vercelu, jinak waitlist nebude fungovat na produkci!

**KROK ZA KROKEM:**

1. **Jdi na Vercel Dashboard:**
   - Otevři https://vercel.com
   - Přihlas se do svého účtu

2. **Vyber projekt:**
   - Klikni na projekt `safyro-landing` (nebo jak se jmenuje)

3. **Jdi do Settings:**
   - V horní liště klikni na **"Settings"**
   - V levém menu klikni na **"Environment Variables"**

4. **Přidej první proměnnou:**
   - Klikni na **"Add New"** tlačítko
   - **Key:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** `https://jfajqvywhlumhjqobgiy.supabase.co`
   - **Environment:** Zaškrtni všechny tři:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
   - Klikni **"Save"**

5. **Přidej druhou proměnnou:**
   - Klikni znovu na **"Add New"**
   - **Key:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYWpxdnl3aGx1bWhqcW9iZ2l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MDMwMDQsImV4cCI6MjA4MDE3OTAwNH0.Ivf_rwrM6ulg_5xsibipBKe8Zc6IdVP4Le2Namqq94w`
   - **Environment:** Zaškrtni všechny tři:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - Klikni **"Save"**

6. **Redeploy projekt:**
   - Jdi do **"Deployments"** (v horní liště)
   - Najdi poslední deployment
   - Klikni na **"..."** (tři tečky) vedle deploymentu
   - Vyber **"Redeploy"**
   - Potvrď redeploy

**Po redeploy bude waitlist fungovat i na safyro.io!** 🚀

## Supabase Waitlist

Projekt používá Supabase pro ukládání emailů z waitlistu:
- Tabulka: `waitlist` (id, email, created_at)
- API endpoint: `/api/waitlist` (POST)
- Emaily se ukládají do Supabase databáze

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
