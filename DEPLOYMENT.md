# 🚀 Vercel Deployment Guide

## Avtomatik Deploy

Loyihangiz GitHub bilan bog'langan va har bir commit avtomatik deploy bo'ladi.

## Environment Variables

Vercel dashboard'da quyidagi environment variable'larni qo'shing:

### Production
```
NEXT_PUBLIC_API_URL=https://admin-crm.onrender.com/api
```

### Preview (optional)
```
NEXT_PUBLIC_API_URL=https://admin-crm-staging.onrender.com/api
```

## Deploy Qilish

### 1. Git Push
```bash
git add .
git commit -m "Update"
git push origin main
```

### 2. Vercel CLI (optional)
```bash
npm i -g vercel
vercel
```

## Build Settings

Vercel avtomatik aniqlaydi, lekin qo'lda sozlash uchun:

- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `next dev`

## Domains

### Production
- `your-app.vercel.app` (avtomatik)
- Custom domain qo'shish: Vercel Dashboard → Domains

### Preview
Har bir branch uchun alohida URL:
- `your-app-git-branch-name.vercel.app`

## Performance

### Optimizations
- ✅ Image optimization (Next.js Image)
- ✅ Code splitting
- ✅ Static generation
- ✅ Edge caching
- ✅ Gzip compression

### Analytics
Vercel Dashboard'da:
- Real-time analytics
- Web Vitals
- Audience insights

## Troubleshooting

### Build Errors

**TypeScript errors:**
```bash
npm run build
```

**ESLint errors:**
```bash
npm run lint
```

### Environment Variables
Vercel Dashboard → Settings → Environment Variables

### Logs
Vercel Dashboard → Deployments → [Your deployment] → Logs

## Monitoring

### Vercel Dashboard
- Deployments history
- Build logs
- Runtime logs
- Analytics

### Status
- Build status: Vercel badge
- Uptime: 99.99%

## Rollback

Agar xatolik bo'lsa:
1. Vercel Dashboard → Deployments
2. Oldingi muvaffaqiyatli deployment'ni toping
3. "Promote to Production" tugmasini bosing

## Custom Domain

### 1. Domain qo'shish
Vercel Dashboard → Domains → Add

### 2. DNS sozlash
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL
Avtomatik (Let's Encrypt)

## CI/CD

### GitHub Actions (optional)
`.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Best Practices

1. **Environment Variables**: Hech qachon `.env.local` ni git'ga qo'shmang
2. **Build Time**: Optimize qiling (< 2 min)
3. **Bundle Size**: Kichik saqlang (< 500KB)
4. **Images**: Next.js Image component ishlatilgan
5. **Caching**: Vercel Edge Network

## Support

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
