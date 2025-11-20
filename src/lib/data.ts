import fs from 'fs';
import path from 'path';


export function getYearData(year: string) {
const base = path.join(process.cwd(), 'src', 'data', year);
const read = (name: string) => {
const p = path.join(base, `${name}.json`);
if (!fs.existsSync(p)) return null;
return JSON.parse(fs.readFileSync(p, 'utf-8'));
};
return {
festival: read('festival'),
awards: read('awards'),
program: read('program'),
report: read('report')
};
}