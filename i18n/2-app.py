#!/usr/bin/python3
""" Basic Babel setup """
from flask import Flask, request, render_template
from flask_babel import Babel


class Config(object):
    """ Configuration Babel """
    languages = ["en", "fr"]
    babel_default_timezone = 'utc'
    babel_default_locale = 'en'

app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale():
    """ Locale language

        Return:
            Best match to the language
    """
    return request.accept_languages.best_match(app.config['languages'])


@app.route('/', strict_slash=False)
def hello_world():
    """ Greeting

        Return:
            Initial template html
    """
    return render_template('1-index.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
