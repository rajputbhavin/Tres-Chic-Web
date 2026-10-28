import fs from 'fs';
import path from 'path';

// Read the user json from an input file
const userJsonPath = path.resolve('scratch/downloaded_data.json');
// Let's create scratch dir if not exists
if (!fs.existsSync('scratch')) {
  fs.mkdirSync('scratch');
}
