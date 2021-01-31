// pages/user/user.js
const app=getApp();
const db=wx.cloud.database()
Page({
    data: {
        avatarUrl:'',
        userInfo:{
            nikeName:"山庄夜话"
        },
        defaultFace:'../../static/img/user/missing-face.png'
    },
    onShow(){
 
    },
    login(){
        db.collection('users').add({
            data:{
                _optionid:app.globalData._openid,
                appid:app.globalData.appid
            }
        }).then(res=>{
            console.log('注册成功:',res);
        }).catch(console.error)
    },
    onLoad(){

    }
})