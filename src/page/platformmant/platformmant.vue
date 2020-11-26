
<template>
  <div class="platfommant">
    <Header  :activeName="'platformmant'"/>
    <div class="pre-box collegesmant-cont">
      <div class="sechinput">
        <input v-model="input" placeholder="请输入内容"></input>
        <button>搜索资源名称</button>
      </div>
      <ul style="display: flex; flex-wrap: wrap;">
        <li v-for="(item, index) of dataList" :key='index'>
          <div class="top">
            <h4 class="title">{{item.name}}</h4>
            <div class="right">
              <el-button v-if="!item.isAccess" type="primary" class="right-bottom" plain @click="dialogVisible = true,itemNum=index" >审核</el-button>
              <el-button v-else disabled type="info" plain  >审核</el-button>
            </div>
          </div>
          <span class="contnetDesc">{{item.desc}}</span>
        </li>
       <!-- <li class="active">
          <div class="top">
            <h4 class="title">这里是资源标题这里是资源标题</h4>
            <div class="right">
              <el-button type="info" class="right-bottom" plain @click="dialogVisible = true" disabled>审核</el-button>
            </div>
          </div>
          <span>这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述</span>
        </li> -->
      </ul>
      <el-dialog
        title="审核"
        :visible.sync="dialogVisible"
        class="title-Class"
        width="40%"
        :before-close="handleClose">
        <div class="text">
          <el-form ref="form" :model="classForm" label-width="160px">
            <el-form-item label="审核是否通过">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="0">否</el-radio>
            </el-form-item>
            <el-form-item v-if="radio==0" label="审核意见" prop="desc">
              <el-input type="textarea" v-model="classForm.desc"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible=false">取消</el-button>
                <el-button type="primary" @click="handleClose">确定</el-button>
              </span>
      </el-dialog>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/heade.vue'
  import Footer from '@/components/footer.vue'
	export default {
		name: 'Platfommant',
		components: {
      Header,
      Footer
		},
		data() {
			return {
        input: '',
        dialogVisible:false,
        radio:'1',
        itemNum:0,
        classForm:{
          desc:''
        },
        dataList:[
          {type:'2',name:'扫描版《图解星学大成全三部》[PDF]','desc':'《星学大成》是收录于《四库全书.子部》的最重要的星命学著作，作者万民英精选了明代流传的星学秘藏珍本，将其汇集成, 星学大成》是收录于《四库全书.子部》的最重要的星命学著作，作者万民英精选了明代流传的星学秘藏珍本，将其汇集成', percentage: '25', isAccess: true},
          {type:'2', name: "《新版中日交流标准日本语(初.中级）》",'desc':'《新版中日交流标准日本语》是1988年出版的《中日交流标准日本语初级上、下》的修订本，是人民教育出版衬与日本光村图书', percentage: '40', isAccess: false},
          {type:'2',name:'《大成拳》扫描版[PDF] 资料下载','desc':'意拳，又名大成拳，中国内家拳术的一种，源于心意拳', percentage: '100', isAccess: false},
          {type:'2',name:'《超有趣的英文基础文法》[PDF]','desc':'最适合国人学习的英文文法书，针对最容易犯的文法错误，解析文法', percentage: '60', isAccess: true},
          {type:'2',name:'《罗织经》扫描版[PDF]','desc':'历史上最著名的酷吏，请君入瓮的发明者来俊臣所著；乃中国几千年文', percentage: '87', isAccess: false},
        ],
      }
		},
      computed:{

      },
		mounted() {


		},
		methods: {
      handleClose() {
        this.dialogVisible=false
        this.$message({
          message: '审核完成',
          type: 'success'
        });
        this.dataList[this.itemNum].isAccess=true
      },
    }
	}
</script>
<style lang="less">
.contnetDesc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.platfommant{
  //width:100%;
  display: block;
  padding:20px 0 20px 0;
  //background: #ffffff;
  .collegesmant-cont{
    min-height:300px;
    display: block;
    background: #ffffff;
    .sechinput{
      overflow: hidden;
      margin: 20px 20px;
      display: flex;
      text-align: left;
      width:94%;
      height: 30px;
      border: 1px solid #dedede;
      border-radius: 5px;
      input{
        display: block;
        float:right;
        width: 80%;
        padding:0 10px;
      }
      button{
        float:right;
        margin:0;
        padding: 0;
        width: 20%;
        height: 30px;
        line-height: 30px;
        background: #9ee6a5;
        color: #186c20;
        border: none;
        letter-spacing: 2px;
      }
    }
    ul{
      padding:0 20px;
      min-height: 460px;
      li{
        float: left;
        width:48%;
        margin:0 2% 2% 0;
        height: 114px;
        // display: inline-block;
        align-items: center;
        border:1px solid #e3e3e3;
        padding:15px;
        box-sizing: border-box;

        &.active{
          .top .el-button{
            background: #e3e3e3;
            span{
              color:#B3B3B3;

            }
            &:hover{
              background: #e3e3e3;
              span{
                color:#B3B3B3;
              }
            }
          }
        }
        &:hover{
          border-color:#17ae54;
          box-shadow: 0 18px 30px rgba(54,33,251,.09);
        }
        &:nth-child(2n){
          margin-right:0;
        }
        .top{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom:6px;
          line-height: 30px;
          .title{
            font-weight: normal;
            font-size:16px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .el-button{
    padding:5px 10px;
    height:30px;
    line-height:20px;
  }
  .el-button--primary{
    background: rgba(23,174,84,0.2);
    &:hover{
      background: rgba(23,174,84,1);
      span{
        color:#ffffff;
      }
    }
  }
  .el-button{
    padding:5px 10px;
    height:30px;
    line-height:20px;
  }
  .el-button--primary{
    background: rgba(23,174,84,0.2);
    &:hover{
      background: rgba(23,174,84,1);
      span{
        color:#ffffff;
      }
    }
  }
}

</style>
