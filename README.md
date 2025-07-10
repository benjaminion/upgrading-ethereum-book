# Upgrading Ethereum

This is my book about Ethereum&nbsp;2.0: Ethereum on proof of stake and beyond.

You can read it at [eth2book.info](https://eth2book.info/latest/) (also available at [upgrading-ethereum.info](https://upgrading-ethereum.info/latest/)).

It is a work in progress. There's more about the roll-out plan in the [preface](https://eth2book.info/latest/preface/).

## Licence

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) licence.

## Contributing

I am not looking for contributions at this time. That may change in future, but for now I will not be accepting any PRs to _src/book.md_.

Feel free to raise issues for typos, inaccuracies, omissions, and suggestions, but please don't make PRs for these. I'll happily consider PRs for improvements to the CSS or JavaScript.

Kindly note that [British spelling](https://www.oxfordinternationalenglish.com/differences-in-british-and-american-spelling/) is not a typo.

## Installing

As of May 2025, I have migrated the entire build from Gatsby to [Astro](https://astro.build/). Please let me know if you spot any issues!

### Pre-requisites

Install `node` and `npm`. These are my versions:

```
> node --version
v22.16.0
> npm --version
11.4.1
```

You'll need a working `perl` installed at _/usr/bin/perl_ to run the pre-build checks.

### Pre-build checks

I've implemented a heap of pre-build checks for linting and spelling issues. You can run them standalone with `npm run check`, and they also run as a first step in the build process, though a failure will not stop the build.

To cause Git commits to halt when trying to commit `src/book.md` while these checks are failing, add the following symlink:

```
(cd .git/hooks; ln -s ../../bin/util/git-pre-commit-hook.sh pre-commit)
```

The controlling script for the checks is _bin/build/prebuild.js_. You can enable and disable specific checks there.

If the $\LaTeX$ linting fails you might need to install the following, or just disable that check.

```
sudo apt install libipc-run3-perl chktex
```

### Building

Clone this repo. `cd` into it, then:

```
npm install
npm run build
```

### Viewing

After building as above, do

```
npm run serve
```

Astro will tell you where it is serving the content (somewhere like http://localhost:4321/capella).

Instead of building and serving, you can run `npm run devel`. This will live-update pages in response to changes to `src/book.md` and other files like CSS and Astro scripts. Note that the one-page annotated spec and the search index will not update interactively - do `npm run clean` for a full rebuild.

## Workflow

The entire text for the book is in the _src/book.md_ file. Everything under _src/md/pages_ is auto-generated and any changes there will be lost.

There are various npm script commands to help with building and testing. See `package.json` for the full list.

  - `npm run clean` deletes the output directory (`dist/`) and the Astro cache.
    - Astro caches aggressively and will often skip things like rebulding the search index.
  - `npm run check` runs a bunch of custom linting and checking, controlled by the _bin/build/prebuild.js_ script.
    - Check all links to internal anchors, image files, and footnotes.
    - Spell check. Add any exceptions to _src/spellings.en.pws_ (or use `npm run spfix`).
    - Markdown linting with [`markdownlint`](https://github.com/DavidAnson/markdownlint).
    - HTML checks and LaTeX expression linting.
  - `npm run build` runs `astro build`.
  - `npm run serve` runs `astro preview`.
  - `npm run devel` runs the interactive development server.
  - `npm run links` checks external links.
    - Checking links to GitHub it will fail due to rate-limiting unless you supply GitHub credentials.
  - `npm run spell` runs a spell check
  - `npm run spfix` can be used to maintain the list of spellings.
  - `npm run valid` submits a page to the [W3C markup validation service](https://validator.w3.org/) and lists any issues above `info` level.
  - `npm run pdfit` creates a PDF of the whole thing. See the [README](bin/pdf/README.md).
  - `npm run stats` shows some stats about the book. Build the PDF first to get the full set.
  - `npm run debug` builds with debugging output for my custom integrations.
  - `npm run minim` does a minimal build with only a couple of pages. See `src/content.config.js`.

### Environment variables

A couple of environment variables can be used to shorten the build time when testing infrastructure changes:

```
UE_MINIMAL= npm run build   # Build a minimal version with only a couple of pages
UE_NOCHECK= npm run build   # Skip checks on the source markdown when building
```

## How to

### Create a new page

New pages are created by appending HTML comments to headings (first three levels only):

```
## Heading <!-- /new/page/path -->
```

Take care to get the white space correct.

### Make a page unlinkable

Do this if a page has no content yet. It will appear in the index, but not linkable.

Append a `*` to the path:

```
## Heading <!-- /unlinked/page/path* -->
```

## Images

All images are in SVG format and get embedded directly into the HTML pages so that they can be responsive to light and dark mode. I have spent absurd amounts of time making this work, so please enjoy.

### Diagrams

Diagrams have been created in [drawio.com](https://www.drawio.com/) desktop application, version 27.0.9. The script in _bin/util/drawio2svg.sh_ converts a drawio file to one or more SVG files.

Source files for all diagrams are in the _src/diagrams_ directory. The font used is the _Gloria Hallelujah_ Google font.

### Charts

Charts (graphs, barcharts) are generated using my ~~hacked~~extended version of the [roughViz](https://github.com/benjaminion/roughViz) library. Load the _src/charts/charts.html_ file in a browser (you might need to fiddle with some browser security settings to allow it to load local files). The charts are downloaded via the link that should appear on each image. If the download link doesn't appear check the browser console for errors.

Pre-requisites:
  - _roughviz.min.js_ needs to be [downloaded](https://raw.githubusercontent.com/benjaminion/roughViz/master/dist/roughviz.min.js) from my repo and put in the _charts_ directory.
  - _svg-text-to-path.js_ needs to be [downloaded](https://raw.githubusercontent.com/paulzi/svg-text-to-path/master/dist/svg-text-to-path.js), also to the _charts_ directory.
  - The _Gaegu-Light.ttf_ file needs to be extracted from the [Gaegu](https://fonts.google.com/specimen/Gaegu) Google font and put in the _charts/font_ directory.

## Whole book PDF

There's an experimental pipeline for typesetting the whole text as a PDF book in _bin/pdf/_. See the [README](bin/pdf/README.md) there for instructions.

## Coffee

Kind souls sometimes ask for a way to send me a cup of coffee or make a donation. My account info is below - donations are absolutely not expected or necessary, but are always very encouraging and gratefully received.

  - `0xd262d146e869915444d0f34ecdaabab5ab43007e` on Ethereum, Polygon, Optimism, Arbitrum, Base.
  - Also at `benjaminion.eth`

Any whales or large treasuries out there, I encourage you to take a look at the [Protocol Guild](https://protocol-guild.readthedocs.io/en/latest/index.html) which supports the people developing and maintaining our incredible technology, not just writing about it.

Finally, all [feedback](https://eth2book.info/latest/contact/) is very welcome!
