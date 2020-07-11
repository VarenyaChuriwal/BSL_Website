import os

import csv

from flask import Flask, redirect, jsonify, redirect, render_template

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/manufacturing")
def man():
    return render_template("manufacturing.html")

@app.route("/business")
def business():
    return render_template("business.html")

@app.route("/shareholding")
def shareholding():
    return render_template("shareholding.html")

@app.route("/correspondence")
def correspondence():
    return render_template("correspondence.html")

@app.route("/policy")
def policy():
    return render_template("policy.html")

@app.route("/performance")
def performance():
    with open("static/Financial results.csv", "r") as csvfile:
        rows = csv.reader(csvfile)
        for row in rows:
            length = len(row)
            break
        csvfile.seek(0)
        headers = next(rows)
        return render_template("performance.html", rows=rows, length=length - 3, headers  = headers)
        
