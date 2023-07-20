import { fileURLToPath } from "url";
import { dirname, join } from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const loadDocs = (app) => {
    const apiDocs = YAML.load(join(__dirname, '/api.yaml'));

    app.use('/docs/api', swaggerUi.serveFiles(apiDocs), swaggerUi.setup(apiDocs));
}

export default loadDocs;