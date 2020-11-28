<template>
	<div class="enter">
    <Heade :activeName="'class'"></Heade>
    <div class="pre-box content">
      <el-row>
        <el-col :span="24">
      <button class="btn-creat-class" @click="creatClassVisible=true">新增课程</button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col v-for="item in dataList" :span="6">
          <router-link :to="{name:'ClassDetail',params:{resourceData:item}}">
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
            </dd>
        </dl>
          </router-link>
        </el-col>

      </el-row>
   <!--   <el-pagination
        style="margin-top: 30px; text-align: center"
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>-->
    </div>
    <el-dialog
      title="新建课程"
      :visible.sync="creatClassVisible"
      width="80%"
      :before-close="handleClose">
      <div class="creatClass-dia">
        <el-form ref="form" :model="classForm" label-width="80px">
          <el-form-item label="课程名称">
            <el-input v-model="classForm.name"></el-input>
          </el-form-item>
          <el-form-item label="课程封面" prop="pic">
            <el-upload class="upload-demo" action="" :auto-upload='false' :on-change='changeUpload'>
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="课时">
            <el-input-number v-model="classForm.classNum" controls-position="right"></el-input-number>
          </el-form-item>
          <el-form-item label="开课日期">
            <el-date-picker
              v-model="classForm.startTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="课程类型">
            <el-select v-model="classForm.region" placeholder="请选择活动区域">
              <el-option label="必须课" value="bixiu"></el-option>
              <el-option label="选修课" value="xuanxiu"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="课程简介" prop="desc">
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
		name: 'Enter',
		components: {
      Heade,
      Footer


		},
		data() {
			return {
        creatClassVisible:false,
        dataList:[
          {name:'抗菌药与超级细菌',desc:"超级细菌肆虐、感染无药可医，人类正面临前所未有的困境。面对这危及每个人的严酷现实，我们该如何反击？",time:'2020-09-12',classNum:'24','img':require("../../assets/teacher/pic1.png")},
          {name:'病原生物与人类',desc:"新冠病毒从何而来？ 艾滋病正在离我们远去吗？ 青蒿素的研制缘何能获诺奖？ 白色瘟疫的阴影为何挥之不去",time:'2020-09-22',classNum:'36','img':require("../../assets/teacher/pic2.jpg")},
          {name:'《新教伦理与资本主义精神》导读',desc:"本课程是对德国著名思想家马克斯·韦伯的作品《新教伦理与资本主义精神》的导读",time:'2020-12-23',classNum:'15','img':require("../../assets/teacher/pic3.jpg")},
          {name:'计量地理学',desc:"计量地理学（Quantitative Geography）是一门方法论学科，它主要运用数学方法",time:'2020-12-30',classNum:'27','img':require("../../assets/teacher/pic4.jpg")},
          {name:'外国经济思想史',desc:"学生通过本课程学习，在掌握西方经济思想的基本发展脉络",time:'2019-07-24',classNum:'6','img':require("../../assets/teacher/pic5.jpg")},
          {name:'冷战史专题',desc:"本课程由冷战史研究领域的知名学者沈志华教授领衔，华东师范大学冷战国际史研究中心团队成员参与",classNum:'12',time:'2020-11-23','img':require("../../assets/teacher/pic7.jpg")},
          {name:'民族声乐进阶密码——石春轩子教学示范课堂',desc:"《民族声乐进阶密码——石春轩子教学示范课堂》通过专业演播棚的摄录，真实体现华师大音乐",time:'2021-01-24',classNum:'32','img':require("../../assets/teacher/pic8.jpg")},
        ],
        classForm:{
          name:'',
          time:'',
          region:'bixiu',
          startTime:'',
          desc:'',
          imageUrl:'',
          classNum:''
        }
      }
		},
      computed:{

      },
		mounted() {


		},
    filters:{
      reBytesStr: function(str) {
        str=str.replace(/<\/?.+?>/g,"").replace(/ /g,"").replace(/&(\S*)?;/g,"")
        if((!str && typeof(str) != 'undefined')) {
          return '';
        }
        var num = 0;
        var str1 = str;
        var str = '';
        for(var i = 0, lens = str1.length; i < lens; i++) {
          num += ((str1.charCodeAt(i) > 255) ? 2 : 1);
          if(num > 108) {
            break;
          } else {
            str = str1.substring(0, i + 1);
          }
        }
        if(num>108){
          return str+"……";
        }else{
          return str
        }
      }
    },
		methods: {
      creatClassSuccess(){
        this.creatClassVisible=false
        this.$message({
          showClose: true,
          customClass:'classtc',
          message: '课程创建成功',
          type: 'success'
        });
        let newForm={img:require("../../assets/teacher/show_1.jpg"),name:this.classForm.name,classNum:this.classForm.classNum, desc:this.classForm.desc,time:this.classForm.startTime}
        this.dataList.push(newForm)
      },
      handleAvatarSuccess(file, fileList) {
        this.fileList = fileList;
        this.$nextTick(
          () => {
            let upload_list_li = document.getElementsByClassName('el-upload-list')[0].children;
            for (let i = 0; i < upload_list_li.length; i++) {
              let li_a = upload_list_li[i];
              let imgElement = document.createElement("img");
              imgElement.setAttribute('src', fileList[i].url);
              imgElement.setAttribute('style', "max-width:50%;padding-left:25%");
              if (li_a.lastElementChild.nodeName !== 'IMG') {
                li_a.appendChild(imgElement);
              }
            }
          });
      },

    }
	}
</script>
<style lang="less">
	.enter {
    .content{
      overflow: hidden;
      margin-top: 15px;
      padding: 10px;
      min-height: 600px;
      background: #fff;
      dl{
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
            font-size: 12px;
            color: #999;
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
    .el-button--primary{
      background: #17ae54;
      span{
        color:#ffffff;
      }
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
    .el-button--primary{
      background: #17ae54;
      span{
        color:#ffffff;
      }
      &:hover{
        background: #17ae54;
      }
    }
  }

</style>
