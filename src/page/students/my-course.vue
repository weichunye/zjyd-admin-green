<template>
	<div class="my-course">
    <Heade :activeName="'class'"></Heade>
    <div class="pre-box content">
      <el-row :gutter="20">
        <el-col v-for="item in dataList" :span="6">
          <router-link :to="{name:'ClassDetailStudents',params:{resourceData:item}}">
          <dl>
            <dt>
              <!-- <img :src="require('../../assets/teacher/'+item.img)" alt=""> -->
              <img :src='item.img'/>
            </dt>
            <dd>
              <h4>
                {{item.name}}
              </h4>
              <p>
                {{item.desc}}
              </p>
              <span>
               {{item.time}}
              </span>
              <div class="my-press">
                <el-progress :percentage="item.percentage"></el-progress>
              </div>
            </dd>
        </dl>
          </router-link>
        </el-col>
        <!-- <el-col :span="6">
          <router-link  :to="{path:'/class-detail-s',query:{id:'2'}}" >
          <dl>
            <dt>
              <img src="../../assets/teacher/pic_1.png" alt="">
            </dt>
            <dd>
              <h4>
                课程名称
              </h4>
              <p>
                课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介
              </p>
              <span>
               2020.11.23
              </span>
              <div class="my-press">
                <el-progress :percentage="92"></el-progress>
              </div>
            </dd>
        </dl>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link  :to="{path:'/class-detail-s',query:{id:'2'}}" >
          <dl>
            <dt>
              <img src="../../assets/teacher/pic_1.png" alt="">
            </dt>
            <dd>
              <h4>
                课程名称
              </h4>
              <p>
                课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介
              </p>
              <span>
               2020.11.23
              </span>
              <div class="my-press">
                <el-progress :percentage="92"></el-progress>
              </div>
            </dd>
          </dl>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link  :to="{path:'/class-detail-s',query:{id:'2'}}" >
          <dl>
            <dt>
              <img src="../../assets/teacher/pic_1.png" alt="">
            </dt>
            <dd>
              <h4>
                课程名称
              </h4>
              <p>
                课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介
              </p>
              <span>
               2020.11.23
              </span>
              <div class="my-press">
                <el-progress :percentage="92"></el-progress>
              </div>
            </dd>
          </dl>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link  :to="{path:'/Class-detail',query:{id:'2'}}" >
          <dl>
            <dt>
              <img src="../../assets/teacher/pic_1.png" alt="">
            </dt>
            <dd>
              <h4>
                课程名称
              </h4>
              <p>
                课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介 课程简介
              </p>
              <span>
               2020.11.23
              </span>
              <div class="my-press">
                <el-progress :percentage="92"></el-progress>
              </div>
            </dd>
          </dl>
          </router-link>
        </el-col> -->

      </el-row>
 <!--     <el-pagination
        style="margin-top: 30px; text-align: center"
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>-->
    </div>
    <Footer></Footer>
	</div>
</template>

<script>
  import Heade from '../../components/heade-students.vue'
  import Footer from '@/components/footer.vue'
	export default {
		name: 'Enter',
		components: {
      Heade,
      Footer


		},
		data() {
			return {
        creatClassVisible:false,
        dataList:[
          {name:'抗菌药与超级细菌',desc:"超级细菌肆虐、感染无药可医，人类正面临前所未有的困境。面对这危及每个人的严酷现实，我们该如何反击？",time:'2020-09-12','img':require("../../assets/teacher/pic1.png"), percentage: '92'},
          {name:'《新教伦理与资本主义精神》导读',desc:"本课程是对德国著名思想家马克斯·韦伯的作品《新教伦理与资本主义精神》的导读",time:'2020-12-23','img':require("../../assets/teacher/pic3.jpg"), percentage: '0'},
          {name:'计量地理学',desc:"计量地理学（Quantitative Geography）是一门方法论学科，它主要运用数学方法",time:'2020-12-30','img':require("../../assets/teacher/pic4.jpg"), percentage: '0'},
          {name:'外国经济思想史',desc:"学生通过本课程学习，在掌握西方经济思想的基本发展脉络",time:'2019-07-24','img':require("../../assets/teacher/pic5.jpg"), percentage: '100'},
          {name:'冷战史专题',desc:"本课程由冷战史研究领域的知名学者沈志华教授领衔，华东师范大学冷战国际史研究中心团队成员参与",time:'2020-11-23','img':require("../../assets/teacher/pic7.jpg"), percentage: '5'},
        ],
        classForm:{
          name:'',
          time:'',
          region:'bixiu',
          startTime:'',
          desc:'',
          imageUrl:''
        }
      }
		},
      computed:{

      },
		mounted() {


		},

		methods: {


    }
	}
</script>
<style lang="less">
	.my-course {
    .content{
      overflow: hidden;
      margin-top: 15px;
      padding: 10px;
      min-height: 600px;
      background: #fff;
      dl{
        margin-top: 15px;
        dt{
          width: 100%;
          height: 150px;
          text-align: center;
          img{
            width: auto;
            height: 150px;
          }

        }
        dd{
          overflow: hidden;
          padding: 10px;
          h4{
            width: 100%;
            font-size: 18px;
            line-height: 30px;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p{
            width: 100%;
            font-size: 14px;
            color: #666;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          span{
            float: right;
            margin: 5px 0 15px 0;
            font-size: 12px;
            color: #999;
          }
          .my-press{
          padding-top: 15px;
            width: 100%;
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
    .el-textarea__inner{
      height: 150px;
      overflow-y: auto;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }

</style>
