# SPDX-FileCopyrightText: Copyright (c) 2026, Hlido. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
"""Registration entry point for the Hlido NeMo Agent Toolkit plugin.

Importing ``tools`` runs the ``@register_function_group`` decorator so the
toolkit discovers the ``hlido`` function group when it loads this entry point.
"""

from . import tools

__all__ = ["tools"]
