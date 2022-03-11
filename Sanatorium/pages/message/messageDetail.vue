<template>
	<view class="page">
		<view class="bgConston" id="chatContent">
			<view class="userSession">
				<view class="item" v-for="(item,index) in userContextItem" :key="index">
					<view class="time">{{item.time}}</view>
					<view class="userH" :class="{'userMe':item.userId == ''}">
						<view class="userImg">
							<image :src="item.userImg" mode="scaleToFill"></image>
						</view>
						<view :id="index" class="userType" @longpress="handleLongPress(index)">
							<!--是否显示用户昵称-->
							<template v-if="item.userId != ''">
								<view class="userN">
									<text>{{item.userName}}</text>
								</view>
							</template>
							<!--文本格式-->
							<template v-if="item.type == 'text'">
								<view class="textType">
									{{item.context}}
								</view>
							</template>
							<!--图片格式-->
							<template v-else-if="item.type == 'img'">
								<view class="imgType">
									<image :src="item.picImg" mode="scaleToFill"></image>
								</view>
							</template>
							<!--视频格式-->
							<template v-else-if="item.type == 'video'">
								<view class="videoType">
									<video :src="item.videoSrc" controls="false"></video>
								</view>
							</template>
						</view>

					</view>
					<view :class="{myview:item.userId == '',otherview:item.userId != ''}">{{item.view}}</view>
				</view>
			</view>
		</view>
		<bianmarenTooltips :gravity="gravity" :tooltipShow="tooltipShow" :btns="tooltipBtns" :eleId="eleId"
			@btnClick="sortTooltipClick"></bianmarenTooltips>
		<!--底部聊天输入框-->
		<view class="userInput">
<!-- 			<view class="want">
				<view>我想</view>
				<view class="service">
					<image src="../../static/images/service.png"></image>
					<view>服务评价</view>
				</view>
			</view> -->
			<view class="send">
				<view class="sendimg1">
					<image src="../../static/images/sendimg1.png"></image>
				</view>
				<input confirm-type="search" @confirm="doSearch" class="sendinput" type="text" v-model="text"
					placeholder="请输入" adjust-position="false" />
				<!-- <cover-view @click="icon" class="viewimage">
					<cover-image class="icon" src="../../static/images/sendimg3.png" />
				</cover-view> -->
				<view class="sendimg2" @click="chooseImg">
					<image src="../../static/images/sendimg2.png"></image>
				</view>
			</view>

			<!-- <view class="sumText" @click="submit(text)">发送</view> -->
		</view>
	</view>
</template>

