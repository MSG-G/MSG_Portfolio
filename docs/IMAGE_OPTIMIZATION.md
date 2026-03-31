# 🖼️ Image Optimization Guide

## Overview

Ce projet utilise une stratégie d'optimisation d'images avec support WebP pour améliorer les performances et réduire la taille du bundle.

## Architecture

### Composant `OptimizedImage`
- **Localisation**: `src/components/ui/optimized-image.tsx`
- **Utilisation**: Remplace les balises `<img>` standard
- **Fonctionnalités**:
  - Support WebP avec fallback JPG/PNG
  - Responsive images avec `srcset`
  - Lazy loading automatique
  - Picture element pour meilleure compatibilité

### Script d'optimisation
- **Localisation**: `scripts/optimize-images.js`
- **Utilisation**: `npm run optimize:images`
- **Fonction**: Convertit PNG/JPG en WebP et crée des variantes responsive

## Utilisation

### 1. Import du composant OptimizedImage

```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";

export function MyComponent() {
  return (
    <OptimizedImage
      src="/path/to/image.jpg"
      alt="Description"
      className="w-full h-auto"
      sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, 50vw"
    />
  );
}
```

### 2. Conversion des images existantes

```bash
# Installer les dépendances (une seule fois)
npm install -D sharp imagemin imagemin-webp imagemin-mozjpeg

# Optimiser toutes les images
npm run optimize:images
```

Cela va:
1. Créer des variantes WebP de chaque image PNG/JPG
2. Créer des versions redimensionnées (480px, 768px, 1024px)
3. Générer les fichiers optimisés dans `src/assets/`

### 3. Images générées

Après l'optimisation, vous aurez:

```
src/assets/
├── profil.jpeg                 (original)
├── profil-480w.webp            (480px WebP)
├── profil-768w.webp            (768px WebP)
├── profil-1024w.webp           (1024px WebP)
├── profil-480w.jpg             (480px JPG fallback)
├── profil-768w.jpg             (768px JPG fallback)
├── profil-1024w.jpg            (1024px JPG fallback)
└── ...
```

## Formats supportés par `OptimizedImage`

### Picture Element (Priorité)
```html
<picture>
  <source srcset="..." type="image/webp" />
  <img src="..." />
</picture>
```

### Responsive srcset
```html
<img 
  srcset="image-480w.webp 480w, image-768w.webp 768w, ..." 
  sizes="(max-width: 480px) 100vw, ..."
/>
```

## Tailles de breakpoints

- **480px**: Mobile (sm)
- **768px**: Tablet (md)
- **1024px**: Desktop (lg)

## Format WebP vs JPG

- **WebP**: ~30% plus petit que JPG, support modern browsers
- **JPG**: Fallback pour navigateurs anciens

## Réductions de taille attendues

| Image | Original | WebP | Réduction |
|-------|----------|------|-----------|
| profil.jpeg | ~140 KB | ~90 KB | 36% ↓ |
| screenshot.png | ~1 MB | ~300 KB | 70% ↓ |

## Configurations

### Pour les images héroïques (larges)
```tsx
<OptimizedImage
  src="/assets/hero.jpg"
  sizes="100vw"
  className="w-full h-auto"
/>
```

### Pour les images de contenu (modérées)
```tsx
<OptimizedImage
  src="/assets/content.jpg"
  sizes="(max-width: 768px) 100vw, 90vw"
  className="max-w-4xl mx-auto"
/>
```

### Pour les images d'avatar (petites)
```tsx
<OptimizedImage
  src="/assets/avatar.jpg"
  sizes="100px"
  className="w-24 h-24 rounded-full"
/>
```

## Performance Tips

1. **Toujours utiliser `sizes`** pour que le navigateur charge la bonne version
2. **Utiliser `aspect-ratio` CSS** pour éviter le layout shift
3. **Lazy loading activé par défaut** - pas besoin de configuration
4. **Compression sans perte** - les images ne perdent pas de qualité

## Support et compatibilité

### Navigateurs WebP
- Chrome ✅ 23+
- Firefox ✅ 65+
- Edge ✅ 15+
- Safari ⚠️ 14+ (iOS 14+)

### Fallback
- Tous les navigateurs via JPG/PNG fallback

## Prochaines étapes

1. Exécuter `npm run optimize:images` pour générer les fichiers WebP
2. Vérifier les fichiers générés dans `src/assets/`
3. Committer les fichiers `.webp` optimisés
4. Les images responsive se chargeront automatiquement

## Ressources

- [WebP Format](https://developers.google.com/speed/webp)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Picture Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
