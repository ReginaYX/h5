<template>
    <div id="finish">
        <img src="../assets/logo.png" alt="" class="logo">
        <div class="title">恭喜您，注册成功！</div>
        <div class="desc">奖励已存入您的非幕帐户中，您可通过电脑浏览器<br>登录官网进入“个人中心”查看优惠券。</div>
        <div class="guide">PC端访问网址：www.filmptn.com<br>或直接搜索：非幕制片</div>
        <img src="../assets/code.png" alt="" class="code">
    </div>
</template>

<script>
    export default {
        name: "finish",
        metaInfo: {
            title: '非幕新用户注册', // set a title
        },
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }

    #finish{
        width: 100vw;
        min-height: 100vh;
        background-image: url("../assets/getBg.png");
        background-size: 100vw;
        /*background-position: center;*/
        background-repeat: no-repeat;
        background-color: #4C2F79;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    #finish .logo{
        display: block;
        width: 170px;
        margin: 260px auto 0;
    }

    #finish .title{
        font-size:34px;
        margin: 52px auto 0;
        text-align: center;
        font-weight:bold;
        line-height: 34px;
        color:rgba(225,74,81,1);
    }

    #finish .desc{
        font-size:24px;
        color:rgba(0,0,0,0.8);
        text-align: center;
        margin: 34px auto 0;
        line-height: 36px;
    }

    #finish .guide{
        font-size:26px;
        margin: 100px auto 0;
        color:rgba(0,0,0,1);
        line-height: 40px;
        width: 412px;
    }

    #finish .code{
        width: 600px;
        display: block;
        margin: 32px auto;
    }
</style>