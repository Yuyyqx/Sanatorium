import base from '../api/base.js'
import log from './log.js'
const baseUrl = 'http://127.0.0.1:9022' //接口请求地址
const socketUrl = 'ws://192.163.1.1:8081' //socket请求地址

const httpRequest = (url, methods, data, type, mycontent) => {
	log.info('---请求参数--- ' + url + '-----' + JSON.stringify(data))
	// console.log(url)
	let meth = methods.toUpperCase(); //小写改为大写
	if (!data) {
		data = {}
	}
	let contentType = meth == 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
	if (mycontent == 1) {
		contentType = 'application/json'
	}
	let httpDefaultOpts = {
		url: url,
		data: data,
		method: meth,
		header: {
			'X-Requested-With': 'XMLHttpRequest',
			'content-type': contentType,
			// 'Cookie': uni.getStorageSync('cookieKey')   //自定义的请求头信息，一般是登录之后保存登录信息
		},
		dataType: 'json',
	}
	return new Promise(function(resolve, reject) {
		if (!type) {
			uni.request(httpDefaultOpts).then(
				(res) => {
					log.info('---请求结果--- ' + url + '-----' + JSON.stringify(res))
					//	console.log(res); //可以在这里输出看一下网络请求返回的内容
					if (res && res[1].header && res[1].header['Set-Cookie']) {
						// console.log("存储了头信息",res[1].header['Set-Cookie'])
						try {
							// uni.setStorageSync('cookieKey', res[1].header['Set-Cookie']); //保存Cookie到Storage
						} catch (e) {}
					} else {
					}
					if (res[1].data.code == 20000) { //成功返回
						// console.log(res[1].data.code)
						resolve(res[1].data)
					} else if (res[1].data.code == 0) {
						resolve(res[1].data)
					} else if (res[1].data.code == 1) {
						reject(res[1].data)
					} else if (res[1].data.code == 500) {
						uni.showToast({
							title: '提交信息错误', //后台返回的错误情况
							icon: 'none'
						})
						reject(res[1].data)
					} else { //错误信息
						if (res[1].data.message != '业主身份核验不存在，是否登记？') {
							uni.showToast({
								title: res[1].data.message ? res[1].data.message :
								'获取失败', //后台返回的错误情况
								icon: 'none'
							})
						}
						reject(res[1]) //错误信息返不返回 看个人情况
					}
				}
			).catch(
				(response) => {
					// console.log(response)
					log.error('-----load in ' + url + '-----' + JSON.stringify(response))
					reject(response)
					uni.showToast({
						title: '服务器异常,请求错误', //后台返回的错误情况
						icon: 'none'
					})
				}
			)
		} else if (type == 1) {
			uni.uploadFile({
				url: url,
				filePath: data.path,
				name: data.name,
				success: (res) => {
					res = JSON.parse(res.data)
					if (res.code == 20000) {
						resolve(res)
						log.info('---请求结果--- ' + url + '-----' + JSON.stringify(res))
					} else {
						reject(res)
						log.error('-----load in ' + url + '-----' + JSON.stringify(res))
						uni.showToast({
							title: '操作失败', //后台返回的错误情况
							icon: 'none'
						})
					}
				},
				fail: (err) => {
					log.error('-----load in ' + url + '-----' + JSON.stringify(err))
					reject(err)
				}
			});
		}
	})
}



export default {
	baseUrl,
	socketUrl,
	httpRequest
}
