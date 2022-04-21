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
            message: 'How do you initialize your project?',
            name: 'init'
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What are your licenses?',
            name: 'license'
        },
        {
            type: 'input',
            message: 'What can a user do if they would like to contribute?',
            name: 'contributing'
        }, 
        {
            type: 'input',
            message: 'Want to test?',
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

## Description
${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation
${init}

### Usage
${usage}

### License
${license}

### Contributing
${contributing}

### Tests
${test}

### Questions
${questions}
`

const init = () => {
    readmeQuestions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('readme.md', genReadme(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
init();