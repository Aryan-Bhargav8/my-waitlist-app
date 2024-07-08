import { google } from 'googleapis';
import fs from 'fs';

const keyPath = process.env.GOOGLE_SHEETS_CREDENTIALS;
const keyFile = fs.readFileSync(keyPath, 'utf8');
const key = JSON.parse(keyFile);

const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
const auth = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  scopes
);

const sheets = google.sheets({ version: 'v4', auth });

export async function addRowToSheet(data) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = 'Sheet1!A:B';

  const resource = {
    values: [data],
  };

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource,
    });
    return result;
  } catch (error) {
    console.error('Error adding row to sheet:', error);
    throw error;
  }
}
