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
    with os.scandir('static/PDF/shareholding') as files:
        filing = Filing(files)
        path = filing.path()
        name = filing.name()
        length = len(file_path)
        return render_template("shareholding.html", path = path, name = name, length = length)

@app.route("/report")
def report():
    with os.scandir('static/PDF/annual_reports') as files:
        filing = Filing(files)
        path = filing.path()
        name = filing.name()    
        length = len(file_path)
        return render_template("annual_report.html", path = path, name = name, length = length)


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
        
class Filing:
    def __init__(self, files):
        file_path = []
        file_name = []
        for file in files:
            file_path.append(file.path)
            name = str(file.name)
            # name = name.replace('-', ' ')
            name = name.replace('_', ' ')
            name = name.replace('.pdf', '')
            split = name.split()
            capitalized_parts = [p.capitalize() if not p.isupper() else p for p in split]
            capitalized_parts = " ".join(capitalized_parts)
            file_name.append(capitalized_parts)
        self.path = file_path
        self.name = file_name
    def path():
        return self.path
    def name():
        return self.name
