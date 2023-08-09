<script setup lang="ts">
  const searchValue = ref('');
</script>

<template>
  <view class="page">
    <u-search class="cars-search-bar page-item" placeholder="日照香炉生紫烟" v-model="searchValue"></u-search>

    <!--    <uni-section class="page-item" title="基础用法"></uni-section>-->

    <div data-v-2066a382="" class="hots">
      <div data-v-2066a382="" class="hots-header"><span data-v-2066a382="" class="hots-title">热门搜索</span></div>
      <div data-v-2066a382="" class="hots-main">
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/0mqGUDiWbj.png')"
          ></div>
          <div data-v-2066a382="" class="name">奔驰</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/ik403ZDSAX.png')"
          ></div>
          <div data-v-2066a382="" class="name">宝马</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/WG6tTxwZKi.png')"
          ></div>
          <div data-v-2066a382="" class="name">丰田</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/bBAheBn2RL.png')"
          ></div>
          <div data-v-2066a382="" class="name">大众</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/ZSaCy7dE8c.png')"
          ></div>
          <div data-v-2066a382="" class="name">比亚迪</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/KG441Un6Km.png')"
          ></div>
          <div data-v-2066a382="" class="name">奥迪</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/jpQ5rosd4Z.png')"
          ></div>
          <div data-v-2066a382="" class="name">本田</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/lh4kDQf7rw.png')"
          ></div>
          <div data-v-2066a382="" class="name">马自达</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/fRgPVAtVkH.png')"
          ></div>
          <div data-v-2066a382="" class="name">英菲尼迪</div>
        </div>
        <div data-v-2066a382="" class="hots-selector">
          <div
            data-v-2066a382=""
            class="icon"
            style="background-image: url('http://img.souche.com/files/brand/fK6PQzLAgz.png')"
          ></div>
          <div data-v-2066a382="" class="name">吉利汽车</div>
        </div>
      </div>
    </div>
  </view>
</template>

<style scoped lang="scss">
  .hots {
    line-height: 1;
  }
  .hots .hots-header {
    padding: 0 5.333vw;
    font-size: 3.733vw;
    font-weight: 700;
    color: #131212;
  }
  .hots .hots-main {
    display: flex;
    flex-wrap: wrap;
    padding: 2.4vw 3.6vw;
  }
  .hots .hots-main .hots-selector {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0.8vw;
    width: 15.5vw;
    height: 15.5vw;
    font-size: 3.2vw;
    color: #5e5e66;
  }
  .hots .hots-main .hots-selector .icon {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    height: 8.533vw;
    width: 8.533vw;
  }
  .hots .hots-main .hots-selector .name {
    margin-top: 2.133vw;
  }
</style>
