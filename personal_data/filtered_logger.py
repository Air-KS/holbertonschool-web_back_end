#!/usr/bin/env python3
"""
Module to define the filter_datum function.
"""

import re
from typing import List

def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """
    Replace specified fields in the log message with the redaction string.

    Arguments:
        fields: List of strings representing fields to redact.
        redaction: String to use for redacting the fields.
        message: Log message containing the fields to be redacted.
        separator: String representing the separator between fields in the message.

    Returns:
        The log message with specified fields redacted.
    """
    pattern = fr'({"|".join(fields)})=[^{separator}]+'
    return re.sub(pattern, fr'\\1={redaction}', message)
