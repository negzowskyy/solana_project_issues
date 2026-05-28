import { useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { BorshAccountsCoder } from "@coral-xyz/anchor";

import idl from "./klend.json";

const connection = new Connection(
  "https://solana-mainnet.g.alchemy.com/v2/GOelrdYIJDTlUUgy87CXO",
  "confirmed"
);

const reserve = "9DrvZvyWh1HuAoZxvYWMvkf2XCzryCpGgHqrMjyDWpmo";
//test high-level scrapa z Kamino
export default function App() {
  useEffect(() => {
    async function run() {

      const coder = new BorshAccountsCoder(idl.accounts[8]);

      const account = await connection.getAccountInfo(new PublicKey(reserve));

      if (!account) {
        console.log("no account");
        return;
      }else{
        console.log("account was found correctly")
      }

      console.log(account, account.data)

    }

    run();
  }, []);


  return <div>{idl.toString()}</div>;
}