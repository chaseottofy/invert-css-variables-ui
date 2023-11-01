# invert-css-variables-ui

A simple UI to bulk invert CSS variables. 
Good for creating light/dark themes - just invert the colors and you're more than likely halfway there.

- Uses [@invert-css](https://www.npmjs.com/package/invert-css), a package I made to invert the variables.

## Usage

Example input:

```bash
  --accent-1: #111;
  --accent-2: rgb(255,170,204);
  --accent-3: hsl(340,100%,88%);
  --accent-4: #FFFFFF;
```

Example output:

```
  --accent-1: #eeeeee;
  --accent-2: rgb(0,85,51);
  --accent-3: hsl(160,100%,88%);
  --accent-4: #000000;
```

- Invalid CSS variables/input will just output the invalid input. A console error will be logged.

## Features

- Maintains the variable names and output will have proper spacing.
- Copy to clipboard.

### Supported Color Formats

- Hex (both short `#123` and long `#112233` formats)
- RGB (`rgb(255,255,255)`)
- RGBA (`rgba(255,255,255,0.5)`)
- HSL (`hsl(120,100%,50%)`)
- HSLA (`hsla(120,100%,50%,0.5)`)