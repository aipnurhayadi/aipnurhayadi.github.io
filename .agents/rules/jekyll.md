# Jekyll Rules

## Structure

Prefer:

_layouts/
_includes/
_data/
assets/

## Favicon

The favicon must be project-specific.

Recommended location:

assets/images/favicon/

Do not copy the default favicon from Lovable.

The favicon should be referenced through Jekyll's
`relative_url` filter.

Example:

<link rel="icon" type="image/png"
      href="{{ '/assets/images/favicon/favicon.png' | relative_url }}">

If SVG is used:

<link rel="icon" type="image/svg+xml"
      href="{{ '/assets/images/favicon/favicon.svg' | relative_url }}">

## Layouts

Use layouts for shared page structures.

Do not duplicate complete HTML documents
between pages.

## Includes

Reusable UI components should be placed
in `_includes`.

## Data

Repeated structured content should use
`_data` where appropriate.

## Liquid

Use Liquid when it improves maintainability.

Do not introduce unnecessarily complicated
Liquid logic.

## Assets

Keep CSS, JavaScript, images and fonts organized.

## URLs

Use Jekyll URL filters for GitHub Pages compatibility.

Prefer:

{{ '/assets/css/main.css' | relative_url }}

instead of hardcoded:

/assets/css/main.css
