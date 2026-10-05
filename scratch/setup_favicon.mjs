import fs from 'fs';
import path from 'path';

const srcFavicon = path.resolve('src/assets/Favicon.jpeg');

// 1. Always copy direct JPEG files to public
fs.copyFileSync(srcFavicon, path.resolve('public/Favicon.jpeg'));
fs.copyFileSync(srcFavicon, path.resolve('public/favicon.jpeg'));
fs.copyFileSync(srcFavicon, path.resolve('public/favicon.jpg'));
fs.copyFileSync(srcFavicon, path.resolve('public/apple-touch-icon.jpeg'));
fs.copyFileSync(srcFavicon, path.resolve('public/apple-touch-icon.jpg'));

console.log('Copied Favicon.jpeg to public JPEG targets');

// 2. Try using sharp if available to create PNG and ICO
try {
  const sharp = (await import('sharp')).default;
  await sharp(srcFavicon).resize(32, 32).toFile(path.resolve('public/favicon.ico'));
  await sharp(srcFavicon).resize(192, 192).toFile(path.resolve('public/favicon.png'));
  await sharp(srcFavicon).resize(180, 180).toFile(path.resolve('public/apple-touch-icon.png'));
  console.log('Successfully generated favicon.ico, favicon.png, and apple-touch-icon.png with sharp!');
} catch (e) {
  console.log('Sharp not loaded, using JPEG files directly:', e.message);
}
