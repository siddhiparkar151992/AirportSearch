class Airport(object):
    def __init__(self,id, code, lat, lon, name, rating, city, state, country, tz, typeA, url):
        self.code= code

        self.lat= lat
        
        self.name = name
        
        self.rating= rating
        
        self.city = city, state
        
        self.country = country
        
        self.tz= tz
        
        self.typeA = typeA
        
        self.url =url