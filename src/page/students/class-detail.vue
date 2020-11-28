<template>
	<div class="class-detail">
    <Heade :activeName="'class'"></Heade>
    <div class="pre-box content">
      <div class="text-box">
        <p>
          <span>课程名称：</span>{{resourceData.name}}
        </p>
        <p style="width: 360px; margin-left: 50px; overflow:hidden;">
         <span style="float: left; "> 学习进度：</span>
          <span  style="width: 260px; float: left;margin-top: 13px"> <el-progress :percentage="92"></el-progress></span>

        </p>
        <p>
          <span>课时：</span>7
        </p>
        <p>
          <span>开课日期：</span>{{resourceData.time}}
        </p>
        <p style="display: flex;">
          <span style="line-height: 150px;">课程封面：</span><img :src="resourceData.img" alt="">
        </p>
        <p>
          <span>课程类型：</span>必修
        </p>
        <p>
          <span>课程简介：</span>{{resourceData.desc}}
        </p>
      </div>


    </div>
<Footer></Footer>
	</div>
</template>

<script>
  import Heade from '../../components/heade-students.vue'
  import Footer from '@/components/footer.vue'
	export default {
		name: 'Class-Detail',
		components: {
      Heade,
      Footer
		},
		data() {
			return {
        creatClassVisible:false,
        interactionVisible:false,
        activeHudong:'first',
        discussForm:{
          name:'',
          desc:''
        },
        HudongForm:{
          name:'',
          startTime:''
        },
        classForm:{
          name:'人工智能V1',
          time:'32',
          region:'bixiu',
          startTime:'2020-02-23',
          desc:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课\n' +
            '         程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课\n' +
            '         程简介课程简介课程简介'
        },
        addDiscusssVisible:false,
        dialogType:1,
        resourceData:''
      }
		},
      computed:{

      },
		mounted() {
      this.resourceData=this.$route.params.resourceData


		},

		methods: {
      creatDiscusssSuccess(){
        this.addDiscusssVisible=false
        this.$message({
          showClose: true,
          customClass:'classtc',
          message: this.dialogType==1?'添加讨论成功':'添加课堂成功',
          type: 'success'
        });

      },
      creatClassSuccess(){
        this.creatClassVisible=false
        this.$message({
          showClose: true,
          customClass:'classtc',
          message: '课程编辑成功',
          type: 'success'
        });
      },
      //编辑课堂信息
      editClassroom(type){
        this.addDiscusssVisible=true
        this.dialogType=type
        if(type==3){
          this.HudongForm.name="课堂名称"
          this.HudongForm.startTime="2020-05-13"
        }else{
          this.HudongForm.name=""
          this.HudongForm.startTime=""
        }



      }

    }
	}
</script>
<style lang="less">
	.class-detail {
    .content{
      overflow: hidden;
      margin-top: 15px;
      min-height: 600px;
      background: #fff;
      .text-box{
        p{
          margin: 15px auto;
          width:90%;
          font-size: 18px;
          line-height: 40px;
          span{
            font-weight: bold;
            font-size: 18px;
          }
          img{
            height: 150px;
          }

        }
      }

    }
    .btn-creat-class{
      float: right;
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
      color: #fff;
      background: #17ae54;
      cursor: pointer;
      border-radius: 6px;
    }
    .el-progress-bar__inner{
      background: #17ae54;
    }
	}
  .creatClass-dia{
    margin: 10px auto;
    width: 90%;
    min-height: 300px;
   .add-data{
     padding: 10px;
       .li-name{
         margin-top: 15px;
         overflow: hidden;
         height: 60px;
         line-height: 60px;
         border: 1px solid #ededed;
         border-radius: 5px;
         margin-bottom: 16px;
         padding: 0 10px;
         width: 100%;
         box-sizing: border-box;
         background: #e3f6ea;
         span{
           float: right;
           margin: 0 10px;
         }

     }
   }
  }

</style>
