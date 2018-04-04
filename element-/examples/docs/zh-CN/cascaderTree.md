<script>
  import Mock from 'mockjs';
  import Vue from 'vue';
  import axios from 'axios'
  export default {
    data() {
      return {
       options2: [{
          label: '中国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: [{
            label: '辽宁',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山东',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '陕西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '海南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '浙江',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          }]
        }, {
          label: '美国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '英国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '韩国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '法国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }],
        props: {
          value: 'label',
          // label: 'objectName'
          children: 'cities'
        }
      }
    },
    mounted() {
      // setTimeout(()=>{
      //   this.options2 =  [{
      //     label: '中国',
      //     cities: [{
      //       label: '河南省',
      //       cities: [{
      //         label: '郑州市',
      //         cities: [{
      //           label: '金水区',
      //           cities: [{
      //             label: '豫A99999'
      //           }]
      //         }]
      //       }]
      //     }]
      //   }]
      // }, 3000);
      // setTimeout(()=>{
      //   axios.post('/api/platform/vehicleinfo/getVehicleTreeNewNoCount',{
      //     keywords:"160",
      //     queryField:"vehicleSn"
      //   },{
      //     headers: {
      //       AuthToken: '13cbca9b33594b129c25ec3844822586'
      //     }
      //   }).then((res)=>{
      //     console.log(res)
      //     this.options2 = res.data.data
      //   })
      // }, 3000);
      // this.$nextTick(() => {
      //   const demos = document.querySelectorAll('.source');
      //   demos[0].style.padding = '0';
      //   demos[demos.length - 1].style.padding = '0';
      // });
      // axios.post('/api/platform/vehicleinfo/getVehicleTreeNodesByOrgNewNoCount',{
      //   objectId:"0fbc56b2836c408b8385ca2ad0a515c8",
      //   objectType:"Ent"
      // },{
      //   headers: {
      //     AuthToken: '13cbca9b33594b129c25ec3844822586'
      //   }
      // }).then((res)=>{
      //   this.options2 = res.data.data
      // })
      // axios.post('/api/platform/vehicleinfo/getVehicleTreeNodesByOrg',{
      //   objectId:"0fbc56b2836c408b8385ca2ad0a515c8",
      //   objectType:"Ent"
      // },{
      //   headers: {
      //     AuthToken: '13cbca9b33594b129c25ec3844822586'
      //   }
      // }).then((res)=>{
      //   this.options2 = res.data.data;
      // })
    },
    methods: {
      handleItemChange(val, lastitem, fun, test) {
        // axios.post('/api/platform/vehicleinfo/getVehicleTreeNodesByOrgNewNoCount',{
        //   objectId:lastitem.objectId,
        //   objectType:lastitem.objectType
        // },{
        //   headers: {
        //     AuthToken: '13cbca9b33594b129c25ec3844822586'
        //   }
        // }).then((res)=>{
        //   lastitem.children = res.data.data
        //   fun()
        // })
        // axios.post('/api/platform/vehicleinfo/getVehicleTreeNodesByOrg',{
        //   objectId:lastitem.objectId,
        //   objectType:lastitem.objectType
        // },{
        //   headers: {
        //     AuthToken: '13cbca9b33594b129c25ec3844822586'
        //   }
        // }).then((res)=>{
        //   lastitem.children = res.data.data
        //   fun()
        // })
        setTimeout(_ => {
          switch(test){
            case 1:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@province",
                                    "cities":[],
                                    "objectId":"@integer(10000,99999)",
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    }
                                  ]
                                }).arr
              break;
            case 2:
              Vue.set(lastitem, 'cities', Mock.mock({
                                  "arr|20":[
                                    {
                                    "label":"@city",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr)
              break;
            case 3:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@county",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr
              break;
            case 4:
              lastitem.cities = Mock.mock({
                                  "arr|50":[
                                    { 
                                    "label":"豫A@integer(10000,99999)",
                                    "objectId":"@integer(10000,99999)",
                                    "isOnline":"@boolean()"
                                    }
                                  ]
                                }).arr
              break;
          }
          fun();
        }, 1000);
      },
      filter(val){
        console.log(val)
      },
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
<style>
  .demo-cascaderTree .block {
    padding: 30px 30px;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    height: 661px;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  .demo-cascaderTree{
    border: none !important;
    box-shadow: none !important;
  }
</style>

## CascaderTree 级联树

级联选择器和树的结合

### 基础用法

:::demo 只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。本例的选项数据源在初始化时不包含城市数据。利用`active-item-change`事件，可以在用户点击某个省份时拉取该省份下的城市数据。此外，本例还展示了`props`,`slot`的用法。
```html
<div class="block">
  <el-cascader-tree
    :options="options2"
    @active-item-change="handleItemChange"
    :props="props"
    @filter="filter"
  >
    <?xml version="1.0" encoding="UTF-8"?>
    <svg width="14px" height="14px" viewBox="0 0 14 14" slot="icon" id="icon_bus_filled_grey" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>icon_bus_filled_blue</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="正式页面" stroke="none" stroke-width="1" fill-rule="evenodd">
            <g id="2.31-充电机监控-组织筛选-最后车辆" transform="translate(-299.000000, -278.000000)">
                <g id="左侧菜单/地图监控/搜索展开" transform="translate(80.000000, 178.000000)">
                    <g id="树状筛选">
                        <g id="Filter/Cascader/Level1-Choice" transform="translate(0.000000, 91.000000)">
                            <g id="右" transform="translate(185.000000, 0.000000)">
                                <g id="Group">
                                    <g id="Filter/Date/Hour-List/上圆角">
                                        <g id="Group" transform="translate(16.000000, 7.000000)">
                                            <g id="Icons-Grey-/-bus" transform="translate(18.000000, 2.000000)">
                                                <path d="M10.5,12.4444444 L3.5,12.4444444 L3.5,13 C3.5,13.5522847 3.05228475,14 2.5,14 L2.16666667,14 C1.61438192,14 1.16666667,13.5522847 1.16666667,13 L1.16666667,11.6666667 L1.19144627,11.6666667 C1.17522905,11.5951975 1.16666667,11.5208209 1.16666667,11.4444444 L1.16666667,5.44444444 L1,5.44444444 L1,5.44444444 C0.44771525,5.44444444 -1.5440923e-16,4.99672919 -2.22044605e-16,4.44444444 L-5.55111512e-17,3.33333333 L0,3.33333333 C-6.76353751e-17,2.78104858 0.44771525,2.33333333 1,2.33333333 L1,2.33333333 L1.16666667,2.33333333 L1.16666667,1 L1.16666667,1 C1.16666667,0.44771525 1.61438192,-5.18242566e-16 2.16666667,-1.11022302e-15 L2.16666667,2.96059473e-17 L11.8333333,4.60865913e-15 L11.8333333,4.88498131e-15 C12.3856181,5.76458304e-15 12.8333333,0.44771525 12.8333333,1 L12.8333333,2.33333333 L13,2.33333333 C13.5522847,2.33333333 14,2.78104858 14,3.33333333 L14,4.44444444 C14,4.99672919 13.5522847,5.44444444 13,5.44444444 L12.8333333,5.44444444 L12.8333333,11.4444444 C12.8333333,11.5208209 12.824771,11.5951975 12.8085537,11.6666667 L12.8333333,11.6666667 L12.8333333,13 C12.8333333,13.5522847 12.3856181,14 11.8333333,14 L11.5,14 L11.5,14 C10.9477153,14 10.5,13.5522847 10.5,13 L10.5,12.4444444 Z M3.33333333,2.33338044 C2.78104858,2.33338044 2.33333333,2.78109569 2.33333333,3.33338044 L2.33333333,3.33338044 L2.33333333,7.70842847 C2.33333333,8.19726762 2.68674638,8.61445773 3.16893435,8.69482239 L3.16893435,8.69482239 L6.67120203,9.27853367 C6.88889924,9.31481654 7.11110076,9.31481654 7.32879797,9.27853367 L7.32879797,9.27853367 L10.8310657,8.69482239 C11.3132536,8.61445773 11.6666667,8.19726762 11.6666667,7.70842847 L11.6666667,3.33338044 C11.6666667,2.78109569 11.2189514,2.33338044 10.6666667,2.33338044 L3.33333333,2.33338044 Z M3.19417161,9.8795523 C3.12748358,9.85732295 3.05764793,9.84599018 2.98735257,9.84599018 C2.62614772,9.84599018 2.33333333,10.1388046 2.33333333,10.5000094 L2.33333333,10.5000094 L2.33333333,10.5000094 C2.33333333,11.0011544 2.73959159,11.4074126 3.24073655,11.4074126 L4.66666667,11.4074126 L4.66666667,11.0911432 C4.66666667,10.6607128 4.39123657,10.2785739 3.98289443,10.1424599 L3.19417161,9.8795523 Z M10.0171056,10.1424599 C9.60876343,10.2785739 9.33333333,10.6607128 9.33333333,11.0911432 L9.33333333,11.4074126 L10.7592634,11.4074126 C11.2604084,11.4074126 11.6666667,11.0011544 11.6666667,10.5000094 C11.6666667,10.4297141 11.6553339,10.3598784 11.6331046,10.2931904 C11.5188816,9.95052137 11.1484974,9.76532929 10.8058284,9.8795523 L10.0171056,10.1424599 Z" id="Combined-Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  </el-cascader-tree>
</div>

<script>
  export default {
    data() {
      return {
        options2: [{
          label: '中国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: [{
            label: '辽宁',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山东',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '陕西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '海南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '浙江',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          }]
        }, {
          label: '美国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '英国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '韩国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '法国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
      };
    },

    methods: {
      handleItemChange(val, lastitem, fun, test) {
        setTimeout(_ => {
          switch(test){
            case 1:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@province",
                                    "cities":[],
                                    "objectId":"@integer(10000,99999)",
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    }
                                  ]
                                }).arr
              break;
            case 2:
              Vue.set(lastitem, 'cities', Mock.mock({
                                  "arr|20":[
                                    {
                                    "label":"@city",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr)
              break;
            case 3:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@county",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr
              break;
            case 4:
              lastitem.cities = Mock.mock({
                                  "arr|50":[
                                    { 
                                    "label":"豫A@integer(10000,99999)",
                                    "objectId":"@integer(10000,99999)",
                                    "isOnline":"@boolean()"
                                    }
                                  ]
                                }).arr
              break;
          }
          fun();
        }, 1000);
      },
      filter(val){
        console.log(val)
      }
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| checkbox | 是否支持多选 | boolean | true / false | true |
| breadcrumb | 是否显示面包屑 | boolean | true / false | true |
| options | 可选项数据源，键名可通过 `props` 属性配置 | array | — | — |
| props | 配置选项，具体见下表 | object | — | — |

### props
| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| value    | 指定选项的值为选项对象的某个属性值 | string | — | — |
| label    | 指定选项标签为选项对象的某个属性值 | string | — | — |
| children | 指定选项的子选项为选项对象的某个属性值 | string | — | — |
| disabled | 指定选项的禁用为选项对象的某个属性值 | string | — | — |

### slot
| 名字     | 说明              | 用法   |
| -------- | ----------------- | ------ |
| icon    | 指定最后一级车辆前显示的图标，根据最后一级`isOnline`属性显示车辆是否在线颜色 | 传入SVG元素，大小为14*14，id为`icon_bus_filled_grey`,请勿传入`fill`属性 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| active-item-change | 当父级选项变化时触发的事件，仅在 `change-on-select` 为 `false` 时可用 | (val:各父级选项数组, lastitem:最后一级被选中的选项, fun:回调函数，当子级数据加载完成时必须调用) |
| filter | 当点击筛选时时触发 | 筛选结果 |