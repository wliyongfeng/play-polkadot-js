const { ApiPromise, WsProvider } = require("@polkadot/api");

let provider = null;
let api = null;

const endPoint = process.env.WS_ENDPOINT || 'wss://kusama.elara.patract.io'

async function getApi() {
  if (!api) {
    provider = new WsProvider(endPoint);
    api = await ApiPromise.create({ provider });
  }

  return {
    api,
    provider
  };
}

module.exports = {
  getApi,
};
