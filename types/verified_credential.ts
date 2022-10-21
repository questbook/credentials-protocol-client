import Proof from "./proof";

export default interface VerifiedCredential {
    did: string,
    proof: Proof, //todo - update based on zk proof semantics
}