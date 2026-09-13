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
| https://public-api.wordpress.com/rest/v1.1/sites/greencarnationprize.wordpress.com/ | Post HTML via WP.com public API | 2026-09-13 |
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

### Restored posts (2015–2017, earlier pass)
- `/2017/05/22/the-winner-of-the-green-carnation-prize-is/` — 2016 winner: David France
- `/2017/04/28/the-green-carnation-prize-2016-shortlist/`
- `/2017/03/24/the-green-carnation-prize-longlist-2016/`
- `/2017/03/03/john-boyne-to-chair-judges-for-the-green-carnation-prize/`
- `/2015/12/08/the-winner-of-the-green-carnation-prize-2015/` — Marlon James
- `/2015/11/12/the-green-carnation-prize-shortlist-2015/`
- `/2015/10/08/the-green-carnation-prize-longlist-2015/`

### Newly added (2026-09-13 expansion)
- `/2016/11/24/the-green-carnation-prize-2016-call-for-entries/` — The Green Carnation Prize 2016… Call For Entries
- `/2015/06/17/the-green-carnation-prize-judges-2015/` — The Green Carnation Prize Judges 2015…
- `/2015/06/15/the-green-carnation-prize-2015-submissions-open/` — The Green Carnation Prize 2015, Submissions Open…
- `/2014/11/28/the-winner-of-the-green-carnation-prize-2014-is/` — The Winner of the Green Carnation Prize 2014 is…
- `/2014/11/06/the-green-carnation-prize-shortlist-2014/` — The Green Carnation Prize Shortlist 2014
- `/2014/10/10/the-green-carnation-prize-longlist-2014/` — The Green Carnation Prize Longlist 2014
- `/2014/06/23/the-green-carnation-prize-2014-judges-announced/` — The Green Carnation Prize 2014 Judges Announced…
- `/2014/06/05/foyles-announces-partnership-with-green-carnation-prize/` — Foyles announces partnership with Green Carnation Prize
- `/2013/11/20/words-from-our-2013-winner/` — Words From Our 2013 Winner, Andrew Solomon
- `/2013/11/19/the-winner-of-the-green-carnation-prize-2013/` — The Winner of The Green Carnation Prize 2013
- `/2013/11/05/the-green-carnation-prize-shortlist-2013/` — The Green Carnation Prize Shortlist 2013…
- `/2013/10/01/the-green-carnation-prize-longlist-2013/` — The Green Carnation Prize Longlist 2013…
- `/2013/02/25/the-green-carnation-prize-2013-new-judges-and-submission-guidelines/` — The Green Carnation Prize 2013; New Judges and Submission Guidelines…
- `/2012/12/18/the-winner-of-the-green-carnation-prize-2012/` — The Winner of the Green Carnation Prize 2012…
- `/2012/11/07/the-green-carnation-prize-shortlist-2012/` — The Green Carnation Prize Shortlist 2012
- `/2012/10/01/the-green-carnation-prize-longlist-2012/` — The Green Carnation Prize Longlist 2012
- `/2012/05/28/the-green-carnation-prize-2012/` — The Green Carnation Prize Judges 2012
- `/2011/12/07/the-green-carnation-prize-winner-201/` — The Green Carnation Prize Winner 2011 is…
- `/2011/11/02/the-green-carnation-prize-shortlist-2011/` — The Green Carnation Prize Shortlist 2011
- `/2011/09/28/the-green-carnation-prize-longlist-2011/` — The Green Carnation Prize Longlist 2011
- `/2010/12/01/the-green-carnation-winner-2010-is/` — The Green Carnation Winner 2010 is…
- `/2010/11/01/the-green-carnation-prize-shortlist-2010-is/` — The Green Carnation Prize Shortlist 2010 is…
- `/2010/09/01/the-green-carnation-longlist-2010/` — The Green Carnation Longlist 2010

## Deferred / gaps

- Remaining miscellaneous blog posts (interviews, judge profiles, competition posts, news flashes): not mirrored in this pass
- A few original images 404 on WordPress.com (e.g. one 2013 judge photo, external Annie Leibovitz portrait on “Words from our 2013 Winner”); those `<img>` tags were omitted
- WordPress.com chrome removed: follow widgets, stats, likes/sharing bars, comment forms, Jetpack bits
- Some in-article links to unrestored posts still point at the live `greencarnationprize.wordpress.com` URLs
- Author archive links remain on the WordPress.com host
- Image sizes re-compressed for static hosting; not bit-identical to originals
- Site title on the original WP install was often empty in `<title>`; restore uses “The Green Carnation Prize”
- Note: 2011 winner slug on WP is truncated (`the-green-carnation-prize-winner-201`); path kept as on the live site

## Project layout

```
index.html
about/ judges/ previous-years/ contact/ submissions/ longlist-2016/ archive/
2010/… 2011/… 2012/… 2013/… 2014/… 2015/… 2016/… 2017/…
css/twentyten.css  css/site.css
images/header.jpg  images/uploads/…
vercel.json  sitemap.xml  robots.txt  README.md
```

## Notes

This is an unofficial historical/static restore for archival and redeployment purposes. Original prize content © respective authors/publishers; site materials originated on WordPress.com / greencarnationprize.com.
