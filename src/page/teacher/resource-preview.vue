<template>
	<div class="resourse-preview">
    <Heade :activeName="'resoure'"></Heade>
    <div class="pre-box content">
      <div class="pre-top">
        <h3>
          扫描版《图解星学大成全三部》[PDF]
        </h3>
        <ul>
          <li>
            上传人：周周
          </li>
          <li>
            上传时间：2018-06-23
          </li>
        </ul>
        <p>资源介绍：《星学大成》是收录于《四库全书.子部》的最重要的星命学著作，作者万民英精选了明代流传的星学秘藏珍本，将其汇集成《星学大成》。《四库全书》对此给予了极高评价，称”其鸠集众说，多术家不传之本，实为五星之大全。”然而，由于古代科学的落后和古人认识水平的局限，现在看来，传统星命学存在其历史的局限，甚至流于荒谬列稽。但是作为一种中国人曾普遍有所接触的文化现象和文明遗产，它也值得我们对其进行较全面的了解，以去粗取精，去伪存真，汲取传统文化中的智慧涵养。</p>
      </div>
      <div class="img-box">
        <img src="http://img.xuexi111.org/d/file/resource/2018-06-23/e0a7a2d4729a917b192dfdd3c8b0bd46.jpg" alt="">
      </div>
    </div>
<Footer></Footer>
	</div>
</template>

<script>
import Heade from '../../components/heade.vue'
import Footer from '@/components/footer.vue'
	export default {
		name: 'ResourcePreview',
		components: {
      Heade,
      Footer


		},
		data() {
			return {
        creatClassVisible:false,
        classForm:{
          name:'',
          time:'',
          region:'bixiu',
          startTime:'',
          desc:'',
          imageUrl:'',

        },
        radio:'1'
      }
		},
      computed:{

      },
		mounted() {


		},

		methods: {
      creatClassSuccess(){
        this.creatClassVisible=false
        this.$message({
          message: '资源添加成功',
          type: 'success'
        });
      },

    }
	}
</script>
<style lang="less">
	.resourse-preview {
    .content {
      overflow: hidden;
      margin-top: 15px;
      min-height: 600px;
      background: #fff;
      .pre-top{
        padding: 1% 3%;
        width: 94%;
        h3{
          font-size: 20px;
          line-height: 50px;
          color: #000;
        }
        ul{
          overflow: hidden;
          width: 100%;
          li{
            float: left;
            margin-right: 20px;
            font-size: 14px;
            line-height: 20px;
          }
        }
        p{
          width: 100%;
          font-size: 14px;
          line-height: 30px;
        }
      }
      .img-box{
        overflow: auto;
        margin: 25px auto;
        width: 94%;
        height: 500px;
        border: 1px solid #b9d7c5;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }

</style>
