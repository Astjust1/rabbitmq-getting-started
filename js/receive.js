let amqp = require('amqplib/callback_api');

amqp.connect("amqp://localhost",(err,conn)=>{
    conn.createChannel((err,ch)=>{
        let q = 'hello';
        
        ch.assertQueue(q,{durable:false});

        console.log(`[*] Waiting for messages in ${q}. To exit press CTRL+C`);

        ch.consume(q,(msg)=>{
            console.log(` [x] received ${msg.content.toString()}`);
        },{noAck: true});
    });
});