<script>
	//组件倒入
	import bianmarenTooltips from '@/components/bianmaren-tooltips/bianmaren-tooltips.vue'
	export default {
		components: {
			bianmarenTooltips
		},
		data() {
			return {
				//方向
				gravity: 'top',
				//是否显示
				tooltipShow: false,
				//按钮
				tooltipBtns: ["今日", "昨日", "近一周", "近一月"],
				//点击元素
				eleId: "",
				text: '',
				sHeight: 500,
				searchWord: '',
				userContextItem: [ {
					userId: 1,
					meId: '',
					userName: '钱玉亲属',
					userImg: '../../static/images/tx.png',
					type: 'text',
					context: '昨天的任务完成的很好！',
					time: '11月25日 14:42',
					view: ''
				},
				{
					userId: '',
					meId: 2,
					userName: '',
					userImg: '../../static/images/touxiang1.png',
					type: 'text',
					context: '谢谢，我会继续努力的',
					time: '11月25日 15:42',
					view: '已读'
				},
				{
					userId: 1,
					meId: '',
					userName: '钱玉亲属',
					userImg: '../../static/images/tx.png',
					type: 'text',
					context: '老人今日身体怎么样？！',
					time: '11月26日 14:20',
					view: ''
				},
				{
					userId: '',
					meId: 2,
					userName: '',
					userImg: '../../static/images/touxiang1.png',
					type: 'text',
					context: '一切如常，我已上传',
					time: '11月25日 15:42',
					view: '已读'
				},
				{
					userId: 1,
					meId: '',
					userName: '钱玉亲属',
					userImg: '../../static/images/tx.png',
					type: 'text',
					context: '早点完成任务！',
					time: '11月26日 17:20',
					view: ''
				},
				{
					userId: '',
					meId: 2,
					userName: '',
					userImg: '../../static/images/touxiang1.png',
					type: 'text',
					context: '不好意思，马上上传',
					time: '11月25日 15:42',
					view: '已读'
				},
				{
					userId: 1,
					meId: '',
					userName: '钱玉亲属',
					userImg: '../../static/images/tx.png',
					type: 'text',
					context: '干得不错！',
					time: '11月26日 17:20',
					view: ''
				},
				{
					userId: '',
					meId: 2,
					userName: '',
					userImg: '../../static/images/touxiang1.png',
					type: 'text',
					context: '谢谢亲',
					time: '11月25日 15:42',
					view: '已读'
				},]
			}
		},

		methods: {
			//上传图片
			chooseImg() {
				uni.chooseImage({
					count: 1,
					// sizeType压缩图片
					sizeType: "compressed",
					success: (res) => {
						console.log(res)
						let temp = {
							userId: '',
							meId: 2,
							userName: '',
							userImg: '../../static/images/chatimg.png',
							type: 'img',
							context: '',
							picImg:res.tempFilePaths[0],
							time: '',
							view: ''
						}
						temp.time = new Date().getHours() + ':' + new Date().getMinutes()
						this.userContextItem.push(temp)
						uni.setStorageSync(this.lawyertitle, this.userContextItem)
					}
				})
			},
			//长按操作
			sortTooltipClick(btnName) {
				uni.showToast({
					title: btnName + "点击",
					icon: 'none'
				})
			},
			//滑倒底部
			scrollToBottom() {
				wx.createSelectorQuery().select('#chatContent').boundingClientRect(function(rect) {
					// console.log(rect.height);
					wx.pageScrollTo({
						scrollTop: rect.height,
					});
				}).exec()
			},
			handleLongPress: function(e) {
				//console.log("endTime - startTime = " + (this.endTime - this.startTime));
				console.log("长按");
				this.tooltipShow = true
				this.eleId = e
			},
			doSearch() {
				let temp = {
					userId: '',
					meId: 2,
					userName: '',
					userImg: '../../static/images/chatimg.png',
					type: 'text',
					context: '您好，我想咨询一下',
					time: '',
					view: ''
				}
				let text = this.text
				temp.context = text
				this.text = ''
				temp.time = new Date().getHours() + ':' + new Date().getMinutes()
				this.userContextItem.push(temp)
				uni.setStorageSync(this.lawyertitle, this.userContextItem)
				this.scrollToBottom()
			}
		},
		onReady() {
			this.scrollToBottom()
		},
		onLoad(option) {
			this.lawyertitle = option.lawyername
			if (this.lawyertitle) {
				uni.setNavigationBarTitle({
					title: this.lawyertitle
				})
			}
			if (uni.getStorageSync(this.lawyertitle)) {
				this.userContextItem = uni.getStorageSync(this.lawyertitle)
			}
			//获取系统信息
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		let height = res.windowHeight - uni.upx2px(100);
			// 		this.sHeight = height;
			// 	}
			// })

		}
	}
</script>

