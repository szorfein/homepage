#!/bin/env python

import socket

# Normally 127.0.0.1
host = socket.gethostbyname(socket.gethostname())
port = 33333

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)
s.bind((host,port))

# Wait 1 connection
s.listen(1)

client, address = s.accept()
print('address = ' + address)
print('connection effectué depuis ')
print(client.getpeername())

client.close()

s.close()
