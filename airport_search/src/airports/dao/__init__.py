from .. import Airport
from airport_search.src.airports.DataAccessor import DataAccessor

offset = 7
class AirportDao(DataAccessor):
    def __init__(self):
        #airport = Airport()
        super(AirportDao,self).__init__()
    
    def get_all(self, page= None):
        if page is not None:
            query = ("select * from airports where limit({}, {})".format(page, offset))
        else:
            query =("select * from airports")
        try:
           
            data_list = super(AirportDao,self).read(query= query)
            return data_list
        except Exception as e:
            print(e,"get_get allall_books")
            
            
    def search_airports(self, query= None):
        if query is not None:
            query = ("select * from airports where limit({}, {})".format(query, offset))
        else:
            query =("select * from airports")
        try:
           
            data_list = super(AirportDao,self).read(query= query)
            return data_list
        except Exception as e:
            print(e,"get_get allall_books")
        
    