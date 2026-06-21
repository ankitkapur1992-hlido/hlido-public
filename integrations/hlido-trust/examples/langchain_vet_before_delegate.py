"""LangChain: bind Hlido trust tools to an agent so it vets before delegating.

    pip install "hlido-trust[langchain]" langchain-openai
    python langchain_vet_before_delegate.py
"""

from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

from hlido_trust.langchain_tool import hlido_langchain_tools

tools = hlido_langchain_tools()

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "Never delegate to an AI agent unless its Hlido trust check PASSES (min_score 70)."),
        ("human", "{input}"),
        ("placeholder", "{agent_scratchpad}"),
    ]
)

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

if __name__ == "__main__":
    out = executor.invoke(
        {"input": "Find a reliable AI coding agent and confirm it passes the Hlido trust gate before we use it."}
    )
    print(out["output"])


# --- Or, no LLM at all — a plain guard clause (zero framework needed): ---
#
#     from hlido_trust import HlidoClient
#     hlido = HlidoClient()
#     if not hlido.trust_gate("aider", min_score=70):
#         raise RuntimeError("Aider failed the Hlido trust gate — not delegating.")
