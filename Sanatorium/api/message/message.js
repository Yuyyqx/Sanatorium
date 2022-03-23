import request from '../../utils/request.js'
import qs from 'qs'; // 根据需求是否导入qs模块
import base from '../base.js'
const message = {
	//获取所有消息列表
	getChatDetail(params){
		return request.httpRequest(`${base.url}/chat/getChats`,'POST',params)
	}
}

export default message;