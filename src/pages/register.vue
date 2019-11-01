<template>
    <div id="register">
        <el-form :model="form" ref="form" class="form" id="container">
            <el-form-item label="昵称" prop="name" :rules="[{ required: true, message: '昵称不能为空',trigger:'blur'}]">
                <el-input v-model="form.name"  placeholder="请输入昵称" clearable></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone" :rules="[{ required: true, message: '手机号不能为空',trigger:'blur'},
            { validator: this.checkPhone, message: '您输入的号码不正确',trigger:'blur'}]">
                <el-input v-model="form.phone"  placeholder="请输入手机号" clearable @focus="inputFocus"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code" :rules="[{ required: true, message: '验证码不能为空',trigger:'blur'}]">
                <el-input type="code" v-model="form.code" placeholder="请输入验证码" clearable>
                    <span slot="append" v-if="sendMsgDisabled">{{time}}秒后获取</span>
                    <span slot="append" v-else @click="code">获取验证码</span>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '密码不能为空',trigger:'blur'}]">
                <el-input type="password" v-model="form.password" placeholder="请输入密码" clearable></el-input>
            </el-form-item>
        </el-form>
        <div class="btn" @click="submit">免费注册</div>
        <div class="desc">点击免费「注册按钮」将视为您同意非幕<router-link to="/agreement">使用条款</router-link></div>
    </div>
</template>

<script>
    import global_ from '../common/Global'
    export default {
        name: "register",
        data(){
            return{
                checkPhone:global_.isPhone,
                form:{
                    phone:'',
                    name:'',
                    password:'',
                    code:''
                },
                time: 60, // 发送验证码倒计时
                sendMsgDisabled: false,
                viewTop:'',
                viewBottom:'',
                elementTop:'',
                elementBottom:''
            }
        },
        metaInfo: {
            title: '非幕新用户注册', // set a title
        },
        methods:{
            inputFocus(e){
                var getElementPosition = function(elem) {
                    var defaultRect = {top: 0, left: 0};
                    var rect = (elem.getBoundingClientRect && elem.getBoundingClientRect()) || defaultRect;
                    var ret = {
                        top: rect.top + document.body.scrollTop,
                        left: rect.left + document.body.scrollLeft
                    }
                    return ret;
                }
                this.elementTop = getElementPosition(e.srcElement).top; // 元素顶部位置
                this.elementBottom = this.elementTop + e.srcElement.clientHeight; // 元素底部位置
            },

            code(){
                let form = new FormData()
                form.append('phone',this.form.phone)
                this.$axios.post('/sms/signup',form
                ).then((response)=> {
                    if(response.data.msg == 'ok'){
                        this.sendMsgDisabled = true;
                        var auth_timetimer =  setInterval(()=>{
                            this.time--;
                            if(this.time<=0){
                                this.time=60;
                                this.sendMsgDisabled = false;
                                clearInterval(auth_timetimer);
                            }
                        }, 1000);
                    }else{
                        this.$message(response.data.msg);
                    }
                })
            },
            submit(){
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        if(this.$route.query.invite_code){
                            this.form.invite_code = this.$route.query.invite_code
                        }
                        this.$axios({
                                url:'/home/signup_sms',
                                method: 'post',
                                headers:{
                                    'Content-type': 'application/x-www-form-urlencoded'
                                },
                                data:this.form,
                                transformRequest: [function (data) {
                                    let ret = ''
                                    for (let it in data) {
                                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                                    }
                                    return ret
                                }]
                            }
                        ).then((response)=> {
                            if(response.data.msg == 'ok'){
                                this.$router.push('/finish')
                            }else{
                                this.$message(response.data.msg)
                            }
                        })
                    }
                });

            },
        },
        mounted(){
            this.clientHeight = document.documentElement.clientHeight;
            const that = this;
// 安卓手机键盘吊起挡住输入框

            window.onresize = ()=> {
                this.viewTop = document.body.scrollTop;
                this.viewBottom = this.viewTop + window.innerHeight;
                window.scrollTo(0, this.elementTop);
            };
        }
    }
</script>

<style>
    #register .el-form-item__label{
       width: 94px;
    }

    #register .el-form-item__label:after{
        content: '';
    }

    #register .el-form-item__content{
        margin-left: 30px;
        width: calc(100% - 124px);
    }

    #register .el-input__inner{
        padding-left: 0;
    }

    #register .el-input .el-input-group__append{
        width: 140px;
        font-size:28px;
        font-family:PingFangSC-Regular,PingFangSC;
        color:rgba(108,111,192,1);
        line-height:40px;
    }
</style>

<style scoped>
    *{
        box-sizing: border-box;
    }

    #register{
        width: 100vw;
        min-height: 100vh;
        background-image: url("../assets/registerBg.png");
        background-size: 100vw;
        /*background-position: center;*/
        background-repeat: no-repeat;
        background-color: #4C2F79;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    #register .form{
        width: 566px;
        margin: 508px auto 0;
    }

    #register .btn{
        width:560px;
        height:84px;
        background:rgba(254,105,13,1);
        border-radius:60px;
        margin: 0 auto;
        text-align: center;
        font-size:30px;
        font-family:PingFangSC-Regular,PingFangSC;
        color:rgba(255,255,255,1);
        line-height:84px;
        cursor: pointer;
    }

    #register .desc,
    #register .desc a{
        font-size:22px;
        font-family:PingFangSC-Regular,PingFangSC;
        margin: 20px auto 0;
        color:rgba(61,70,91,0.6);
        line-height:30px;
        text-align: center;
    }

</style>