<template lang="html">
  <div class="content" :class="{noScroll: isShowPopup}">
    <div class="item">
      <a href="http://www.cnblogs.com/buerjj/p/7876057.html">此页的代码讲解</a>
    </div>

    <div :class="{noScroll: isShowPopup}" ref="itemContent">
      <div class="item" v-for="num in 50" @click="itemClick(num)">
        <div style="width:100%">点击item{{num}}</div>
      </div>
    </div>


    <div v-if="isShowPopup" class="popup" @click="popUpEmptyClick()" @scroll.prevent>
      <div class="message">
        <p class="message-title" v-for="num in 30" @click.stop="messageTitleClick(num)">
          消息提示 {{num}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Three',
  data() {
    return {
      isShowPopup: false,
      pageScrollYoffset: 0 // 保存滚动条位置
    }
  },
  components: {

  },
  methods: {
    getScrollTop(){ // 获取滚动条位置
        var scrollTop=0;
        if(document.documentElement&&document.documentElement.scrollTop){
            scrollTop=document.documentElement.scrollTop;
        }else if(document.body){
            scrollTop=document.body.scrollTop;
        }
        return scrollTop;
    },
    itemClick(num) { // 点击底部item
      console.log("itemClick" + num);
      this.pageScrollYoffset = this.getScrollTop();
      this.isShowPopup = true;
    },
    popUpEmptyClick() { // 点击弹窗空白处
      this.isShowPopup = false;
    },
    messageTitleClick(num) { // 点击了具体某条消息
      console.log("点击了消息", num);
    }
  },
  watch: {
    isShowPopup(newVal, oldVal) {
      if (newVal == true) {
        let cssStr = "overflow-y: hidden; height: 100%;";
        document.getElementsByTagName('html')[0].style.cssText = cssStr;
        document.body.style.cssText = cssStr;
      } else {
        let cssStr = "overflow-y: auto; height: auto;";
        document.getElementsByTagName('html')[0].style.cssText = cssStr;
        document.body.style.cssText = cssStr;
      }

      // 下面需要这两行代码，兼容不同浏览器
      document.body.scrollTop = this.pageScrollYoffset;
      window.scroll(0, this.pageScrollYoffset);
    }
  }
}
</script>

<style lang="css" scoped="123">

.content .item {
  background-color: white;
  padding-left: 12px;
  margin-bottom: 5px;
  height: 40px;
  width: auto;
  line-height: 40px;
  border: 1px solid orange !important;
}

/* 当前蒙层显示时生效 */
.noScroll {
  overflow-y: hidden;
}

.content .pop-item {
  padding-left: 12px;
  margin-bottom: 5px;
  height: 40px;
  line-height: 40px;
}

.content .popup {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex !important;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.content .message {
  background-color: blue;
  text-align: center;
  display: flex;
  flex-direction: column;

  color: white;
  width: 60%;
  height: 40%;
  overflow-y: scroll;
  /* ios需要下面这个属性 */
  -webkit-overflow-scrolling: touch;
}

.content .message-title {
  width: 100%;
}

</style>
