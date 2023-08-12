<script setup lang="ts"></script>

<template>
  <view class="flex flex-col justify-center items-center min-h-94.667vw">
    <image
      src="https://zmesc.oss-cn-hangzhou.aliyuncs.com/07f2a58df499137897378c0f0040fe84.jpg"
      class="w-full h-94.667vw"
    />

    <view class="flex flex-col w-95% rounded-2.133vw relative top--30vh bg-white p-3.2vw">
      <text class="title justify-center">我要卖车</text>
      <view class="flex items-center pt-[4.533vw] gap-1">
        <u-icon name="phone-fill" size="14"></u-icon>
        <input class="phone_input" placeholder="提交手机号,高价卖车" type="number" />
      </view>
      <u-divider style="margin: 10px 0"></u-divider>

      <view class="flex items-center pt-[4.533vw] gap-1">
        <u-icon name="car-fill" size="14"></u-icon>
        <input class="phone_input" placeholder="选择汽车品牌" />
        <u-icon name="arrow-right" size="14"></u-icon>
      </view>
      <u-divider style="margin: 10px 0"></u-divider>

      <view class="flex items-center pt-[4.533vw] gap-1">
        <u-icon name="account-fill" size="14"></u-icon>
        <input class="phone_input" placeholder="姓名" type="number" />
      </view>
      <u-divider style="margin: 10px 0"></u-divider>
      <view class="to-submit">预约卖车</view>

      <view class="m-5.333vw">
        <view class="step-title">卖车流程</view>
        <ul class="step-list">
          <li class="step-item"
            ><img src="//img.souche.com/f2e/c011d8151ff364d1e2e8c00a9ae09408.png" class="icon" />
            <p class="desc">预约卖车</p></li
          >
          <li class="split"></li>
          <li class="step-item"
            ><img src="//img.souche.com/f2e/0031af69d07b7c0db4be65a5497ec2ba.png" class="icon" />
            <p class="desc">到店检测</p></li
          >
          <li class="split"></li>
          <li class="step-item"
            ><img src="//img.souche.com/f2e/0af7c1db6f1c54ba1e313edc9f9a5d1d.png" class="icon" />
            <p class="desc">签约交易</p></li
          >
        </ul>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .step-title {
    display: flex;
    align-items: center;
    font-size: 4vw;
    color: #8d8e99;
    justify-content: center;
  }
  .step-title:before {
    display: inline-block;
    content: '';
    width: 1.067vw;
    height: 1.067vw;
    background: #d8d8d8;
    border-radius: 0.533vw;
    margin: 0 3.2vw;
  }
  .step-title:after {
    display: inline-block;
    content: '';
    width: 1.067vw;
    height: 1.067vw;
    background: #d8d8d8;
    border-radius: 0.533vw;
    margin: 0 3.2vw;
  }
  .step-list {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    margin-top: 4.267vw;
    padding-left: 0;
    .step-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .desc {
        font-size: 3.2vw;
        color: #5e5e66;
        margin-top: 2.133vw;
      }
      .icon {
        width: 10.667vw;
      }
    }
    .split {
      width: 3.2vw;
      height: 3.2vw;
      //margin-top: -6.4vw;
      background: url(//img.souche.com/f2e/8098d407a985432d9af1aef74a49b398.png) no-repeat;
      background-size: contain;
    }
  }
  .to-submit {
    color: #fff;
    font-size: 4.267vw;
    font-weight: 700;
    text-align: center;
    line-height: 10.667vw;
    border-radius: 5.867vw;
    background-image: linear-gradient(270deg, #ff9038, #ff571a);
    margin: 7.467vw 0 5.333vw;
  }

  .title {
    display: flex;
    height: 11.733vw;
    font-size: 4.8vw;
    color: #2e2e33;
    text-align: center;
    background: #fff;
  }

  .phone_input {
    flex: 1;
    font-size: 3.733vw;
    height: 4.8vw;
    line-height: 4.8vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: none;
    outline: none;
  }
</style>
