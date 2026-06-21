"""CrewAI: vet a sub-agent against Hlido before delegating to it.

    pip install "hlido-trust[crewai]"
    python crewai_vet_before_delegate.py
"""

from crewai import Agent, Crew, Task

from hlido_trust.crewai_tool import hlido_crewai_tools

# Give a router agent the Hlido trust tools.
router = Agent(
    role="Delegation Router",
    goal="Only delegate coding work to agents that pass an independent Hlido trust check.",
    backstory="You refuse to rely on any agent that Hlido has not vetted to STEADY tier or above.",
    tools=hlido_crewai_tools(),
    verbose=True,
)

task = Task(
    description=(
        "We need a reliable AI coding agent. Use Hlido Recommend to find one, then run "
        "Hlido Trust Check on it with min_score=70. Only approve it if the gate PASSES."
    ),
    expected_output="The chosen agent's name, its Hlido verdict, and APPROVE or REJECT.",
    agent=router,
)

if __name__ == "__main__":
    print(Crew(agents=[router], tasks=[task]).kickoff())
