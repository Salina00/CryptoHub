### 🔐 Firebase Google OAuth Setup

**Important:** To enable Google Sign-In, follow these steps:

#### Step 1: Enable Google Authentication in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** → **Sign-in method**
4. Click on **Google** in the providers list
5. Toggle **Enable**
6. Set **Project support email** (your email)
7. Click **Save**

#### Step 2: Configure Authorized Domains

For **local development**, add authorized domains:

1. In Firebase Console → **Authentication** → **Settings** tab
2. Scroll to **Authorized domains**
3. Click **Add domain**
4. Add the following:
   - `localhost` (for local development)
   - `127.0.0.1` (alternative localhost)
   - Your deployment domain (e.g., `cryptohub.vercel.app`)

> **Note:** Without adding `localhost` to authorized domains, Google OAuth will not work in local development!

#### Step 3: Verify OAuth Configuration

**Test Google Sign-In:**
1. Run `npm run dev`
2. Click "Sign up" or "Login"
3. Try Google authentication
4. If you see **"auth/unauthorized-domain"** error:
   - Double-check authorized domains in Firebase Console
   - Ensure `localhost` is added
   - Clear browser cache and retry

#### Troubleshooting Google Auth

**Common Issues:**

| Error | Solution |
|-------|----------|
| `auth/unauthorized-domain` | Add `localhost` to Firebase authorized domains |
| `auth/popup-blocked` | Allow popups in browser settings |
| `auth/network-request-failed` | Check internet connection & Firebase config |
| `auth/invalid-api-key` | Verify `VITE_FIREBASE_API_KEY` in `.env` |

**Firebase Console Quick Links:**
- [Authentication Settings](https://console.firebase.google.com/project/_/authentication/providers)
- [Authorized Domains](https://console.firebase.google.com/project/_/authentication/settings)

