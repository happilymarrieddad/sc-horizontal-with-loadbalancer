var socket = socketCluster.connect({
	host:'localhost',
	port:$('#port').val()
});

var broadcastChannel = socket.subscribe('broadcast');
broadcastChannel.watch(function(data) {
    console.log(data);
});