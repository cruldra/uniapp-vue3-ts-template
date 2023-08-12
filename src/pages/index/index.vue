<template>
  <view style="background-color: white" class="page">
    <!--    <div class="header-gradient"></div>-->
    <!--    <uni-search-bar style="padding: 0px" v-model="searchValue" @blur="blur" placeholder="想要什么车" radius="50">
    </uni-search-bar>-->

    <u-search
      class="page-item"
      @focus="navigateToSearch"
      placeholder="日照香炉生紫烟"
      v-model="searchValue"
      :showAction="false"
    ></u-search>
    <u-swiper class="page-item" :list="list2" keyName="image" showTitle :autoplay="false" circular></u-swiper>

    <uni-card is-full class="page-item services-card" style="border-radius: 10px">
      <div class="service-container">
        <div class="service-item">
          <image style="width: 24px; height: 24px" mode="widthFix" src="/static/svg/maiche.svg" />
          <div class="name" @click="navigateToSell">我要卖车</div>
        </div>
        <div class="service-item">
          <image style="width: 24px; height: 24px" mode="widthFix" src="/static/svg/guzhi.svg" />
          <div class="name">爱车估值</div>
        </div>
        <div class="service-item">
          <image style="width: 24px; height: 24px" mode="widthFix" src="/static/svg/find_car.svg" />
          <div class="name">帮我找车</div>
        </div>
        <div class="service-item">
          <image style="width: 24px; height: 24px" mode="widthFix" src="/static/svg/yuyue.svg" />
          <div class="name">预约到店</div>
        </div>
      </div>
    </uni-card>

    <u-subsection :list="list" :current="curNow" @change="sectionChange"></u-subsection>

    <uni-product-list class="page-item" detail-page="detail" :products="productList" />
    <u-empty
      v-if="productList.length == 0"
      class="page-item cars-is-empty"
      text="没有符合条件的车源"
      mode="search"
      icon="http://cdn.uviewui.com/uview/empty/search.png"
    >
    </u-empty>
    <!--    <uni-header-selecter
      class="cars-filter-bar page-item"
      :filterData="filters"
      :updateMenuName="true"
      @confirm="confirm"
      dataFormat="Object"
    ></uni-header-selecter>-->
  </view>
</template>
<script lang="ts" setup>
  import AppProvider from '@/components/AppProvider/inedx.vue';
  import { getCars } from '@/api/cars';
  const navigateToSearch = () => uni.navigateTo({ url: 'search' });
  const navigateToSell = () => uni.navigateTo({ url: 'sell' });

  const list = ref(['最新上架', '新手上路', '经典老车']);
  const productList = ref([]);
  const curNow = ref(0);
  const sectionChange = (index: number) => {
    curNow.value = index;
  };
  const searchValue = ref('');
  const current = ref(0);
  const list2 = ref([
    {
      image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
      title: '昨夜星辰昨夜风，画楼西畔桂堂东',
    },
    {
      image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      title: '身无彩凤双飞翼，心有灵犀一点通',
    },
    {
      image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
      title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
    },
  ]);

  const filters = ref([
    {
      name: '价格',
      type: 'radio',
      submenu: [
        {
          name: '  ',
          type: 'radio',
          submenu: [
            {
              name: '不限',
              value: '0-10000',
            },
            {
              name: '0-10万',
              value: '0-10',
            },
            {
              name: '10-20万',
              value: '10-20',
            },
            {
              name: '20-30万',
              value: '20-30',
            },
            {
              name: '30-40万',
              value: '30-40',
            },
            {
              name: '40-60万',
              value: '40-60',
            },
            {
              name: '60-100万',
              value: '60-100',
            },
            {
              name: '100万以上',
              value: '100-10000',
            },
          ],
        },
      ],
    },
    {
      name: '排序',
      type: 'hierarchy',
      submenu: [
        {
          name: '综合排序',
          value: 0,
        },
        {
          name: '按价格从低到高',
          value: 1,
        },
        {
          name: '按价格从高到低',
          value: 2,
        },
        {
          name: '按表显小时从低到高',
          value: 3,
        },
        {
          name: '按出厂年限从近到远',
          value: 4,
        },
        {
          name: '按最新发布时间',
          value: 5,
        },
      ],
    },
    {
      name: '筛选',
      type: 'radio',
      submenu: [
        {
          name: '设备来源',
          submenu: [
            {
              name: '个人发布',
              value: '0',
            },
            {
              name: '平台车源',
              value: '1',
            },
            {
              name: '自营认证',
              value: '2',
            },
          ],
        },
        {
          name: '表显小时数',
          submenu: [
            {
              name: '不限',
              value: '0-1000000',
            },
            {
              name: '0-2000',
              value: '0-2000',
            },
            {
              name: '2000-5000',
              value: '2000-5000',
            },
            {
              name: '5000-8000',
              value: '5000-8000',
            },
            {
              name: '8000以上',
              value: '8000-1000000',
            },
          ],
        },
        {
          name: '发布时间',
          submenu: [
            {
              name: '不限',
              value: 10000,
            },
            {
              name: '今天',
              value: 0,
            },
            {
              name: '7天以内',
              value: 7,
            },
            {
              name: '1个月内',
              value: 30,
            },
            {
              name: '3个月内',
              value: 90,
            },
            {
              name: '6个月内',
              value: 180,
            },
            {
              name: '9个月内',
              value: 270,
            },
            {
              name: '1年以内',
              value: 365,
            },
          ],
        },
      ],
    },
  ]);

  onMounted(() => {
    getCars().then(res => {
      productList.value = res.data.items.map((item: any) => ({
        ...item,
        img: item.seriesImg,
        name: item.seriesName,
        desc: item.firstLicensePlateDateStr + ' | ' + item.mileageStr + ' | ' + item.emissionStandard,
        price: item.salePriceStr + ' 万',
      }));
    });
  });
</script>

<style lang="scss" scoped>
  .header-gradient {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 46.667vw;
    background-image: linear-gradient(#5879d0 70%, #f7f8fa);
  }

  .search-container {
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 0 3.2vw;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #5879d0;
    z-index: 602;
  }

  .service-container {
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: 2.133vw;
    //margin: 0 3.2vw;
    overflow-x: scroll;
  }

  .service-container .service-item {
    display: flex;
    flex-direction: column;
    //padding: 4.8vw 0;
    width: 25%;
    align-items: center;
    flex-shrink: 0;
  }
</style>
