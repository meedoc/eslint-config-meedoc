# eslint-config-meedoc

This package provides MeeDoc's `.eslintrc` as an extensible shared config.

# Usage
Include this repository's url `https://github.com/meedoc/eslint-config-meedoc.git`
to your project's `package.json` (not available via npm, at least yet).

For your projects `.eslintrc` add:
```javascript
{
  "extends": "meedoc",
  "rules" : {
    // Any project specific overrides go here.
  }
}
```


# Testing

You can make sure that this package is following the same linting rules as it is
introducing by running `npm test`.
