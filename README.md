This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Check
pnpm exec tsc --noEmit
    ## Check drizzle
    pnpm exec drizzle-kit check
    pnpm exec drizzle-kit generate --name=init_listings
    pnpm exec drizzle-kit migrate
        pnpm exec drizzle-kit push //= generate + migrate
    pnpm exec drizzle-kit generate --name=add_better_auth
## Better Auth
pnpm dlx auth@latest generate --adapter drizzle --dialect postgresql --output db/schema/auth.ts
pnpm dlx @better-auth/cli generate --output ./db/schema/auth.ts //add new plugin -- regenerate
pnpm exec drizzle-kit generate
pnpm exec drizzle-kit migrate
=> pnpm dlx @better-auth/cli create-admin (or auth.api.createUser()) or pnpm dlx auth@latest create-admin  --email "admin@chovui.com"  --name "Chovui Admin"  --password "adminpass@"  --role admin

## Github
git status
git add .
git commit -m "Mô tả ngắn gọn về thay đổi của bạn"
git push origin main

## Seed data
pnpm exec tsx scripts/seed-listings.ts 