<template>
	<view>
		<!-- 家属端 -->
		<view class="content" v-if="change===0">
			<view class="up">
				<view class="title">
					<text class="elder">查看老人</text>
					<text class="all">查看全部</text>
					<image class="icon" src="../../static/images/mine3.png" />
				</view>
				<scroll-view scroll-x="true" class="scroll">
					<view style="display: flex;">
						<view class="item" v-for="item in list" :key="item.id" @click="gotoDetail()">
							<view class="box">
								<image :src="item.imgUrl" />
							</view>
							<text class="all">{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="mid">
				<image src="../../static/images/tv.png" />
				<text>实时监控</text>
				<view class="wrap">
					<u-switch v-model="value1" activeColor="#5ac725" size="30"  ></u-switch>
				</view>
			</view>
			<view class="down">
				<view class="down-item" v-for="item in downList" :key="item.id" @click="gotoDetail()">
					<image :src="item.imgUrl" />
					<text class="item-up">{{item.name}}</text>
					<text class="item-down">{{item.add}}</text>
				</view>
			</view>

		</view>

		<!-- 护工端 -->
		<view class="content" v-if="change===1">
			<view class="color">
				<picker mode="date" :value="date"  @change="bindDateChange">
					<view class="top">
						<text>{{date}}</text>
						<image class="icon" src="../../static/images/down1.png" />
					</view>  
				</picker>
				<view class="people">
					<text>选择老人：</text>
					<picker mode="selector" :range="title_list" range-key="name" @change="titlePicker">
						<view class="top">
							<text class="name">{{title}}</text>
							<image class="icon" src="../../static/images/down1.png" />
						</view>
					</picker>
				</view>
			</view>
			<view class="report">
				<view class="report-item" v-for="item in reportList" :key="item.id" @click="projectDetail()">
					<view class="report-item-up">
						<image :src="item.iconUrl" />
						<text>{{item.name}}</text>
						<text :class="[item.type=='每日任务' ?'sign-normal':'sign-special']">{{item.type}}</text>
						<image class="finish" src="../../static/images/finish.png" v-if="item.finish"/>
					</view>
					<text class="click">截止时间：{{item.deadTime}}</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: 0,
						imgUrl: '../../static/images/old.png',
						name: '钱玉'
					},
					{
						id: 1,
						imgUrl: '../../static/images/old1.png',
						name: '郑西华'
					},
				],
				downList: [{
						id: 0,
						imgUrl: '../../static/images/jk2.jpg',
						name: '钱玉',
						add: '1楼101'
					},
					{
						id: 1,
						imgUrl: '../../static/images/jk1.jpg',
						name: '郑西华',
						add: '1楼102'
					}
				],
				change: 0, //0为家属端，1为护工端，
				title_list: [{
						id: 0,
						name: '钱玉'
					},
					{
						id: 1,
						name: '郑西华'
					}],
				title: '郑西华',
				date:'2021年12月5日 周五',
				reportList:[
				
				{
					id:2,
					name:'晚餐',
					iconUrl:'../../static/images/wan.png',
					finish:0,
					deadTime:'19：30',
					type:'每日任务'
				},
				{
					id:3,
					name:'测量身体数据',
					iconUrl:'../../static/images/task.png',
					finish:0,
					deadTime:'15：30',
					type:'每日任务'
				},
				
				{
					id:5,
					name:'晚饭后散步',
					iconUrl:'../../static/images/run.png',
					finish:0,
					deadTime:'20：30',
					type:'自定义任务'
				},
				{
					id:4,
					name:'食量状况',
					iconUrl:'../../static/images/task.png',
					finish:1,
					deadTime:'11：30',
					type:'自定义任务'
				},
				{
					id:0,
					name:'早餐',
					iconUrl:'../../static/images/zao.png',
					finish:1,
					deadTime:'10：30',
					type:'每日任务'
				},
				{
					id:1,
					name:'中餐',
					iconUrl:'../../static/images/zhong.png',
					finish:1,
					deadTime:'13：30',
					type:'每日任务'
				},],
				value1: true,
			}
		},
		onLoad() {
			//控制tab
			this.change = uni.getStorageSync('change')
			console.log(this.change)
			if (this.change === 1) {
				uni.setTabBarItem({
					index: 1,
					text: '任务',
					iconPath: 'static/images/task5.png',
					selectedIconPath: 'static/images/task4.png'
				})
				uni.setNavigationBarTitle({
					title: '任务'
				})
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#27ACA3',
					animation: {
						duration: 400,
						timingFunc: 'easeIn'
					}
				})
			}
			//获取数据
			// this.getOldList()
			
			
		},
		methods: {
			gotoDetail() {
				uni.navigateTo({
					url: 'photoDetail'
				})
			},
			titlePicker(e) {
				this.title = this.title_list[e.target.value].name
				console.log(this.title_list[e.target.value].id) //获取id
			},
			bindDateChange(e) {
				this.date = e.target.value;
				
				// this.getData();
			},
			projectDetail(){
				uni.navigateTo({
					url:'project/doProject'
				})
			},
			// change(e) {
			// 	console.log('change', e);
			// },
			//接口
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
			// getOldList(){
			// 	this.$api.login.getOldList({
			// 		userId:uni.getStorageSync('userId'),
					
			// 		}
			// 	).then(res => {
			// 		if (res.msg == '成功' ) {
			// 			console.log(res.data);
			// 		}
			// 	}).catch(err => {
				
			// 	})
			// }
		},
		
	}
