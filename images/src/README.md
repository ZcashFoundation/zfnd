# Images Source Folder

#### Why this is here

This folder is for the images you get pretty much anywhere - all of the images that you haven't yet optimized for the web. Put them in here, and then run:

    gulp

...which will go around shrinking them. As an example, it took the `zeal-zcash-foundation-feature-image.jpg` and shrunk it down to a fourth of the size that it was before.

Never refer to images in `images/src` in a blogpost; they should always be copied over to `images` automatically by Gulp, and that will ensure that you're serving up nice issues to your users. The way to embed them is using this syntax:

```markdown
Look at our zealous zebras!

![Zealous zebras](../zeal-zcash-foundation-feature-image.jpg)
```

Note that the path is relative to where the Markdown file is. This will look pretty much like this:

![Zealous zebras](../zeal-zcash-foundation-feature-image.jpg)

You _can_ add images directly to images without running Gulp, but they just won't be as small as your users might like. But that's always an option as needed.

#### Questions?

Ping [@RichardLitt](mailto:richard@burntfen.com) if you've got questions about this, on GitHub at @RichardLitt or on Twitter at [@richlitt](https://twitter.com/richlitt).
