#!/usr/bin python3
""" Test client """

from client import GithubOrgClient
import unittest
from parameterized import parameterized
from unittest.mock import patch


class TestGithubOrgClient(unittest.TestCase):
    """ Class Gitghub ORG Client """

    @parameterized.expand([
        ('google'),
        ('abc')
    ])
    @patch('client.get_json')
    def test_org(self, input, mock):
        """ Test the organization

            args:
                input: Name of the org
                mock: Mock
        """
        test_class = GithubOrgClient(input)
        test_class.org()
        mock.assert_called_once_with(f'https://api.github.com/orgs/{input}')
