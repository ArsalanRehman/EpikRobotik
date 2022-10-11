const rosnodejs = require('rosnodejs');
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
    rosnodejs.initNode('/arslanNode')

        .then(() => {
        const nh = rosnodejs.nh;
        const pub = nh.advertise('/cmd_vel', 'geometry_msgs/Twist');
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
        }, 1000);
    // }
        // console.log(pub)
    });

}