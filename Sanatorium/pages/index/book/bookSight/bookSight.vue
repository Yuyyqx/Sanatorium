<template>
	<view class="content">
		<text class="title">拜访入院申请</text>
		<view class="table">
			<view class="item">
				<text>真实姓名</text>
				<input type="text" placeholder="请输入真实姓名" placeholder-style="color:#BBBBBB" />
			</view>
			<view class="item">
				<text>证件类型</text>
				<view class="card">
					<text>身份证</text>
					<text class="choose">选择</text>
				</view>
			</view>
			<view class="item1">
				<text>证件号码</text>
				<input type="text" placeholder="请输入证件号码" placeholder-style="color:#BBBBBB;" />
			</view>
			<view class="item1">
				<text>联系电话</text>
				<input type="text" placeholder="请输入联系电话" placeholder-style="color:#BBBBBB;" />
			</view>
			<view class="item1">
				<text>访问日期</text>
				<picker mode="date" :value="date"  @change="bindDateChange">
					<view class="top">
						<text>{{date}}</text>
						<image class="icon" src="../../../../static/images/house3.png" />
					</view>  
				</picker>
			</view>
			<view class="item1">
				<text>访问时间</text>
				<picker mode="time" :value="time"  @change="bindTimeChange">
					<view class="top">
						<text>{{time}}</text>
						<image class="icon" src="../../../../static/images/house3.png" />
					</view>  
				</picker>
			</view>
			<view class="item" style="height: auto;width: auto;">
				<text>核酸检测报告上传</text>
				<view style="display: flex;">
					<image class="upload" src="../../../../static/images/upload.png" @click="addInfo" />
					<view class="img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<image @click="delete1(index)" class="delete" src="../../../../static/images/delete.png" mode=""></image>
					</view>
				</view>

			</view>
			<view class="check">
				<label>
					<checkbox  /><text>我已阅读并同意拜访入院申请规则</text>
				</label>
			</view>
			<view class="button" @click="submit()">
				<text>提交</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				imgList1: [],
				status:0,
				date: '2021-11-26',
				time: '23：55'
				
			}
		},
		onLoad() {
			this.getTime()
		},
		methods: {
			submit() {
				// this.$refs.uUpload.upload();
				uni.showToast({
					title: '提交成功', //后台返回的错误情况
					icon:'none'
				})
			},
			addInfo() {
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: function(res) {
						const tempFilePaths = res.tempFilePaths
						that.image = tempFilePaths[0];
						console.log(JSON.stringify(res.tempFilePaths));
						// that.imgList.push(JSON.stringify(res.tempFilePaths))
						if (that.imgList.length != 0) {
							that.imgList = that.imgList.concat(res.tempFilePaths)
						} else {
							that.imgList = res.tempFilePaths
						}
						// 动态文件上传接口
						uni.uploadFile({
							url: that.$baseUrl.upload,
							filePath: that.image,
							name: 'file',
							success: (uploadFileRes) => {
								console.log(uploadFileRes)
								if (uploadFileRes.statusCode == 200) {
									console.log("添加成功")
									console.log(uploadFileRes.data);
									that.imgList1.push(JSON.parse(uploadFileRes.data).data)
									that.status=1
									console.log("imgList1:", that.imgList1)
								}
							},
							error(res1) {
								console.log("添加失败")
								uni.showToast({
									icon: 'none',
									title: '添加失败'
								})
							}
						});
					},
				});
			},
			//预览图片
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			//删除图片接口
			delete1(index) {
				console.log("delete:" + this.imgList1[index])
				var newImgList = this.imgList1[index].toString();
				// newImgList = JSON.stringify(this.imgList1[index]);
				console.log(newImgList)
				var imgList = this.imgList;
				imgList.splice(index, 1);

				this.setData({
					imgList: imgList
				})
			},
			getTime(){
			var date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
			minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
			second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			this.date = year + '-' + month + '-' + day
			this.time = hour + ':' + minute + ':' + second;
			
			},
			bindDateChange(e) {
			
				let that = this
			
				that.date = e.detail.value
			
			},
			bindTimeChange(e) {
			
				let that = this
			
				that.time = e.detail.value
			
			},

		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
	}

	.title {
		font-size: 36rpx;
	}

	.table {

		padding: 10rpx;
	}

	.item {
		width: 100%;
		height: 110rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 20rpx;
		font-size: small;

	}

	.item1 {
		width: 100%;
		height: 110rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 20rpx;
		font-size: small;
		border-bottom: 1rpx solid#e7e7e7;

		image {
			width: 30rpx;
			height: 30rpx;
			margin-left: 420rpx;
		}
	}

	.card {
		margin-top: -10rpx;
		display: flex;
		align-items: center;

		.choose {
			color: rgb(102, 163, 180);
			margin-left: 550rpx;
		}
	}


	.upload {
		width: 150rpx;
		height: 150rpx;
		margin-top: 30rpx;
	}


	.img {
		display: flex;
		
		margin-right: 10rpx;

		image {
			height: 150rpx;
			width: 150rpx;
			margin-top: 30rpx;
			margin-left: 20rpx;
			// margin-right: 27.77rpx;
		}

		.delete {
			width: 35rpx;
			height: 35rpx;
			margin-top: 25rpx;
			margin-left: 140rpx;
			position: absolute;
			display: block;
			z-index: 999;
		}
	}
	.check{
		margin-top: 60rpx;
		font-size: small;
	}
	.button{
		width: 600rpx;
		height: 75rpx;
		margin: 40rpx 0rpx 10rpx 50rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(39,172,163);
	}
	
	.icon{
		position:absolute;
		right: 50rpx;
	}
</style>
