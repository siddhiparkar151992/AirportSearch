'''
Created on 11-Mar-2016

@author: parkar_s
'''
from flask import Flask, redirect, render_template
from flask.blueprints import Blueprint
from airport_search.src.airports.Api import air_manager

app= Flask(__name__)
aiport_search= Blueprint("airport_search",__name__)

@app.route("/")
def index():
    return render_template("index.html")



app.register_blueprint(aiport_search)
app.register_blueprint(air_manager)