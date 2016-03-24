import * as yaml from "js-yaml";
import * as fs from "fs";
import * as Promise from "bluebird";

const pReadFile = Promise.promisify(fs.readFile);

const loadServiceConfig = (fileBuffer: Buffer) => yaml.load(fileBuffer.toString());

const generateContext = (config) => config;

const renderTemplates = (context) => console.log(context);

pReadFile("service.yml")
  .then(loadServiceConfig)
  .then(generateContext)
  .then(renderTemplates);
