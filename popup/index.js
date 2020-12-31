import { getPlatformData } from '../platforms.js';

const handle = async () => {

  const container = document.querySelector('.sub-container');
  
  const getFormattedDate = (timestamp) => {
    if (!timestamp) {
      return '-';
    }
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
  
  const generateRow = (platformName, timestamp) => {
    const platformCell = document.createElement('div');
    platformCell.classList = 'cell platform-cell';
    platformCell.innerText = platformName;
    
    const timestampCell = document.createElement('div');
    timestampCell.classList = 'cell', 'timestamp-cell';
    timestampCell.innerText = getFormattedDate(timestamp);
    
    const row = document.createElement('div');
    row.classList = 'row';
    row.appendChild(platformCell);
    row.appendChild(timestampCell);
    
    return row;
  }
  
  const data = await getPlatformData();
  console.log(data);
  const rows = Object.keys(data).map((key) => generateRow(key, data[key]));
  rows.forEach((row) => container.appendChild(row));

}

handle();

// const data = {
  //   Netflix: 1609421045634,
// };

// const rows = Object.keys(data).map((key) => generateRow(key, data[key]));
// rows.forEach((row) => container.appendChild(row));