### Issues Tracker

To report issues or propose new features for this repository, visit [our tracker](https://github.com/rhino-linux/tracker).

# Rhino Linux Blog

## Deploy your own

### Deploy with Vercel
Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/nextjs-portfolio-starter&project-name=portfolio&repository-name=portfolio)

### Deploy without Vercel

Set the following repository secrets for GitHub Actions:
- generate an ssh keygen pair and set `SSH_USER`, `SSH_IP`, `SSH_DIR`, and `SSH_KEY`:
  - `SSH_USER` - the host user
  - `SSH_IP` - the IP of the server
  - `SSH_DIR` - the desired directory to copy to 
  - `SSH_KEY` - the contents of the generated `site_build_key` file:
```bash
# generate key
ssh-keygen -t ed25519 -C "github-actions@site-build" -f site_build_key < /dev/null

# allow key to login to user
mkdir -p ~/.ssh
cat site_build_key.pub >> ~/.ssh/authorized_keys

# print key result to set SSH_KEY - DO NOT SHARE!!
cat site_build_key
```

- The workflow will run:
  - On any changes to the `main` branch
  - Manually on dispatch
    - For security, it will always checkout from `main`, even if requesting dispatch on an alternate branch

## How to use

```bash
pnpm run dev
```
