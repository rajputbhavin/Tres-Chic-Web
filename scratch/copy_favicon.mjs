import fs from 'fs';
import path from 'path';

const srcLogo = path.resolve('src/assets/gallery/Logo.jpg');
const destJpg = path.resolve('public/favicon.jpg');

fs.copyFileSync(srcLogo, destJpg);
console.log('Successfully copied Logo.jpg to public/favicon.jpg');
