# Gatsby + AsciiDoc

A cleaned up version of the [using-asciidoc](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-asciidoc) example. Only `gatsby-source-filesystem` and `gatsby-transformer-asciidoc` are absolutely necessary to get this working.

Note that trying to access `pageAttributes` will throw an error if your `.adoc` files don't include `:page-` attributes in the correct place.

For example:

```adoc
= Oh, Hello Warld

:page-path: /hello-world

_other content_
```
