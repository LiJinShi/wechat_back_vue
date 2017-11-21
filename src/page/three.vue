<template lang="html">
  <div class="content" :class="{noScroll: isShowPopup}">
    <div class="item">
      <a href="http://www.cnblogs.com/buerjj/p/7876057.html">此页的代码讲解</a>
    </div>

    <div :class="{noScroll: isShowPopup}">
      <div class="item" v-for="num in 50" @click="itemClick(num)">
        <div style="width:100%">点击item{{num}}</div>
      </div>
    </div>


    <div v-if="isShowPopup" class="popup" @click="popUpEmptyClick()">
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
      isShowPopup: false
    }
  },
  components: {

  },
  methods: {
    itemClick(num) { // 点击底部item
      console.log("itemClick" + num);
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
        document.body.style.cssText = "overflow-y: hidden";
      } else {
        document.body.style.cssText = "overflow-y: auto";
      }
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
  justify-content: center;

  color: white;
  width: 60%;
  height: 40%;
  overflow-y: scroll;
}

.content .message-title {
  width: 100%;
}

</style>
