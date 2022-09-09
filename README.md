<p align="center">
<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
<br>
ApiTree
</a>
</p>
<h1 align="center">OriBot</h1>

<p align="center">
Simple <a href="https://api.slack.com/apps/A0422H11QKS">Slack bot</a> to annoy Oriflame teammates with regular worklog agenda.
</p>

<p align="center">
<img alt="Where's your worklog?" src="./public/wheres-your-worklog.gif">
</p>

<p align="center">
<a href="https://github.com/rozsival/oribot/actions/workflows/qa.yml"><img alt="QA" src="https://github.com/rozsival/oribot/actions/workflows/qa.yml/badge.svg"></a>
<a href="https://github.com/rozsival/oribot/actions/workflows/codeql.yml"><img alt="CodeQL" src="https://github.com/rozsival/oribot/actions/workflows/codeql.yml/badge.svg"></a>
<a href="https://github.com/rozsival/oribot/actions/workflows/deploy.yml"><img alt="Deploy" src="https://github.com/rozsival/oribot/actions/workflows/deploy.yml/badge.svg"></a>

<p align="center">🌐 <a href="http://vitrozsival.cz">vitrozsival.cz</a> | 👨‍💻 <a href="https://github.com/rozsival">rozsival</a> | 🐦 <a href="https://twitter.com/vitrozsival">@vitrozsival</a> | 📷 <a href="https://instagram.com/vitrozsival">@vitrozsival</a></p>
<hr>

## 💾 Installation

```bash
nvm use
yarn install
```

## 🚀 Deployment

This app is deployed to [Google Cloud Run](https://console.cloud.google.com/run/detail/europe-central2/oribot/)
via [Deploy action](.github/workflows/deploy.yml) on push to `main` branch.

After each deployment a `pm2` process is started with `yarn start` managing:

- app (`yarn start:app`) – bot worker that runs messaging schedule every day at 8:00 UTC
- server (`yarn start:server`) – [public web](https://oribot-vpnvbwijja-lm.a.run.app) just for the funsies

## ⚙️ Configuration

The app uses `.env` config which is based on `.env.example`:

- `PORT` – port on which the public web is served (use only locally, Cloud Run sets this value automatically)
- `TOKEN` – Slack [OAuth token](https://api.slack.com/apps/A0422H11QKS/oauth?) for ApiTree workspace
- `TZ` – timezone to be used for dates and times (defaults to `UTC`)
