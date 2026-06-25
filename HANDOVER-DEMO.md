# Synergetics Social Hub demo and handover

This app runs locally at:

```text
http://localhost:4007
```

## What the teammate needs

They need Docker Desktop installed, this project folder, and a local `.env` file with these six values:

```env
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=

YOUTUBE_CLIENT_ID=
YOUTUBE_CLIENT_SECRET=

FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
```

Do not commit `.env` to GitHub. It contains private credentials.

## Developer dashboard redirect URLs

These URLs do not need to be typed into the app. They must be registered once in the LinkedIn, Google/YouTube, and Meta developer dashboards:

```text
http://localhost:4007/integrations/social/linkedin
http://localhost:4007/integrations/social/linkedin-page
http://localhost:4007/integrations/social/youtube
http://localhost:4007/integrations/social/facebook
http://localhost:4007/integrations/social/instagram
```

They work because `docker-compose.yaml` runs the app on `http://localhost:4007`.

## Start the app

From this folder, run:

```bash
docker compose up -d
```

Then open:

```text
http://localhost:4007
```

## Demo flow

1. Sign up or log in with your email.
2. Click **Add Channel**.
3. Connect LinkedIn, YouTube, Facebook, and Instagram.
4. Create a test post.
5. Select the connected channels.
6. Schedule it for a future date.
7. Show the Calendar view, channel list, post composer, and scheduled post.

For a safe demo, schedule posts far in the future so nothing goes live accidentally.
