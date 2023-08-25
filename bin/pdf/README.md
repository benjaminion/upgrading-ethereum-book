# Whole book PDF

This is an experimental pipeline for building the whole text as a single PDF file using `pandoc`. You don't need any of the usual installation to do this (no gatsby, node, npm, etc.).

## Pre-requisites

Get the latest `pandoc` from the [pandoc repo](https://github.com/jgm/pandoc/releases/) and install it. It needs to be a fairly up to date one. (Caveat: Pandoc 3.1.6.2 fails due to [this issue](https://github.com/jgm/pandoc/issues/9014).)

```
> pandoc --version
pandoc 3.1.6.1
...
```

Install LaTeX and the SVG library. The `xetex` version of LaTeX is not mandatory, but seems to be more reliable for me.

```
sudo apt install librsvg2-bin texlive-xetex
```

The build uses the "DejaVu Sans Mono" font for code display. If you are on Linux you should have this already. If you are not on Linux, I can't help you. Changing it to a different mono-spaced font in _make\_pdf_ shouldn't break anything too badly.

## Building the PDF

Run the script at _bin/pdf/make\_pdf_. It may or may not work, and the results may or may not delight.

```
bin/pdf/make_pdf src/book.md
```

The generated PDF will be written to your current directory as _book.pdf_.

## Notes

`logging.lua` is from the MIT licensed https://github.com/wlupton/pandoc-lua-logging

### Configuration

- To get two-sided output, omit the `-variable classoption:oneside` parameter.

### Significant known issues

- Intermittent: sometimes pages with diagrams overflow off the bottom.
  - May be fixed in newer versions of xetex; seems ok in XeTeX 3.141592653-2.6-0.999993
- Footnotes can vanish.
  - This happens when the footnote reference is inside block-quoted text.
  - It looks to be due to the code that adds a side-bar using `framed`.
  - Indeed, the [framed manual](https://anorien.csc.warwick.ac.uk/mirrors/CTAN/macros/latex/contrib/framed/framed.pdf) says that footnotes are not supported.
  - Using `mdframed` or other solutions places the footnote with the quote rather than at the bottom of the page.
  - As a workaround, I've moved the footnote, but it would be good to fix this somehow. Looks difficult, though.

### Pending improvements

- Keep all headings with their next lines on page breaks.
  - Mostly working, but headings before summary boxes are a problem.
- `<details>` blocks need some styling.
- Heading numbers?
