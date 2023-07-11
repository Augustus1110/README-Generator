// Creates a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license === "Apache"){
    return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === "None"){
    return ``
  }
}

// Creates a function that returns the license link
// If there is no license, returns an empty string

function renderLicenseLink(license) {
  if (license === `MIT`) {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === `Apache`) {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } 
  else if(license === "None"){
    return ``
  }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

## License
${data.license}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
