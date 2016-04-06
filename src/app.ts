import * as yaml from "js-yaml";
import * as fs from "fs";
import * as Promise from "bluebird";
import * as nunjucks from "nunjucks";
import { generateNodeContext } from "./bases/node_base";

const pReadFile = Promise.promisify(fs.readFile);

const loadServiceConfig = (fileBuffer: Buffer) => yaml.load(fileBuffer.toString());

const generateContext = (config) => generateNodeContext(config);

const templatePathFor = (path) => __dirname + "/templates/" + path + ".njk";

const generateFile = (fileName, context) => {
  let fileContent =   nunjucks.render(templatePathFor(fileName), context);
  fs.writeFile(fileName, fileContent);
};

const renderTemplates = (context) => {
  generateFile("docker-compose.yml", context);
  generateFile("Dockerfile", context);
  console.log(nunjucks.render(templatePathFor("README.md"), context));
};

pReadFile("service.yml")
  .then(loadServiceConfig)
  .then(generateContext)
  .then(renderTemplates);
