# Ethereum 2.0 Explained

## Installing

 - `cd src`
 - Run `../bin/split.awk book.md` to generate the separate markdown files

TODO - what npm magic is required?

## Updating

 - `cd src`
 - Edit _book.md_
 - Run `../bin/split.awk book.md` to generate the separate markdown files

## How to

### Create a new page

New pages are created by inserting the following before headings:
```
[new page /new/page/path]::
## Heading
```

### Insert an image

Insert SVG images with
```
<div class="image">
<img src="images/image_0.svg" /><br />
<span>Image caption, centred and italic.</span>
</div>
```
