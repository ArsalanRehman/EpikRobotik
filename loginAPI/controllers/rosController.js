const { emit } = require('process');
const rosnodejs = require('rosnodejs');
const { EventEmitter } = require('stream');
exports.listenCommand = (req, res) => {
    console.log("My values");
    console.log(req.body.param);
    console.log(req.body.val);
    const { stringify } = require('querystring');

    rosnodejs.initNode('/arslanNode')
        .then(() => {
            
                const nh = rosnodejs.nh;
                const arslan = nh.setParam(String(req.body.param), req.body.val);
                arslan.then((result) => {
                    console.log(result);
                })
              /////Subscriber and publisher//////////////
              const sub = nh.subscribe('/arslanTopic', 'std_msgs/String', (msg) => {
                console.log('Got msg on chatter: %j', msg);
              });
              
              const pub = nh.advertise('/arslanTopic', 'std_msgs/String');
              pub.publish(String(req.body.msg));

              res.status(200).json({
                status: 'success',
                data: {
                    arslan: req.body,
                }
            });

        })
        .catch((err)=>{
            rosnodejs.log.error(err.stack);
        })
}
exports.joystick = (req,res) =>{
    const start = Date.now() ;
    rosnodejs.initNode('/testNode')
        .then(() => {
            const endTime = Date.now() ;
            console.log('Node Difference', endTime-start);
        const nh = rosnodejs.nh;
        const beforeAdvertise = Date.now() ;
        const pub = nh.advertise('/cmd_vel', 'geometry_msgs/Twist');
        const afterAdvertise = Date.now() ;
        console.log('Advetise Difference', afterAdvertise-beforeAdvertise );

        // while(true){
        setTimeout(function () {
            pub.publish({
                linear: {
                    x: req.body.x,
                    y: 0,
                    z: 0,
                },
                angular: {
                    x: 0,
                    y: 0,
                    z: req.body.z,
                }
            }
            );
            res.status(200).json({
                status: 'success',
                data: req.body
            });
            EventEmitter.setMaxListeners(100);
        }, 10);
    // }
        // console.log(pub)
    });

}
// push test for github.com 