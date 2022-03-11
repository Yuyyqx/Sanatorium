<template>
	<view class="content">
		<text class="title">立即报警</text>
		<view class="table">
			<view class="item">
				<text>报警人</text>
				<input type="text" placeholder="护工1" placeholder-style="color:#BBBBBB" disabled="true" />
			</view>
			<view class="item">
				<text>报警对象</text>
				<view class="card">
					<text style="color:#BBBBBB">{{people}}</text>
					<picker mode="selector" :range="people_list" range-key="name" @change="peoplePicker">
						<text class="choose">选择</text>
					</picker>
				</view>
			</view>
			<view class="item">
				<text>报警类型</text>
				<view class="card">
					<text style="color:#BBBBBB">{{type}}</text>
					<picker mode="selector" :range="type_list" range-key="name" @change="typePicker">
						<text class="choose">选择</text>
					</picker>
				</view>
			</view>
			<view class="item1">
				<text>求助对象</text>
				 <u-radio-group
				    v-model="radiovalue1"
				    placement="column"
				    @change="groupChange"
				  >
				    <u-radio
				      :customStyle="{marginBottom: '8px'}"
				      v-for="(item, index) in radiolist1"
				      :key="index"
				      :label="item.name"
				      :name="item.name"
				      @change="radioChange"
				    >{{item.name}}
				    </u-radio>
				  </u-radio-group>
				
			</view>
			<view class="item1">
				<text>报警时间</text>
				<view class="card">
					<text>{{time}}</text>
					<!-- <image src="../../../../static/images/house3.png" /> -->
				</view>
			</view>
			<view class="item">
				<text>报警内容</text>
				<input type="text" placeholder="请输入报警内容" placeholder-style="color:#BBBBBB" />
			</view>

			</view>
			<view class="check">
				<label>
					<checkbox /><text>我已阅读并同意拜访入院申请规则</text>
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
				status: 0,
				people_list: [{
						id: 0,
						name: '钱玉'
					},
					{
						id: 1,
						name: '郑西华'
					}
				],
				people: '钱玉',
				type_list: [{
						id: 0,
						name: '户外摔倒'
					},
					{
						id: 1,
						name: '室内摔倒'
					},
					{
						id: 2,
						name: '生命体征微弱'
					},
					{
						id: 3,
						name: '生命体征消失'
					}
				],
				type: '户外摔倒',
				radiovalue1: '',
				// 基本案列数据
				radiolist1: [{
						name: '疗养院',
						disabled: false
					},
					{
						name: '钱玉儿子',
						disabled: false
					},
					{
						name: '钱玉女儿',
						disabled: false
					}
				],
				time: ''
			}
		},
		onLoad() {
			this.getTime()
		},
		methods: {
			submit() {
				// this.$refs.uUpload.upload();
				uni.showToast({
					title:'已提交',
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
									that.status = 1
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
			typePicker(e) {
				this.type = this.type_list[e.target.value].name
				console.log(this.title_list[e.target.value].id) //获取id
				this.status = 1

			},
			peoplePicker(e) {
				this.people = this.people_list[e.target.value].name
				console.log(this.people_list[e.target.value].id) //获取id
				this.status = 1
			
			},
			checkboxChange(n) {
				console.log('change', n);
			},
		      groupChange(n) {
		        console.log('groupChange', n);
		      },
		      radioChange(n) {
		        console.log('radioChange', n);
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
	
			  this.time = year + '-' + month + '-' + day+ '-' + hour + ':' + minute + ':' + second;
			  
			  },
			
		}
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		font-size: medium;
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
		z-index: 100;
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
			position: absolute;
			right: 50rpx;
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

	.check {
		margin-top: 100rpx;
		font-size: small;
	}

	.button {
		width: 600rpx;
		height: 75rpx;
		margin: 40rpx 0rpx 10rpx 50rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(39, 172, 163);
	}
	input[type="checkbox"] {
	    -webkit-appearance: checkbox;
	}
	
	input[type="radio"] {
	    -webkit-appearance: radio;
	}
</style>
