# Research Compliance landing page — Parts 1 and 2

Responsive header and hero section, plus the Why Compliance Matters section with supplied Figma artwork and feature icons.

## Structure

- index.html — page markup
- src/css/styles.css — responsive layout and styles
- src/js/menu.js — mobile menu behavior
- assets/images/ — hero and Section 2 illustrations
- assets/icons/ — logo, navigation, benefit, decoration, and feature icons

Desktop header alignment: the navigation starts 150px after the 158.71px logo, uses a 574.69 × 19.2px row, 16px Roboto links distributed with space-between, and a 169px contact button aligned to the right edge. Open index.html in a browser. Roboto loads from Google Fonts when online and falls back to Arial.

## Section 2 measurements

Values read from the screenshots supplied by the user: 50px top/bottom section padding; 100px left/right section padding; 33px gap between the title and intro; title wrapper 603.5 × 140px with 564 × 120.1px heading text (42px Roboto, 60.05px line-height); intro text 606 × 128px inside a 603.5px column; artwork and feature-stack frames 594 × 594px; each feature card 594 × 142px with 18 × 22px padding, 44px stack top/bottom padding, and 40px gaps. The curved arrow is 102.39 × 88.61px and is anchored directly to the final heading line. The bottom chevron decoration is 137.33 × 34.17px and sits at the section bottom-left edge with a 14px bottom offset. Hovering a card turns its border and heading blue; button hover states swap filled and outlined styles. On desktop, the artwork and feature cards use a 52px column gap to fit the 1240px content width.

Tablet and mobile layouts adapt independently of the desktop rules: tablet keeps the hero buttons side-by-side and enlarges the hero illustration, while narrow mobile stacks the buttons and places the curved arrow after the intro. The hero buttons hug a 450 × 46px group (213px per button with a 24px gap).










