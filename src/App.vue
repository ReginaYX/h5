<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    margin: 0;
    list-style: none;
    text-decoration: none;
    padding: 0;
    box-sizing: border-box;
  }

  /*form表单*/
  #app .el-form-item{
    display: flex;
    border-bottom: 2px solid rgba(218,218,218,0.9);
    height: 60px;
    align-items: center;
    margin-bottom: 66px;
  }

  #app .el-form-item__label{
    font-size:28px;
    font-family:PingFangSC-Regular,PingFangSC;
    color:rgba(97,97,97,1);
    line-height:60px;
    text-align: left;
    padding: 0;
    flex-shrink: 0;
  }
  #app .el-form-item.is-required:not(.is-no-asterisk)
  #app .el-form-item__label-wrap>.el-form-item__label:before,
  #app .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
    content: '';
  }

  #app .el-form-item__label:after{
    content: '*';
    color: #F56C6C;
    margin-left: 4px;
    font-size: 12px;
  }

  #app .el-input__inner{
    background-color: transparent;
    border: none;
    height: 60px;
    font-size:28px;
    line-height: 40px;
    border: none;
  }

  #app .el-form-item__error{
    font-size:22px;
    top: calc(100% + 8px);
    right: 0;
    left: initial;
  }

  #app .el-input__suffix{
    top: 10px;
    right: 16px;
  }

  #app .el-input__suffix .el-input__suffix-inner i{
    font-size:30px;
    line-height: 40px;
  }

  #app .el-input .el-input-group__append{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
</style>
