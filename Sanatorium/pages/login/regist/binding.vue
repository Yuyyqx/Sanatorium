<template>
	<view class="content">
		<view class="title">
			<view>
				开启智能疗养新时代
			</view>
			<text>请如实填写资料</text>
		</view>
		<view class="form">
			<view class="item">
				<text>头像</text>
				<image class="icon1" src="../../../static/images/right.png" />
			</view>
			<view class="item">
				<text>姓名</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 318rpx;" placeholder="请输入" v-model="name" />
			</view>
			<view class="item">
				<text>身份证号</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 260rpx;" placeholder="请输入" v-model="idCard" />
			</view>
			<view class="item">
				<text>手机号</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 288rpx;" placeholder="请输入" v-model="phone" />
			</view>
<!-- 			<view class="old">
				<text>绑定老人</text>
				<picker  mode="selector" :range="title_list" range-key="name" @change="titlePicker">
					<view class="picker-title">
						{{title}}
						<image class="icon2" src="../../../static/images/down.png" />
					</view>
					
				</picker>
			</view> -->
			
		</view>
		<view class="btn" @click="oldClick()">
			<text>注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				idCard: '',
				phone: '',
				honor: false,
				title: '点此选择老人进行绑定',
				title_list: [{
						id: 0,
						name: '老人尚未入住'
					},
				],
				userId:'2161798663'
			}
		},
		onLoad() {
		
		},
		methods: {
			titlePicker(e) {
				this.title = this.title_list[e.target.value].name
				console.log(this.title_list[e.target.value].id) //获取id
			},
			oldClick(){
				//userId:2161798663
				//judgeOldNumber
				this.userId= uni.getSystemInfoSync('userId');
				this.$api.login.judgeOldNumber({
					userId:this.userId,
					}
				).then(res => {
					console.log(res)
					if (res.msg == '成功' ) {
						uni.navigateTo({
						 		url: './bindingOld',
								})
					}else{
						uni.showToast({
							title: '跳转失败', //后台返回的错误情况
							icon: 'none'
						})
					}
				}).catch(err => {
				console.log(err);
				uni.showToast({
					title: '跳转失败', //后台返回的错误情况
					icon: 'none'
				})
				})
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgb(247, 248, 249);
	}

	.title {
		font-size: large;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.title text {
		font-size: small;
		color: #5F5E5E;
		margin-top: 10rpx;
		margin-left: 65rpx;
		margin-bottom: 30rpx;
	}

	.form {
		width: 750rpx;
		height: 800rpx;
		background-color: #FFFFFF;
		padding: 0rpx 30rpx 0rpx 30rpx;
	}

	.item {
		border-bottom: 2rpx solid#e5e5e5;
		height: 100rpx;
		display: flex;
		align-items: center;
	}

/* 	.old {
		margin-top: 90rpx;
		display: flex;
	}
	.picker-title{
		color: #898989;
		border: 1rpx solid#BBBBBB;
		padding: 10rpx;
		width: 500rpx;
		display: flex;
		margin-left: 75rpx;
		border-radius: 8rpx;
		margin-top: -10rpx;
	} */
	.icon1{
		width: 20rpx;
		height: 20rpx;
		margin-left: 600rpx;
	}
	.icon2{
		width: 20rpx;
		height: 20rpx;
/* 		margin-left: 160rpx;
		margin-top: 10rpx; */
		position: absolute;
		right: 50rpx;
		top: 625rpx;
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
		   margin-top: 100rpx;
		   margin-bottom: 115rpx;
	}
</style>
