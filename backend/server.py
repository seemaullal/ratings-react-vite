"""Server for movie ratings app."""

from flask import Flask
from flask.json import jsonify
from model import connect_to_db, Movie

from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route("/api/movies")
def all_movies():
    return {"movies": Movie.all_movies()}


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True, port=6060)
