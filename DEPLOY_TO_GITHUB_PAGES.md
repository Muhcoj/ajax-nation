# Deploying Your Jekyll Site to GitHub Pages

This guide will walk you through deploying your new Ajax Fan Blog Jekyll site to GitHub Pages for free hosting.

## Prerequisites

1.  **GitHub Account:** You need a GitHub account. If you don't have one, sign up at [https://github.com/join](https://github.com/join).
2.  **Git:** You need Git installed on your computer. If you don't have it, download and install it from [https://git-scm.com/downloads](https://git-scm.com/downloads).

## Deployment Steps

There are two main ways to host a Jekyll site on GitHub Pages:

*   **User/Organization Page:** Hosted from a repository named `yourusername.github.io` (replace `yourusername` with your GitHub username). The site will be available at `https://yourusername.github.io`.
*   **Project Page:** Hosted from a branch (usually `main` or `gh-pages`) in any other repository. The site will be available at `https://yourusername.github.io/repository-name`.

### Step 1: Create a GitHub Repository

1.  Go to [GitHub](https://github.com) and log in.
2.  Click the "+" icon in the top-right corner and select "New repository".
3.  **For a User/Organization Page:**
    *   Repository name: `yourusername.github.io` (e.g., if your username is `ajaxfan`, the repo name is `ajaxfan.github.io`).
    *   Make sure it's public.
4.  **For a Project Page:**
    *   Choose any name for your repository (e.g., `ajax-fan-blog`).
    *   Make sure it's public (GitHub Pages for private repos is a paid feature).
5.  Do **not** initialize the repository with a README, .gitignore, or license yet, as you will be pushing your existing project files.
6.  Click "Create repository".

### Step 2: Prepare Your Jekyll Site Files

You have received a folder named `ajax-fan-blog` containing all your Jekyll site files.

### Step 3: Configure `_config.yml` for GitHub Pages

Open the `_config.yml` file in your `ajax-fan-blog` folder with a text editor and update the following settings:

1.  **`url`**: This is the main URL for your site.
    *   For a User/Organization Page: `url: "https://yourusername.github.io"`
    *   For a Project Page: `url: "https://yourusername.github.io"` (Note: GitHub Pages handles the subpath automatically from `baseurl`)
2.  **`baseurl`**: This is the subpath of your site.
    *   For a User/Organization Page: `baseurl: ""` (empty string)
    *   For a Project Page: `baseurl: "/repository-name"` (e.g., `/ajax-fan-blog`)
3.  **`github_username`**: Update this with your actual GitHub username.
    *   `github_username: yourusername`

**Example for a Project Page named `my-ajax-blog` by user `superfan`:**
```yaml
title: Ajax News
email: your-email@example.com
description: >-
  The latest Ajax news, transfers, match reports and opinions for fans.
baseurl: "/my-ajax-blog" 
url: "https://superfan.github.io"
github_username: superfan
# ... rest of the config
```

### Step 4: Push Your Jekyll Site to GitHub

1.  Open a terminal or command prompt.
2.  Navigate to your `ajax-fan-blog` project directory:
    ```bash
    cd path/to/your/ajax-fan-blog
    ```
3.  Initialize a new Git repository:
    ```bash
    git init -b main
    ```
4.  Add all the files to the Git repository:
    ```bash
    git add .
    ```
5.  Commit the files:
    ```bash
    git commit -m "Initial commit of Jekyll site"
    ```
6.  Add your GitHub repository as a remote. Replace `yourusername` and `repository-name` with your actual GitHub username and repository name from Step 1.
    ```bash
    git remote add origin https://github.com/yourusername/repository-name.git
    ```
    (e.g., `git remote add origin https://github.com/ajaxfan/ajaxfan.github.io.git` or `git remote add origin https://github.com/ajaxfan/ajax-fan-blog.git`)

7.  Push your files to GitHub:
    ```bash
    git push -u origin main
    ```

### Step 5: Configure GitHub Pages Settings (Important for Project Pages)

*   **For User/Organization Pages (`yourusername.github.io`):** GitHub Pages is usually enabled automatically from the `main` branch. Your site should be live at `https://yourusername.github.io` within a few minutes.

*   **For Project Pages (e.g., `ajax-fan-blog`):**
    1.  Go to your repository on GitHub.
    2.  Click on the "Settings" tab.
    3.  In the left sidebar, click on "Pages".
    4.  Under "Build and deployment", for "Source", select "Deploy from a branch".
    5.  Under "Branch", select `main` (or the branch you pushed your code to) and `/ (root)` for the folder.
    6.  Click "Save".
    7.  GitHub Pages will now build your site. This might take a few minutes. You will see a URL where your site will be published (e.g., `https://yourusername.github.io/repository-name`).

### Step 6: Verify Your Site

After a few minutes, your site should be live at the URL provided by GitHub Pages (or `https://yourusername.github.io` for user pages).

If you see a 404 error or an old version, wait a bit longer for GitHub Pages to build and deploy. You can check the build status in your repository's "Actions" tab.

## Gemfile and `github-pages` Gem

The `Gemfile` in your project is already configured to use the `github-pages` gem. This gem helps ensure that your local Jekyll environment uses dependencies compatible with GitHub Pages, making the deployment process smoother.

## Live Ticker Data

The live ticker currently uses simulated JavaScript updates. For real-time updates, you would need to:
1.  Set up a backend or API endpoint that provides ticker data in JSON format.
2.  Modify the `assets/js/ticker.js` file to fetch data from your API instead of using the simulated updates.
    *   Look for the `pollForUpdates` function and uncomment/modify the `fetch` call.

## Future Updates

To update your site:
1.  Make changes to your local files (add new posts to `_posts`, edit pages, etc.).
2.  Commit and push the changes to GitHub:
    ```bash
    git add .
    git commit -m "Your update message (e.g., New blog post)"
    git push origin main
    ```
GitHub Pages will automatically rebuild and redeploy your site.

## Custom Domain (Optional)

If you have a custom domain, you can configure it in your repository's GitHub Pages settings. See the official GitHub documentation for instructions.

## Troubleshooting

*   **Build Errors:** Check the "Actions" tab in your GitHub repository. GitHub Pages runs a Jekyll build, and any errors will be shown there.
*   **CSS/Styling Issues:** Double-check your `baseurl` in `_config.yml`. If it's incorrect, CSS and asset paths might be broken.
*   **Local Build:** Test your site locally before pushing to ensure everything works: `bundle exec jekyll serve`.

Congratulations on deploying your Ajax Fan Blog!
