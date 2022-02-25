<template>
	<view>

		<!-- 家属端 -->
		<view class="content" v-if="change===0">
			<view class="top">
				<view class="top-up">
					<view class="address">临安
						<image class="down" src="../../static/images/down1.png" />
					</view>
					<view class="search">
						<image class="search-icon" src="../../static/images/search.png" />
						<input type="text" value="搜索" />
					</view>
					<image class="plus-icon" src="../../static/images/plus.png" />
				</view>
				<image class="top-image" src="../../static/images/index15.png" />
			</view>
			<!-- 四个模块 -->
			<view class="mid">
				<view class="up">
					<view class="item" @click="gotoJiaRen()">
						<image src="../../static/images/index5.png" />
						<text>家人健康</text>
					</view>
					<view class="item" @click="gotoHuLian()">
						<image src="../../static/images/index6.png" />
						<text>互联疗养</text>
					</view>
					<view class="item" @click="gotoHuGong()">
						<image src="../../static/images/index3.png" />
						<text>护工交流</text>
					</view>
					<view class="item">
						<image src="../../static/images/index4.png" />
						<text>易趣活动</text>
					</view>
				</view>
				<!-- 导航栏 -->
				<view class="tabs">
					<view class="tabs-item" @click="gotoHouse()">
						<image src="../../static/images/index8.png" />
						<text>疗养院</text>
					</view>
					<view class="tabs-item" @click="gotoBook()">
						<image src="../../static/images/index12.png" />
						<text>预约申请</text>
					</view>
					<view class="tabs-item" @click="gotoCost()">
						<image src="../../static/images/index10.png" />
						<text>花费明细</text>
					</view>
					<view class="tabs-item" @click="gotoRank()">
						<image src="../../static/images/index14.png" />
						<text>金牌护工</text>
					</view>
					<view class="tabs-item">
						<image src="../../static/images/index13.png" />
						<text>每日任务</text>
					</view>
					<view class="tabs-item">
						<image src="../../static/images/index7.png" />
						<text>实时视频</text>
					</view>
					<view class="tabs-item">
						<image src="../../static/images/index9.png" />
						<text>聊一聊</text>
					</view>
					<view class="tabs-item" @click="gotoPolice()">
						<image src="../../static/images/index11.png" />
						<text>立即报警</text>
					</view>
				</view>
				<!-- 栅格 -->
				<view class="line-row" />
				<view class="box">
					<view class="line-column" />
					<view class="line-column" />
					<view class="line-column" />
				</view>
				<!-- 在线咨询 -->
				<view class="doctor">
					<image class="doc" src="../../static/images/doctor.png" />
					<view class="word">
						<text class="title">老人健康问题在线咨询</text>
						<text>名医在线解答疑惑</text>
					</view>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<!-- 轮播图 -->
				<view class="lunbo">
					<swiper class="banner-container" autoplay="true" circular="true" interval="3000" duration="1000"
						previous-margin="20rpx" next-margin="20rpx">
						<block v-for="(item,index) in swipers" :key="index">
							<swiper-item class="banner-item">
								<view class="banner-box">
									<image class="banner-img" :src="item.imgUrl" />
								</view>
							</swiper-item>
						</block>
					</swiper>
				</view>
				<!-- 精彩推荐 -->
				<view class="recommend">
					<text>精彩推荐</text>
					<view class="wrap">
						<view class="pic">
							<image src="../../static/images/reco.png" />
							<text>核酸模块</text>
						</view>
						<view class="pic">
							<image src="../../static/images/reco2.png" />
							<text>保险模块</text>
						</view>
						<view class="pic">
							<image src="../../static/images/reco3.png" />
							<text>健康模块</text>
						</view>
					
					</view>
				</view>
			</view>
		</view>

		<!-- 护工端 -->
		<view class="content"  v-if="change===1">
			<view class="top">
				<view class="top-up">
					<view class="address">临安
						<image class="down" src="../../static/images/down1.png" />
					</view>
					<view class="search">
						<image class="search-icon" src="../../static/images/search.png" />
						<input type="text" value="搜索" />
					</view>
					<image class="plus-icon" src="../../static/images/plus.png" />
				</view>
				<image class="top-image" src="../../static/images/index15.png" />
			</view>
			<!-- 四个模块 -->
			<view class="mid">
				<view class="up">
					<view class="item" @click="gotoJiaRen()">
						<image src="../../static/images/index5.png" />
						<text>互助健康</text>
					</view>
					<view class="item" @click="gotoHuLian()">
						<image src="../../static/images/index6.png" />
						<text>互联疗养</text>
					</view>
					<view class="item" @click="gotoHuGong()">
						<image src="../../static/images/index3.png" />
						<text>交流沟通</text>
					</view>
					<view class="item">
						<image src="../../static/images/index4.png" />
						<text>易趣活动</text>
					</view>
				</view>
				<!-- 导航栏 -->
				<view class="tabs">
					<view class="tabs-item" @click="gotoHouse()">
						<image src="../../static/images/index8.png" />
						<text>疗养院</text>
					</view>
					<view class="tabs-item" @click="gotoBook()">
						<image src="../../static/images/index12.png" />
						<text>申请审批</text>
					</view>
					<view class="tabs-item" @click="gotoCost()">
						<image src="../../static/images/index10.png" />
						<text>收费明细</text>
					</view>
					<view class="tabs-item" >
						<image src="../../static/images/index14.png" />
						<text>反馈建设</text>
					</view>
					<view class="tabs-item">
						<image src="../../static/images/index13.png" />
						<text>每日任务</text>
					</view>
					<view class="tabs-item" @click="gotoPolice()">
						<image src="../../static/images/index7.png" /> 
						<text>立即报警</text>
					</view>
					<view class="tabs-item" @click="gotoRank()">
						<image src="../../static/images/index9.png" />
						<text>金牌护工榜</text>
					</view>
					<view class="tabs-item">
						<image src="../../static/images/index11.png" />
						<text>历史任务</text>
					</view>
				</view>
				<!-- 栅格 -->
				<view class="line-row" />
				<view class="box">
					<view class="line-column" />
					<view class="line-column" />
					<view class="line-column" />
				</view>
				<!-- 在线咨询 -->
				<view class="doctor">
					<image class="doc" src="../../static/images/doctor.png" />
					<view class="word">
						<text class="title">老人健康问题在线咨询</text>
						<text>名医在线解答疑惑</text>
					</view>
					<image class="right" src="../../static/images/mine3.png" />
				</view>
				<!-- 轮播图 -->
				<view class="lunbo">
					<swiper class="banner-container" autoplay="true" circular="true" interval="3000" duration="1000"
						previous-margin="20rpx" next-margin="20rpx">
						<block v-for="(item,index) in swipers" :key="index">
							<swiper-item class="banner-item">
								<view class="banner-box">
									<image class="banner-img" :src="item.imgUrl" />
								</view>
							</swiper-item>
						</block>
					</swiper>
				</view>
				<!-- 精彩推荐 -->
				<view class="recommend">
					<text>精彩推荐</text>
					<view class="wrap">
						<view class="pic">
							<image src="../../static/images/reco.png" />
							<text>核酸模块</text>
						</view>
						<view class="pic">
							<image src="../../static/images/reco2.png" />
							<text>保险模块</text>
						</view>
						<view class="pic">
							<image src="../../static/images/reco3.png" />
							<text>健康模块</text>
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
				swipers: [{
						id: 0,
						imgUrl: '../../static/images/liao3.png'
					},
					{
						id: 1,
						imgUrl: '../../static/images/liao2.png'
					},
					{
						id: 2,
						imgUrl: '../../static/images/liao1.png'
					}
				],
				change: 1, //0为家属端，1为护工端
                
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
			}else if(this.change===0){
				uni.setTabBarItem({
				  index: 1,
				  text: '监控',
				  iconPath: 'static/images/photo1.png',
				  selectedIconPath: 'static/images/new1.png'
				})
			}
			
		},
		methods: {
			gotoJiaRen() {
				uni.navigateTo({
					url: 'jiaren/jiaren'
				})
			},
			gotoHouse() {
				uni.navigateTo({
					url: './house/house'
				})
			},
			gotoBook() {
				uni.navigateTo({
					url: './book/bookType'
				})
			},
			gotoHuLian() {
				uni.navigateTo({
					url: './hulian/hulian'
				})
			},
			gotoHuGong() {
				uni.navigateTo({
					url: './hugong/hugong'
				})
			},
			gotoRank() {
				uni.navigateTo({
					url: './rank/rank'
				})
			},
			gotoCost(){
				uni.navigateTo({
					url: './cost/cost'
				})
			},
			gotoPolice(){
				console.log('test')
				uni.navigateTo({
					url:'police/policeType/policeType'
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

	.top {
		width: 750rpx;
		height: 280rpx;
		background-color: rgb(39, 172, 163);
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #ffffff;
		z-index: -2;
	}

	.top-up {
		display: flex;
		width: 750rpx;
		padding-left: 30rpx;
		margin-bottom: 25rpx;
	}

	.address {
		margin-top: 10rpx;
	}

	.top-image {
		width: 720rpx;
		height: 250rpx;
		z-index: -1;
	}

	.search {
		width: 480rpx;
		height: 55rpx;
		border: 1rpx solid#ffffff;
		display: flex;
		padding: 5rpx;
		border-radius: 50rpx;
		align-items: center;
		margin-left: 40rpx;

	}

	.search-icon {
		width: 35rpx;
		height: 30rpx;
		margin: 0rpx 10rpx 0rpx 10rpx;
	}

	.plus-icon {
		width: 45rpx;
		height: 45rpx;
		margin: 5rpx 10rpx 0rpx 50rpx;


	}

	.down {
		width: 20rpx;
		height: 20rpx;
		margin-left: 8rpx;
	}

	.mid {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.up {
		width: 660rpx;
		height: 180rpx;
		background-color: #ffffff;
		border-radius: 25rpx;
		box-shadow: 0px 2px 6px 0px #959595;
		margin-top: -100rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 40rpx 0rpx 0rpx 40rpx;
	}

	.item {
		width: 150rpx;
		height: 180rpx;
		font-size: 27rpx;
		display: flex;
		flex-direction: column;

	}

	.item image {
		width: 100rpx;
		height: 100rpx;
	}

	.tabs {
		
		width: 700rpx;
		height: 400rpx;
		background-color: #ffffff;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		
		
	}

	.tabs-item {
		width: 160rpx;
		height: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 25rpx;
		align-items: center;
		

	}

	.tabs-item image {
		width: 50rpx;
		height: 50rpx;
		
	}

	.line-row {
		width: 750rpx;
		height: 1rpx;
		background-color: #F0F0F0;
		margin-top: -245rpx;
		
	}

	.box {
		display: flex;
		width: 380rpx;
		justify-content: space-between;
	}

	.line-column {
		height: 330rpx;
		width: 1rpx;
		background-color: #f0f0f0;
		margin-top: -160rpx;
		
	}

	.doctor {
		width: 680rpx;
		display: flex;
		margin-top: 50rpx;
	}

	.doc {
		width: 100rpx;
		height: 100rpx;

	}

	.word {
		display: flex;
		flex-direction: column;
		font-size: 27rpx;
		color: #878787;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.title {
		font-weight: 600;
		font-size: 28rpx;
		color: #333333;
		margin-bottom: 10rpx;
	}

	.right {
		width: 23rpx;
		height: 23rpx;
		margin: 40rpx 0rpx 0rpx 250rpx;
	}

	.banner-container {
		width: 100%;
		height: 250rpx;

	}

	.banner-item {
		display: flex;
		justify-content: center;
	}

	.banner-box {
		width: 97%;
		/* 控制两张图片的间距 */
		height: 100%;
	}

	.banner-img {
		width: 690rpx;
		height: 250rpx;
		border-radius: 20px;
	}

	/* .indicator-dots {
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.indicator-dots-item {
		background-color: $u-tips-color;
		height: 6px;
		width: 6px;
		border-radius: 10px;
		margin: 0 3px;
	}
	
	.indicator-dots-active {
		background-color: $u-type-primary;
	} */
	.lunbo {
		margin-top: 50rpx;
		width: 750rpx;
		background-color: #ffffff;
	}

	.recommend {
		margin-top: 30rpx;
		width: 700rpx;
		box-shadow: 0px 0px 4px 1px #d1d1d1;
		border-radius: 15rpx;
		font-weight: 600;
		padding: 15rpx;
		margin-bottom: 20rpx;
	}
	.wrap{
		display: flex;
	}
	.pic{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.recommend image {
		width: 200rpx;
		height: 200rpx;
		margin-left: 18rpx;
		margin-top: 10rpx;
		border: 1rpx solid#c6c6c6;
	}

	.recommend text {
		margin-left: 18rpx;
	}
	
	.tabbar {
		height: 100rpx;
		width: 100%;
	}
	
</style>
