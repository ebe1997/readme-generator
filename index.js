const fs = require("fs/promises");
const path = require("path");
const inquirer = require("inquirer");
const template = require("./src/markdown-template");

const prompt = [
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  {
    type: "input",
    name: "name",
    message: "What is your project's name?",
  },

  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },

  {
    type: "list",
    name: "license",
    message: "Which kind of lincense should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    default: "(Use arrow keys)",
  },

  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    default: "(npm i)",
  },

  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "(npm test)",
  },

  {
    type: "input",
    name: "using",
    message: "What does the user need to know about using the repo?",
  },

  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

async function isExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

async function writeFile(filePath, data) {
  try {
    const dirname = path.dirname(filePath);
    const exist = await isExists(dirname);
    if (!exist) {
      await fs.mkdir(dirname, { recursive: true });
    }

    await fs.writeFile(filePath, data, "utf8");
  } catch (err) {
    throw new Error(err);
  }
}

const main = async () => {
  console.log("Generating README...");
  const data = await inquirer.prompt(prompt);
  const text = template(data);
  await writeFile("output/README.md", text);
  process.exit(1);
};

main();
