# Whole book PDF

This is an experimental pipeline for building the whole text as a single PDF file using `pandoc`. You don't need any of the usual installation to do this (no gatsby, node, npm, etc.).

## Pre-requisites

Get the latest `pandoc` from the [pandoc repo](https://github.com/jgm/pandoc/releases/) and install it. It needs to be a fairly up to date one.

```
> pandoc --version
pandoc 3.1.2
...
```

Install LaTeX and the SVG utility. The `xetex` version is not mandatory, but seems to be more reliable for me.

```
sudo apt install librsvg2-bin texlive-xetex
```

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

- Some pages with diagrams overflow off the bottom.

### Pending improvements

- Better table styling.
- Styling of figure captions.
- `<details>` blocks need some styling.
- Code line wrapping is good, but not perfect.
- Heading numbers?

### Other

Occasional fatal instances of this error (due to hyperlinks spanning page breaks),

```
    Error producing PDF.
    ! pdfTeX error (ext4): \pdfendlink ended up in different nesting level than \pdfstartlink.
```

See [here](https://www.overleaf.com/learn/latex/Questions/What_does_%22%5Cpdfendlink_ended_up_in_different_nesting_level_than_%5Cpdfstartlink%22_mean%3F). It seems to be hard to avoid. It hasn't occurred since switching to `xelatex`, however.
