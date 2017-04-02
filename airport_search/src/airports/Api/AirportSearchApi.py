'''
Created on May 6, 2016

@author: Dell
'''
from flask_restful import Resource
from ..Database.DBConnection import DBConnect

from contextlib import closing
from .. import Airport
from flask import jsonify, request
from airport_search.src.airports.dao import AirportDao

dao = AirportDao()

            
class AirportSearchApi(Resource):
    '''
    classdocs
    '''
    def __init__(self):
        self.connection = DBConnect().get_connection()
        self.connection.autocommit(True)
    def get(self):
        try:
            query=  request.args.get('query')
            if query is not None:
                print("searching page wise data", query)
                pass
            return jsonify({"airports":dao.search_airports(query)})
        except Exception as e:
            print("AirportSearchApi",e )