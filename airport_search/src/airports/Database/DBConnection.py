from .. import config
import pymysql.cursors
# Connect to the database

class DBConnect(object):
    _instance = None
    connection = None
    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(DBConnect, cls).__new__(
                                cls, *args, **kwargs)
        return cls._instance
    def __init__(self):
        '''Returns a database connection/handle given the dsn
    
        This function saves the database connection, so if you
        invoke this again, it gives you the same one, rather
        than making a second connection.  This is the so-called
        Singleton pattern.'''
        if not self.connection:
            try:
                self.connection = pymysql.connect(host=config.HOST,
                                 user=config.DB_USER,
                                 password=config.DB_PASSWORD,
                                 db=config.DB_NAME,
                                 charset=config.DB_CHARSET,
                                 cursorclass=pymysql.cursors.DictCursor)
                # so modifications take effect automatically
                self.connection.autocommit(True)
            except pymysql.Error as e:
                print ("Couldn't connect to database. MySQL error %d: %s" %
                       (e.args[0], e.args[1]))
        
       
    def get_connection(self):
        '''
            @return connection established 
        ''' 
        return self.connection
    
    def close(self):
        '''close the current connection''' 
        self.connection.close()