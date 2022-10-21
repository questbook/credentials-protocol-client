import Nym from './types/nym';
import VerifiedCredential from './types/verified_credential';

function createNym(username) : Promise<Nym> {
  // stub
  return new Promise((resolve, reject) => setTimeout(() => resolve({
    did: `did:nym:${username}#${Date.now()}`,
  }), 7000));
}

function generateCredentialWithProof(did: string, provider='github.com', semanticDescriptor={ id: 'credential_count_50', type: 'contributions_count', count: 50, repositories: ['aave/core']}, signature: string) : Promise<VerifiedCredential> {
  // stub
  return new Promise((resolve, reject) => setTimeout(() => resolve({
    did,
    proof: {
      proof: '000000'
    }
  }), 7000));
}

function verifyCredentialProof(provider: string, proof: any, proofParams: any, __override_response: boolean = true) {
  //todo remove __override_response param
  // stub
  return new Promise((resolve, reject) => setTimeout(() => resolve(__override_response), 7000));
}

