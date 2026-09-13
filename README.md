# Green Carnation Prize — static restore

Static visual restore of [The Green Carnation Prize](https://greencarnationprize.wordpress.com/) for deployment on Vercel (push this folder to GitHub, then import the repo in Vercel). Content fidelity targets the literary prize’s winners, shortlists, and about materials, with a look close to the 2014–2018 WordPress / Twenty Ten era.

## Preview locally

```bash
cd greencarnationprize-vercel
python3 -m http.server 8080
```

Open http://localhost:8080/

## Deploy

- Root directory: this folder (`index.html` at root)
- Uses `vercel.json` with `cleanUrls: true` and `trailingSlash: false`
- Do not require a build step (static files only)

Suggested production hosts: `www.greencarnationprize.com` and/or `greencarnationprize.com` (sitemap lists the `www` canonical).

## Sources & timestamps

| Source | Role | Timestamp / note |
|--------|------|------------------|
| https://greencarnationprize.wordpress.com/ | Primary live mirror (content through ~May 2017 winner) | Fetched 2026-09-13 |
| https://web.archive.org/web/20180831164113/https://greencarnationprize.com/ | Styled snapshot + Twenty Ten CSS (`…id_/`) | 2018-08-31 |
| https://web.archive.org/web/20140606063557/https://www.greencarnationprize.com/ | Earlier era reference | 2014-06-06 |
| Theme CSS | `css/twentyten.css` from Wayback `id_` of `s2.wp.com/.../twentyten/style.css` | 2018-08-31 |
| Header image | WP uploads `cropped-artboard-12x-100.jpg` (2017) | Live WP.com |

Raw asset pattern used when needed: `http://web.archive.org/web/TIMESTAMPid_/URL`.

## Pages included

### Standing pages
- `/` — Homepage (recent posts as of May 2017 mirror)
- `/about/` — About / history / Foyles partner
- `/judges/` — Judges page (includes 2016 panel material from mirror)
- `/previous-years/` — Summaries for 2010–2013 winners/lists
- `/contact/`
- `/submissions/` — Submissions for 2016 guidelines page
- `/longlist-2016/` — Dedicated longlist page
- `/archive/` — Index of restored posts + deferred note

### Restored posts (2015–2017)
- `/2017/05/22/the-winner-of-the-green-carnation-prize-is/` — 2016 winner: David France
- `/2017/04/28/the-green-carnation-prize-2016-shortlist/`
- `/2017/03/24/the-green-carnation-prize-longlist-2016/`
- `/2017/03/03/john-boyne-to-chair-judges-for-the-green-carnation-prize/`
- `/2015/12/08/the-winner-of-the-green-carnation-prize-2015/` — Marlon James
- `/2015/11/12/the-green-carnation-prize-shortlist-2015/`
- `/2015/10/08/the-green-carnation-prize-longlist-2015/`

## Deferred / gaps

- Full blog (100+ posts from 2010–2017): not mirrored in this pass
- 2014 winner announcement and many mid-era news posts
- WordPress.com chrome removed: follow widgets, stats, likes/sharing bars, comment forms, Jetpack bits
- Some in-article links to unrestored posts still point at the live `greencarnationprize.wordpress.com` URLs
- Author archive links remain on the WordPress.com host
- Image sizes re-compressed for static hosting; not bit-identical to originals
- Site title on the original WP install was often empty in `<title>`; restore uses “The Green Carnation Prize”

## Project layout

```
index.html
about/ judges/ previous-years/ contact/ submissions/ longlist-2016/ archive/
2015/… 2017/…
css/twentyten.css  css/site.css
images/header.jpg  images/uploads/…
vercel.json  sitemap.xml  robots.txt  README.md
```

## Notes

This is an unofficial historical/static restore for archival and redeployment purposes. Original prize content © respective authors/publishers; site materials originated on WordPress.com / greencarnationprize.com.
