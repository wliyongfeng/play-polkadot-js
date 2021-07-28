require("dotenv").config();

const { getApi } = require("./api");

async function main() {
  const { api } = await getApi();

  await api.rpc.chain.subscribeFinalizedHeads((header) => {
    const height = header.number.toNumber();
    console.log('new finalized height:', height)
  });
}

main().catch(e => console.error('main error:', e));
