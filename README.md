# TailwindTutorial

### Installing Tailwind CSS for Angular

Install tailwind.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Add paths to all template files in `tailwind.config.js` file so that tailwind can detect the class references in these files.

`tailwind.config.js`
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add tailwind directives in `src/styles.css` file.

`src/styles.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Tailwind CSS classes used

#### Color

Each color has a 10 predefined shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900.

E.g. for gray it would be `gray-50`, `gray-100`, `gray-200` etc.

Colors can be used on text with `text-gray-50` and on background with `bg-gray-50`.

#### Layout

flex: `flex`

inline-flex: `inline-flex`

flex-column: `flex-col`

align-items-center: `items-center`

justify-content-center: `justify-center`

#### Position

relative: `relative`

absolute: `absolute`

fixed: `fixed`

left 3.5rem: `left-14`

#### Width, height

100vw / 100vh: `w-screen`

100%: `w-full` / `h-full`

#### Sizes

0.25rem: `w-1` / `h-1` / `m-1` / `p-1`

0.5rem: `w-2` / `h-2` / `m-2` / `p-2`

auto: `w-auto` / `h-auto` / `m-auto` / `p-auto`

#### Transition

transition-property all: `transition-all`

transition-duration 300ms: `duration-300`

transition-timing-function linear: `ease-linear`

#### Transform

transform-origin left: `origin-left`

transform scale(0): `scale-0`

transform scale(1): `scale-100`

#### Border radius

border-radius 50%: `rounded-full`

#### Make tooltips appear on hovering another element

Use the `group` and `group-hover` classes so hovering the parent will cause the child to transition.

`group-hover` should be followed by the style to apply on hover e.g. `group-hover:scale-100`.

```
<button class="group">
  <span
    class="absolute left-14 transition-all duration-100 scale-0 origin-left group-hover:scale-100"
    >tooltip</span
  >
</button>
```

`absolute` and `left-14` also need to be applied for tooltip effect.

### Defining reusable custom classes using tailwind classes

`src/styles.css`
```
@layer components {
  .icon {
    @apply /* list tailwind classes here */
  }
}
```

### Using Google Material Symbols

Link the symbols URL in the head element.

`index.html`
```
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
    rel="stylesheet"
  />
</head>
```

Use the class `material-symbols-outlined` on `span` elements and type the name of the icon to use within the `span` tag.

E.g.
```
<span class="material-symbols-outlined">delete</span>
```

