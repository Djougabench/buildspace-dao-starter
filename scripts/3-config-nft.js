import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xb11Df88Fec5167612Ab1A42243fE0B0509D2C2f1"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "footgeneseDAO",
        description: "A DAO for prono genesis",
        image: readFileSync("scripts/assets/punk.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
