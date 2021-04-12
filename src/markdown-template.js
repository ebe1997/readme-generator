// function to generate markdown for README
const template = (data) => {
  let licenseBadge = "";
  switch (data.license) {
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "Apache 2.0":
      licenseBadge = `[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GPL 3.0":
      licenseBadge = `[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "BSD 3":
      licenseBadge = `[![License BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "None":
      licenseBadge = "";
      break;
    default:
      break;
  }

  let readmeTemplate = `\n## Details\n *Project Name: ${data.name}\n *Developer Github username: ${data.githubUsername}\n *Developer email: ${data.email}\n *Project description: ${data.description}\n`;

  readmeTemplate += `\n## Read me generator\n* ${licenseBadge}\n`;

  let tOC = `\n## Table of Contents\n`;
  if (data.dependencies) {
    tOC += `* [Installation](Installation)\n`;
  }
  if (data.using) {
    tOC += `* [Usage](#Usage)\n`;
  }

  tOC += `* [License](#License)\n`;

  if (data.contributing) {
    tOC += `* [Contributing](#Contributing)\n`;
  }
  if (data.tests) {
    tOC += `* [Tests](#Tests)\n`;
  }

  readmeTemplate += tOC;

  if (data.dependencies) {
    readmeTemplate += `\n## Installation\nTo install necessary dependencies, run the following commannd \n '''\n${data.dependencies}\n'''\n`;
  }

  if (data.using) {
    readmeTemplate += `\n## Usage\n${data.using}\n`;
  }

  readmeTemplate += `\n## License\nThis project is licensed under ${data.license} license\n`;

  if (data.contributing) {
    readmeTemplate += `\n## Contributing\n${data.contributing}\n`;
  }

  if (data.tests) {
    readmeTemplate += `\n## Tests\n${data.tests}\n`;
  }

  return readmeTemplate;
};

module.exports = template;
