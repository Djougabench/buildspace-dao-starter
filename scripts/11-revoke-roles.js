import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x6dF9eE81CEE0D52FF62E9743A454D7edcf6BF4D6");

(async () => {
  try {
    // Log the current roles.
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );
    console.log(
      "✅ Successfully revoked our superpowers from the ERC-20 contract"
    );
  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO trasury", error);
  }
})();
