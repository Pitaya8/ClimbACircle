const express=require('express');
const Router=express.Router();
const userModel=require('../db/model/userModel.js');
const util=require('../utils/utli.js');


/**
 * @api {post} /user/login/ 用户登陆
 * @apiName Login_user
 * @apiGroup User
 * 
 * @apiParam {String} pass 用户密码
 * @apiParam {String} pass 用户密码
 * 
 * @apiSuccess {String} err 错误信息
 * @apiSuccess {String} msg  是否匹配成功
 */
let obj={}
Router.post('/login',(req,res)=>{
	let {us,pass}=req.body;
	userModel.find({us,pass})
	.then((data)=>{
		console.log('data:'+data);
		if(data.length>=1){
			return res.send('登录ok')
		}
		res.send('账号/密码错误');
	})
})




/**
 * @api {post} /user/search_user/ 查找用户信息
 * @apiName Login_search_user
 * @apiGroup User
 *
 * @apiSuccess {String} err 错误信息
 * @apiSuccess {String} msg  显示管理员信息
 */
//Router.post('/search_admin',(req,res)=>{
//	let us=req.body.us;
//	if(us==undefined){
//		goodsModel.find()
//		.then((data)=>{
//			return res.send(data)
//		})
//		.catch((data2)=>{
//			return res.send('查找失败')
//		})
//	}else{
//		goodsModel.find({'us':us})
//		.then((data)=>{
//			return res.send(data)
//		})
//		.catch((data2)=>{
//			return res.send('查找失败')
//		})
//	}
//	
//})


/**
 * @api {post} /user/edit_user/ 修改管理员信息
 * @apiName Login_search_admin
 * @apiGroup User
 *
 * @apiParam {String} usu 用户旧邮箱
 * @apiParam {String} uss 用户邮箱
 * @apiParam {String} passs 用户密码
 * 
 * @apiSuccess {String} err 错误信息
 * @apiSuccess {String} msg  显示管理员信息
 */
//Router.post('/edit_admin',(req,res)=>{
//	let {usu,uss,passs}=req.body;
//	userModel.updateOne({us:usu},{$set:{us:uss,pass:passs}})
//	.then((data)=>{
//		return res.send('更改成功')
//	})
//	.catch((data2)=>{
//		return res.send('更改失败')
//	})
//})

module.exports=Router;