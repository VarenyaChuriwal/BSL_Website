import os

import csv

from flask import Flask, redirect, jsonify, redirect, render_template


class file_provider():
    def __init__(self, directory):
        with os.scandir('static/PDF/'+directory) as files:
            file_path = []
            file_name = []
            files = sorted(files, key=lambda f: f.name)
            for file in files:
                file_path.append(file.path)
                name = str(file.name)
                # name = name.replace('-', ' ')
                name = name.replace('_', ' ')
                name = name.replace('.pdf', '')
                name = name.replace('.PDF', '')
                name = name[5:]
                # name = name.replace ('.PDF')
                split = name.split()
                capitalized_parts = [p.capitalize() if not p.isupper() else p for p in split]
                capitalized_parts = " ".join(capitalized_parts)
                file_name.append(capitalized_parts)
            # length = len(file_path)
            self.path = file_path
            self.name = file_name
    # def path(self):
    #     return self.path
    # def name(self):
    #     return self.name    
            # return file_path, name = file_name, length = length)



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

@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.route("/committees")
def committees():
    return render_template("committees.html")

@app.route("/manufacturing")
def man():
    return render_template("manufacturing.html")

@app.route("/business")
def business():
    return render_template("business.html")

@app.route("/desk")
def desk():
    return render_template("desk.html")

@app.route("/board")
def board():
    return render_template("board.html")

@app.route("/shareholding")
def shareholding():
    directory = 'shareholding'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("shareholding.html", path = file_path, name = file_name, length = length)

@app.route("/notice")
def notice():
    directory = 'notices'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("notice.html", path=file_path, name=file_name, length=length)
        
@app.route("/disclosure")
def disclosure():
    directory = 'disclosures'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("disclosures.html", path = file_path, name = file_name, length = length)

@app.route("/policy")
def policy():
    directory = 'policy'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("policy.html", path = file_path, name = file_name, length = length)

@app.route("/dividend")
def dividend():
    directory = 'dividend'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("dividend.html", path = file_path, name = file_name, length = length)

@app.route("/compliance")
def compliance():
    directory = 'compliance'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("compliance.html", path = file_path, name = file_name, length = length)

@app.route("/results")
def results():
    directory = 'results'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("results.html", path = file_path, name = file_name, length = length)

@app.route("/credit")
def credit():
    directory = 'credit'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("credit.html", path = file_path, name = file_name, length = length)

@app.route("/directors")
def directors():
    directory = 'directors'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("directors.html", path = file_path, name = file_name, length = length)

@app.route("/report")
def report():
    directory = 'annual_reports'
    filer = file_provider(directory)
    file_path = filer.path
    file_name = filer.name
    length = len(file_path)
    return render_template("annual_report.html", path = file_path, name = file_name, length = length)


@app.route("/correspondence")
def correspondence():
    return render_template("correspondence.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")


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
        
