/** 
 * api接口的统一出口
 */
// 其他模块的接口……
import login from './login/login.js'
import photo from './photo/photo.js'
import message from './message/message.js'

// 导出接口
export default {    
	login,
	photo,
	message
}