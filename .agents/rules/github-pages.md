# GitHub Pages Rules

The website is deployed using GitHub Pages.

Repository:

aipnurhayadi.github.io

## URL Handling

Never assume the website is hosted at `/`.

Use:

{{ site.baseurl }}

or:

{{ '/path' | relative_url }}

when appropriate.

## Assets

Do not use absolute root paths such as:

/assets/image.png

unless there is a specific reason.

Prefer:

{{ '/assets/image.png' | relative_url }}

## Internal Links

Prefer:

{{ '/about/' | relative_url }}

instead of:

/about/

## Build Compatibility

Avoid Jekyll plugins that are not supported
by GitHub Pages unless explicitly requested.

## Deployment

The final project must be buildable by GitHub Pages.
