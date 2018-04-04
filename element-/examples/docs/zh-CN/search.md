
<script>
    export default {
        data(){
            return{
                }
            },

        methods:{
            search(e){
                console.log(e)
            },
            clear(){
                console.log("清除事件")
            }
        }

        };

</script>

## Search 搜索框


基础样式

:::demo 通过'width'属性控制组件的宽度 'search,clear'分别代表了点击搜索和清除时的事件

```html

    <template>
      <div>
        <el-search :width='300' placeholder='请输入'  @search='search' @clear='clear' ></el-search>
      </div>
    </template>
       
    <script>
       export default {
        data(){
            return{
                }
            },

        methods:{
            search(e){
                console.log(e)
            },
            clear(){
                console.log("清除事件")
            }
            }

        };
    </script>
     
```
:::

简洁样式

:::demo

```html

    <template>
      <div>
        <el-search :width='300' placeholder='请输入' simple ></el-search>
      </div>
        
    </template>
       
    <script>
       export default {
        data(){
            return{
                }
            },
        };
    </script>
     
```
:::

### search slots
| name | 说明 |
|------|--------|
| width | 搜索框的宽度 |
| placeholder | 搜索框的内置文字 |
| simple | 搜索框的显示类型 |


### search Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| search | 点击搜索按钮 | 搜索框里的内容 |
| clear | 点击清除按钮 | -- |

