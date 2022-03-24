<template>
	<view>

		<!-- 家属端 -->
		<view class="content" v-if="change===0">
			<view class="up">
				消息（6）
			</view>
			<view class="mid">
				<view class="icon">
					<image src="../../static/images/message4.png" />
					<text>护工信息</text>
				</view>
				<view class="icon">
					<image src="../../static/images/message.png" />
					<text>疗养院信息</text>
				</view>
				<view class="icon">
					<image src="../../static/images/message3.png" />
					<text>系统通知</text>
				</view>
			</view>
			<view class="down">
				<view class="item" v-for="(item,index) in chatList" :key="index" @click="gotoDetail(index)">
					<view class="left">
						<image :src="item.userAvatar" />
					</view>
					<view :class="[list.length==index+1? 'right':'right1']">
						<view class="right-left">
							<text class="item-title">{{item.nickName}}</text>
							<text class="item-content">{{item.lastMessage}}</text>
						</view>
						<view class="right-right">
							<text class="item-content">{{item.lastMessageTime}}</text>
							<view :class="[item.red==1? 'hong':'hong1']" />

						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 护工端 -->
		<view class="content" v-if="change===1">
			<view class="up">
				消息（4）
			</view>
			<view class="mid">
				<view class="icon">
					<image src="../../static/images/message4.png" />
					<text>家属信息</text>
				</view>
				<view class="icon">
					<image src="../../static/images/message.png" />
					<text>疗养院信息</text>
				</view>
				<view class="icon">
					<image src="../../static/images/message3.png" />
					<text>系统通知</text>
				</view>
			</view>
			<view class="down">
				<view class="item" v-for="(item,index) in list" :key="index" @click="gotoDetail(index)">
					<view class="left">
						<image :src="item.picUrl" />
					</view>
					<view :class="[list.length==index+1? 'right':'right1']">
						<view class="right-left">
							<view style="display: flex;">
								<text class="item-title">{{item.name}}</text>
								<view class="sign1" v-if="item.type=='家属'">
									<text>{{item.type}}</text>
								</view>
								<view class="sign2" v-if="item.type=='疗养院'">
									<text>{{item.type}}</text>
								</view>
								<view class="sign3" v-if="item.type=='系统通知'">
									<text>{{item.type}}</text>
								</view>
							</view>

							<text class="item-content">{{item.content}}</text>
						</view>

						<view class="right-right">
							<text class="item-content">{{item.date}}</text>
							<view :class="[item.red==1? 'hong':'hong1']" />

						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				change: 0, //0为家属端，1为护工端
				list: [{
						id: 0,
						picUrl: '../../static/images/tx.png',
						name: '钱玉亲属',
						content: '干得不错！',
						date: '17:20',
						type: '家属',
						red: 1
					},
					{
						id: 1,
						picUrl: '../../static/images/tx.png',
						name: '钱玉亲属',
						content: '早点完成任务！',
						date: '昨天',
						type: '家属',
						red: 0
					},
					{
						id: 2,
						picUrl: '../../static/images/tx.png',
						name: '钱玉亲属',
						content: '老人今日身体怎么样？',
						date: '昨天',
						type: '家属',
						red: 0
					},
					/* 					{
											id: 3,
											picUrl: '../../static/images/tx.png',
											name: '钱玉亲属',
											content: '昨天的任务完成得很好！',
											date: '昨天',
											type: '家属',
											red: 0
										}, */
					{
						id: 4,
						picUrl: '../../static/images/house5.jpg',
						name: '疗养院',
						content: '请缴费！',
						date: '昨天',
						type: '疗养院',
						red: 0
					},
					{
						id: 5,
						picUrl: '../../static/images/tx4.png',
						name: '系统通知',
						content: '恭喜开通app！',
						date: '昨天',
						type: '系统通知',
						red: 0
					}
				],
				chatList:[],
				totalList:[]
			}
		},
		onLoad() {
			this.change = uni.getStorageSync('change')
			console.log(this.change)
			if (this.change === 1) {
				uni.setTabBarItem({
					index: 1,
					text: '任务',
					iconPath: 'static/images/task5.png',
					selectedIconPath: 'static/images/task4.png'
				})
			}
			//接口
			this.getChatList()

		},
		methods: {
			gotoDetail(index) {
				// let List = this.chatList
				// let id = List[index].chatMessageId
				// let name = '消息ID 1676742816'
				//  let obj= Object.create(null);
				 
				//    for (let[k,v] of this.totalList) {
				 
				//      obj[k] = v;
				 
				//     }
				 
				//    let JsonStr = JSON.stringify(obj);
				//    console.log(JsonStr)
				console.log(this.totalList[index])
				// console.log(this.totalList.get(name))assertEquals("A", getKeyByLoop(map, 1));
				// uni.navigateTo({
				// 	url: 'messageDetail?chatItem = '+this.totalList[index]
				// })
			},
			getChatList() {
				this.$api.message.getChatDetail({
					userId: uni.getStorageSync('userId'),
				}).then(res => {
					if (res.msg == '成功') {
						console.log('chatList', res);
						this.totalList = res.data
						let arr = res.data.chatList
						for(let s in arr){
							arr[s].lastMessageTime = arr[s].lastMessageTime.slice(5,10)+" "+arr[s].lastMessageTime.slice(11,16)
						}
						// console.log(arr)
						this.chatList = arr
						
					}
				}).catch(err => {

				})
			}
			// getPhotoList(){
			// 	this.$api.photo.getPhoto({
			// 		oldId:this.num,
			// 		}
			// 	).then(res => {
			// 		console.log(res)
			// 		}
			// 	}).catch(err => {

			// 	})
			// }
		}
	}
