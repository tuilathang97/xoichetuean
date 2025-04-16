# Hero Banner Update Plan

## Objective
Convert the existing hero banner to a text and image component with:
- Text on left with CTA
- Image (/public/babies.webp) on right
- Fade-in/slide-in animations with fast duration

## Implementation Steps

### 1. File to Modify
`components/hero-banner.tsx`

### 2. Required Changes

#### Structure Changes
- Remove current full-screen background image
- Create two-column layout (50/50 split on md+ screens)
- Left column: text content (h1, p, button)
- Right column: babies.webp image
- Remove decorative star elements

#### Animation Implementation
```tsx
import { motion } from "framer-motion"

// Animation variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
}

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
}
```

#### Layout Structure
```tsx
<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4">
  {/* Text Column */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={textVariants}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <h1>...</h1>
    <p>...</p>
    <Button>...</Button>
  </motion.div>

  {/* Image Column */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={imageVariants}
    transition={{ duration: 0.5 }}
  >
    <Image 
      src="/babies.webp"
      alt="..."
      width={600}
      height={400}
      className="rounded-lg shadow-md"
    />
  </motion.div>
</section>
```

### 3. Animation Details
- Text: slides in from left while fading in
- Image: slides in from right while fading in
- Duration: 0.5s (fast)
- Easing: default (ease-in-out)

### 4. Responsive Considerations
- Mobile: single column (text above image)
- Medium+: two equal columns
- Text remains left-aligned at all sizes