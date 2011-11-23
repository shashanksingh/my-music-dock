import Queue
import time
#from station  import *
#from logger import *
from threading import Thread
from twisted.web import xmlrpc
from twisted.internet import defer
from twisted.internet import reactor
from twisted.web import server
    
import xmlrpclib

stopFlag = False

class Producer(Thread):
    pass

"""    def __init__(self,q):
        Thread.__init__(self)
        self.stations = []
        self.q = q
        self.logger = Logger('assets/current.log')
        self.m3u = "assets/current.m3u"
        self.station = {'deefuzzer': {'m3u': 'assets/current.m3u', 'station': {'control': {'mode': '0', 'port': '1234'}, 'relay': {'url': 'http://anotherdomain.com:8000/stream.mp3', 'mode': '0', 'author': 'Me'}, 'media': {'shuffle': '1', 'format': 'mp3', 'voices': '2', 'ogg_quality': '7', 'samplerate': '44100', 'bitrate': '192', 'dir': 'media/'}, 'twitter': {'secret': 'your access token secret key', 'mode': '0', 'key': 'your access token key', 'tags': 'bla bla'}, 'server': {'host': 'localhost', 'port': '8000', 'sourcepassword': 'hackme', 'public': '1'}, 'record': {'mode': '0', 'dir': 'media/'}, 'jingles': {'shuffle': '1', 'mode': '0', 'dir': 'media/'}, 'infos': {'url': 'http://mydomain.com', 'genre': 'Various Funk Groove', 'name': 'My best funky station', 'short_name': 'my_station', 'description': 'My personal best funky playlist ever !'}, 'rss': {'enclosure': '1', 'dir': 'data'}}, 'log': 'assets/current.log'}}

    def addStation(self):
        pass
    def removeStation(self):
        print stopFlag
#        if stopFlag == True :
#            task_done() 
    def reloadStation(self):
        pass

    def run(self):
	print "a"
        self.stations.append(Station(self.station['deefuzzer']['station'], self.q, self.logger, self.m3u))
        self.stations[len(self.stations)-1].start()
        print len(self.stations)
        i=0
        q=self.q
        while True:
            q.put(i,1)
            i+=1
#            self.removeStation()
#            time.sleep(1)
#             print "Thread"

"""
class Echoer(xmlrpc.XMLRPC):
    """An example object to be published.

    Has five methods accessable by XML-RPC, 'echo', 'hello', 'defer',
    'defer_fail' and 'fail.
    """
#    for x in range(1,2):
#        p = Producer(q)
#        p.start()
#    print "Thread started"
    def xmlrpc_echo(self, *args):
        return "shanky was here"
    
    def xmlrpc_testing(self):
        """do soemtihn in db"""
        return "data from db"
 
    def xmlrpc_status(self):
        """Return current health of xmlrpc streamer"""
        return "ok"

    def xmlrpc_addStation(self):
	q = Queue.Queue(1)
        p = Producer(q)
        p.start()
	print "++++++++++++++++++++++++++++++++++++++++ hey i am here in add station"
        return q.qsize()

    def xmlrpc_stopStation(self):
        stopFlag = True
        return stopFlag

    def xmlrpc_defer(self):
        """Show how xmlrpc methods can return Deferred."""
        return defer.succeed("hello")

    def xmlrpc_defer_fail(self):
        """Show how xmlrpc methods can return failed Deferred."""
        return defer.fail(12)

    def xmlrpc_fail(self):
        """Show how we can return a failure code."""
        return xmlrpclib.Fault(7, "Out of cheese.")

def main():
    r = Echoer()
    reactor.listenTCP(7080, server.Site(r))
    reactor.run()



if __name__ == '__main__':
    main()
