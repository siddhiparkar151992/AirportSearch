'''
Created on May 6, 2016

@author: Dell
'''
'''
Created on 14-Mar-2016

@author: parkar_s
'''

from flask_restful import Resource
from ..Database.DBConnection import DBConnect

from contextlib import closing
from .. import Airport
from flask import jsonify, request
from airport_search.src.airports.dao import AirportDao

dao = AirportDao()

            
class AirportApi(Resource):
    '''
    classdocs
    '''
    def __init__(self):
        self.connection = DBConnect().get_connection()
        self.connection.autocommit(True)
    def get(self):
        try:
            page=  request.args.get('page')
            if page is not None:
                print("fetching page wie data", page)
                pass
            return jsonify({"airports":dao.get_all()})
        except Exception as e:
            print("popular_book_api",e )