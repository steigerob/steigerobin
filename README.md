# RobPage – Jekyll 

## Local preview

```bash
# install Ruby & Bundler (Ubuntu)
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev

# in the project folder
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000

Note to me:
If I publish on GitHub Pages as a *project* site,
I need to set `baseurl` in `_config.yml` to `"/REPO-NAME"` and `url` to my site URL.
For a *user* site (username.github.io) `baseurl` needs to be empty and `url` set to `https://username.github.io`.

## Airbnb guest guide

The standalone guest guide lives at `/airbnb/`. Edit its content in
[airbnb/index.html](airbnb/index.html) and its styles in
[assets/css/guest-guide.css](assets/css/guest-guide.css). It uses the separate
[guest layout](_layouts/guest.html), without the main site's navigation, footer,
or scripts, and asks search engines not to index it.

The guest-network details are intentionally public on the page. The bilingual
[welcome PDF](airbnb/EN_DE_airbnb_welcome_freiburg_v2.pdf) is included in Jekyll's
output and linked for download. Include the PDF when publishing the site through
GitHub Pages. Keep the page and PDF in sync when changing guest-network details,
and do not replace them with private home-network credentials. The `noindex`
setting is not access control.
