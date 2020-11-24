<template>
  <div class="header">
    <ul class="pre-box header-list">
      <li class="logo">
        LOGO
      </li>
      <li class="login">
        花花
        <span>[学生]</span>
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
  }

</style>
