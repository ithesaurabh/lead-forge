import fs from "node:fs";
import path from "node:path";

const moduleName = process.argv[2];

if (!moduleName) {
  console.error("Usage: npm run generate <module-name>");
  process.exit(1);
}

const modulePath = path.join("src", "modules", moduleName);

const files: string[] = [
  "controller.ts",
  "service.ts",
  "repository.ts",
  "routes.ts",
  "validation.ts",
  "types.ts",
  "index.ts",
];

fs.mkdirSync(modulePath, { recursive: true });

for (const file of files) {
  const filePath = path.join(modulePath, file);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
    console.log(`Created: ${filePath}`);
  }
}

console.log(`\n${moduleName} module generated successfully.`);