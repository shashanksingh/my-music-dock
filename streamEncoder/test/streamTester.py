import xmlrpclib
import time
s = xmlrpclib.Server('http://localhost:7080/')
print s.echo("lala")
print s.addStation()
time.sleep(1)
print "awake from sleep"
print s.stopStation()