</script>

<style lang="less">
	page {
		background-color: #f7f8f9;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.up {
		width: 750rpx;
		height: 230rpx;
		background-color: #ffffff;
		padding: 10rpx;
		border: 1rpx solid#dededf;
	}

	.icon {
		width: 25rpx;
		height: 25rpx;

	}

	.elder {
		color: #333333;
		font-size: 30rpx;
		font-weight: 550;
		margin-right: 450rpx;


	}

	.all {
		color: #898989;
		font-weight: 500;
		font-size: 27rpx;
		margin-right: 8rpx;

	}



	.scroll {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		display: flex;
		flex-direction: row;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 150rpx;
			height: 165rpx;
			justify-content: space-around;
		}
	}

	.box {
		display: inline-block;
		width: 100rpx;
		height: 100rpx;
		border: 6rpx solid #27ACA3;
		border-radius: 50%;
		margin-top: 20rpx;
		margin-right: 35rpx;
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.box image {
		width: 85rpx;
		height: 85rpx;
		border-radius: 50%;
	}

	.box:last-child {
		margin-right: 0;
	}

	.mid {
		width: 700rpx;
		display: flex;
		margin-top: 40rpx;
		font-weight: 550;

		image {
			width: 38rpx;
			height: 38rpx;
			margin-right: 20rpx;
		}
	}

	.down {
		width: 740rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 20rpx;

	}

	.down-item {
		width: 355rpx;
		height: 320rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: 1rpx solid#BBBBBB;
		display: flex;
		flex-direction: column;
		margin-top: 10rpx;

		image {
			width: 352rpx;
			height: 241rpx;
		}
	}

	.item-up {
		margin: 5rpx 0rpx 5rpx 10rpx;
	}

	.item-down {
		text-align: right;
		margin-right: 8rpx;
		color: #898989;
		margin-bottom: 5rpx;
	}

	.color {
		width: 750rpx;
		height: 200rpx;
		background-color: rgb(39, 172, 163);
		display: flex;
		flex-direction: column;
		color: #ffffff;
		padding-left: 20rpx;

		.people {
			display: flex;
			align-items: center;
			margin-top: 10rpx;
			margin-left: 400rpx;
		}

		image {
			width: 25rpx;
			height: 25rpx;
			margin-left: 10rpx;
		}
	}

	.top {
		display: flex;
		align-items: center;
		font-size: 32rpx;
	
	}
	.name{
		color: #FFFFFF;
		font-size: 38rpx;
		margin-left: 10rpx;
	}
	.report{
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.report-item{
			width: 650rpx;
			height: 190rpx;
			border-radius: 15rpx;
			box-shadow: 0px 2px 10px 0px #C3B7B7;
			background-color: #ffffff;
			margin: -80rpx 0rpx 125rpx 0rpx;
			padding: 25rpx;
			
			.report-item-up{
				border-bottom: 1rpx solid#b0b0b0;
				padding-bottom: 25rpx;
				display: flex;
				align-items: center;
				margin-bottom: 25rpx;
				
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
				}
				.finish{
					width: 130rpx;
					height: 130rpx;
					position: absolute;
					right: 100rpx;
					z-index: 99;
					margin-top: 70rpx;
				}
			}
			image{
				width: 35rpx;
				height: 35rpx;
				margin-right: 10rpx;
			}
			.click{
				color: #AAAAAA;
				
			}
		}
	}
	.wrap{
		position: absolute;
		right: 30rpx;
	}
</style>
