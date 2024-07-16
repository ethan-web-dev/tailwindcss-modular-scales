# Modular Scales for Tailwindcss

This package was created to provide users of Tailwindcss the ability to leverage modular typographic scales. I have been testing and using this system in my applications for the past few months and I really find it useful. My hope is that this helps someone with their design system the way it has helped me. 

> **Note:** The common prefix `ms` has been replaced to `msc` for enhanced readability as of v2. The decision to revise the prefix was prompted by the apparent overlap in tailwinds native classes. The utility for `margin-inline-start` is prefixed with `ms` natively from tailwind.  

### What are Modular Scales? 

Modular scales are used to create visually succinct typographic scales in a given document. You can think of modular scales as a scalar system that harmoinizes your typography sizes without directly specifying what those size values are.

Modular scales can be used for more than text sizing, however that is out of the scope for this package and is generally not recommended unless you're comfortable working inside of highly constrained or opinionated design systems.

If this sounds confusing, or you are unfamiliar with modular scale, here is a more concise explanation of [what modular scales are.](https://every-layout.dev/rudiments/modular-scale/)

---

## Installation

Install the plugin: 

```shell
npm install -D @ethanbeeler/tailwindcss-modular-scales
```

Then add the plugin to your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@ethanbeeler/tailwindcss-modular-scales'),
    // ...
  ],
}
```

## Basic Useage

Now you can declare the modular scale prefixed with `msc` or `-msc` (for values smaller than 1rem).

```html
<article>
  <h3 class="msc-minor-third-4">
    Title Text
  </h3>
  <p class="msc-1 msc-major-second">
    Large body text with compound syntax 
  </p>
  <p class="msc-minor-third">
    base text size
  </p>
  <p class="-msc-augmented-fourth-2">
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

| Scale Range        | Formula                        |
| ------------------ | ------------------------------ |
| -msc-{ScaleName}-6 | baseSize ÷ decimal<sup>6</sup>  |
| -msc-{ScaleName}-5 | baseSize ÷ decimal<sup>5</sup>  |
| -msc-{ScaleName}-4 | baseSize ÷ decimal<sup>4</sup>  |
| -msc-{ScaleName}-3 | baseSize ÷ decimal<sup>3</sup>  |
| -msc-{ScaleName}-2 | baseSize ÷ decimal<sup>2</sup>  |
| -msc-{ScaleName}-1 | baseSize ÷ decimal<sup>1</sup>  |
| msc-{ScaleName}    | baseSize                       |
| msc-{ScaleName}-1  | baseSize × decimal<sup>1</sup>  |
| msc-{ScaleName}-2  | baseSize × decimal<sup>2</sup>  |
| msc-{ScaleName}-3  | baseSize × decimal<sup>3</sup>  |
| msc-{ScaleName}-4  | baseSize × decimal<sup>4</sup>  |
| msc-{ScaleName}-5  | baseSize × decimal<sup>5</sup>  |
| msc-{ScaleName}-6  | baseSize × decimal<sup>6</sup>  |
| msc-{ScaleName}-7  | baseSize × decimal<sup>7</sup>  |
| msc-{ScaleName}-8  | baseSize × decimal<sup>8</sup>  |
| msc-{ScaleName}-9  | baseSize × decimal<sup>9</sup>  |
| msc-{ScaleName}-10 | baseSize × decimal<sup>10</sup> |
| msc-{ScaleName}-11 | baseSize × decimal<sup>11</sup> |
| msc-{ScaleName}-12 | baseSize × decimal<sup>12</sup> |
| msc-{ScaleName}-13 | baseSize × decimal<sup>13</sup> |
| msc-{ScaleName}-14 | baseSize × decimal<sup>14</sup> |
| msc-{ScaleName}-15 | baseSize × decimal<sup>15</sup> |
| msc-{ScaleName}-16 | baseSize × decimal<sup>16</sup> |

## Syntax Variants

In addition to the default combined syntax there is a compound syntax included as well. This gives users a wider variety of options when working with modular scales inside of their design system. 

The compound syntax, although different, can be used the exact same way as the combined syntax. It has the same values and ranges, the only that differs is the way you author the code. 

Here is an example of the compound modular scale utilities being used inside of a basic headless React component:

```tsx
import React, { ElementType, ForwardedRef } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from './utils'

const paragraphVariants = cva(
  'text-red-500',
{
  variants: {
    size: {
      default: 'msc-0',
      large: 'msc-1',
      small: '-msc-1',
    },
    scale: {
      minorSecond: 'msc-minor-second',
      majorSecond: 'msc-major-second',
      minorThird: 'msc-minor-third',
    },
  },
  defaultVariants: {
    size: 'default',
    scale: 'minorSecond',
  },
})

type ParagraphSize = 'default' | 'large' | 'small'

type ParagraphScale = 'minorSecond' | 'majorSecond' | 'minorThird'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {
  children?: React.ReactNode
  className?: string
  size?: ParagraphSize
  scale?: ParagraphScale
}

export const P = React.forwardRef<HTMLParagraphElement, ParagraphProps>(({
  children,
  className,
  size,
  scale,
  ...props
}, ref: ForwardedRef<HTMLParagraphElement>) => {
  const classNameCollection = cn(
    paragraphVariants({ size, scale }),
    className,
  )

  return (
    <p ref={ref} className={classNameCollection} {...props}>
      {children}
    </p>
  )
})

P.displayName = 'P'
```

Now you can go and use this component inside of your application like this:

```tsx
<article>
  <P scale="minorThird" size="small">    
    Lorem Ipsum
  </P>
  <P scale="minorSecond" size="default">
    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </P>
  <P scale="majorSecond" size="large">
    Ut enim ad minim veniam
  </P>
</article>
```

## Extending the Default Styles

You can extend this plugin to use any arbitrary scale and baseSize you like, the single configuration object supports both syntax options:

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
    require('@ethanbeeler/tailwindcss-modular-scales'),
    // ...
  ],
}
```

You can now use the above scale we just defined like this:

```html
<article>
  <h3 class="msc-swag-scale-4">
    Lorem Ipsum
  </h3>
  <p class="msc-swag-scale-1">
    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p class="msc-swag-scale msc-4">
    Ut enim ad minim veniam
  </p>
</article>
```

--- 

## Thank you!

I hope this plugin helps you with your next project. Please let me know if there are improvements I can make as I am always open to comments. Cheers!
