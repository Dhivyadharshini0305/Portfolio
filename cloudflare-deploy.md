# Cloudflare & GitHub Deployment Instructions

This guide outlines deployment procedures for the **React (Vite + TanStack Start)** portfolio.

---

## Deploying the React Portfolio

The portfolio compiles into a static site inside `dist`.

### Option A: Cloudflare Pages (Recommended)

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Pages** > **Create a project** > **Connect to Git**.
2. Select your repository (`Dhivyadharshini0305/Portfolio`).
3. Configure the following build settings:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Root Directory**: `/` (default)
4. Add the following **Environment Variables** (in project settings or build time settings) to integrate EmailJS:
   - `VITE_EMAILJS_SERVICE_ID` = `your_emailjs_service_id`
   - `VITE_EMAILJS_TEMPLATE_ID` = `your_emailjs_template_id`
   - `VITE_EMAILJS_PUBLIC_KEY` = `your_emailjs_public_key`
5. Click **Save and Deploy**.

### Option B: Vercel

1. Import your repository on the [Vercel Dashboard](https://vercel.com).
2. Set build configurations:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add your `VITE_EMAILJS_*` keys under Environment Variables.
4. Click **Deploy**.

---

## Environment Variable Safety

For public key configurations (like EmailJS), credentials can be safely built into client bundles. For secure server-side tokens, always configure Cloudflare Pages Environment Variables instead of checking private credentials into Git repository files.
