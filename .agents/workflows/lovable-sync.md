---
description: Synchronize changes from lovable-design into the current Jekyll repository.
---

# Lovable → Jekyll Synchronization

Use the `lovable-to-jekyll` agent.

## Source

../aipnurhayadi.github.io.lovable-design

## Target

Current workspace.

---

## Important

This is NOT an initial migration.

The target already contains a Jekyll implementation.

Do not rebuild the entire website unnecessarily.

The goal is to identify changes in the source design and
apply the corresponding changes to the Jekyll implementation.

---

## Phase 1 — Inspect Source

Inspect:

../aipnurhayadi.github.io.lovable-design

Identify:

- changed pages
- changed components
- changed styles
- changed assets
- changed typography
- changed interactions

---

## Phase 2 — Inspect Target

Identify the corresponding Jekyll implementation.

Determine:

- which layout contains the affected UI
- which include contains the component
- which CSS controls the styling
- which JavaScript controls the interaction
- which assets are involved

---

## Phase 3 — Compare

Compare source and target.

Classify changes:

### Added

New component/page/asset.

### Modified

Existing design changed.

### Removed

Source component or design element no longer exists.

### Unchanged

Do not modify.

---

## Phase 4 — Apply Changes

Apply only necessary changes to the Jekyll implementation.

Preserve existing Jekyll architecture.

Do not reintroduce React.

Do not replace the entire target project unnecessarily.

---

## Phase 5 — Verify

Build Jekyll.

Run the site.

Verify affected pages.

Verify responsive behavior.

Verify assets.

Fix regressions.

---

## Completion

Summarize:

- changed components
- changed pages
- changed assets
- files modified
- verification result