import * as _ from "lodash";
import { getServiceName } from "./base_utils";

export const generateNodeContext = (config) => {
  let serviceName = getServiceName(config);
  let defaults = { serviceName: serviceName, image: "node" };

  return _.merge(defaults, config);
};
