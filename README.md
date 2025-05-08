# Ajax Fan Blog - Jekyll Site

This repository contains the source code for the Ajax Fan Blog, a Jekyll-powered static website.

## Features

*   Dark theme inspired by AFC Ajax.
*   Responsive design for desktop and mobile devices.
*   Blog with posts and categories.
*   Live ticker feature (currently with simulated JavaScript updates).
*   Navigation menu, header, footer, and sidebar.
*   Pages: Home, Blog, About, Contact.

## Getting Started

To run this site locally or to deploy it, please refer to the `DEPLOY_TO_GITHUB_PAGES.md` guide included in this package.

### Prerequisites for Local Development

*   Ruby
*   Bundler
*   Jekyll

### Local Development

1.  Clone or download this repository.
2.  Navigate to the project directory: `cd ajax-fan-blog`
3.  Install dependencies: `bundle install` (this will install gems into the `vendor/bundle` directory as configured).
4.  Build and serve the site: `bundle exec jekyll serve`
5.  Open your browser to `http://localhost:4000` (or the address shown in your terminal).

## Contents

*   `_config.yml`: Main Jekyll configuration.
*   `Gemfile`: Ruby gem dependencies.
*   `_includes/`: Reusable HTML snippets (header, footer, navigation, ticker, etc.).
*   `_layouts/`: HTML templates for different page types (default, page, post, home).
*   `_posts/`: Blog posts in Markdown format.
*   `_sass/`: SCSS partials for styling.
*   `assets/`: CSS, JavaScript, and images.
*   `pages/`: Static pages like About and Contact.
*   `index.md`: Homepage content.
*   `blog/index.html`: Blog archive page.
*   `DEPLOY_TO_GITHUB_PAGES.md`: Instructions for deploying to GitHub Pages.

## Live Ticker

The live ticker is implemented in `assets/js/ticker.js` and `_includes/live-ticker.html`. Currently, it simulates updates. To connect it to a real data source, you will need to modify `assets/js/ticker.js` to fetch data from your API endpoint.

## Contributing

Feel free to fork this project and adapt it to your needs.

