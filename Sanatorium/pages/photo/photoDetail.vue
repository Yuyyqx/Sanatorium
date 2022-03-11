<template>
	<view class="content">
		  <view class="page-body">
		            <view class="page-section">
		                <video id="myVideo" src="http://tangbucker.oss-cn-hangzhou.aliyuncs.com/CareHome/Video/1645775922956774.mp4?Expires=1647923406&OSSAccessKeyId=LTAI5tNju6tSVYrD6ivwm9TZ&Signature=bkeXXINSUP6I7PpxObTT8uqoLJQ%3D" @error="videoErrorCallback" ></video>
		            </view>
		        </view>

	</view>
</template>

<script>
	export default {
	
		data() {
			return {
				 title: 'video',
				            src: '',
				            inputValue: '',     
							
 			}
			
		},
		onLoad() {

		},
	   onReady: function (res) {
	        this.videoContext = uni.createVideoContext('myVideo')
	    },
	    methods: {
	        bindInputBlur: function (e) {
	            this.inputValue = e.target.value
	        },
	        bindButtonTap: function () {
	            var that = this
	            uni.chooseVideo({
	                sourceType: ['album', 'camera'],
	                maxDuration: 60,
	                camera: ['front', 'back'],
	                success: function (res) {
	                    this.src = res.tempFilePath
	                }
	            })
	        },
	        bindSendDanmu: function () {
	            this.videoContext.sendDanmu({
	                text: this.inputValue,
	                color: this.getRandomColor()
	            })
	        },
	        videoErrorCallback: function (e) {
	            console.log('视频错误信息:')
	            console.log(e.target.errMsg)
	        },
	        getRandomColor: function () {
	            const rgb = []
	            for (let i = 0; i < 3; ++i) {
	                let color = Math.floor(Math.random() * 256).toString(16)
	                color = color.length == 1 ? '0' + color : color
	                rgb.push(color)
	            }
	            return '#' + rgb.join('')
	        },

	},
	}
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.page video {
		width: 750rpx;
	}
.item-num {}

.item-num .upload-img {
    padding: 40rpx 40rpx 40rpx 30rpx;
}

.item-num .upload-img .q-image-wrap {
    display: flex;
    /* height: 500rpx; */
    flex-wrap: wrap;
}

.item-num .upload-img .q-image-wrap .item {
    position: relative;
    height: 200rpx;
    width: 200rpx;
    margin-right: 20rpx;
    margin-bottom: 20rpx;
}

.item-num .upload-img .q-image-wrap .item .q-image {
    height: 200rpx;
    width: 200rpx;
}

.item-num .upload-img .q-image-wrap .item .q-image-remover {
    width: 0;
    height: 0;
    border-top: 66rpx solid #bfde85;
    border-left: 66rpx solid transparent;
    position: absolute;
    top: 0;
    right: 0;
}

/* .item-num .upload-img .q-image-wrap .item .q-image-remover text{
    width: 30rpx;
    display: block;
    height: 30rpx;
    color: #FFFFFF;
    text-align: center;
    line-height: 30rpx;
    font-size: 30rpx;
    border-radius: 20rpx;
    background-color: #bfde85;
    position: absolute;
    top: -60rpx;
    right: 0;
} */

.item-num .upload-img .q-image-wrap .item .q-image-remover image {
    width: 24rpx;
    height: 24rpx;
    position: absolute;
    top: -60rpx;
    right: 4rpx;
}
</style>
