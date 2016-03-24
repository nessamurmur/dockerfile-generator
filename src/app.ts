import * as yaml from "js-yaml";
import * as fs from "fs";
import * as Promise from "bluebird";
import * as nunjucks from "nunjucks";
import { generateNodeContext } from "./bases/node_base";

const pReadFile = Promise.promisify(fs.readFile);

const loadServiceConfig = (fileBuffer: Buffer) => yaml.load(fileBuffer.toString());

const generateContext = (config) => generateNodeContext(config);

const renderTemplates = (context) =>
  console.log(nunjucks.render("templates/README.md.njk", context));

pReadFile("service.yml")
  .then(loadServiceConfig)
  .then(generateContext)
  .then(renderTemplates);
