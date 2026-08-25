# RobPage – Jekyll 

- `_layouts/default.html` contains the HTML skeleton, CSS/JS includes, preloader, borders, and the modal.
- `_includes/header.html` contains the banner + navigation + hero.
- `_includes/footer.html` contains the footer + socials.
- `index.html` contains only the page-specific main content.
- Paths were converted to use Jekyll's `relative_url` filter so the site works both locally and on GitHub Pages.

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
Publish on GitHub Pages as a *project* site,
set `baseurl` in `_config.yml` to `"/REPO-NAME"` and `url` to your site URL.
For a *user* site (username.github.io), leave `baseurl` empty and set `url` to `https://username.github.io`.

