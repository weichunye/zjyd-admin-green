<template>
	<div class="resourse-student">
    <Heade :activeName="'resoure'"></Heade>
    <div class="pre-box content">
      <el-row :gutter="20">
        <el-col v-for="item in dataList" :span="6">
          <router-link :to="{name:'ResourcePreviewStudents',params:{resourceData:item}}">
          <dl  :class="'bg-'+item.type">
            <dt>
            {{item.type==1?"Word":item.type==2?"PDF":"IMG"}}
            </dt>
            <dd>
              <h4>
                {{item.name}}
              </h4>
              <p>
               {{item.desc}}
              </p>
              <p style="margin-top: 10px">
                预览时长：{{item.percentage}}
              </p>
            </dd>
        </dl>
          </router-link>
        </el-col>
        <!-- <el-col :span="6">
          <router-link  :to="{path:'/resource-preview-s'}" >
          <dl  class="bg-1">
            <dt>
            Word
            </dt>
            <dd>
              <h4>
                资源名称
              </h4>
              <p>
               资源简介资源简介资源简介资源简介
              </p>
              <p style="margin-top: 10px">
                <el-progress :percentage="25"></el-progress>
              </p>
            </dd>
        </dl>
          </router-link>
        </el-col> -->
        <!-- <el-col :span="6">
          <router-link  :to="{path:'/resource-preview-s'}" >
            <dl class="bg-2">
              <dt >
                PDF
              </dt>
              <dd>
                <h4>
                  资源名称
                </h4>
                <p>
                  资源简介资源简介资源简介资源简介资源简介资源简介资源简介资源简介
                </p>
                <p style="margin-top: 10px">
                  <el-progress :percentage="36"></el-progress>
                </p> -->

               <!-- <span>
               2020.11.23
              </span>-->
              <!-- </dd>
            </dl>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link  :to="{path:'/resource-preview-s'}" >
            <dl class="bg-3">
              <dt >
                TXT
              </dt>
              <dd>
                <h4>
                  资源名称
                </h4>
                <p>
                  资源简介资源简介资源简介资源简介资源简介资源简介资源简介资源简介
                </p>
                <p style="margin-top: 10px">
                  <el-progress :percentage="92"></el-progress>
                </p>
              </dd>
            </dl>
          </router-link>
        </el-col> -->
      </el-row>
	</div>
  <Footer></Footer>
  </div>
</template>

<script>
import Heade from '../../components/heade-students.vue'
import Footer from '@/components/footer.vue'
	export default {
		name: 'ResourseStudent',
		components: {
      Heade,
      Footer


		},
		data() {
			return {
        dataList:[
          {type:'2',name:'扫描版《图解星学大成全三部》[PDF]','desc':'《星学大成》是收录于《四库全书.子部》的最重要的星命学著作，作者万民英精选了明代流传的星学秘藏珍本，将其汇集成','img':require("../../assets/pic/pic_1.jpg"),percentage:'0时23分12秒'},
          {type:'1', name: "《新版中日交流标准日本语(初.中级）》",'desc':'《新版中日交流标准日本语》是1988年出版的《中日交流标准日本语初级上、下》的修订本','img':require("../../assets/pic/pic_2.jpg"),percentage:'1时56分3秒'},
          {type:'2',name:'扫描版《鬼谷子绝学》[PDF]','desc':'《鬼谷子绝学》一个人缺的永远不是钱，缺的是赚钱的智谋，一个人缺的永远不是团队，缺的是俘获追','img':require("../../assets/pic/pic_3.jpg"),percentage:'0时23分12秒'},
          {type:'3',name:'《大成拳》扫描版[PDF] 资料下载','desc':'意拳，又名大成拳，中国内家拳术的一种，源于心意拳','img':require("../../assets/pic/pic_4.jpg"),percentage:'0时46分14秒'},
          {type:'3',name:'新版中日交流标准日本语（中级上下）','desc':'本书是1990年出版的《中日交流标准日本语》中级上、下册的修本，是人民教育出版社与日本光村图书出版株式会社通力合作、精心编写的一套日语自学读本。','img':require("../../assets/pic/pic_5.jpg"),percentage:'1时36分12秒'},
          {type:'2',name:'《超有趣的英文基础文法》[PDF]','desc':'最适合国人学习的英文文法书，针对最容易犯的文法错误，解析文法','img':require("../../assets/pic/pic_6.jpg"),percentage:'0时16分25秒'},
          {type:'1',name:'扫描版《清朝全史 最新经典珍藏》','desc':'《清朝全史(最新经典珍藏)》以宏阔的视角，科学的历史观述载历史，将中外历史汇聚成','img':require("../../assets/pic/pic_8.jpg"),percentage:'0时36分9秒'},
          {type:'2',name:'《美国法律文库：证券法》','desc':'《美国法律文库：证券法》是根据原著第三版翻译，是中国法学学者提供学习美国证券法','img':require("../../assets/pic/pic_9.jpg"),percentage:'0时27分17秒'},
          {type:'2',name:'《大历史：从宇宙大爆炸到今天》','desc':'《大历史：从宇宙大爆炸到今天》打破传统范式，将各个学科的知识交织融合','img':require("../../assets/pic/pic_10.jpg"),percentage:'1时39分56秒'}
        ],
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
	.resourse-student {
    .content{
      overflow: hidden;
      margin-top: 15px;
      padding: 10px;
      min-height: 600px;
      background: #fff;
      dl{
        margin-top: 25px;
        overflow: hidden;
        width: 100%;
        height: 120px;
        border-radius: 10px;
        dt{
          float: left;
          margin: 20px 5px 0 5px;
          width: 50px;
          height: 50px;
          line-height:50px;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          color: #999;
          background: #fff;
          border-radius: 50%;
        }

        dd{
          float: left;
          width: 187px;
          padding:6px 10px 0 0;
          h4{
            margin-top: 10px;
            padding-left: 4%;
            width: 96%;
            font-size: 18px;
            line-height: 30px;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p{
            padding-left: 4%;
            width: 96%;
            font-size: 12px;
            color: #666;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          span{
            float: right;
            font-size: 12px;
            color: #999;
          }
        }

      }
      .bg-1{
        background: -moz-linear-gradient(left, #b5dcc3 40%, #cbdccc 100%);
        background: -webkit-linear-gradient(left, #b5dcc3 40%, #cbdccc 100%);
        background: -o-linear-gradient(left,  #b5dcc3 40%, #cbdccc 100%);
        background: -ms-linear-gradient(left,  #b5dcc3 40%, #cbdccc 100%);
        background: linear-gradient(left, #b5dcc3 40%, #cbdccc 100%);
      }
      .bg-2{
        background: -moz-linear-gradient(left, #d8b4f3 40%, #e9d7f7 100%);
        background: -webkit-linear-gradient(left,  #d8b4f3 40%, #e9d7f7 100%);
        background: -o-linear-gradient(left, #d8b4f3 40%, #e9d7f7 100%);
        background: -ms-linear-gradient(left, #d8b4f3 40%, #e9d7f7 100%);
        background: linear-gradient(left, #d8b4f3 40%, #e9d7f7 100%);
      }
      .bg-3{
        background: -moz-linear-gradient(left, #edb7ad 40%, #f1dcd7 100%);
        background: -webkit-linear-gradient(left, #edb7ad 40%, #f1dcd7 100%);
        background: -o-linear-gradient(left, #edb7ad 40%, #f1dcd7 100%);
        background: -ms-linear-gradient(left, #edb7ad 40%, #f1dcd7 100%);
        background: linear-gradient(left, #edb7ad 40%, #f1dcd7 100%);
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
