# Upgrading Ethereum

## Intro

This is my book about Ethereum&nbsp;2.0: Ethereum on proof of stake and beyond.

You can read it at [upgrading-ethereum.info](https://upgrading-ethereum.info/altair) or at [eth2book.info](https://eth2book.info/altair).

It is a work in progress. Currently, the only reasonably complete section is the annotated specification (Part 3). But I thought you might like a glimpse at where it's going. I say more about the plan in the [preface](https://upgrading-ethereum.info/altair/preface).

I am not looking for contributions. That may change in future, but for now I will not be accepting any PRs to _src/book.md_. Please feel free, however, to raise issues for typos, inaccuracies, omissions, and suggestions. And I'll happily consider PRs for improvements to the CSS or JavaScript.

## Installing

### Pre-requisites

Install `node`, `npm`, and `gatsby-cli`. These are my versions:

```
> node --version
v16.11.1
> npm --version
8.1.3
> npm list -g gatsby-cli
/home/ben/.config/nvm/versions/node/v16.11.1/lib
└── gatsby-cli@4.2.0
```

`gatsby-cli` can be installed with,

```
npm install -g gatsby-cli
```

### Building

Clone this repo. `cd` into it, then:

```
git submodule update --init --recursive
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

The whole text for the book is in the _src/book.md_ file. Everything under _src/md/pages_ is auto-generated and any changes there will be lost.

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
