<template>
  <div class="header">
    <ul class="pre-box header-list">
      <li class="logo">
<!--        LOGO<span style="font-size:12px; color:#ffffff;">(第一版)</span>-->
      </li>
      <li class="login">
        钱晓鑫
        <span style="color:#ffffff;">[学生]</span>
        <router-link  :to="{path:'/'}" >
          <span class="login-out">退出</span>
        </router-link>
      </li>
      <router-link  :to="{path:'/resource-list-s'}" >
      <li :class="[this.activeName=='resoure'?'activename':'']">
        资源列表
      </li>
      </router-link>
      <router-link  :to="{path:'/my-course'}" >
      <li :class="[this.activeName=='class'?'activename':'']">
        我的课程
      </li>
      </router-link>


    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Heade',
    components: {
    },
    props:['activeName'],
    data() {
      return {}
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
  .header{
    width: 100%;
    height: 50px;
    background: -moz-linear-gradient(top, #21ca65 90%, #5cdb8f 100%);
    background: -webkit-linear-gradient(top, #21ca65 90%, #5cdb8f 100%);
    background: -o-linear-gradient(top, #21ca65 90%, #5cdb8f 100%);
    background: -ms-linear-gradient(top, #21ca65 90%, #5cdb8f 100%);
    background: linear-gradient(top,#21ca65 90%, #5cdb8f 100%);
    border-bottom: 1px solid #14c35a;
    .header-list{
      margin: 0 auto;
      line-height: 50px;
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
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        &:hover{
          color: #fff;
        }
      }
      .activename{
        background: #eb7f1e;
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
  }

</style>
