import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { __dirname, join } from "../utils/paths.js";

const loadDocs = (app) => {
    const apiDocs = YAML.load(join(__dirname, '../docs/api.yaml'));

    app.use('/docs/api', swaggerUi.serveFiles(apiDocs), swaggerUi.setup(apiDocs));
}

export default loadDocs;