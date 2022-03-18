import request from '../../utils/request.js'
import qs from 'qs'; // 根据需求是否导入qs模块
import base from '../base.js'
const photo = {

	//获取该用户的监控情况
	getPhoto(params){
		return request.httpRequest(`${base.url}/picture/getVideoByOldId`,'GET',params)
	}
}

export default photo;