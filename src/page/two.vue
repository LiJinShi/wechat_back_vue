<template lang="html">
  <div class="">
    <span>TwoPage</span>

    <input class="input-t" type="text" placeholder='任意输入...'>

    <div class="div-click" @click="divClick()">
      点击显示提示框
    </div>

    <div class="test-div" v-show='isShowTestDiv' @click="helloClick()">
      <p class="text">hello world</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Two',
  data() {
    return {
      isShowTestDiv: false
    }
  },
  methods: {
    divClick() { // 点击事件
      this.isShowTestDiv = true;
    },
    pushHistory() { // 修改history
      var state = {
        title: "",
        url: "/two" // 这个url可以随便填，只是为了不让浏览器显示的url地址发生变化，对页面其实无影响
      };
      window.history.pushState(state, state.title, state.url);
    },
    helloClick() { // 点击弹出来的hello蒙板
      this.isShowTestDiv = false;
      this.$router.back(); // 将self从history中移除
    }
  },
  mounted() {
    let that = this;
    // 添加返回事件监听
    window.addEventListener("popstate", function(e) {
      that.isShowTestDiv = false;
    }, false);
  },
  watch: {
    isShowTestDiv: function(newVal, oldVal) {
      if (newVal === true) {
        this.pushHistory();
      }
    }
  }
}
</script>

<style lang="css">
.div-click {
  background-color: green;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
}

.test-div {
  background-color: black;
  opacity: 0.5;

  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.input-t {
  display: block;
  margin-top: 30px;
  height: 35px;
  line-height: 35px;
  width: 130px;
  border: 1px solid orange;
  text-align: right;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;

  padding: 0 10px;
}


.test-div .text {
  color: orange;
}

</style>
