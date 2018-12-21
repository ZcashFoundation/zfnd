# Zcash Foundation Website

Welcome to the Zcash Foundation Website. This repository does **two things**:

1. Holds documents for the foundation.
2. Holds the source code for the website.

## Foundation Documents

Here are the main documents in this repo. For all of them, to see the same, rendered versions, go to [the website](https://zfnd.org).

- [`about`](about/)
- [`community`](community/)
- [`governance`](governance/)
- [`grants`](grants/)
- [`meetups`](meetups/)
- [`resources`](resources/)
- [`zcon`](zcon/)
- [`_posts`](_posts/): Here you'll find blogposts. You should probably look at them on [the website](https://zfnd.org) for better formatting, though!

## The Website

The rest of the files are websites.

## Adding Images

The folder `images/src` is for the images you get pretty much anywhere - all of the images that you haven't yet optimized for the web. Put them in there, and then run:

```sh
# In the main directory
$ gulp
```

...which will go around shrinking them. As an example, it took the `zeal-zcash-foundation-feature-image.jpg` and shrunk it down to a fourth of the size that it was before.

If you don't have Gulp installed, you can get it by doing this:

```sh
$ npm install --global gulp
# And, in this directory...
$ npm install
```

Never embed images in `images/src` in a blogpost; they should always be copied over to `images` automatically by Gulp, and that will ensure that you're serving up nice issues to your users. The way to embed them is using this syntax:

```markdown
Look at our zealous zebras!

![Zealous zebras](images/zeal-zcash-foundation-feature-image.jpg)
```

Note that the path is relative to where the Markdown file is. This will look pretty much like this:

![Zealous zebras](images/zeal-zcash-foundation-feature-image.jpg)

You _can_ add images directly to images without running Gulp, but they just won't be as small as your users might like. But that's always an option as needed.

## Contribute

Please do! [Open an issue](https://github.com/ZcashFoundation/zfnd/issues/new)!

Please abide by [the values of the Zcash Foundation](about/values.md).

## License

[MIT](LICENSE) © 2018 Zcash Foundation and Burnt Fen Creative LLC.
