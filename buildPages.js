// import yaml from 'config/styles/colors';
const fs = require('fs');
const YAML = require('yaml');
const pageLiteral = require('./generator/pageLiterals');

const file = fs.readFileSync('./config/pages/index.yml', 'utf8');
// const files = YAML.parse(file);

const retrievePageData = pageName => {
  const pageConfigFile = fs.readFileSync(
    `./config/pages/${pageName}.yml`,
    'utf8'
  );
  const parsed = YAML.parse(pageConfigFile);
  return pageLiteral(pageName, parsed);
};

//requiring path and fs modules
const path = require('path');

const buildSite = () => {
  //joining path of directory
  const directoryPath = path.join(__dirname, 'config/pages');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    const filteredNavLinks = files
      .filter(f => f.includes('yml'))
      .map(f => f.split('.yml')[0]);

    filteredNavLinks.forEach(async f => {
      const data = 'This is test data';
      // Get the data for the page as well:
      // 1. Import the file using fs.readFileSync
      // 2. Parse the data as JSON
      // 3. Log
      // 4. Pass data as param to generate page function
      try {
        await fs.promises.writeFile(`./pages/${f}.js`, retrievePageData(f));
      } catch (e) {
        console.error(e);
      }
    });
  });
};

buildSite();
