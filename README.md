# RobPage – Jekyll Version

This is a Jekyll project created from your original static `index.html`. It splits the markup into a shared layout and header/footer includes.

## What changed?

- `_layouts/default.html` contains the HTML skeleton, CSS/JS includes, preloader, borders, and the modal.
- `_includes/header.html` contains the banner + navigation + hero.
- `_includes/footer.html` contains the footer + socials.
- `index.html` contains only the page-specific main content.
- Paths were converted to use Jekyll's `relative_url` filter so the site works both locally and on GitHub Pages.

> **Assets:** Your original project referenced `assets/**`, `files/**`, etc. Place those folders at the project root so the CSS, JS, images and PDFs resolve correctly.

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

If you publish on GitHub Pages as a *project* site, set `baseurl` in `_config.yml` to `"/REPO-NAME"` and `url` to your site URL. For a *user* site (username.github.io), leave `baseurl` empty and set `url` to `https://username.github.io`.

