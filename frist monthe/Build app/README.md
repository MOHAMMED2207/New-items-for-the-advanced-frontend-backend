# Next.js 16 Starter Template

Includes:
- Next.js 16 (App Router)
- MongoDB (native driver)
- Tailwind CSS
- React Query
- Simple Auth skeleton (server actions)
- UI components (Button, Input, Card, Modal)
- Theme toggle (dark/light)
- Example pages: Home, Login, Dashboard, Contact, FAQ, Reviews

## Env
Create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://user:pass@cluster/mydb
JWT_SECRET=replace_with_strong_secret
```

## Commands

```bash
npm install
npm run dev
```

Notes:
- This template is a starter. You'll want to install shadcn components and add styling tokens, and secure production JWT secrets.
