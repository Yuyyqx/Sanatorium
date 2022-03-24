import request from '../../utils/request.js'
import qs from 'qs'; // 根据需求是否导入qs模块
import base from '../base.js'
const photo = {

	//获取该老人的监控情况
	getPhoto(params){
		return request.httpRequest(`${base.url}/picture/getVideoByOldId`,'GET',params)
	},
	//获取机器人用户Id
	getRobert(){
		return request.httpRequest(`${base.url}/chat/getSystemRobot`,'POST')
	},
	//判断是否是首次聊天
	judgeChat(params){
		return request.httpRequest(`${base.url}/chat/isFirst`,'POST',params)
	},
	//第一次聊天产生聊天列表
	initChat(params){
		return request.httpRequest(`${base.url}/chat/initChatList`,'POST',params)
	},
	//不是第一次聊天添加信息
	addChat(params){
		return request.httpRequest(`${base.url}/chat/insertChatDetail`,'POST',params)
	},
	//修改报警视频状态
	changeStatus(params){
		return request.httpRequest(`${base.url}/picture/updateAlarmStatus`,'POST',params)
	},
}

export default photo;