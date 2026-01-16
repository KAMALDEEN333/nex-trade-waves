// Minimal chain shim used to satisfy OnchainKitProvider expectations.
export const chain = {
  name: "Stellar",
  id: 12345,
  network: "stellar",
  // rpc and other fields may be added later if needed by OnchainKit or other libs
}

export default chain
