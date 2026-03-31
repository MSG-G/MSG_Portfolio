#!/usr/bin/env node

/**
 * Script d'optimisation des images
 * Convertit les images PNG/JPG en WebP et JPEG optimisé
 * Utilisation: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '../src/assets');
const publicDir = path.join(__dirname, '../public');

// Configurations de redimensionnement
const sizes = {
  sm: 480,          // Mobile
  md: 768,          // Tablet
  lg: 1024,         // Desktop
  original: null    // Taille originale
};

// Images à optimiser
const images = [
  { src: 'profil.jpeg', dir: assetsDir, formats: ['webp', 'original'] },
  { src: 'screen-kaayScanner.png', dir: assetsDir, formats: ['webp', 'original'] },
  { src: 'Db_gestion_scolaire.png', dir: assetsDir, formats: ['webp', 'original'] },
  { src: 'DB_gestion_banque.png', dir: assetsDir, formats: ['webp', 'original'] },
  { src: 'logo2.png', dir: publicDir, formats: ['original'] } // Favicon - pas de conversion
];

async function optimizeImages() {
  console.log('🖼️  Optimisation des images...\n');

  for (const image of images) {
    const inputPath = path.join(image.dir, image.src);
    
    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  Image non trouvée: ${inputPath}`);
      continue;
    }

    console.log(`📦 Traitement: ${image.src}`);

    for (const size of [480, 768, 1024]) {
      for (const format of image.formats) {
        if (format === 'original') continue;
        
        const filename = path.parse(image.src).name;
        const ext = format === 'webp' ? 'webp' : 'jpg';
        const outputName = `${filename}-${size}w.${ext}`;
        const outputPath = path.join(image.dir, outputName);

        try {
          await sharp(inputPath)
            .resize(size, null, { withoutEnlargement: true })
            .toFormat(format, { quality: 80 })
            .toFile(outputPath);

          const stats = fs.statSync(outputPath);
          console.log(`  ✅ ${outputName} (${(stats.size / 1024).toFixed(2)} KB)`);
        } catch (err) {
          console.error(`  ❌ Erreur: ${err.message}`);
        }
      }
    }
  }

  console.log('\n✨ Optimisation terminée!');
  console.log('💡 Prochaines étapes:');
  console.log('   1. Vérifier les images générées dans src/assets/');
  console.log('   2. Utiliser le composant OptimizedImage dans les composants');
  console.log('   3. Committer les fichiers WebP optimisés');
}

optimizeImages().catch(console.error);
