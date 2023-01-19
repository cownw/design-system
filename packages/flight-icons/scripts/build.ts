import dotenv from 'dotenv';
import fs from 'fs-extra';
import del from 'del';
import chalk from 'chalk';

// read the environment variables from the ".env" file
dotenv.config();

// read our custom config
import { config } from './config';

(async () => {
    try {
        console.log(`\n==========\n${chalk.cyan('Build started...')}\n==========\n`);

        await build();

        console.log(`\n==========\n${chalk.green('Build completed.')}\n==========\n`);

    } catch (err) {
        console.error(err);
        process.exit(1);

    }
})();

async function build() {

    // prepare the temporary folder
    try {
        if (fs.existsSync(config.tempFolder)) {
            fs.emptyDirSync(config.tempFolder);
        } else {
            fs.mkdirSync(config.tempFolder);
        }
    } catch (err) {
        
    }
}
