<p align="center">
<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
<br>
ApiTree
</a>
</p>
<h1 align="center">OriBot</h1>

<p align="center">
Simple Slack bot to annoy Oriflame teammates with regular worklog agenda.
</p>

<p align="center">
<img alt="Where's your worklog?" src="./public/wheres-your-worklog.gif">
</p>

## 💾 Installation

```bash
nvm use
yarn install
```

## 🚀 Deployment

This app is deployed to [Heroku](https://dashboard.heroku.com/apps/apitree-oribot). It uses free dynos for running:

- worker (`yarn start:app`) – bot worker that runs messaging schedule every day at 8:00 UTC
- web (`yarn start:server`) – [public web](https://apitree-oribot.herokuapp.com) just for the funsies
- scheduler – [add-on](https://dashboard.heroku.com/apps/apitree-oribot/scheduler) that pings the app every day at 7:30
  UTC to keep it awake before the schedule runs
