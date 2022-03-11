<template>
	<view>
		<view class="content">
			<text class="large-title">{{name}}</text>
			<text :class="[typeId===0?'sign-normal':'sign-special']">{{type}}</text>
		</view>
		<!-- 三餐表单 -->
		<view class="choose" v-if="name=='早餐'||name=='午餐'||name=='晚餐'">
			<input placeholder="请填写餐食内容,多项之间使用逗号分隔,如  豆浆 , 油条  "  v-model="value" type="textarea" placeholder-style="color:#AAAAAA"/>
			<view class="images">
				<image src="../../../static/images/upload.png" />
				<text>(照片选填)</text>
			</view>
			<view class="button" @click="submit()">
				<text>提交任务</text>
			</view>
		</view>

		<!-- 身体数据表单 -->
		<view class="choose" v-if="name=='测量身体数据'&&typeId===0">
			<view class="item">
				<view class="box"/>
				<text>呼吸：</text>
				<input type="text" placeholder-style="color:#ababab;text-align:right"
					style="text-align: right;position: absolute;right: 50rpx;" placeholder="例:15次/min"  />
			</view>
			<view class="item">
				<view class="box"/>
				<text>脉搏：</text>
				<input type="text" placeholder-style="color:#ababab;text-align:right"
					style="text-align: right;position: absolute;right: 50rpx;" placeholder="例:15次/min"  />
			</view><view class="item">
			<view class="box"/>
				<text>血压：</text>
				<input type="text" placeholder-style="color:#ababab;text-align:right"
					style="text-align: right;position: absolute;right: 50rpx;" placeholder="例:120/120"  />
			</view>
			<view class="item">
				<view class="box"/>
				<text>饮食：</text>
				<input type="text" placeholder-style="color:#ababab;text-align:right"
					style="text-align: right;position: absolute;right: 50rpx;" placeholder="例:220g"  />
			</view>
			<view class="item">
				<view class="box"/>
				<text>排尿：</text>
				<input type="text" placeholder-style="color:#ababab;text-align:right"
					style="text-align: right;position: absolute;right: 50rpx;" placeholder="例:正常"  />
			</view>
			<view class="item">
				<view class="box"/>
				<text>排便：</text>
				<input type="text" placeholder-style="color:#ababab;text-align:right"
					style="text-align: right;position: absolute;right: 50rpx;" placeholder="例:正常"  />
			</view>
			
			<view class="images">
				<image src="../../../static/images/upload.png" />
				<text>(照片选填)</text>
			</view>
			<view class="button" @click="submit()">
				<text>提交任务</text>
			</view>
		</view>
		
		<!-- 自定义任务 -->
		<view class="choose" v-if="typeId==1">
			<input placeholder="请填写任务内容"  v-model="value" type="textarea" placeholder-style="color:#AAAAAA"/>
			<view class="images">
				<image src="../../../static/images/upload.png" />
				<text>(照片选填)</text>
			</view>
			<view class="button" @click="submit()">
				<text>提交任务</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// sign: ["慢病管理套餐"],
				name:'测量身体数据',
				type:'日常任务',
				typeId:0//0为日常任务，1为自定义任务
			}
		},
		onLoad() {

		},
		methods: {
			submit(){
				uni.switchTab({
					url:"../photo"
				})
			}

		}
	}
</script>

<style lang="less">
	page {
		background-color: #f7f8f9;
	}

	.content {
		display: flex;
		background-color: #ffffff;
		padding: 40rpx;
	}
	.large-title{
		font-size: 38rpx;
	}
	.check {
		margin-top: 60rpx;
		font-size: small;
	}

	.button {
		width: 700rpx;
		height: 75rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(39, 172, 163);
		position: absolute;
		bottom: 100rpx;
		margin-left: 7rpx;
	}



	.title1 {
		font-size: small;
		margin-top: 30rpx;


	}

	.images {
		width: 700rpx;
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
		align-items: center;
		color: #AAAAAA;
		image {
			margin-top: 30rpx;
			width: 150rpx;
			height: 150rpx;
			margin-right: 20rpx;
		}
	}

	.choose {
		margin-top: 20rpx;
		width: 730rpx;
		padding: 20rpx;
		background-color: #ffffff;
		height: 1100rpx;
	}

	.sign {
		display: flex;
		margin: 15rpx 0rpx 10rpx 10rpx;

		text {
			padding: 20rpx;
			background-color: rgb(240, 240, 240);


		}
	}

	.item {
		display: flex;
		width: 750rpx;
		align-items: center;
		margin-left: 10rpx;
		margin-top: 30rpx;
		font-size: 34rpx;
		.box{
			height: 50rpx;
			width: 20rpx;
			background-color: rgb(39,172,163);
			margin-right: 15rpx;
		}
	}
	
	
	
	.sign-normal{
		background-color: rgb(252,215,158);
		padding: 5rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 30rpx;
		font-size: small;
		border-radius: 5rpx;
		color: #ffffff;
		position: absolute;
		right: 45rpx;
	}
	.sign-special{
		background-color: rgb(250,182,182);
		padding: 5rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 30rpx;
		font-size: small;
		border-radius: 5rpx;
		color: #ffffff;
		position: absolute;
		right: 45rpx;
	}
</style>
