<template>
  <view>
    <u-swiper
      circular
      :current="current"
      @change="e => (current = e.current)"
      :list="imgs"
      keyName="url"
      :autoplay="false"
      radius="0"
      height="313"
    >
      <template #indicator>
        <view class="indicator">
          <!--      <up-button-->
          <!--        @click="changeGroup(item)"-->
          <!--        class=" indicator__dot"-->
          <!--        v-for="item in imgsWithGroup"-->
          <!--        size="mini"-->
          <!--        :text="item.name"-->
          <!--      ></up-button>-->
          <button
            style="font-size: 12px; text-align: center; border-radius: 100px"
            @click="changeGroup(item)"
            :class="getClass(item)"
            v-for="item in imgsWithGroup"
          >
            {{ item.name }}
          </button>
        </view>
      </template>
    </u-swiper>

    <view class="img-current">
      <!--        <img src="//img.souche.com/bolt/10ZBd4q_dRmTbJruQmAs0/%E5%9B%BE%E7%89%87%E7%85%A7%E7%89%87.png" alt="" />-->
      <view class="current">{{ current + 1 }}/{{ total }}</view>
    </view>
  </view>

  <view  class="page" style="position: relative;top: -50px;padding: 3vw">
    <view class="page-item car-details-card">
      <text class="car-name"> 奥迪A4L 2020款 40 TFSI 豪华动感型</text>
      <view class="price">
        <view class="price-left">
          <view class="price-left-text"> 22.80 </view
          ><!----><!----><!----><!----></view
        >
        <view class="price-right"></view>
      </view>
      <view class="new-car">
        新车价: 34.38万<!---->
        <text class="diff">省11.58万</text>
      </view>

      <u-divider text=""></u-divider>

      <view class="price-calc-card">
        <view class="price-calc-card_title">
          <view style="display: flex; justify-content: center; align-items: center; margin-right: auto">
            <image style="width: 18px; height: 18px" mode="widthFix" src="/static/svg/guzhi.svg" />
            <text class="price-calc-card_title_main">估价助手</text>
          </view>
          <text class="price-calc-card_title_desc">车辆精准估值,收车更放心</text>
        </view>
        <view class="price-calc-card_btn">
          <text>去估价</text>
        </view>
      </view>
    </view>

    <!--region 2.车辆参数-->
    <view class="page-item car-config-card">
      <view class="car-config-card_title">车辆配置</view>

      <view class="car-config-card_main">
        <view class="car-config-card_main_item" v-for="(item, index) in configs" :key="index">
          <text class="car-config-card_main_item_key">{{ item.value }}</text>
          <text class="car-config-card_main_item_value">{{ item.key }}</text>
        </view>
      </view>

      <view class="car-config-card_showmore">
        <text class="car-config-card_showmore_text">查看更多参数配置</text>
      </view>
    </view>
    <!--endregion-->
    <!--region 3.车辆实拍-->
    <view class="car-imgs">
      <view class="car-imgs_title">车辆实拍</view>
      <view class="car-imgs_main">
        <image v-for="(item, index) in imgs" :key="index" :src="item.url"></image>
      </view>
    </view>
    <!--endregion-->

    <!--region 4.同店推荐-->
    <view class="car-recommends">
      <view class="car-recommends_title">同店推荐</view>

      <view class="car-recommends_main">
        <view class="car-recommends_main_item" v-for="(item, index) in recommends" :key="index">
          <image class="car-recommends_main_item_img" :src="item.img"></image>
          <view class="car-recommends_main_item_desc">
            <text class="car-recommends_main_item_desc_title">{{ item.title }}</text>
            <text class="car-recommends_main_item_desc_desc">{{ item.desc }}</text>
            <text class="car-recommends_main_item_desc_price">{{ item.price }}</text>
          </view>
        </view>
      </view>
    </view>
    <!--endregion-->

    <view style="height: 40px; display: block"></view>
  </view>

  <view class="car-actions">
    <view class="small-actions">
      <view class="small-actions-item">
        <image class=" " src="/static/svg/guzhi.svg" />
        <text>关注</text>
      </view>

      <view class="small-actions-item">
        <image class=" " src="/static/svg/guzhi.svg" />
        <text>门店</text>
      </view>
    </view>
    <view class="big-actions">
      <view class="big-actions-item">
        <text class="title">马上联系</text>
        <text class="desc">杨涛</text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
  import { get, groupBy } from 'lodash-es';

  const current = ref(0);

  interface CarImg {
    url: string;
    type: string;
  }

  interface CarImgGroup {
    name: string;
    imgs: Array<CarImg>;
  }

  interface CarConfig {
    key: string;
    value: string;
  }

  interface Car {
    title: string;
    desc: string;
    price: string;
    img: string;
  }

  const recommends = ref<Array<Car>>([
    {
      title: '奥迪A4L 2020款 40 TFSI 豪华动感型',
      desc: '2020年/1.4万公里',
      price: '22.80万',
      img: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/0194CDDE-82B7-428E-82BD-4EC30C97C27E.jpg',
    },
    {
      title: '奥迪A4L 2020款 40 TFSI 豪华动感型',
      desc: '2020年/1.4万公里',
      price: '22.80万',
      img: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/0194CDDE-82B7-428E-82BD-4EC30C97C27E.jpg',
    },
    {
      title: '奥迪A4L 2020款 40 TFSI 豪华动感型',
      desc: '2020年/1.4万公里',
      price: '22.80万',
      img: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/0194CDDE-82B7-428E-82BD-4EC30C97C27E.jpg',
    },
    {
      title: '奥迪A4L 2020款 40 TFSI 豪华动感型',
      desc: '2020年/1.4万公里',
      price: '22.80万',
      img: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/0194CDDE-82B7-428E-82BD-4EC30C97C27E.jpg',
    },
    {
      title: '奥迪A4L 2020款 40 TFSI 豪华动感型',
      desc: '2020年/1.4万公里',
      price: '22.80万',
      img: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/0194CDDE-82B7-428E-82BD-4EC30C97C27E.jpg',
    },
  ]);

  const configs = ref<Array<CarConfig>>([
    {
      key: '上市时间',
      value: '2020-06-01',
    },
    {
      key: '车身结构',
      value: '4门5座三厢车',
    },
    {
      key: '长*宽*高(mm)',
      value: '4762*1847*1431',
    },
    {
      key: '轴距(mm)',
      value: '2820',
    },
    {
      key: '车身结构',
      value: '4门5座三厢车',
    },
    {
      key: '年检到期',
      value: '2021-06-01',
    },
    {
      key: '交强险到期',
      value: '2021-06-01',
    },
  ]);
  const imgs = ref<Array<CarImg>>([
    {
      url: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/0194CDDE-82B7-428E-82BD-4EC30C97C27E.jpg',
      type: '外观',
    },
    {
      url: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/1171E870-3EB5-4EFE-88A0-A9F2323FCD88.jpg',
      type: '外观',
    },
    {
      url: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/DA6DE43D-8655-440B-9210-1914A2930E70.jpg',
      type: '内饰',
    },
    {
      url: 'https://zmesc.oss-cn-hangzhou.aliyuncs.com/FB47E230-25C7-41C1-9C75-020DF345E323.jpg',
      type: '内饰',
    },
  ]);
  const total = ref(imgs.value.length);
  const imgsWithGroup = ref<Array<CarImgGroup>>();
  imgsWithGroup.value = Object.entries(groupBy(imgs.value, 'type')).map(([name, imgs]) => ({ name, imgs }));
  const changeGroup = (group: CarImgGroup) => {
    current.value = imgs.value.findIndex(value => value.url === group.imgs[0].url);
  };
  const getClass = (group: CarImgGroup): string => {
    if (group.imgs.some(value => value.url === imgs.value[current.value].url)) {
      return 'indicator__dot--active';
    } else return 'indicator__dot';
  };