</script>

<style lang="less">
	page {
		background-color: #F7F8F9;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.up {
		width: 750rpx;
		padding-left: 20rpx;
		font-size: 37rpx;
	}

	.mid {
		margin-top: 20rpx;
		width: 750rpx;
		height: 230rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 50rpx 0rpx 50rpx;
	}

	.icon {
		display: flex;
		flex-direction: column;
		width: 200rpx;
		height: 160rpx;
		justify-content: space-around;
		align-items: center;

		image {
			width: 100rpx;
			height: 100rpx;
		}

		text {
			font-size: 27rpx;
			color: #333333;
		}
	}

	.down {
		width: 750rpx;
		background-color: #FFFFFF;

		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.item {
		width: 700rpx;
		height: 160rpx;
		background-color: #ffffff;
		padding: 20rpx 0rpx 20rpx 0rpx;
		display: flex;
	}

	.left image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.right {
		width: 670rpx;
		// border-bottom: 1rpx solid#e2e2e2;
		margin-left: 20rpx;
		display: flex;
	}

	.right1 {
		width: 670rpx;
		border-bottom: 1rpx solid#e2e2e2;
		margin-left: 20rpx;
		display: flex;
	}

	.right-left {
		display: flex;
		flex-direction: column;
		height: 100rpx;
		justify-content: space-around;
	}

	.item-title {
		font-size: 28rpx;
		color: #333333;
	}

	.item-content {
		font-size: 26rpx;
		color: #b0b0b0;
	}

	.right-right {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100rpx;
		justify-content: space-around;
		position: absolute;
		right: 30rpx;
	}

	.hong {
		width: 15rpx;
		height: 15rpx;
		border-radius: 50%;
		background-color: rgb(255, 77, 77);
	}

	.hong1 {
		width: 15rpx;
		height: 15rpx;
		border-radius: 50%;
		background-color: rgb(255, 255, 255);
	}

	.sign1 {
		padding: 0rpx 8rpx 0rpx 8rpx;
		margin-left: 30rpx;
		height: 40rpx;
		color: #ffffff;
		background-color: rgb(248, 151, 105);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: smaller;
		border-radius: 10rpx;
	}

	.sign2 {
		background-color: rgb(68, 162, 253);
		padding: 0rpx 8rpx 0rpx 8rpx;
		margin-left: 30rpx;
		height: 40rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: smaller;
		border-radius: 10rpx;
	}

	.sign3 {
		background-color: rgb(246, 188, 71);
		padding: 0rpx 8rpx 0rpx 8rpx;
		margin-left: 30rpx;
		height: 40rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: smaller;
		border-radius: 10rpx;
	}
</style>
