# Whole book PDF

This is an experimental pipeline for building the whole text as a single PDF file using `pandoc`. You don't need any of the usual installation to do this (no gatsby, node, npm, etc.).

## Pre-requisites

Get the latest `pandoc` from the [pandoc repo](https://github.com/jgm/pandoc/releases/) and install it. It needs to be a fairly up to date one. (Caveat: Pandoc 3.1.6.2 fails due to [this issue](https://github.com/jgm/pandoc/issues/9014).)

```
> pandoc --version
pandoc 3.7.0.2
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

### Diagrams

I've had to wrestle a bit with diagram handling.

I am now using [drawio-desktop](https://github.com/jgraph/drawio-desktop) to create diagrams - this simplifies the workflow over using the web version. The script in _bin/util/drawio2image.sh_ can convert the _.drawio_ files to SVG or PDF.

Ideally we would like to do everything with SVGs alone, but the command-line version of drawio-desktop seems to be incapable of outputting SVGs that librsvg2 (used by pandoc) can render with the correct Google font. It is possible to export to SVG via the drawio GUI and embed the fonts, but that is cumbersome and results in huge files for the HTML version. (The background to the issue is that drawio uses `<foreignObject>` elements for text handling - web browsers understand this, but librsvg2 does not.)

Instead, we now maintain SVG versions (in _src/images/diagrams/_) for the HTML build, and PDF versions (in _src/images/diagrams\_pdf/_) for the PDF build. These are manually maintained by running the _drawio2image.sh_ utility as required - we could automate and cache and all that jazz, but for now that seems too much bother.

Note that, for charts, all text is converted to SVG paths, so they import to pandoc no problem.

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
