<template>
	<div class="class-detail">
    <Heade :activeName="'class'"></Heade>
    <div class="pre-box content">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 课程详情</span>
          <el-row >
            <el-col :span="24">
              <button class="btn-creat-class" @click="creatClassVisible=true">编辑课程</button>
            </el-col>
          </el-row>
          <div class="text-box">
            <p>
              <span>课程名称：</span>抗菌药与超级细菌——天使与魔鬼的博弈
            </p>
            <p>
              <span>课时：</span>7
            </p>
            <p>
              <span>开课日期：</span> 2020-09-13
            </p>
            <p style="display: flex;">
              <span style="line-height: 150px;">课程封面：</span><img src="http://nos.netease.com/edu-image/9F4E313F73803F25E2F82CBF24984FDA.png?imageView&thumbnail=426y240&quality=100" alt="">
            </p>
            <p>
              <span>课程类型：</span>必修
            </p>
            <p>
              <span>课程简介：</span>超级细菌肆虐、感染无药可医，人类正面临前所未有的困境。面对这危及每个人的严酷现实，我们该如何反击？本课程将以独特、新颖的视角，为你展现抗菌药和超级细菌间博弈的历程；以深入浅出、生动形象的课件，教你抗菌药与超级细菌的知识；以浅显易懂、亦庄亦谐的教学情景剧，让你辩证地看待菌药的关系。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="互动课堂">
          <el-row>
            <el-col :span="24">
              <button class="btn-creat-class" @click="editClassroom(2)">添加互动课堂</button>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" v-for="item in dataList">
              <el-card class="box-card" style="margin-top: 15px">
                <div slot="header" class="clearfix">
                  <span>{{item.name}}</span>
                  <el-button @click="editClassroom(3)" style="float: right; padding: 5px 8px; margin-left: 10px " type="primary" plain >编辑</el-button>
                  <el-button @click="interactionVisible=true" style="float: right;padding: 5px 8px; " type="success" plain>备课</el-button>
                </div>
                <div class="text item">
                 <p class="activeDesc">{{item.desc}}</p>
                </div>
                <div class="text item">
                  <p style="width: 100%; text-align: right; color: #999; font-size: 12px">{{item.time}}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog
      title="备课"
      :visible.sync="interactionVisible"
      width="80%">
      <div class="creatClass-dia">
        <el-tabs v-model="activeHudong" @tab-click="handleClick">
          <el-tab-pane label="添加资料" name="first">
            <div class="add-data">
              <el-upload class="upload-demo" action="" :auto-upload='false' :on-change="datasChange">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
              <div class="li-name" v-for="item of datasList">
                {{item.name}} <span>编辑</span><span>删除</span>
              </div>
              <!-- <div class="li-name">
                资料名称 <span>编辑</span><span>删除</span>
              </div> -->
            </div>
          </el-tab-pane>
          <el-tab-pane label="添加作业" name="second">
            <div class="add-data">
              <el-upload class="upload-demo" action="" :auto-upload='false' :on-change='taskChange'>
                <el-button size="small" type="primary">添加作业</el-button>
              </el-upload>
              <div class="li-name" v-for="item of taskList">
                {{item.name}} <span>编辑</span><span>删除</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="添加互动活动" name="third">
            <div class="add-data">
            <el-row :gutter="20">
              <el-col :span="24">
                <el-button @click="addDiscusssVisible=true,dialogType=1" size="small" type="primary">添加讨论</el-button>
              </el-col></el-row>
            <div class="li-name" v-for="item of activeList">
             {{item.name}} <span>编辑</span><span>删除</span>
            </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
 <!--   <el-button @click="interactionVisible = false">取 消</el-button>
    <el-button type="primary" @click="interactionVisible = false">确 定</el-button>-->
  </span>
    </el-dialog>
    <el-dialog
      :title="dialogType==1?'添加讨论':dialogType==2?'添加互动课堂':'编辑互动课堂'"
      :visible.sync="addDiscusssVisible"
      width="30%">
      <div class="creatClass-dia">
        <el-form v-if="dialogType==1" ref="form" :model="discussForm" label-width="80px">
          <el-form-item label="讨论名称">
            <el-input v-model="discussForm.name"></el-input>
          </el-form-item>
          <el-form-item label="课程简介" prop="desc">
            <el-input type="textarea" v-model="discussForm.desc"></el-input>
          </el-form-item>
        </el-form>
        <el-form v-else ref="form" :model="HudongForm" label-width="80px">
          <el-form-item label="课堂名称">
            <el-input v-model="HudongForm.name"></el-input>
          </el-form-item>
          <el-form-item label="上课时间" prop="desc">
            <el-date-picker
              v-model="HudongForm.time"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="资源描述" prop="desc">
            <el-input type="textarea" v-model="HudongForm.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="addDiscusssVisible = false">取 消</el-button>
    <el-button type="primary" @click="creatDiscusssSuccess">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="新建课程"
      :visible.sync="creatClassVisible"
      width="80%">
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
            <el-input-number v-model="classForm.time" controls-position="right"></el-input-number>
          </el-form-item>
          <el-form-item label="开课日期">
            <el-date-picker
              v-model="classForm.startTime"
              type="date"
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
	</div>
