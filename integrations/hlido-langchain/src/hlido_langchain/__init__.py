"""LangChain integration for Hlido — independent, evidence-backed AI-agent trust scores.

Gives a LangChain/LangGraph agent tools to vet another agent or tool against its
independent `Hlido <https://hlido.eu>`_ review *before delegating to it*::

    from hlido_langchain import get_tools

    tools = get_tools()  # -> [hlido_trust_check, hlido_recommend]
    llm_with_tools = llm.bind_tools(tools)

This is a thin LangChain-facing wrapper over the `hlido-trust` package; the tools
themselves live in ``hlido_trust.langchain_tool``.
"""

from hlido_trust import HlidoClient
from hlido_trust.langchain_tool import hlido_langchain_tools

# `get_tools` is the conventional entry point for a LangChain tool package.
get_tools = hlido_langchain_tools

__all__ = ["get_tools", "hlido_langchain_tools", "HlidoClient", "__version__"]

__version__ = "0.1.0"
