import fs from 'fs';
import path from 'path';
import { generateResumePdf } from './generate-resume.js';

const buffer = generateResumePdf();
const outPath = path.join(process.cwd(), 'public', 'assets', 'Atharv-Kawalase-Resume.pdf');
fs.writeFileSync(outPath, Buffer.from(buffer));
console.log('Successfully wrote professional resume PDF to', outPath);
