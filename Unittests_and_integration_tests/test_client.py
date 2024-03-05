#!/usr/bin python3
""" Test client """

import unittest
from parameterized import parameterized
from unittest.mock import patch


class TestGithubOrgClient(unittest.TestCase):
    """ Class Github OGN Client """

    @parameterized.expand([
        ('google'),
        ('abc')
        ])
    @patch('client.get_json')
    def test_org(self, input, mock):
        """ Test the organization

        args:
            input: name oh the test_org
            mock: Mock
        """
        test_class = TestGithubOrgClient(input)
        test_class.org()
        mock.assert_called_once_with(f'https://api.github.com/orgs/{input}')
