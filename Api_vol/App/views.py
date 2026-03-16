from flask import jsonify , abort , make_response , request , url_for
from.app import app
from.models import *

@app.route('/avion/api/v1.0/vols/', methods = ['GET'])
def get_vol() :
    