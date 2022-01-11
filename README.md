# Upgrading Ethereum

## Intro

This is my book about Ethereum&nbsp;2.0: Ethereum on proof of stake and beyond.

You can read it at [upgrading-ethereum.info](https://upgrading-ethereum.info/altair) or at [eth2book.info](https://eth2book.info/altair).

It is a work in progress. Currently, the only reasonably complete section is the [annotated specification](https://upgrading-ethereum.info/altair/annotated-spec) (Part 3). But I thought you might like a glimpse at where it's going. I say more about the plan in the [preface](https://upgrading-ethereum.info/altair/preface).

I am not looking for contributions at this time. That may change in future, but for now I will not be accepting any PRs to _src/book.md_. Please feel free, however, to raise issues for typos, inaccuracies, omissions, and suggestions. And I'll happily consider PRs for improvements to the CSS or JavaScript.

## Licence

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) licence.

## Installing

### Pre-requisites

Install `node`, `npm`, and `gatsby-cli`. These are my versions:

```
> node --version
v16.11.1
> npm --version
8.3.0
> gatsby --version
Gatsby CLI version: 4.4.0
```

`gatsby-cli` can be installed with,

```
npm install -g gatsby-cli
```

You'll also need a working `gawk` (GNU awk) installed at _/usr/bin/gawk_ so that the build can preprocess the book document.

### Building

Clone this repo. `cd` into it, then:

```
npm install
gatsby build
```

### Viewing

After building as above, do

```
gatsby serve
```

and visit `http://localhost:9000` in a web browser.

Instead of building and serving, you can run `gatsby develop` and point your browser at port 8000. This will not pick up real-time changes to _src/book.md_ and will need to be restarted to pick up changes. It is useful, though, for checking CSS and React changes interactively.

## Editing

The entire text for the book is in the _src/book.md_ file. Everything under _src/md/pages_ is auto-generated and any changes there will be lost.

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

### Insert an image

Insert SVG images with
```
<div class="image">
<img src="images/image_0.svg" /><br />
<span>Image caption, centred and italic.</span>
</div>
```
