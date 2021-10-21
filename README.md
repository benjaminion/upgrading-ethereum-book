# Ethereum 2.0 Explained

## Installing

 - Run `bin/update.sh` to generate the separate markdown files

TODO - what npm magic is required?

## Updating

 - Edit _src/book.md_
 - Run `bin/update.sh` to generate the separate markdown files

## How to

### Create a new page

New pages are created by appending HTML comments to headings (first three levels only):

```
## Heading <!-- /new/page/path -->
```

### Make a page unlinkable

Do this if a page has no subsections and no content yet. It will appear in the index, but not linkable.

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
