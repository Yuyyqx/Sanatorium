<template>
	<view class="content">
		<image class="logo" src="/static/images/logo.png"></image>
		<view class="box">
			<view class="up">
				<text>亲属注册</text>
			</view>
			<view class="mid">
				<view class="item">
					<image src="../../../static/images/username.png"/>
					<input placeholder="手机号" placeholder-style="color: #898989;" type="text" style="margin-top: 50rpx;" v-model="phone"/>
					<text class="yzm">发送验证码</text>
				</view>
				<view class="item">
					<image src="../../../static/images/password.png"/>
					<input type="text" placeholder="密码" placeholder-style="color: #898989;" style="margin-top: 50rpx;" v-model="pwd"/>
				</view>
				<view class="item">
					<image src="../../../static/images/yzm.png"/>
					<input type="text" placeholder="验证码" placeholder-style="color: #898989;" style="margin-top: 50rpx;"/>
				</view>
			</view>
			<view class="btn"@click="jumpTo()">
				<text>注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state:0,
				phone:'',
				pwd:''
			}
		},
		onLoad() {

		},
		methods: {
			jumpTo(){
				this.$api.login.registUser({
					phone:this.phone,
					pwd:this.pwd
					}
				).then(res => {
					console.log(res)
					if (res.msg == '成功' ) {
						console.log(res.data);
						uni.setStorageSync('userId', res.data.userId)
						uni.navigateTo({
						 		url: './binding',
								})
					}
				}).catch(err => {
				console.log(err);
				uni.showToast({
					title: '用户已注册,请登录', //后台返回的错误情况
					icon: 'none'
				})
				})
				
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
	.box{
		width: 600rpx;
		height: 300rpx;
		margin-left: 20rpx;
	}
	.up{
		width: 85%;
		margin-left: 20rpx;
		height: 50rpx;
		font-size: large;
	}
	.down-line{
		width: 1rpx;
		height: 50rpx;
		background-color: #BBBBBB;
	}
	.mid{
		width: 580rpx;
	}
	.mid image{
		width: 50rpx;
		height: 50rpx;
		margin: 40rpx 40rpx 20rpx 40rpx;
	}

	.item{
		border-bottom: 1rpx solid#BBBBBB;
		display: flex;
	}
	.yzm{
		color: #0B4A87;
		font-size: small;
		margin-top: 55rpx;
		width: 200rpx;
		
	}
   .bottom{
	   color: #1D610C;
	   margin-top: 30rpx;
   }
   .btn{
	   width: 500rpx;
	   height: 60rpx;
	   border-radius: 4rpx;
	   background-color: rgb(58,146,85);
	   box-shadow: 0px 2px 3px 0px rgba(93, 93, 93, 0.0);
	   color: #FFFFFF;
	   display: flex;
	   align-items: center;
	   justify-content: center;
	   margin-top: 300rpx;
	   margin-left: 50rpx;
   }
   
</style>
