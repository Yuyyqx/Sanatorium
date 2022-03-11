import request from '../../utils/request.js'
import qs from 'qs'; // 根据需求是否导入qs模块
import base from '../base.js'
const login = {
/* 	//租客/成员注册（公共）
	registrationPublic(communityId,idNumber,mobilephone,name,publicPropertyId,type){
		return request.httpRequest(`${base.sq}/registration?communityId=${communityId}&idNumber=${idNumber}&mobilephone=${mobilephone}&name=${name}&publicPropertyId=${publicPropertyId}&type=${type}`, 'POST')
	},
	//获取banner
	getBannerList(){
		return request.httpRequest(`${base.sq}/banner`,'GET')
	}, */
	
	//手机号or身份证+密码登录
	loginByPassword(params){
		return request.httpRequest(`${base.url}/user/loginByPwd`,'POST',params)
	},
	//手机号+验证码登录
	loginByPhone(params){
		return request.httpRequest(`${base.url}/user/loginByPhone`,'POST',params)
	},
	//注册用户
	registUser(params){
		return request.httpRequest(`${base.url}/user/register`,'POST',params)
	},
	//判断已绑定老人数量
	judgeOldNumber(params){
		return request.httpRequest(`${base.url}/user/clickBindOld`,'POST',params)
	},
	//绑定老人
	bindingOld(params){
		return request.httpRequest(`${base.url}/user/bindOld`,'POST',params)
	},
	//绑定老人
	sendYzm(params){
		return request.httpRequest(`${base.url}/user/sendCode`,'GET',params)
	},
	//获取用户所绑定老人
	getOldList(params){
		return request.httpRequest(`${base.url}/user/getBindOldList`,'POST',params)
	}
}

export default login;