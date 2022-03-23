<template>
	<view>

		<!-- 家属端 -->
		<view class="content" v-if="change===0">
			<view class="top">
				<view class="up">
					<image class="image" :src="userList.userInfo[0].userAvatar" />
					<view class="title">
						<view class="title-first">
							<text>{{userList.user.userName}}</text>
							<image v-if="status==1" src="../../static/images/ok.jpg" />
							<view class="unShure" v-if="status==0">
								<text>未实名</text>
							</view>
						</view>

						<text class="title-phone">178****0473</text>
						<text class="title-phone">330********2242X</text>
					</view>
					<image @click="gotoInformation()" class="icon" src="../../static/images/mine6.png" />
				</view>
				<view class="down">
					<view class="item">
						<image src="../../static/images/mine12.png" />
						<text>历史</text>
					</view>
					<view class="item">
						<image src="../../static/images/mine5.png" />
						<text>收藏</text>
					</view>
					<view class="item" @click="gotoCommit()">
						<image src="../../static/images/mine4.png" />
						<text>待评价</text>
					</view>
					<view class="item">
						<image src="../../static/images/wallet.png" />
						<text>余额</text>
					</view>
				</view>
			</view>
			<view class="bottom" style="margin-top: 45rpx;">
				<view class="bottom-item" @click="gotoInformation()">
					<image src="../../static/images/mine7.png" />
					<text>个人信息</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item">
					<image src="../../static/images/mine11.png" />
					<text>家属信息</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item">
					<image src="../../static/images/mine9.png" />
					<text>支付设置</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item" @click="signOut()">
					<image src="../../static/images/mine10.png" />
					<text>退出账号</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item">
					<image src="../../static/images/mine8.png" />
					<text>版本设置</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" style="margin-bottom: 0rpx;" />
			</view>
		</view>

		<!-- 护工端 -->
	
		<view class="content" v-if="change===1">
			<view class="top-hugong">
				<view class="up">
					<image class="image" src="../../static/images/touxiang1.png" />
					<view class="title">
						<view class="title-first">
							<text>护工1</text>
							<image v-if="status==1" src="../../static/images/ok.jpg" />
							<view class="unShure" v-if="status==0">
								<text>未实名</text>
							</view>
						</view>

						<text class="title-phone">158****8299</text>
						<text class="title-phone">310********6684X</text>
					</view>
					<image @click="gotoInformation()" class="icon" src="../../static/images/mine6.png" />
				</view>
				<!-- 			<view class="down">
				
				<view class="item">
					<image src="../../static/images/mine4.png" />
					<text>待评价</text>
				</view>
				<view class="item">
					<image src="../../static/images/wallet.png" />
					<text>余额</text>
				</view>
			</view> -->
			</view>
			
			<view class="bottom">
				<view class="bottom-item" @click="gotoInformation()">
					<image src="../../static/images/mine7.png" />
					<text>个人信息</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item">
					<image src="../../static/images/mine11.png" />
					<text>老人信息</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item">
					<image src="../../static/images/mine9.png" />
					<text>支付设置</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item">
					<image src="../../static/images/pingjia.png" />
					<text>我的评价</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item" @click="signOut()">
					<image src="../../static/images/mine10.png" />
					<text>退出账号</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" />
				<view class="bottom-item">
					<image src="../../static/images/mine8.png" />
					<text>版本设置</text>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<view class="line" style="margin-bottom: 0rpx;" />
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				status: 1,
				change: 0, //0为家属端，1为护工端
				userList:[]
			}
		},
		onLoad() {
			this.change = uni.getStorageSync('change')
			console.log(this.change)
			if(this.change===1){
				uni.setTabBarItem({
			  index: 1,
			  text: '任务',
			  iconPath: 'static/images/task5.png',
			  selectedIconPath: 'static/images/task4.png'
			})
			}
			
			//获取资料
			this.userList = uni.getStorageSync('userList')
			console.log('userList',this.userList)
		},
		methods: {
			gotoInformation() {
				uni.navigateTo({
					url: 'edit/information',
				})
			},
			gotoCommit(){
				uni.navigateTo({
					url: 'commit/commit',
				})
			},
			signOut(){
				uni.navigateTo({
					url: '../login/login',
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: rgb(247, 248, 249);
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.top {
		width: 750rpx;
		height: 350rpx;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.05);

	}

	.top-hugong {
		width: 750rpx;

		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.05);

	}

	.up {
		display: flex;
		padding: 30rpx;
		background-color: #ffffff;
	}

	.image {
		width: 145rpx;
		height: 145rpx;
		border-radius: 50%;
		/* border: 1rpx solid#333333; */
	}

	.title {
		display: flex;
		flex-direction: column;
		height: 120rpx;
		justify-content: space-around;
		margin-left: 25rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.title-first {
		font-size: 36rpx;
		font-weight: 600;
		color: #101010;
		display: flex;
		margin-bottom: 15rpx;
	}

	.title-first image {
		width: 150rpx;
		height: 65rpx;
		margin-top: -10rpx;
		margin-left: 20rpx;
	}

	.unShure {
		width: 90rpx;
		height: 40rpx;
		background-color: rgb(187, 0, 3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 23rpx;
		color: #ffffff;
		border-radius: 50rpx;
		margin-left: 50rpx;
		margin-top: 10rpx;
	}

	.title-phone {
		font-size: small;
		color: #5F5E5E;
		font-weight: 500;
	}

	.icon {
		width: 35rpx;
		height: 35rpx;
		position: absolute;
		right: 50rpx;
		margin-top: 20rpx;
	}

	.down {
		padding: 10rpx;
		margin-top: 20rpx;
		display: flex;
		width: 700rpx;
		justify-content: space-around;
		border-radius: 15rpx;
		background-color: #ffffff;
		margin-left: 25rpx;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.05);

	}

	.item {
		width: 120rpx;
		height: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.item image {
		width: 65rpx;
		height: 65rpx;
	}


	.bottom {
		width: 750rpx;
		background-color: #ffffff;
		margin-top: 30rpx;
		padding: 25rpx 0rpx 0rpx 0rpx;


	}

	.bottom-item {
		display: flex;
		width: 750rpx;
		padding: 0rpx 0rpx 0rpx 25rpx; //  上 右 下左
	}

	.bottom-item image {
		width: 35rpx;
		height: 35rpx;
		margin-right: 20rpx;

	}

	.right {
		margin-left: 500rpx;
	}

	.line {
		width: 700rpx;
		height: 1rpx;
		background-color: #f7f8f9;

		margin: 28rpx 0rpx 28rpx 50rpx;

	}
</style>
