<template>
    <div id="agreement">
        <title-hr msg="邀请规则"></title-hr>
        <p>活动期间，每邀请一位好友使用您的邀请码注册成功，您和TA都将获得随机优惠券，最高奖获得888元优惠券。</p>
        <title-hr msg="奖励发放"></title-hr>
        <p>奖励会直接发放到在您的帐号中，您可以通过个人中心查看您所获得的优惠券金额。</p>
        <title-hr msg="特别说明"></title-hr>
        <p>以上奖励规则仅适用于2019年12月1日之前邀请注册的好友
            同一账号将被视为同一个用户，不再重复获得奖励。<br/>
            举例：您在2019年10月31日邀请一位好友注册，您和TA都
            将获得随机优惠券奖励（价值10-888元）。</p>

        <p>如果您没有收到奖励，您可以通过发送邮件至我们的官方
            邮箱与我们沟通解决。<br/>
            收件邮箱： film1@filmptn.com<br/>
            邮件标题：邀请好友没收到奖励<br/>
            邮件内容：<br/>
            1.您的非幕帐号 2.您邀请的非幕帐号 3.您的邀请时间</p>
    </div>
</template>

<script>
    import titleHr from '../common/titleHr'
    export default {
        name: "agreement",
        components: {titleHr},
        metaInfo: {
            title: '使用条款', // set a title
        },
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }

    #agreement{
        padding: 36px 30px;
    }

    #agreement p{
        font-size:26px;
        font-family:PingFangSC-Regular,PingFangSC;
        color:rgba(0,0,0,0.6);
        line-height:37px;
        padding-left: 23px;
        margin: 20px 0 46px;
    }
</style>