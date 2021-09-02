from flask import (Flask, render_template, request, flash, session, redirect, jsonify, url_for, abort)

app = Flask(__name__)
app.secret_key = "DEV" 

@app.route("/")
def index():
    """View homepage with React components"""

    return render_template("index.html")

if __name__ == "__main__":
    
   # connect_to_db(app)

    app.run(host="127.0.0.1", debug=True) 