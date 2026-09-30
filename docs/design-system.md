# Design System

## Colors

- Primary: `#2A9D8F` (Oceanic Teal)
- Primary Hover: `#21867A`
- Neutrals: `#F4F7F6` (BG), `#FFFFFF` (Surface), `#E8ECEF` (Surface Alt), `#D1D9E0` (Border), `#1D3557` (Text), `#6C7A89` (Text Muted), `#FFFFFF` (On Primary)

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
- **Active**: Navigation links use '[aria-current="page"]' to highlight the active state.
- **Responsive**: Grid and layout adapt at '375px', '768px' and '1200px' breakpoints.
