<template>
	<view class="content">
		<view class="title">
			<view>
				开启智能疗养新时代
			</view>
			<text>请填写老人资料</text>
		</view>
		<view class="form">
			<view class="item">
				<text>老人照片</text>
				<image class="icon1" src="../../../static/images/right.png" />
			</view>
			<view class="item">
				<text>老人姓名</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 250rpx;" placeholder="请输入" v-model="name" />
			</view>
			<view class="item">
				<text>证件类型</text>
				<picker  mode="selector" :range="type_list" range-key="name" @change="titlePicker2">
					<view class="picker-title">
						{{cardType}}
						<image class="icon2" src="../../../static/images/down.png" />
					</view>
					
				</picker>
			</view>
			<view class="item">
				<text>证件号码</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 250rpx;" placeholder="请输入" v-model="idCard" />
			</view>
			<view class="item">
				<text>期望疗养院关键字</text>
				<input type="text" placeholder-style="color:#898989;text-align:right"
					style="text-align: right;margin-left: 150rpx;" placeholder="例：绿化+单人间" v-model="keyWord" />
			</view>
			<view class="item">
				<text>健康等级</text>
				<picker  mode="selector" :range="title_list" range-key="name" @change="titlePicker">
					<view class="picker-title">
						{{title}}
						<image class="icon2" src="../../../static/images/down.png" />
					</view>
					
				</picker>
			</view>
			<view class="item">
				<text>是否是第一联系人</text>
				<picker  mode="selector" :range="whether_list" range-key="name" @change="titlePicker1">
					<view class="picker-title">
						{{whether}}
						<image class="icon2" src="../../../static/images/down.png" />
					</view>
					
				</picker>
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
		<view class="pass">
			跳过
		</view>
		<view class="btn" @click="bindClick()">
			<text>绑定</text>
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
				cardType:'请选择',
				keyWord:'',
				honor: false,
				title: '请选择',
				whether: '请选择',
				title_list: [{
					id: 0,
					name: '大体健康'
				},
				 {
				 	id: 1,
				 	name: '恢复健康'
				 },
				 {
				 	id: 3,
				 	name: '基本自理'
				 },
				 {
				 	id: 3,
				 	name: '丧失自理'
				 }],
				 whether_list: [{
				 	id: 0,
				 	name: '不是'
				 },
				  {
				  	id: 1,
				  	name: '是'
				  }],
				  type_list: [{
				  	id: 0,
				  	name: '居民身份证'
				  }]
			}
		},
		onLoad() {
				
		},
		methods: {
			titlePicker(e) {
				this.title = this.title_list[e.target.value].name
				console.log(this.title_list[e.target.value].id) //获取id
			},
			titlePicker1(e) {
				this.whether = this.whether_list[e.target.value].name
				this.isFirstContact = this.whether_list[e.target.value].id
				console.log(this.whether_list[e.target.value].id) //获取id
			},
			titlePicker2(e) {
				this.cardType = this.type_list[e.target.value].name
				console.log(this.whether_list[e.target.value].id) //获取id
			},
			bindClick(){
				console.log(this.title,this.cardType,
				this.keyWord,this.isFirstContact,this.idCard,this.name,uni.getStorageSync('userId'))
				this.$api.login.bindingOld({
					baseHealth:this.title,
					cardType:this.cardType,
					hopeSan:this.keyWord,
					isFirstContact:this.isFirstContact,
					oldCardId:this.idCard,
					oldName:this.name,
					userId:uni.getStorageSync('userId'),
					}
				).then(res => {
					console.log(res)
					if (res.msg == '成功' ) {
						console.log(res)
					}
				}).catch(err => {
				console.log(err);
				uni.showToast({
					title: err.msg, //后台返回的错误情况
					icon: 'none'
				})
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f7f8f9;
	}
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
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

	 	.old {
		margin-top: 90rpx;
		display: flex;
	}
	.picker-title{
		color: #898989;
		border: 1rpx solid#BBBBBB;
		padding: 10rpx;
		width: 190rpx;
		display: flex;
		position: absolute;
		right: 35rpx;
		border-radius: 8rpx;
		margin-top: -30rpx;
		
	} 
	.icon1 {
		width: 20rpx;
		height: 20rpx;
		margin-left: 550rpx;
	}

	.icon2{
		width: 20rpx;
		height: 20rpx;
		position: absolute;
		right: 15rpx;
		margin-top: 10rpx;
		/* top: 560rpx; */
	}
	.pass {
		color: #0B4A87;
		margin-top: 30rpx;
		margin-left: 600rpx;
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
		margin-top: 100rpx;
		margin-bottom: 115rpx;
	}
</style>
