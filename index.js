const inquirer = require('inquirer');
const fs = require('fs');

const readmeQuestions = () => {
    return inquirer.prompt ([

        {
            type: 'input',
            message: 'What the title of you project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Write a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is the command line to install necessary dependencies? ',
            name: 'init'
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What are your licenses?',
            name: 'license',
            choices: [
                {
                    name: 'Apache License 2.0',
                    value:
                        '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0) '
                },
                {
                    name: 'BSD 3-Clause license',
                    value: 
                        '[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)'
                },
                {
                    name: 'BSD 2-Clause license',
                    value: 
                        '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
                },
                {
                    name: 'GNU General Public License (GPL)',
                    value: 
                        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                },
                {
                    name: 'GNU Library General Public License (LGPL)',
                    value: 
                        '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
                },
                {
                    name: 'MIT license',
                    value: 
                        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                },
                {
                    name: 'Unlicense',
                    value: 
                        '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
                },
                {
                    name: 'Open Database License',
                    value:
                         '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
                },
            ],
        },
        {
            type: 'input',
            message: 'What can a user do if they would like to contribute?',
            name: 'contributing'
        }, 
        {
            type: 'input',
            message: 'What is the code line to run a test?',
            name: 'test'
        }, 
        {
            type: 'input',
            message: 'Please give contact info for users with questions.',
            name: 'questions'
        },   
    ]);
}

const genReadme = ({title, description, init, usage, license, contributing, test, questions}) =>

`# ${title}

${license}

## Description
${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation

To install necessary dependencies, run the following command
${init}

### Usage
${usage}


### Contrnode ibuting
${contributing}

### Tests

To run tests, run the following command:

${test}

### Questions
${questions}
`

const init = () => {
    readmeQuestions()
      .then((answers) => fs.writeFileSync('readme.md', genReadme(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
init();
