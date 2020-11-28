<template>
	<div class="resourse-preview">
    <Heade :activeName="'resoure'"></Heade>
    <div class="pre-box content">
      <div class="pre-top">
        <h3>
          {{resourceData.name}}
        </h3>
        <ul>
          <li>
            上传人：周周
          </li>
          <li>
            上传时间： {{resourceData.time}}
          </li>
        </ul>
        <p>资源介绍：{{resourceData.desc}}</p>
        <div class="button-span">
          <button class="btn-creat-class" @click="centerDialogShared = true">共享资源</button>
        </div>
        <el-dialog
          title="提示"
          :visible.sync="centerDialogShared"
          width="30%"
          center>
          <span style="text-align: center; display: block;">是否共享当前资源到大屏？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogShared = false">否</el-button>
            <el-button type="primary" @click="handleClose">是</el-button>
          </span>
        </el-dialog>
      </div>
      <div class="img-box">
        <img   :src="resourceData.img" alt="">
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
        radio:'1',
        centerDialogShared:false,
        resourceData:''
      }
		},
      computed:{

      },
		mounted() {
      this.resourceData=this.$route.params.resourceData


		},

		methods: {
      creatClassSuccess(){
        this.creatClassVisible=false
        this.$message({
          showClose: true,
          customClass:'classtc',
          message: '资源添加成功',
          type: 'success'
        });
      },
      handleClose(){
        this.centerDialogShared=false
        this.$message({
          showClose: true,
          customClass:'classtc',
          message: '共享成功!',
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
      position: relative;
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
      .img-box{
        &::-webkit-scrollbar {/*滚动条整体样式*/
          width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
          height: 10px;

        }
        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

          border-radius: 10px;

          -webkit-box-shadow:none;

          background: #ffffff;

        }

        &::-webkit-scrollbar-track {/*滚动条里面轨道*/

          -webkit-box-shadow:none;

          border-radius: 10px;

          background:#ffffff;

        }
      }
      .button-span{
        position: absolute;
        right:10px;
        top:10px;
        padding:8px 15px;
        background: #14c35a;
        cursor: pointer;
        .btn-creat-class{
          background: #14c35a;
          cursor: pointer;
          color:#ffffff;
          span{
            color:#ffffff;
          }
        }
      }
      .el-button--primary{
        background: #14c35a;
        span{
          color:#ffffff;
        }
      }
    }
  }

</style>
