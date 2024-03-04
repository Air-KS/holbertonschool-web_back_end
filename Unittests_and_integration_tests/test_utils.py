#!/usr/bin/env python3
""" Test utils
"""
import unittest
from utils import access_nested_map
from parameterized import parameterized


class TestAccessNestedMap(unittest.TestCase):
    """ Access nested map """

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map, path_map, result_expec):
        """ Access nested method

            args:
                nested_map: {"a"} : Le dict. dans lequel accéder à la valeur
                path: ("a",) : Le chemin pour accéder au dict.
                result_expec: 1 : Le résultat attendu après l'accès à la valeur

            return
                Ok if its correct
        """
        self.assertEqual(access_nested_map(nested_map, path_map), result_expec)
