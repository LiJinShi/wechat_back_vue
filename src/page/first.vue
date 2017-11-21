<template lang="html">
  <div class="">
    <span class="pageT">FirstPage</span>
    <a href="http://www.cnblogs.com/buerjj/p/7868739.html">此页面代码讲解</a>

    <div class="goTwopage" @click="goTwopageClick()">
      进入第二个页面
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goTwopageClick() {
      this.$router.push('/two');
    }
  }
}
</script>

<style lang="css">

.pageT {
  color: orange;
}

.goTwopage {
  background-color: green;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
}

</style>