<style lang="scss">
	page {
		background-color: rgb(232, 232, 232);
	}

	.bgConston {
		width: 100%;
		height: 100%;
		background-color: rgb(232, 232, 232);
		margin: 0;
		padding: 0;
		padding-bottom: 300rpx;
	}

	// 聊天
	.userSession {
		width: 100%;
		height: auto;
		border-top: 20rpx solid rgb(232, 232, 232);
		overflow: auto;

		.item {
			margin-bottom: 30rpx;
		}

		// margin-bottom: 50rpx;
		.time {
			color: #999999;
			text-align: center;
			margin-top: 30rpx;
		}

		.userH {
			width: 80%;
			height: auto;
			display: flex;
			flex: 1;
			flex-wrap: wrap;
			padding: 20rpx;

			// margin-bottom: 30rpx;
			.userImg {
				width: 70rpx;
				height: 70rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				// margin-right: 15rpx;
				// margin-left: 15rpx;
				image {
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
					// border-radius: 100%;
				}
			}

			.userType {
				display: flex;
				justify-content: center;
				flex-direction: column;
				padding: 20rpx;
				margin-bottom: -30rpx;

				.userN {
					height: 50rpx;
					display: flex;
					justify-content: flex-start;

					text {
						height: 50rpx;
						min-height: 100rpx;
						color: #999999;
					}
				}

				.textType {
					word-wrap: break-word;
					word-break: break-all;
					overflow: hidden;
					text-align: left;
					max-width: 400rpx;
					background-color: #FFFFFF;
					border-radius: 10rpx;
					margin-bottom: -20rpx;
					box-shadow: 3rpx 3rpx 3rpx 3rpx #E3E3E3;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 20rpx;

					text {
						font-size: 32rpx;
						color: #666;
					}
				}

				.imgType {
					max-width: 300rpx;
					max-height: 420rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #FFFFFF;
					border-radius: 20rpx;
					box-shadow: 3rpx 3rpx 3rpx 3rpx #E3E3E3;

					image {
						width: 250rpx;
						height: 350rpx;
						padding: 20rpx;
					}
				}

				.videoType {
					max-width: 300rpx;
					max-height: 400rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #FFFFFF;
					border-radius: 20rpx;
					box-shadow: 3rpx 3rpx 3rpx 3rpx #E3E3E3;

					image {
						width: 270rpx;
						height: 370rpx;
						padding: 20rpx;
					}
				}
			}
		}

		.userMe {
			width: 100%;
			height: auto;
			display: flex;
			flex: 1;
			flex-wrap: wrap;
			padding: 20rpx;
			justify-content: flex-start;
			flex-direction: row-reverse;
			text-align: right;
		}

		.myview {
			color: #999999;
			text-align: right;
			margin-right: 80rpx;
			padding-top: 30rpx;
		}

		.otherview {
			color: #999999;
			margin-left: 80rpx;
			padding-top: 30rpx;
		}
	}

	.userInput {
		
		height: 100rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 10rpx;
		box-shadow: 0 0 5rpx 0 #e3e3e3;
		background-color: white;

		.want {
			display: flex;
			color: #999999;
			font-size: 26rpx;
			margin-bottom: 20rpx;
			margin-top: 20rpx;

			.service {
				display: flex;
				border: 1rpx solid #C0C0C0;
				border-radius: 20rpx;
				font-size: 28rpx;
				margin-left: 10rpx;
				padding: 5rpx;

				image {
					width: 20rpx;
					height: 20rpx;
				}
			}
		}

		.send {
			display: flex;
			width: 100%;
			height: 100rpx;
			
			.sendimg1 {
				width: 10%;
				height: 100%;
				display: flex;
				justify-content: center;
				
				image {
					width: 55rpx;
					height: 55rpx;
					margin-top: 20rpx;
				}
			}

			.sendinput {
				width: 75%;
				height: 65rpx;
				border-radius: 15rpx;
				border: 1rpx solid #C0C0C0;
				padding-left: 10rpx;
				margin-top: 15rpx;
			}

			.viewimage {
				width: 55rpx;
				height: 55rpx;
				margin-left: -70rpx;
				margin-top: 5rpx;

				.icon {
					width: 55rpx;
					height: 55rpx;
					position: fixed;
					z-index: 999;
				}
			}

			.sendimg2 {
				width: 10%;
				margin-left: 30rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				margin-top: 15rpx;

				image {
					width: 55rpx;
					height: 55rpx;
					margin-top: 5rpx;
				}
			}
		}
	}
</style>
