#!/usr/bin/env python3
"""
0. Regex-ing
"""

import re
from typing import List


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """
    Replace specified fields in the log message with the redaction string.

    fields: List of strings representing fields to redact.
    redaction: String to use for redacting the fields.
    message: Log message containing the fields to be redacted.
    separator: String representing the separator between fields in the message.

    Returns:
        The log message with specified fields redacted.
    """
    return re.sub(fr'({"|".join(fields)})=[^{separator}]+',
                  fr'\1={redaction}',
                  message)
