# Deployment Handoff — S Sai Srinivas Portfolio

All projects live under `C:\Users\708cn\Documents\projects\` (each is a git repo pushed to github.com/s-sai-srinivas). Vercel scope: `s-sai-srinivas-projects` (authenticated via `vercel` CLI).

## Live deployments (verified)

| Project | URL | State |
|---|---|---|
| Portfolio | https://portfolio-jade-nine-55.vercel.app | live |
| ProofReader | https://proofreader-liard.vercel.app | live; AI via Groq (GROQ_API_KEY set, model openai/gpt-oss-120b) — /api/health all ok |
| Trainova | https://trainova-theta.vercel.app | live; seeded (coach +919876543210/password123) |
| EcomSim | https://ecomsim-ecru.vercel.app | live; migrated SQLite→Postgres, seeded 13 products |
| SchoolManagement FE | https://school-management-omega-olive.vercel.app | live |
| SchoolManagement API | https://school-api-ochre.vercel.app/api | live; NestJS serverless wrapper in backend/api/index.ts; admin@demo.com/admin123 |
| Smart-Academy FE | https://smart-academy-eight.vercel.app | live; /api/* rewrites to smart-academy-api-lqnj.onrender.com |
| Smart-Academy API | https://smart-academy-api-lqnj.onrender.com | live on Render (Docker + managed Postgres); /health returns ok; JWT login verified |
| Fake review detector | https://fake-review-detector-tau.vercel.app | live; api/index.py serverless classifier |
| ScanConnect | https://scanconnect-seven.vercel.app | live; shared Supabase project `sai-apps` (ref dpeujiiouspnaeoduueg, ap-south-1), tables prefixed `scanconnect_*`, demo hub at /b/demo-cafe |

## Databases
4 Prisma Postgres DBs provisioned via `npx create-db` (eu-west-3). Env vars already set in each Vercel project. **Unclaimed DBs expire ~24h** — claim links: proj_w7y2z0odbj6yuhgqu2wokxp8 (ProofReader), proj_rf1u9vwv6zlf4k7su08cg3lk (Trainova), proj_litdyabehtlk6cupvx9v13gg (EcomSim), proj_p3e16vxgxbcwdk9x177400h4 (SchoolManagement). Pull existing env with `vercel env pull` inside each linked dir.

## Remaining work
1. ~~**ProofReader**: AI key~~ DONE — migrated Gemini→Groq (`GROQ_API_KEY` set in Vercel prod, `checks.ai` ok)
2. ~~**ScanConnect**~~ DONE — NEW shared Supabase project `sai-apps` created via Management API (old account was lost; project nfiudovyjgipuqaspzzb is gone). Migrations pushed with `scanconnect_` prefixes, demo seeded, deployed. NOTE: old project ref `nfiudovyjgipuqaspzzb` no longer exists.
3. ~~Smart-Academy backend~~ **DONE** — deployed via Render Blueprint ("Isri's workspace" account, Google login via iphonesri708). Render assigned hostname `smart-academy-api-lqnj.onrender.com` (the unsuffixed name is owned by another account) — `frontend/vercel.json` + the static-site rewrite in `render.yaml` were updated to match. Backend gained a Groq/OpenAI-compatible provider so all AI features work with `GROQ`-key (`AI_PROVIDER=groq`, `AI_MODEL=openai/gpt-oss-120b`); `CORS_ALLOWED_ORIGINS` was added. Super admin: regdno `SUPERADMIN001`. NOTE: Render free Postgres expires ~30 days after creation — migrate to the shared Supabase project (`smartacademy_*` tables) or upgrade before then.
4. **Portfolio**: still placeholder — real email, resume URL, Twitter link in `src/data/portfolio.js`
5. After edits: `npm run build` verify, `vercel deploy --prod`, push to GitHub, run `graphify update .` in projects dir

## Verified test flows
- School API login: `POST /api/auth/login {email:"admin@demo.com",password:"admin123",role:"ADMIN"}` returns JWT
- EcomSim: `GET /api/products` returns seeded catalog; `/api/health` 200
- ProofReader: `/api/health` → status ok, db ok, ai configured (Groq)
