# 🎨 Layout Shift & Stability Guide

## Issues Resolved

### 1. Scrollbar Layout Shift ✅ **FIXED**

**Problem**: When scrollbar appears/disappears, the entire page shifts left/right by ~15px

**Solution**:
```css
html {
  scrollbar-gutter: stable;  /* Reserve space for scrollbar */
  overflow-y: scroll;        /* Always show scrollbar */
}
```

**Location**: `src/index.css` (Line 7-10)

**Browser Support**: Chrome 90+, Firefox 102+, Edge 90+

---

## Other Causes of Layout Shift

### 2. Fixed Position Elements ⚠️
When toasts/modals appear, they hide scrollbar → causes shift

**Prevention**:
```css
/* Fixed elements should not trigger scrollbar */
.toast-viewport {
  position: fixed;
  z-index: 100;
  /* Does not affect scrollbar since position: fixed */
}
```

✅ **Status**: Already implemented in UI components

### 3. Image Dimension Changes ⚠️
Images loading causes layout shift when width/height not known

**Prevention**:
```tsx
<img 
  {...props}
  width={800}  <!-- Set explicit dimensions -->
  height={600}
  className="w-full h-auto"  <!-- Still responsive -->
/>
```

✅ **Status**: OptimizedImage component handles this

### 4. Font Loading ⚠️
Web fonts load and change font size → layout shift

**Prevention**:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
/* display=swap loads fallback first, then swaps fonts */
```

✅ **Status**: Already implemented in index.css

### 5. Ads/Banners Inserting ⚠️
Third-party content appearing after page load

**Status**: No ads, so not applicable

---

## Animation Best Practices

### Good ✅
```tsx
// Transform animations don't cause layout shift
<motion.div
  animate={{ x: [0, 10, 0] }}  // Uses transform
  transition={{ duration: 5, repeat: Infinity }}
/>
```

### Bad ❌
```tsx
// Position animations cause layout shift
<motion.div
  animate={{ left: ["0px", "10px", "0px"] }}  // Don't use position
  transition={{ duration: 5, repeat: Infinity }}
/>
```

**Current Implementation**: HeroSection uses `x` and `y` transforms → ✅ Good

---

## CLS (Cumulative Layout Shift) Metrics

### Target
- **Good**: < 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

### Current Score
✅ Optimized (with scrollbar-gutter fix)

### Measurement
Use Chrome DevTools → Lighthouse → Performance

---

## Testing Layout Stability

### 1. Test Scrollbar Appearance
```javascript
// Open Console and refresh with different content sizes
window.innerHeight // Check viewport height
document.documentElement.scrollHeight // Check page height
```

### 2. Test on Real Devices
- Desktop (various window sizes)
- Mobile (scrollbar not visible, no shift)
- Tablet (both orientations)

### 3. DevTools Testing
1. Open DevTools → Lighthouse
2. Run audit with "Accessibility" selected
3. Check for "Layout Shift" warnings

---

## Checklist for Zero Layout Shift

- [x] `scrollbar-gutter: stable` on html
- [x] `overflow-y: scroll` on html (always show scrollbar rect)
- [x] Images have width/height OR aspect-ratio CSS
- [x] Fonts use `display=swap`
- [x] Animations use `transform` (x, y, scale) not position
- [x] Fixed elements don't affect scrollbar
- [x] No ads/third-party inserts
- [x] Modals/toasts use fixed positioning

---

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| scrollbar-gutter: stable | 90+ | 102+ | 15.4+ | 90+ |
| overflow-y: scroll | All | All | All | All |
| CSS transforms | All | All | All | All |
| display=swap | All | All | All | All |

---

## Resources

- [Web Vitals: CLS](https://web.dev/cls/)
- [scrollbar-gutter MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter)
- [Framer Motion: Transform](https://www.framer.com/motion/animation/#transform)
- [Lighthouse DevTools](https://developers.google.com/web/tools/lighthouse)

---

## Recent Changes

- **2026-03-31**: Added `scrollbar-gutter: stable` to fix layout shift from scrollbar
- **2026-03-31**: Cleaned up App.css (moved to Tailwind CSS only)
- **2026-03-31**: Verified all animations use transform, not position
