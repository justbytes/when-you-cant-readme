module.exports = {
  genReadme: ({
    title,
    license,
    overview,
    requiredDependencies,
    installation,
    usage,
    testSetup,
    tests,
    contributing,
    images = [],
  }) => {
    // Create array of sections that will be included in Table of Contents
    const sections = [
      { title: "Required Dependencies", content: requiredDependencies },
      { title: "Installation", content: installation },
      { title: "Setup", content: setup },
      { title: "Usage", content: usage },
      { title: "Testing Setup", content: testSetup },
      { title: "Testing", content: tests },
      { title: "Contributing", content: contributing },
    ].filter((section) => section.content);

    return `
# ${title}

${license}

## Overview
${overview}

${images
  .map(
    (image, index) => `
![Application Preview ${index + 1}](${image})
`
  )
  .join("\n")}

## Table of Contents 
${sections
  .map(
    (section) =>
      `- [${section.title}](#${section.title
        .toLowerCase()
        .replace(/\s+/g, "-")})`
  )
  .join("\n")}

${sections
  .map(
    (section) => `
### ${section.title}
${
  section.title === "Installation"
    ? "To install necessary dependencies, run the following commands(s)\n```\n" +
      section.content +
      "\n```"
    : section.title === "Setup"
    ? "To setup the environment, run the following command(s)\n```\n" +
      section.content +
      "\n```"
    : section.title === "Usage"
    ? "To start the app, run the following command(s)\n```\n" +
      section.content +
      "\n```"
    : section.title === "Testing Setup"
    ? "Run the following command(s) to setup the testing environment\n```\n" +
      section.content +
      "\n```"
    : section.title === "Testing"
    ? "To run tests, run the following command(s)\n```\n" +
      section.content +
      "\n```"
    : section.content
}
`
  )
  .join("\n")}
  `;
  },
};
