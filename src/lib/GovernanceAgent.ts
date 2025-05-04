type Proposal = {
  id: string;
  title: string;
  proposer: string;
  quorum: number;
};

type Config = {
  dao: string;
  strategy: (proposal: Proposal) => "For" | "Against" | "Abstain";
};

export class GovernanceAgent {
  config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async run() {
    console.log("Governance agent started for DAO:", this.config.dao);

    const proposals = await this.fetchProposals();

    for (const proposal of proposals) {
      const decision = this.config.strategy(proposal);
      console.log(\`Voting '\${decision}' on proposal: \${proposal.title}\`);

      await this.castVote(proposal.id, decision);
    }
  }

  async fetchProposals(): Promise<Proposal[]> {
    // Simulate Snapshot fetch
    return [
      { id: "123", title: "Enable curation rewards", proposer: "0xabc", quorum: 1000 },
      { id: "456", title: "Change treasury signers", proposer: "0xdef", quorum: 800 }
    ];
  }

  async castVote(proposalId: string, choice: string) {
    console.log(\`[Mock] Casting vote '\${choice}' on proposal \${proposalId}\`);
  }
}