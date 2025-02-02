const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "anchor",
  programName: "protractor",
  programId: "GraphUyqhPmEAckWzi7zAvbvUTXf8kqX7JtuvdGYRDRh",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "protractor", "program"),
  rustbin: {
    locked: true,
    versionRangeFallback: "0.27.0",
  },
});