</script>
<style scoped lang="scss">
  .car-actions {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.2vw;
    background-color: white;
    //margin-top: 10vw;
    .small-actions {
      display: flex;
      //border-radius: 2.133vw;
      //padding: 2.2vw;
      flex-grow: 1;
      justify-content: space-around;
      .small-actions-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        font-size: 3.2vw;
        line-height: 1;
        color: #131212;

        image {
          width: 6vw;
          height: 6vw;
        }
      }
    }

    .big-actions {
      flex-grow: 3;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 3vw;
      font-size: 3.2vw;
      line-height: 1;
      color: #131212;

      .big-actions-item {
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        //gap: 3vw;
        //font-size: 3.2vw;
        //line-height: 1;
        //color: #131212;
        padding: 1vw;
        border-radius: 50px;
        background-color: #009b3f;
        .title {
          font-weight: bold;
          color: white;
          font-size: 5vw;
        }

        .desc {
          margin-top: 2vw;
          color: white;
        }
      }
    }
  }

  .car-recommends {
    display: flex;
    flex-direction: column;
    border-radius: 2.133vw;
    background-color: #fff;
    padding: 3.2vw 3.2vw 5.333vw 3.2vw;
    gap: 2.8vw;
    .car-recommends_title {
      font-weight: 600;
      font-size: 4.267vw;
      line-height: 1;
      color: #131212;
    }

    &_main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 3vw;
      &_item {
        width: 48%;
        height: 50vw;
        display: flex;
        flex-direction: column;
        gap: 1.067vw;
        align-items: center;

        &_img {
          width: 100%;
          height: 50vw;
          //height: 100%;
          //width: 30.4vw;
          //height: 30.4vw;
          border-radius: 2.133vw;
        }

        &_desc {
          display: flex;
          flex-direction: column;
          gap: 0.533vw;

          &_title {
            font-weight: 600;
            font-size: 3.2vw;
            line-height: 1;
            color: #131212;
          }

          &_desc {
            font-weight: 400;
            font-size: 2.667vw;
            line-height: 1;
            color: #666666;
          }

          &_price {
            font-weight: 600;
            font-size: 3.2vw;
            line-height: 1;
            color: red;
          }
        }
      }
    }
  }

  .car-imgs {
    display: flex;
    flex-direction: column;
    border-radius: 2.133vw;
    background-color: #fff;
    padding: 3.2vw 3.2vw 5.333vw 3.2vw;
    gap: 2.8vw;

    .car-imgs_title {
      font-weight: 600;
      font-size: 4.267vw;
      line-height: 1;
      color: #131212;
    }

    .car-imgs_main {
      display: flex;
      flex-direction: column;
      gap: 2.8vw;
      align-items: center;

      image {
        width: 100%;
        //height: 100%;
        //width: 30.4vw;
        //height: 30.4vw;
        border-radius: 2.133vw;
      }
    }
  }

  .car-config-card {
    display: flex;
    flex-direction: column;
    border-radius: 2.133vw;
    background-color: #fff;
    padding: 3.2vw 3.2vw 5.333vw 3.2vw;

    .car-config-card_title {
      font-weight: 600;
      font-size: 4.267vw;
      line-height: 1;
      color: #131212;
    }

    &_showmore {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3.2vw;
      font-size: 3.2vw;
      line-height: 1;
      background-color: #e5f9f3;
      height: 9vw;
      border-radius: 2.133vw;

      &_text {
        color: #2dbf93;
      }
    }

    &_main {
      display: flex;
      flex-wrap: wrap;
      gap: 3.2vw;
      margin-top: 3.2vw;
      justify-content: flex-start;

      &_item {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 3.2vw;
        line-height: 1;
        color: #131212;

        &_key {
          font-weight: 600;
        }

        &_value {
          margin-top: 1.2vw;
          font-weight: 400;
          color: #8d8e99;
          font-size: 3.2vw;
          line-height: 3.2vw;
        }
      }
    }
  }

  .car-details-card {
    display: flex;
    flex-direction: column;
    gap: 3px;
    //margin: 0 3.2vw;
    //position: absolute;
    //top: 75.2vw;
    //z-index: 3;
    //
    background-color: #fff;
    //width: 93.6vw;
    border-radius: 2.133vw;
    //top: 69.6vw;
    padding: 3.2vw 3.2vw 5.333vw 3.2vw;
    //box-sizing: border-box;

    .price-calc-card {
      align-items: center;
      justify-content: space-between;

      display: flex;
      padding: 3vw;
      border-radius: 2.133vw;
      background: linear-gradient(to right, #edf7ff, #cfeaff);

      &_title {
        display: flex;
        flex-direction: column;
        align-items: center;
        //justify-content: space-between;
        //gap: 1.067vw;
        //font-size: 3.2vw;
        //font-weight: 700;
        //color: #0084ff;
        //line-height: 3.2vw;

        &_main {
          font-size: 3.6vw;
          font-weight: 700;
          color: #0084ff;
          line-height: 3.2vw;
        }

        &_desc {
          font-size: 3.2vw;
          color: #8d8e99;
          line-height: 3.2vw;
        }
      }

      &_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20vw;
        height: 8vw;
        background-color: #0084ff;
        border-radius: 4vw;
        color: #fff;
        font-size: 3.2vw;
        font-weight: 700;
      }

      &_btn:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-top: 1.067vw solid transparent;
        border-bottom: 1.067vw solid transparent;
        border-left: 1.067vw solid #fff;
        margin-left: 1.067vw;
      }
    }

    .new-car {
      //margin-top: 2.133vw;
      color: #8d8e99;
      font-size: 3.2vw;
      line-height: 3.2vw;

      .diff {
        color: #ff571a;
        padding-left: 1.6vw;
      }
    }

    .price {
      //margin-top: 1.2vw;
      display: flex;
      align-items: center;
      //align-content: center;
      justify-content: space-between;

      .price-left {
        .price-left-text {
          color: #ff6026;
          font-size: 5.867vw;
          font-weight: 700;
          //position: relative;
        }

        .price-left-text:after {
          content: '万';
          font-size: 4.267vw;
          line-height: 4.267vw;
          margin-left: -0.533vw;
          top: 1.6vw;
        }
      }
    }

    .car-name {
      color: #131212;
      font-weight: 600;
      font-size: 4.8vw;
      line-height: 6.72vw;
      width: 86.667vw;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  //:deep(.u-swiper__indicator) {
  //  width: 100%;
  //  display: flex;
  //  flex-direction: row;
  //  height: 22px;
  //  //left: 4px;
  //  //right: 4px;
  //  justify-content: space-between;
  //  //bottom: 3px;
  //}

  .indicator {
    //position: relative;
    display: flex;
    justify-content: center;
    background-color: rgba(93, 95, 93, 0.98);
    border-radius: 100px;
    position: relative;
    bottom: 14px;
    //margin-right: auto;
    //margin-left: auto;
    //width: 300px;
    //gap: 5px;
    .indicator__dot {
      //width: 3vw;
      //height: 2vw;
      //height: 30px;
      //width: 30px;
      //border-style: none;
      //font-size: 12px;
      background-color: rgba(93, 95, 93, 0.98);
      border-style: none;
      border-radius: 100px;
      //background-color: rgba(255, 255, 255, 0.35);
      //margin: 0 5px;
      transition: background-color 0.3s;

      .indicator__dot--active {
        border-style: none;
        border-radius: 100px;
        background-color: #e7f0e7;
      }
    }
  }

  .img-current {
    position: relative;
    top: -12vw;
    width: 10vw;
    left: 4vw;
    //position: absolute;
    //left: 3.2vw;
    //top: 64vw;
    //z-index: 2;
    //margin-right: 2px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 13.333vw;
    padding: 1.367vw 3.067vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    //margin-left: auto;
  }

  .img-current .current {
    //padding-left: 1.733vw;
    color: #fff;
    font-size: 12px;
    line-height: 2.933vw;
  }
</style>
