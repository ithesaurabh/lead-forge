import fs from "fs";
import path from "path";

const replaceTemplateVars = (template: string, variables: Record<string, string>) => {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    const trimmedKey = key.trim();
    return variables[trimmedKey] ?? "";
  });
};
const loadTemplate = (fileName: string) => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "services",
    "mail",
    "templates",
    fileName
  );

  return fs.readFileSync(filePath, "utf-8");
};
export default { replaceTemplateVars, loadTemplate };