from flask.blueprints import Blueprint
from flask_restful import Api
from .AirportApi import AirportApi
from .AirportSearchApi import AirportSearchApi

air_manager = Blueprint("Airports", __name__)
api= Api(air_manager)

api.add_resource(AirportApi,"/api/v1.0/airports/list/")
api.add_resource(AirportSearchApi,"/api/v1.0/airports/search")