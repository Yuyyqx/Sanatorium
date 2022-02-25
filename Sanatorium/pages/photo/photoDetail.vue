<template>
	<view class="content">
		  <view class="page-body">
		            <view class="page-section">
		                <video id="myVideo" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4" @error="videoErrorCallback" ></video>
		
		               
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
	        }
	    }
		
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
</style>
