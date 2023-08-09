<script setup lang="ts">
  import { defineProps } from 'vue';

  defineProps({
    products: {
      type: Array,
      required: true,
    },
    coverImgField: {
      type: String,
      required: false,
      default: 'img',
    },
  });
</script>

<template>
  <view class="product-list">
    <view class="product-item" v-for="(item, index) in products" :key="index">
      <view class="product-img">
        <img alt="Random image from unsplash" :src="item[coverImgField]" class="css-gui-fjakwv" />
      </view>
      <view class="product-metas">
        <view class="product-name">{{ item.name }}</view>
        <view class="product-desc">{{ item.desc }}</view>
        <view class="product-actions">
          <text class="product-price">{{ item.price }}</text>
          <view class="zixun-btn">
            <up-button
              color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
              type="primary"
              size="mini"
              text="咨询"
            ></up-button>
          </view>

          <!--          <button class="mini-btn" type="warn" size="mini">按钮</button>-->
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .product-list {
    //-webkit-align-items: center;
    //-webkit-box-align: center;
    //-ms-flex-align: center;
    //align-items: center;
    gap: 19px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    //height: 1062px;
    //width: 576px;
    //background-color: #768e7d;
    //margin: 80px;
    padding: 0px;
  }

  .product-list .product-item:active {
    transform: scale(0.95);
  }
  .product-list .product-item {
    transition: transform 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    //background-color: rgba(188, 160, 160, 0.43);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    gap: 8px;
    //height: 131px;
    //width: 467px;
    //background-color: #a26d63;
    padding: 6px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .product-list .product-item .product-img {
    width: 35%;
    //height: 100%;
    //background-color: #9e67a2;
  }
  .css-gui-fjakwv {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  .product-list .product-item .product-metas {
    gap: 5px;
    width: 65%;
    //height: 100%;
    //background-color: #877370;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .product-list .product-item .product-metas .product-name {
    //height: 24px;
    color: #2e2e2e;
    font-weight: bold;
    font-size: 13px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .product-list .product-item .product-metas .product-desc {
    color: #a0a0a0;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 1.067vw;
    font-size: 12px;
    line-height: 5.067vw;
  }
  .product-list .product-item .product-metas .product-actions {
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    //background-color: #3331ab;
    -webkit-flex: 1 1 0px;
    -ms-flex: 1 1 0px;
    flex: 1;
  }
  .css-gui-wxx2q4 {
    height: 88px;
    width: 462px;
    background-color: #644540;
  }

  .product-list .product-item .product-metas .product-actions .product-price {
    color: red;
    font-weight: bold;
  }
  .zixun-btn {
    //width: 20px;
    margin-right: 0;
  }
</style>
