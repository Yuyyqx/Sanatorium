<template>
	<view class="content">
		<!-- 上方 -->
		<view class="bottom">
			<view class="bottom-item" style="height:100rpx">
				<text>头像</text>
				<image class="touxiang" :src="userList.userInfo[0].userAvatar" />
			</view>
			<view class="line" />
			<view class="bottom-item">
				<text>昵称</text>
				<view class="right">
					<text>小李</text>
					<image src="../../../static/images/mine3.png" />
				</view>
			</view>
			<view class="line" />
			<view class="bottom-item">
				<text>手机号</text>
				<view class="right">
					<text>178****0473</text>
					<image src="../../../static/images/mine3.png" />
				</view>
			</view>
			<view class="line" />
			<view class="bottom-item">
				<text>邮箱</text>
				<view class="right">
					<text>11****4917@qq.com</text>
					<image src="../../../static/images/mine3.png" />
				</view>
			</view>
			<view class="line" />
			<view class="bottom-item">
				<text>个性签名</text>
				<view class="right">
					<text>今天心情真好!</text>
					<image src="../../../static/images/mine3.png" />
				</view>
			</view>
			<view class="line" style="margin-bottom: 0rpx;" />
		</view>

		<!-- 下方 -->
		<view class="bottom" style="margin-top: 20rpx;">
			<view class="bottom-item">
				<text>实名认证</text>
				<view class="right">
					<view class="unShure" v-if="status==0">
						<text @click="jumpTo()">未认证</text>
					</view>
					<view class="shure" v-if="status==1">
						<text>已认证</text>
					</view>
					<image src="../../../static/images/mine3.png" />
				</view>
			</view>
			<view class="line" />
			<view class="bottom-item">
				<text>密码管理</text>
				<view class="right">

					<image src="../../../static/images/mine3.png" />
				</view>
			</view>
			<view class="line" />
			<view class="bottom-item">
				<text>账户注销</text>
				<view class="right">

					<image src="../../../static/images/mine3.png" />
				</view>
			</view>
			<view class="line" style="margin-bottom: 0rpx;" />
		</view>
		
		<!-- 操作 -->
		<view class="change">
			<text>切换账号</text>
		</view>
		<view class="change">
			<text>退出登录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 0,
				userList:[]
			}
		},
		onLoad() {
			//获取资料
			
			this.userList = uni.getStorageSync('userList')
			console.log('userList',this.userList)
		},
		methods: {
			jumpTo(){
				uni.navigateTo({
					url:'../real/real'
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: rgb(247, 248, 249);
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

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
		padding: 0rpx 0rpx 0rpx 20rpx; //  上 右 下左
		align-items: center;

		image {
			width: 25rpx;
			height: 25rpx;
			margin-right: 20rpx;

		}

		.touxiang {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			// border: 1rpx solid#333333;
			position: absolute;
			right:50rpx;
			margin: 30rpx 0rpx 30rpx 0rpx ;
		}
	}



	.right {
		position: absolute;
		right: 0rpx;
		color: #898989;
		display: flex;
		align-items: center;

		/* margin-left: 510rpx; */
		image {
			margin-left: 20rpx;
		}
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
	}

	.shure {
		width: 90rpx;
		height: 40rpx;
		background-color: rgb(97, 187, 156);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 23rpx;
		color: #ffffff;
		border-radius: 50rpx;
	}

	.line {
		width: 720rpx;
		height: 1rpx;
		background-color: #f7f8f9;
		margin: 28rpx 0rpx 28rpx 20rpx;

	}

	.change {
		width: 750rpx;
		height: 90rpx;
		background-color: #ffffff;
		color: #005500;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
</style>
