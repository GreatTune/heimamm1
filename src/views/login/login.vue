<template>
  <div class="login-centartion">
    <div class="login-left">
      <div class="box-title">
        <div class="left-img">
          <img src="../../assets/login-logo.png" alt="" />
        </div>
        <div class="left-title">黑马面面</div>
        <div class="left-link"></div>
        <div class="left-user">用户登录</div>
      </div>
    </div>
    <div class="login-right">
      <img src="../../assets/login_banner_ele.png" alt="" />
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'login',
      form: {
        name: '',
      }
    }
  }
}
</script>

<style lang="less">
.login-centartion {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .login-left {
    display: inline-block;
    width: 478px;
    height: 550px;
    padding-top: 48px;
    background: rgba(245, 245, 245, 1);
    box-sizing: content-box;
    .box-title {
      display: flex;
      align-items: center;
      margin-left: 48px;
      .left-img {
        img {
          font-size: 22px;
        }
      }
      .left-title {
        margin-left: 16px;
        margin-right: 14px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .left-link {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .left-user {
        font-size: 22px;
        color: rgba(12, 12, 12, 1);
      }
    }
  }
}
</style>
