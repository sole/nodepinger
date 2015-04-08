# nodepinger

node.js based client and server scripts, to test UDP sockets.

## Client

This will send messages to a server. To make sure you're getting different messages, they're an incremental sequence of the form *ping 1, ping 2, ping 3...*

To run:

```bash
node client.js host port
```

* `host` default is 127.0.0.1
* `port` default is 7 (echo server port)

Stop this with CTRL+C

## Server

This is a simple UDP server. It will just listen for messages on a socket open on port 7 and print those messages to the console.

To run:

```bash
node server.js
```

Although you will probably need to use `sudo` because using ports with values less than 1024 is a thing only privileged processes can do. So do:

```bash
sudo node server.js
```

instead. 

Sorry :-)
