import fs from 'node:fs/promises';
import Papa from 'papaparse';

export const ingredientsData = async () => {
  try {
    const csvUrl = new URL('./ingredients.csv', import.meta.url);
    const csvData = await fs.readFile(csvUrl, 'utf-8');

    const parseConfig = {
      delimiter: ',',
      header: true,
    };

    const json = Papa.parse(csvData, parseConfig);

    return json.data;

  } catch (error) {
    console.warn('Error parsing the ingredients csv.');
    console.log(error);
  }
}
