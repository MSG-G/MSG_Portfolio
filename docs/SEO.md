# 📊 SEO & Meta Tags Documentation

## Overview

Ce document détaille la stratégie SEO et les meta tags utilisés dans le portfolio MSG.

## Meta Tags Implémentés

### 1. Essential Meta Tags

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#0f0f0f" />
<link rel="canonical" href="https://msgportfolio.com" />
```

### 2. Description & Keywords

```html
<title>MSG Portfolio - Développeur Web Junior</title>
<meta name="description" content="Portfolio de Mouhadji S. Gueye. Développeur web junior passionné par React, TypeScript et le design moderne." />
<meta name="keywords" content="développeur, portfolio, react, typescript, web, freelance, dakar" />
<meta name="author" content="Mouhadji S. Gueye" />
```

### 3. Open Graph (Facebook, LinkedIn)

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://msgportfolio.com" />
<meta property="og:title" content="MSG Portfolio - Développeur Web Junior" />
<meta property="og:description" content="Portfolio de Mouhadji S. Gueye..." />
<meta property="og:image" content="https://msgportfolio.com/assets/profil-preview.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="fr_FR" />
```

### 4. Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="MSG Portfolio - Développeur Web Junior" />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://msgportfolio.com/assets/profil-preview.webp" />
<meta name="twitter:creator" content="@mouhadji_s_g" />
```

### 5. JSON-LD Structured Data

Deux schémas implémentés :

#### Person Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mouhadji S. Gueye",
  "url": "https://msgportfolio.com",
  "image": "...",
  "description": "Développeur web junior...",
  "jobTitle": "Développeur Web Junior",
  "sameAs": ["LinkedIn", "GitHub", "Instagram"]
}
```

#### WebSite Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MSG Portfolio",
  "url": "https://msgportfolio.com",
  "creator": { "@type": "Person", "name": "Mouhadji S. Gueye" }
}
```

## SEO Checklist

### On-Page SEO ✅

- [x] Page titles uniques et descriptifs
- [x] Meta descriptions < 160 caractères
- [x] H1 tags pour chaque section
- [x] Mots-clés stratégiques
- [x] Images avec alt text
- [x] Responsive design
- [x] Fast loading (WebP images)
- [x] Mobile-first design

### Technical SEO ✅

- [x] Canonical URLs
- [x] Sitemap (TODO)
- [x] robots.txt
- [x] Structured data (JSON-LD)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Mobile optimization
- [x] HTTPS ready

### Off-Page SEO

- [ ] Google Search Console
- [ ] Google Analytics 4 (✅ GA4 intégré)
- [ ] Backlinks (stratégie)
- [ ] Social media links

## Performance Metrics

### Core Web Vitals targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Current optimizations

- ✅ Images optimisées en WebP
- ✅ Lazy loading automatique
- ✅ Responsive images avec srcset
- ✅ Code splitting automatique
- ✅ CSS minifié
- ✅ JavaScript minifié

## Social Media Optimization

### Facebook / LinkedIn
- Open Graph image: 1200x630px
- Description dynamique
- Clickable links

### Twitter
- Twitter Card optimisée
- Creator tag: @mouhadji_s_g
- Summary large image

### Instagram
- Metadata pour partage
- Image preview

## Prochaines étapes

1. **Générer Sitemap**
   ```bash
   npm install -D sitemap
   # Créer script/generate-sitemap.js
   ```

2. **Google Search Console**
   - Ajouter propriété
   - Soumettre sitemap
   - Vérifier indexation

3. **Google Analytics**
   - ✅ GA4 déjà intégré
   - Configurer conversions
   - Suivre objective métrics

4. **Robots.txt**
   - Vérifier `public/robots.txt`
   - Ajouter sitemap reference

5. **Tools & Monitoring**
   - Google PageSpeed Insights
   - SEMrush / Ahrefs
   - Google Search Console
   - Lighthouse audits

## Testing

### Meta Tags Validators
- https://ogp.me/ (Open Graph)
- https://cards-dev.twitter.com/ (Twitter Cards)
- https://validator.schema.org/ (JSON-LD)

### SEO Tools
- https://www.seobility.net/
- https://www.seoptimer.com/
- https://www.screaming-frog.co.uk/

## URLs à configurer

⚠️ **Important**: Remplacer les URLs par le vrai domaine une fois déployé:
- Actuellement: `https://msgportfolio.com`
- À remplacer dans `index.html` meta tags

## Ressources

- [Google SEO Starter Guide](https://developers.google.com/search/docs)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Doc](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org](https://schema.org/)
- [Core Web Vitals](https://web.dev/vitals/)
