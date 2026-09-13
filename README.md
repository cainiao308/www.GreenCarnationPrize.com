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


### Newly added (2026-09-13 pass 2 — interviews / news / misc)
- `/2013/09/11/the-green-carnation-prize-2013-criteria/` — The Green Carnation Prize 2013 Criteria…
- `/2013/02/21/the-green-carnation-prize-is-back/` — The Green Carnation Prize is Back…
- `/2012/12/12/news-flash-green-carnation-prize-winning-announcement-delayed/` — News Flash: Green Carnation Prize Winning Announcement Delayed…
- `/2012/05/26/before-we-go-further-a-fond-farewell/` — Before We Go Further, A Fond Farewell…
- `/2012/05/23/the-green-carnation-prize-2012-submissions-now-open/` — The Green Carnation Prize 2012; Submissions Now Open
- `/2012/05/09/the-green-carnation-prize-is-back-for-2012/` — The Green Carnation Prize is back for 2012…
- `/2012/02/08/a-sneak-peak-for-2012-2/` — A Sneak Peak for 2012…
- `/2011/12/12/interview-with-catherine-hall-winner-of-the-green-carnation-prize-2011/` — Interview With Catherine Hall, Winner of the Green carnation Prize 2011
- `/2011/11/08/green-carnation-shortlist-debate-on-the-guardian-today/` — Green Carnation Shortlist Debate on The Guardian Today…
- `/2011/09/26/the-2011-judges-interviews-5-simon-savidge/` — The 2011 Judges Interviews #5 – Simon Savidge
- `/2011/09/25/the-2011-judges-interviews-4-michelle-pauli/` — The 2011 Judges Interviews #4 – Michelle Pauli
- `/2011/09/24/the-2011-judges-interviews-3-nick-campbell/` — The 2011 Judges Interviews #3 – Nick Campbell
- `/2011/09/23/the-2011-judges-interviews-2-stella-duffy/` — The 2011 Judges Interviews #2 – Stella Duffy
- `/2011/09/22/the-2011-judges-interviews-1-paul-magrs/` — The 2011 Judges Interviews #1 – Paul Magrs
- `/2011/09/21/the-green-carnation-prize-longlist-2011-one-week-to-go/` — The Green Carnation Prize Longlist 2011… One Week To Go!
- `/2011/09/20/jonathan-kemp-shortlisted-for-polari-prize-2011/` — Jonathan Kemp Shortlisted for Polari Prize 2011
- `/2011/08/01/the-green-carnation-prize-longlist-deadline-extends/` — The Green Carnation Prize Longlist Deadline Extends…
- `/2011/07/27/the-green-carnation-prize-is-one-today/` — The Green Carnation Prize is One Today…
- `/2011/07/08/new-look-new-logo’s-and-new-features…/` — New Look, New Logo’s and New Features…
- `/2011/07/06/a-touching-beautiful-piece-of-writing/` — A Touching & Beautiful Piece of Writing…
- `/2011/07/05/jonathan-kemp-and-max-schaefer-long-listed-for-‘polari-first-book-prize’/` — Jonathan Kemp and Max Schaefer Long Listed for ‘Polari First Book Prize’
- `/2011/06/26/glad-to-be-a-gay-writer-the-guardian-podcast/` — Glad To Be A Gay Writer? The Guardian Podcast…
- `/2011/06/21/“we-aren’t-anywhere-centric”…-a-manchester-meeting-of-minds/` — “We Aren’t Anywhere-centric”… A Manchester Meeting of Minds
- `/2011/06/16/stella-duffy-discusses-theodora/` — Stella Duffy Discusses ‘Theodora’
- `/2011/06/12/green-carnation-mention-on-books-on-the-nightstand/` — Green Carnation Mention on ‘Books on the Nightstand’…
- `/2011/06/09/phobia-behind-the-scenes/` — Phobia Behind The Scenes?
- `/2011/06/07/proud-to-publish-our-chair-discusses/` — Proud To Publish? Our Chair Discusses…
- `/2011/06/05/on-the-day-of-our-relaunch-a-word-or-two-from-our-chair/` — On The Day Of Our Relaunch, A Word Or Two From Our Chair…
- `/2011/06/05/the-countdown-clock-is-ticking/` — The Countdown Clock is Ticking…
- `/2011/05/19/undergoing-a-change/` — Undergoing A Change…
- `/2011/04/06/back-raring-to-go-for-2011…/` — Back & Raring To Go For 2011…
- `/2010/12/10/the-green-carnation-prize-gets-bigger-better-in-2011/` — The Green Carnation Prize Gets Bigger & Better in 2011…
- `/2010/12/08/the-green-carnation-judges-2011/` — The Green Carnation Judges 2011…
- `/2010/12/01/fancing-winning-the-green-carnation-winning-paperboy/` — Fancing Winning The Green Carnation Winning ‘Paperboy’?
- `/2010/11/30/ultimately-unless-you-both-intend-and-are-able-to-do-it-commercially-writing-is-far-too-big-an-investment-of-time-not-to-take-fairly-seriously-for-its-own-sake-max-schaefer-on-children-of-the/` — ‘Ultimately, unless you both intend and are able to do it commercially, writing is far too big an investment of time not to take fairly seriously for its own sake.’ – Max Schaefer on Children of the Sun
- `/2010/11/30/i-wanted-to-capture-a-hidden-london-jonathan-kemp-on-london-triptych/` — “I wanted to capture a hidden London…” Jonathan Kemp on London Triptych
- `/2010/11/29/i-wanted-it-to-be-the-kind-of-book-that-sneaks-up-on-a-reader-christopher-fowler-on-paperboy/` — “I wanted it to be the kind of book that sneaks up on a reader…” Christopher Fowler on Paperboy
- `/2010/11/28/sometimes-he-thinks-he-is-already-living-in-the-future-max-schafers-children-of-the-sun/` — ‘Sometimes he thinks he is already living in the future…’ Max Schaefer’s Children of the Sun
- `/2010/11/27/art-can-give-us-the-same-things-we-seek-from-religion-without-the-sexual-repression-and-holy-war-part-james-hannaham-on-god-says-no/` — ‘Art can give us the same things we seek from religion, without the sexual repression and holy war part…’ James Hannaham on God Says No
- `/2010/11/26/it’s-the-most-fascinating-time-in-our-history-rupert-smith-on-mans-world/` — “It’s the most fascinating time in our history…” Rupert Smith on Man’s World
- `/2010/11/24/blooming-marvellous/` — Blooming marvellous
- `/2010/11/08/november-readings-at-gays-the-word/` — November readings at Gay’s the Word
- `/2010/10/25/only-a-week-to-go/` — Only A Week To Go…
- `/2010/09/09/what-lesley-looked-for/` — What Lesley Looked For…
- `/2010/09/07/on-comments/` — On Comments
- `/2010/09/05/conservative-secrets/` — Not Conserving Secrets
- `/2010/08/25/a-carnation-countdown-conundrum-competition/` — A Carnation Countdown Conundrum Competition
- `/2010/08/24/a-preference-for-secrecy/` — A preference for secrecy
- `/2010/08/20/the-secret-keepers/` — The secret keepers
- `/2010/08/05/24-hours-left/` — 24 Hours Left…
- `/2010/08/01/contact-us/` — Contact Us
- `/2010/07/31/arrivals-already/` — Arrivals Already…
- `/2010/07/30/hello-world/` — Welcome

## Deferred / gaps

- All 83 WordPress.com posts are now mirrored as static pages (standing pages separate)
- A few original images 404 on WordPress.com (e.g. one 2013 judge photo, external Annie Leibovitz portrait on “Words from our 2013 Winner”); those `<img>` tags were omitted
- A handful of third-party hotlinked images (Guardian/Twitter/Time Out/etc.) may still be missing if the remote host no longer serves them
- WordPress.com chrome removed: follow widgets, stats, likes/sharing bars, comment forms, Jetpack bits
- Author archive links remain on the WordPress.com host
- In-article links to other prize posts are rewritten to local paths when the target exists
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
