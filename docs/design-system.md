# Design System

## Colors

- Primary: `#D4AF37` (Gold Leaf)
- Primary Hover: `#B5952F`
- Neutrals: `#121212` (BG), `#1E1E1E` (Surface), `#2A2A2A` (Surface Alt), `#333333` (Border), `#E8E8E8` (Text), `#A0A0A0` (Text Muted), `#121212` (On Primary)

## Typography

- Font Family: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- Heading: Base font size, `line-height: 1.25`
- Subheading: Base font size, `line-height: 1.25`
- Body text: `1rem` base size, `line-height: 1.5`
- Small/Labels: `0.8rem` – `0.9rem`

## Spacing

- Scale used: 4px base grid
  - `xs`: 4px
  - `sm`: 8px
  - `md`: 16px
  - `lg`: 24px
  - `xl`: 32px

## Components

- [x] Primary button
- [x] Secondary button
- [x] Text field
- [x] Card
- [x] Navbar
- [x] Avatar

## States considered

- **Hover**: Buttons and links change background/text color.
- **Focus**: `:focus-visible` applies a 2px solid outline with a 2px offset for accessibility.
- **Active**: Navigation links use `[aria-current="page"]` to highlight the active state.
- **Responsive**: Grid and layout adapt at `375px`, `768px` and `1200px` breakpoints.
