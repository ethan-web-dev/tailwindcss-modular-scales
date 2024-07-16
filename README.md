# Modular Scales for Tailwindcss

This package was created to provide users of Tailwindcss the ability to leverage modular typographic scales. I have been testing and using this system in my applications for the past few months and I really find it helpful when building layouts from scratch. My hope is that this helps someone with their design system the way it has helped me.

### What are Modular Scales? 

Modular scales are used to create visually succinct typographic scales in a given document. You can think of modular scales as a scalar system that harmoinizes your typography sizes without directly specifying what those size values are.

Modular scales can be used for more than text sizing, however that is out of the scope for this package and is generally not recommended unless you're comfortable working inside of highly constrained or opinionated design systems.

If this sounds confusing, or you are unfamiliar with modular scale, here is a more concise explanation of [what modular scales are.](https://every-layout.dev/rudiments/modular-scale/)

---

## Installation

Install the plugin: 

```shell
npm install -D @ethan/tailwindcss-modular-scales
```

Then add the plugin to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@ethan/tailwindcss-modular-scales'),
    // ...
  ],
}
```

## Basic Useage

Now you can declare the modular scale prefixed with `ms` or `-ms` (for values smaller than 1rem).

```html
<article>
  <h3 class="ms-minor-third-4">
    Title Text
  </h3>
  <p class="ms-major-second-1">
    Large body text  
  </p>
  <p class="ms-minor-third">
    base text size
  </p>
  <p class="-ms-augmented-fourth-2">
    Small label text
  </p>
</article>
```

## Choosing a Modular Scale

This plugin includes 17 different default scale ratios, inspired by [Scott Kellum and Tim Brown](https://www.modularscale.com/), they are:

| Scale Name       | Decimal | Ratio   |
| ---------------- | ------- | ------- |
| minor-second     | 1.067   | 15:16   |
| major-second     | 1.125   | 8:9     |
| minor-third      | 1.2     | 5:6     |
| major-third      | 1.25    | 4:5     |
| perfect-fourth   | 1.333   | 3:4     |
| augmented-fourth | 1.414   | 1:√2    |
| perfect-fifth    | 1.5     | 2:3     |
| minor-sixth      | 1.6     | 5:8     |
| golden-ratio     | 1.618   | 1:1.618 |
| major-sixth      | 1.667   | 3:5     |
| minor-seventh    | 1.778   | 9:16    |
| major-seventh    | 1.875   | 8:15    |
| octave           | 2       | 1:2     |
| major-tenth      | 2.5     | 2:5     |
| major-eleventh   | 2.667   | 3:8     |
| major-twelfth    | 3       | 1:3     |
| double-octave    | 4       | 1:4     |

## Modular Scale Ranges

Each scale ratio ranges from `-ms-{ScaleName}-6` to `ms-{ScaleName}-16`. The utility class `ms-{ScaleName}` is included and is a 1:1 ratio to the base size. Below are the general formulas for each value: 

| Scale Range       | Formula                        |
| ----------------- | ------------------------------ |
| -ms-{ScaleName}-6 | baseSize ÷ decimal<sup>6</sup>  |
| -ms-{ScaleName}-5 | baseSize ÷ decimal<sup>5</sup>  |
| -ms-{ScaleName}-4 | baseSize ÷ decimal<sup>4</sup>  |
| -ms-{ScaleName}-3 | baseSize ÷ decimal<sup>3</sup>  |
| -ms-{ScaleName}-2 | baseSize ÷ decimal<sup>2</sup>  |
| -ms-{ScaleName}-1 | baseSize ÷ decimal<sup>1</sup>  |
| ms-{ScaleName}    | baseSize                       |
| ms-{ScaleName}-1  | baseSize × decimal<sup>1</sup>  |
| ms-{ScaleName}-2  | baseSize × decimal<sup>2</sup>  |
| ms-{ScaleName}-3  | baseSize × decimal<sup>3</sup>  |
| ms-{ScaleName}-4  | baseSize × decimal<sup>4</sup>  |
| ms-{ScaleName}-5  | baseSize × decimal<sup>5</sup>  |
| ms-{ScaleName}-6  | baseSize × decimal<sup>6</sup>  |
| ms-{ScaleName}-7  | baseSize × decimal<sup>7</sup>  |
| ms-{ScaleName}-8  | baseSize × decimal<sup>8</sup>  |
| ms-{ScaleName}-9  | baseSize × decimal<sup>9</sup>  |
| ms-{ScaleName}-10 | baseSize × decimal<sup>10</sup> |
| ms-{ScaleName}-11 | baseSize × decimal<sup>11</sup> |
| ms-{ScaleName}-12 | baseSize × decimal<sup>12</sup> |
| ms-{ScaleName}-13 | baseSize × decimal<sup>13</sup> |
| ms-{ScaleName}-14 | baseSize × decimal<sup>14</sup> |
| ms-{ScaleName}-15 | baseSize × decimal<sup>15</sup> |
| ms-{ScaleName}-16 | baseSize × decimal<sup>16</sup> |

## Extending the Default Styles

You can extend this plugin to use any arbitrary scale and baseSize you like:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      modularScale: {
        baseSize: 1.5, // this is a rem value. defaults to 1rem
        scales: {
          'swag-scale': 420.69,
        },
      },
    },
    // ...
  },
  plugins: [
    require('@ethan/tailwindcss-modular-scales'),
    // ...
  ],
}
```

You can now use the above scale we just defined like this:

```html
<article>
  <h3 class="ms-swag-scale-4">
    Lorem Ipsum
  </h3>
  <p class="ms-swag-scale-1">
    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p class="ms-swag-scale">
    Ut enim ad minim veniam
  </p>
</article>
```

--- 

## Thank you!

I hope this plugin helps you with your next project. Please let me know if there are improvements I can make as I am always open to comments. Cheers!
