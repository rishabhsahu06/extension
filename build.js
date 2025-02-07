import { exec } from 'child_process';
import fs from 'fs-extra';

// Paths
const distDir = './dist';
const buildDir = './build';
const publicDir = './public';
const manifestFile = './manifest.json';
const iconImage = "./icon.png";
const contentjs = './src/content.js'
async function buildExtension() {
    try {
        console.log('Building extension...');

        // Run Vite build
        await new Promise((resolve, reject) => {
            exec('npm run build', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Build error: ${stderr}`);
                    reject(error);
                } else {
                    console.log(stdout);
                    resolve();
                }
            });
        });

        // Clean previous build
        if (fs.existsSync(buildDir)) {
            await fs.remove(buildDir);
        }
        await fs.mkdir(buildDir);

        // Copy build files
        await fs.copy(distDir, buildDir);

        // Copy public files (like icons, manifest, etc.)
        if (fs.existsSync(publicDir)) {
            await fs.copy(publicDir, buildDir);
        }

        // Copy manifest file
        if (fs.existsSync(manifestFile)) {
            await fs.copy(manifestFile, `${buildDir}/manifest.json`);
        }
        if (fs.existsSync(iconImage)) {
            await fs.copy(iconImage, `${buildDir}/icon.png`);
        }
        if (fs.existsSync(contentjs)) {
            await fs.copy(contentjs, `${buildDir}/content.js`);
        }
        console.log('Extension build completed successfully!');
    } catch (error) {
        console.error('Error during build:', error);
    }
}

buildExtension();
