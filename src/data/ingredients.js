import fs from 'node:fs/promises';
import Papa from 'papaparse';

const csvFileName = 'ingredients.csv';

export const ingredientsData = async () => {
  try {
    const csvPath = import.meta.env.MODE === "development" ? `../../public/${csvFileName}` : `../../${csvFileName}`;
    const csvUrl = new URL(csvPath, import.meta.url);

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

    return [];
  }
}
