const inquirer = require("inquirer");
const fs = require("fs");
const { defaultPrompt } = require("./defaultPrompt");
const { genReadme } = require("./defaultReadMe");

// Prompt user for input
const promptUser = () => {
  return inquirer.prompt(defaultPrompt);
};

const main = async () => {
  const input = await promptUser();

  // Determine the file path based on user choice
  const filePath =
    input.saveLocation === "root"
      ? "./README.md"
      : `./${input.fileName || "quick"}.md`;

  fs.writeFileSync(filePath, genReadme(input));

  console.log(`Successfully wrote to ${filePath}`);
};

main()
  .then(() => console.log("Successfully wrote to newreader.md"))
  .catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1);
  });
