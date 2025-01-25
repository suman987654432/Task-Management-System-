const RandomPass=()=>{
    let string="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    let MyPass="";
    for (var i=0; i<8; i++)
    {
        let MyNo=Math.floor(Math.random()*string.length);
        MyPass+=string.charAt(MyNo);
    }

    return MyPass;
}

module.exports=RandomPass;