import { V4 } from "paseto";
import crypto from "crypto";

const privateKey = await V4.generateKey("public");
const publicKey = crypto.createPublicKey(privateKey);
export {privateKey, publicKey}