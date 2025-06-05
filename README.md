# Bee Hive Shop

This project is a Next.js e-commerce application powered by Supabase for authentication and data storage. It lets users browse products, manage a shopping cart, and check out. The app uses Tailwind CSS for styling and includes a basic dashboard to view orders.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Create a `.env` file based on `.env.example` and provide your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_KEY=your-service-role-key
   ```

   The `SUPABASE_SERVICE_KEY` is used by server actions for administrative tasks that bypass row level security.

3. **Run locally**

   ```bash
   npm run dev
   ```

4. **Deploying to a domain**

   Deploy the app to a host such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Configure the same environment variables on your hosting provider and point your domain's DNS records to the generated deployment URL. Most providers offer guides for attaching custom domains.

## Migrations

Database migrations are stored in `supabase/migrations`. Apply them to your Supabase instance using the Supabase CLI:

```bash
supabase db push
```

This will create tables, enable realtime, and enforce row level security.