</template>

<script>
import Heade from '../../components/heade.vue'
	export default {
		name: 'Class-Detail',
		components: {
      Heade
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
          time:''
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
        dataList:[
          {name:'病原生物与人类',desc:"新冠病毒从何而来？ 艾滋病正在离我们远去吗？ 青蒿素的研制缘何能获诺奖？ 白色瘟疫的阴影为何挥之不去",time:'2020-09-22',img:'http://nos.netease.com/edu-image/C321D9E56A934D520D9DD79F9527CCE6.jpg?imageView&thumbnail=426y240&quality=100'},
          {name:'《新教伦理与资本主义精神》导读',desc:"本课程是对德国著名思想家马克斯·韦伯的作品《新教伦理与资本主义精神》的导读",time:'2020-12-23',img:'http://nos.netease.com/edu-image/E0E0E27882525FE5B76BF4FF7C27D577.jpg?imageView&thumbnail=426y240&quality=100'},
          {name:'冷战史专题',desc:"本课程由冷战史研究领域的知名学者沈志华教授领衔，华东师范大学冷战国际史研究中心团队成员参与",time:'2020-11-23',img:'http://nos.netease.com/edu-image/9071CB3CE653843F98BC9EFF02217211.jpg?imageView&thumbnail=426y240&quality=100'},
          {name:'民族声乐进阶密码——石春轩子教学示范课堂',desc:"《民族声乐进阶密码——石春轩子教学示范课堂》通过专业演播棚的摄录，真实体现华师大音乐",time:'2021-01-24',img:'http://nos.netease.com/edu-image/FA04683B9C885ABA49C2A91BACB01F00.jpg?imageView&thumbnail=426y240&quality=100'},
        ],
        datasList: [ // 资料列表
          {name: '微信公众号：病原生物与人类.pdf'},
          {name: '医学微生物学，人民卫生出版社.txt'}
        ],
        taskList: [ // 作业列表
          {name: '艾滋病离我们有多远.txt'},
          {name: '与结核抗争.txt'}
        ],
        activeList: [ // 互动列表
          {name: '辩证认识病原-疾病'},
          {name: '对疾病的诊断和防治原则的认识'},
          {name: '如何理解病原生物与人类的关系'}
        ],
        addDiscusssVisible:false,
        dialogType:1
      }
		},
      computed:{

      },
		mounted() {


		},

		methods: {
      creatDiscusssSuccess(){
        this.addDiscusssVisible=false
        this.$message({
          message: this.dialogType==1?'添加讨论成功':'添加课堂成功',
          type: 'success'
        });
        if (this.dialogType == 1) { // 添加讨论
          this.activeList.push(this.discussForm)
        } else {
          this.dataList.push(this.HudongForm)
        }
      },
      creatClassSuccess(){
        this.creatClassVisible=false
        this.$message({
          message: '课程编辑成功',
          type: 'success'
        });
      },
      //编辑课堂信息
      editClassroom(type){
        this.addDiscusssVisible=true
        this.dialogType=type
        if(type==3){

        }else{
          this.HudongForm.name=""
          this.HudongForm.time=""
        }
      },
      changeUpload (file) { // 资料上传
        console.log(file)
      },
      datasChange(file, fileList) { // 资料上传
        let newForm = {name:file.name}
        this.datasList.push(newForm)
      },
      taskChange(file, fileList) { // 作业上传
        let newForm = {name:file.name}
        this.taskList.push(newForm)
      },
      handleClick () {
      }
      // handleAvatarSuccess(res, file) {
      //   alert(12)
      //   console.log(file)
      // },

    }
	}
</script>
<style lang="less">
  .activeDesc{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
