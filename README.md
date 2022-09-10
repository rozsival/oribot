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

After each deployment two parallel processes are started with `yarn start`:

- app (`yarn start:app`) – bot worker that runs messaging schedule every day a specified time
- server (`yarn start:server`) – [public web](https://oribot-vpnvbwijja-lm.a.run.app) just for the funsies

## ⚙️ Configuration

The app uses `.env` config which is based on `.env.example`:

- `CHANNEL_ID` – Slack channel ID for messaging
- `ClOSURE_DAY` – day of month on which the worklog agenda closes (defaults to `25`)
- `JOB_HOUR` – hour at which the messaging schedule runs daily (defaults to `8`)
- `PORT` – port on which the public web is served (defaults to `8080`)
- `TOKEN` – Slack [OAuth token](https://api.slack.com/apps/A0422H11QKS/oauth?) for ApiTree workspace
- `TZ` – timezone to be used for dates and times (defaults to `UTC`)

> ⚠️ Values for `CHANNEL_ID` and `TOKEN` are mandatory and stored in
> the [Secret Manager](https://console.cloud.google.com/security/secret-manager?project=apitree-oribot).

> ℹ️ Right click on channel name in Slack and use `View channel details` to find channel ID.
