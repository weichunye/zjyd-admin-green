<template>
  <div class="header">
    <!--教师端-->
    <ul v-if="this.activeName=='resoure'||this.activeName=='class'" class="pre-box header-list">
      <li class="logo">
        LOGO
      </li>
      <li class="login">
        周周
        <span>[老师]</span>
        <router-link  :to="{path:'/'}" >
        <span class="login-out">退出</span>
        </router-link>
      </li>
      <li @click="openScreen">
        投屏
      </li>
      <router-link  :to="{path:'/resource-teacher'}" >
      <li :class="[this.activeName=='resoure'?'activename':'']">
        我的资源
      </li>
      </router-link>
      <router-link  :to="{path:'/enter'}" >
      <li :class="[this.activeName=='class'?'activename':'']">
        我的教学
      </li>
      </router-link>

    </ul>
    <!--院校管理-->
    <ul v-if="this.activeName=='collegesmant'" class="pre-box header-list">
      <li class="logo">
        LOGO
      </li>
      <li class="login">
        木糖醇
        <span>[院校管理员]</span>
        <router-link  :to="{path:'/'}" >
          <span class="login-out">退出</span>
        </router-link>
      </li>
        <li :class="[this.activeName=='collegesmant'?'activename':'']">
          资源审核
        </li>
    </ul>
    <!--平台管理-->
    <ul v-if="this.activeName=='platformmant'" class="pre-box header-list">
      <li class="logo">
        LOGO
      </li>
      <li class="login">
        嘎巴都
        <span>[平台管理员]</span>
        <router-link  :to="{path:'/'}" >
           <span class="login-out">退出</span>
        </router-link>
      </li>
        <li :class="[this.activeName=='platformmant'?'activename':'']">
          资源审核
        </li>
    </ul>
    <el-dialog
      title=""
      :visible.sync="screenVisible"
      width="30%">
      <div class="screen-box">
        <img src="../assets/teacher/erweim.png" alt="">
        <p>请用手机扫描二维码</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Heade',
    components: {


    },
    props:['activeName'],

    data() {
      return {
        screenVisible:false
      }
    },
    computed:{


    },
    mounted() {
      console.log("activeName",this.activeName)

    },

    methods: {
      openScreen(){
        this.screenVisible=true
        setTimeout(()=>{
          this.screenVisible=false
        },5000)

      }

    }
  }
</script>
<style lang="less">
  .header{
    width: 100%;
    height: 60px;
    background: #21ca65;
    .header-list{
      margin: 0 auto;
      line-height: 60px;
      .logo{
        float: left;
        margin-right: 30px;
        margin-left: 0;
        font-size: 30px;
        color: #fff;
      }
      li{
        float: right;
        margin-left: 80px;
        padding: 0 10px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        &:hover{
          color: #000;
        }
      }
      .activename{
        background: #f6d126;
        color: #fff;
      }

      .login{
        font-size: 18px;
        color: #fcf5ca;
        span{
          font-size: 14px;
        }
        .login-out{
          margin-left: 50px;
          color: #fff;
          padding: 3px 10px;
          line-height: 22px;
          background: #e9644b;
          border-radius: 15px;

        }
      }
    }
    .screen-box{
      width: 100%;
      text-align: center;
      img{
        width: 300px;
        height: 300px;
      }
      p{
        font-size: 16px;
        color: #999;
        line-height: 40px;
        text-align: center;
      }
    }
  }

</style>
