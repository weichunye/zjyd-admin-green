<template>
	<div class="resourse-teacher">
    <Heade :activeName="'resoure'"></Heade>
    <div class="pre-box content">
      <el-row>
        <el-col :span="24">
      <button class="btn-creat-class" @click="creatClassVisible=true">添加资源</button>
        </el-col>
      </el-row>
      <el-row :gutter="20">

        <el-col v-for="item in dataList" :span="6">
          <router-link  :to="{path:'/resource-preview',query:{id:'2'}}" >
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
            </dd>
        </dl>
          </router-link>
        </el-col>
      </el-row>
      <el-pagination
        style="margin-top: 30px; text-align: center"
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <el-dialog
      title="上传资源"
      :visible.sync="creatClassVisible"
      width="60%"
      :before-close="handleClose">
      <div class="creatClass-dia">
        <el-form ref="form" :model="classForm" label-width="160px">
          <el-form-item label="资源名称">
            <el-input v-model="classForm.name"></el-input>
          </el-form-item>
          <el-form-item label="选择文件" prop="pic">
            <el-upload class="upload-demo" action="" :auto-upload='false' :on-change='changeUpload'>
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="是否共享到平台资源库">
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </el-form-item>
          <el-form-item label="资源描述" prop="desc">
            <el-input type="textarea" v-model="classForm.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="creatClassVisible = false">取 消</el-button>
    <el-button type="primary" @click="creatClassSuccess">确 定</el-button>
  </span>
    </el-dialog>
    <Footer></Footer>
	</div>
</template>

<script>
import Heade from '../../components/heade.vue'
import Footer from '@/components/footer.vue'
	export default {
		name: 'ResourceTeacher',
		components: {
      Heade,
      Footer


		},
		data() {
			return {
        dataList:[
          {type:'2',name:'扫描版《图解星学大成全三部》[PDF]','desc':'《星学大成》是收录于《四库全书.子部》的最重要的星命学著作，作者万民英精选了明代流传的星学秘藏珍本，将其汇集成'},
          {type:'1', name: "《新版中日交流标准日本语(初.中级）》",'desc':'《新版中日交流标准日本语》是1988年出版的《中日交流标准日本语初级上、下》的修订本，是人民教育出版衬与日本光村图书出版株式会通力合作、精心编写的一套日语自学读本。'},
          {type:'2',name:'扫描版《鬼谷子绝学》[PDF]','desc':'《鬼谷子绝学》一个人缺的永远不是钱，缺的是赚钱的智谋，一个人缺的永远不是团队，缺的是俘获追'},
          {type:'3',name:'《大成拳》扫描版[PDF] 资料下载','desc':'意拳，又名大成拳，中国内家拳术的一种，源于心意拳'},
          {type:'3',name:'扫描本《蔡志忠漫画合集》','desc':'蔡志忠漫画合集36册 封神榜'},
          {type:'2',name:'《超有趣的英文基础文法》[PDF]','desc':'最适合国人学习的英文文法书，针对最容易犯的文法错误，解析文法'},
          {type:'1',name:'《罗织经》扫描版[PDF]','desc':'历史上最著名的酷吏，请君入瓮的发明者来俊臣所著；乃中国几千年文'},
          {type:'1',name:'扫描版《清朝全史 最新经典珍藏》','desc':'《清朝全史(最新经典珍藏)》以宏阔的视角，科学的历史观述载历史，将中外历史汇聚成'},
          {type:'2',name:'《美国法律文库：证券法》','desc':'《美国法律文库：证券法》是根据原著第三版翻译，是中国法学学者提供学习美国证券法'},
          {type:'2',name:'《大历史：从宇宙大爆炸到今天》','desc':'《大历史：从宇宙大爆炸到今天》打破传统范式，将各个学科的知识交织融合'}

        ],
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
        let  _this=this
        this.creatClassVisible=false
        this.$message({
          message: '资源添加成功',
          type: 'success'
        })
        let newForm={type:3,name:this.classForm.name,desc:this.classForm.desc}
        _this.dataList.push(newForm)
      },

    }
	}
</script>
<style lang="less">
	.resourse-teacher {
    .content{
      overflow: hidden;
      margin-top: 15px;
      padding: 10px;
      min-height: 600px;
      background: #fff;
      dl{
        overflow: hidden;
        margin-top: 15px;
        width: 100%;
        height: 87px;
        border-radius: 10px;
        dt{
          float: left;
          margin-top: 20px;
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
          width: 80%;
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
