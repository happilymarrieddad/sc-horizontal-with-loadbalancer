# sc-horizontal

<p>In order to make this work you must do the following. (Yes, I know this can be simplier but I wanted to spell it out...)</p>
<br />
<p>1) sudo apt-get install redis-server</p>
<p>2) npm install loadbalancer -g</p>
<p>3) cd first && npm install && cd .. && cd second && npm install && cd ..</p>
<p>4) open 3 terminal windows or split if you are using something like terminator</p>
<p>5) In one terminal   $ redis-server , in the other two windows run both server files.</p>
<p>6) Use the redis-cli to send a broadcast to both servers and watch the messages in the developer consoles of both browers.</p>
<p>7) Enjoy!</p>