<template>
	<view class="content">
		<image class="logo" src="/static/images/logo.png"></image>
		<view class="box">
			<view class="up">
				<text @click="familyClick()" :class="[state==0?'text_green':'text_grey']">亲属登录</text>
				<view class="down-line" />
				<text @click="workerClick()" :class="[state==1?'text_green':'text_grey']">护工登录</text>
			</view>
			<!-- 账号密码登录 -->
			<view class="mid" v-if="way == 0">
				<view class="item">
					<image src="../../static/images/username.png" />
					<input placeholder="输入身份证/手机号" placeholder-style="color: #898989;" type="text"
						style="margin-top: 50rpx;" v-model="num"/>
				</view>
				<view class="item">
					<image src="../../static/images/password.png" />
					<input type="text" placeholder="输入密码" placeholder-style="color: #898989;"
						style="margin-top: 50rpx;" v-model="pwd"/>
				</view>
			</view>
			<!-- 验证码登录 -->
			<view class="mid" v-if="way == 1">
				<view class="item" style="padding-bottom: 8rpx;">
					<text class="china">中国+86 </text>
					<input placeholder="手机号" placeholder-style="color: #898989;" type="text"
						style="margin-top: 50rpx;" v-model="phone"/>
				</view>
				<view class="item" style="padding-bottom: 8rpx;">
					<input type="text" placeholder="验证码" placeholder-style="color: #898989;"
						style="margin-top: 50rpx;" v-model="code"/>
					<text class="yzm">发送验证码</text>
				</view>
			</view>
			<view class="bottom">
				<text @click="jumpTo()">立即注册</text>
				<text @click="way=1" v-if="way==0">使用验证码登录</text>
				<text @click="way=0" v-if="way==1">使用密码登录</text>
			</view>
			<view class="btn" @click="loginClick()">
				<text>登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state: 0,
				way: 0,
				// num:'13397636586',
				num:'123456',
				pwd:'123456',
				phone:'',
				code:''
			}
		},
		onLoad() {

		},
		methods: {
			familyClick() {
				/* this.state = 0
				console.log(this.state) */
			},
			workerClick() {
				/* this.state = 1
				console.log(this.state) */
			},
			jumpTo() {
				uni.navigateTo({
					url: '/pages/login/regist/regist',
				})
			},
loginClick() {
				if(this.way==0){ //密码登录
				console.log('way+',this.way)
					this.$api.login.loginByPassword({
						phoneOrCardId:this.num,
						pwd:this.pwd
						}
					).then(res => {
						if (res.msg == '成功' ) {
							console.log(res.data);
							if(res.data.user.userRole==1){
								uni.setStorageSync('change', 0)
								uni.setStorageSync('userId', res.data.user.userId)
								uni.setStorageSync('userList', res.data)
								uni.reLaunch({
									url: '../index/index?change=0'
								});
								
								uni.switchTab({
									url: '../index/index',
								})
							}
							else
							if (res.data.user.userRole==0) {
								uni.setStorageSync('change', 1)
								uni.setStorageSync('userId', res.data.user.userId)
								uni.setStorageSync('userList', res.data)
								uni.reLaunch({
									url: '../index/index?change=1'
								});
								uni.switchTab({
									url: '../index/index',
								})
							
							}
						} else {
							this.$refs.uToast.show({
								title: '不存在该用户',
								type: 'error',
								
							})
						}
					}).catch(err => {
						this.$refs.uToast.show(err)
					})
				}else if(this.way==1){ //验证码登录
				console.log('way+',this.way)
					this.$api.login.loginByPhone({
						phone:this.phone,
						code:this.code
						}
					).then(res => {
						if (res.msg == '成功' ) {
							console.log(res.data);
							if(res.data.user.userRole==1){
								uni.setStorageSync('change', 0)
								uni.setStorageSync('userId', res.data.user.userId)
								uni.setStorageSync('userList', res.data)
								uni.reLaunch({
									url: '../index/index?change=0'
								});
								
								uni.switchTab({
									url: '../index/index',
								})
							}
							else
							if (res.data.user.userRole==0) {
								uni.setStorageSync('change', 1)
								uni.setStorageSync('userId', res.data.user.userId)
								uni.setStorageSync('userList', res.data)
								uni.reLaunch({
									url: '../index/index?change=1'
								});
								uni.switchTab({
									url: '../index/index',
								})
							
							}
						} else {
							this.$refs.uToast.show({
								title: '不存在该用户',
								type: 'error',
								
							})
						}
					}).catch(err => {
					
					})
				}

/* 				if (this.state == 0) {
					uni.setStorageSync('change', 0)
					uni.reLaunch({
						url: '../index/index?change=0'
					});

					uni.switchTab({
						url: '../index/index',
					})

				} else
				if (this.state == 1) {
					uni.setStorageSync('change', 1)
					uni.reLaunch({
						url: '../index/index?change=1'
					});
					uni.switchTab({
						url: '../index/index',
					})

				}
 */
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 250rpx;
		width: 220rpx;
		margin-top: 60rpx;
		margin-bottom: 30rpx;
	}

	.box {
		width: 600rpx;
		height: 300rpx;
		margin-left: 20rpx;
	}

	.up {
		width: 85%;
		margin-left: 50rpx;
		height: 50rpx;
		display: flex;
		justify-content: space-between;
		font-size: large;
	}

	.down-line {
		width: 1rpx;
		height: 50rpx;
		background-color: #BBBBBB;
	}

	.mid {
		width: 580rpx;
	}

	.mid image {
		width: 50rpx;
		height: 50rpx;
		margin: 40rpx 40rpx 20rpx 40rpx;
	}

	.china {
		margin-top: 55rpx;
		margin-right: 25rpx;
		border-right: 1rpx solid#BBBBBB;
		padding-right: 25rpx;
	}

	.yzm {
		color: #0B4A87;
		font-size: small;
		margin-top: 55rpx;
		margin-left: 130rpx;
	}

	.text_green {
		color: rgb(58, 146, 85);
	}

	.text_grey {
		color: #000000;
	}

	.item {
		border-bottom: 1rpx solid#BBBBBB;
		display: flex;
	}

	.bottom {
		color: #1D610C;
		margin-top: 30rpx;
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.btn {
		width: 500rpx;
		height: 60rpx;
		border-radius: 4rpx;
		background-color: rgb(58, 146, 85);
		box-shadow: 0px 2px 3px 0px rgba(93, 93, 93, 0.0);
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 300rpx;
		margin-left: 50rpx;
	}
</style>
