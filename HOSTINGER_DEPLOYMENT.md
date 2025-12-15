# Deploying to Hostinger (actpy.com/ebquiz)

This guide explains how to deploy your Next.js quiz app to Hostinger under the subdirectory `actpy.com/ebquiz`.

## Prerequisites

Your Hostinger plan must support **Node.js hosting**. Check your hosting plan:
- **Business/Premium plans** typically support Node.js applications
- **Shared hosting** may not support Node.js (only static files)

## Deployment Options

### Option 1: Node.js Hosting (Recommended)

If your Hostinger plan supports Node.js:

#### Step 1: Build the Application

```bash
cd c:\Development\QR_Code\web
npm install
npm run build
```

#### Step 2: Prepare Files for Upload

You need to upload these files/folders to Hostinger:
- `.next/` (entire folder - generated after build)
- `public/` (entire folder)
- `node_modules/` (entire folder - or run `npm install --production` on server)
- `package.json`
- `package-lock.json`
- `next.config.ts`

#### Step 3: Set Up on Hostinger

1. **Access your Hostinger control panel (hPanel)**
2. **Navigate to Node.js section** (usually under Advanced → Node.js)
3. **Create a new Node.js application**:
   - Application root: `/public_html/ebquiz` (or wherever you want)
   - Application URL: `actpy.com/ebquiz`
   - Node.js version: Select 18.x or 20.x
   - Application mode: Production
   - Application startup file: `node_modules/next/dist/bin/next`
   - Arguments: `start`

4. **Upload your files via FTP/SFTP or File Manager**:
   - Upload all files to the application root directory
   - Ensure `.next`, `public`, and `node_modules` folders are uploaded

5. **Set Environment Variables** (in Node.js app settings):
   - `SUPABASE_URL` = your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service role key
   - `SUPABASE_TABLE` = `quiz_submissions` (or your table name)
   - `NODE_ENV` = `production`

6. **Start the application** from the Node.js control panel

#### Step 4: Configure Domain/Subdirectory

If you need to set up a reverse proxy or subdirectory routing:

Create or edit `.htaccess` in `/public_html/`:

```apache
RewriteEngine On
RewriteRule ^ebquiz$ ebquiz/ [R=301,L]
RewriteRule ^ebquiz/(.*)$ http://localhost:PORT/$1 [P,L]
```

Replace `PORT` with the port assigned by Hostinger to your Node.js app.

---

### Option 2: Static Export (If Node.js Not Available)

If your Hostinger plan doesn't support Node.js, you can export as static HTML. **Note:** This will disable the API route (`/api/submit`), so quiz submissions won't be saved to Supabase.

#### Step 1: Modify next.config.ts

Add `output: 'export'`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  basePath: "/ebquiz",
  assetPrefix: "/ebquiz",
  output: "export",
};

export default nextConfig;
```

#### Step 2: Remove API Route

Since static export doesn't support API routes, you need to remove or comment out the API call in `src/app/page.tsx` (lines 165-179).

#### Step 3: Build Static Files

```bash
npm run build
```

This creates an `out/` folder with static HTML/CSS/JS files.

#### Step 4: Upload to Hostinger

1. Access File Manager or use FTP/SFTP
2. Navigate to `/public_html/`
3. Create folder `ebquiz`
4. Upload all contents from the `out/` folder to `/public_html/ebquiz/`

Your app will be accessible at `actpy.com/ebquiz`

---

## Post-Deployment Steps

### 1. Update QR Code

Generate a new QR code pointing to your production URL:

```bash
npm run qr -- --url https://actpy.com/ebquiz
```

This creates `public/qr-code.png` which you can print for your event.

### 2. Test the Application

Visit `https://actpy.com/ebquiz` and:
- Fill out the contact form
- Complete the quiz
- Verify the score displays correctly
- Check if submissions are saved to Supabase (for Node.js deployment)

### 3. Monitor Logs

- Check Hostinger's Node.js application logs for any errors
- Monitor Supabase dashboard for incoming submissions

---

## Troubleshooting

### Issue: 404 Not Found

- Verify the `basePath` in `next.config.ts` matches your subdirectory
- Check that all files are uploaded correctly
- Ensure the Node.js app is running (for Node.js hosting)

### Issue: Assets Not Loading

- Confirm `assetPrefix: "/ebquiz"` is set in `next.config.ts`
- Check browser console for 404 errors on CSS/JS files
- Verify file permissions (should be 644 for files, 755 for folders)

### Issue: API Route Not Working

- Ensure environment variables are set correctly in Hostinger
- Check Node.js app logs for errors
- Verify Supabase credentials are correct

### Issue: Blank Page

- Check browser console for JavaScript errors
- Verify Node.js version compatibility (use 18.x or 20.x)
- Ensure all dependencies are installed

---

## Important Notes

1. **Environment Variables**: Never commit `.env.local` to version control. Set them in Hostinger's control panel.

2. **Database Setup**: Ensure your Supabase table `quiz_submissions` exists with these columns:
   - `id` (uuid, primary key)
   - `created_at` (timestamp)
   - `full_name` (text)
   - `organization_name` (text)
   - `email` (text)
   - `phone` (text)
   - `score` (integer)
   - `total` (integer)

3. **Performance**: For better performance, consider using Hostinger's CDN or caching features.

4. **SSL Certificate**: Ensure your domain has an SSL certificate (usually auto-configured by Hostinger).

---

## Alternative: Deploy to Vercel (Easier Option)

If Hostinger doesn't support Node.js well, consider deploying to Vercel (free tier available) and using a subdomain or redirect from actpy.com:

```bash
npm install -g vercel
vercel --prod
```

Then set up a redirect or proxy from `actpy.com/ebquiz` to your Vercel deployment.
