#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const defaultSourceDirectory =
  'F:\\latest-backup-for-pc\\studies-main\\project-fifteen\\cv-generator\\releases';
const sourceDirectory = process.argv[2]
  ? path.resolve(process.argv[2])
  : defaultSourceDirectory;
const generalCvPattern = /^snair_cv_(\d{4}-\d{2}-\d{2})\.pdf$/;
const destination = path.join(
  process.cwd(),
  'static',
  'cv',
  'siddharth-nair-cv.pdf'
);

try {
  if (!fs.existsSync(sourceDirectory)) {
    throw new Error(`CV releases directory does not exist: ${sourceDirectory}`);
  }

  const generalCvs = fs.readdirSync(sourceDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && generalCvPattern.test(entry.name))
    .map((entry) => ({
      name: entry.name,
      date: entry.name.match(generalCvPattern)[1]
    }))
    .sort((left, right) => right.date.localeCompare(left.date));

  if (generalCvs.length === 0) {
    throw new Error(`No general CV matching snair_cv_YYYY-MM-DD.pdf found in ${sourceDirectory}`);
  }

  const latestCv = generalCvs[0];
  const source = path.join(sourceDirectory, latestCv.name);
  const pdf = fs.readFileSync(source);

  if (pdf.length < 5 || pdf.subarray(0, 5).toString('ascii') !== '%PDF-') {
    throw new Error(`${latestCv.name} is not a valid PDF.`);
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });

  const temporaryDestination = `${destination}.tmp`;
  fs.writeFileSync(temporaryDestination, pdf);
  fs.copyFileSync(temporaryDestination, destination);
  fs.rmSync(temporaryDestination, { force: true });

  console.log(`Updated ${path.relative(process.cwd(), destination)}`);
  console.log(`Source: ${source}`);
} catch (error) {
  console.error(`CV update failed: ${error.message || error}`);
  process.exit(1);
}
