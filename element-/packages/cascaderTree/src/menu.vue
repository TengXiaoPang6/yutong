<script>
  import { isDef } from 'element-ui/src/utils/shared';
  import scrollIntoView from 'element-ui/src/utils/scroll-into-view';
  import { generateId } from 'element-ui/src/utils/util';
  import ElCheckbox from 'element-ui/packages/checkbox';
  import ElButton from 'element-ui/packages/button';
  import ElBreadcrumb from 'element-ui/packages/breadcrumb';

  const copyArray = (arr, props) => {
    if (!arr || !Array.isArray(arr) || !props) return arr;
    const result = [];
    const configurableProps = ['__IS__FLAT__OPTIONS', 'label', 'value', 'disabled', 'checked', 'count'];
    const childrenProp = props.children || 'children';
    arr.forEach(item => {
      const itemCopy = {};
      configurableProps.forEach(prop => {
        let name = props[prop];
        let value = item[name];
        if (value === undefined) {
          name = prop;
          value = item[name];
        }
        if (value !== undefined) itemCopy[name] = value;
      });
      if (Array.isArray(item[childrenProp])) {
        itemCopy[childrenProp] = copyArray(item[childrenProp], props);
      }
      result.push(itemCopy);
    });
    return result;
  };

  export default {
    name: 'ElCascaderMenu',

    data() {
      return {
        inputWidth: 0,
        options: [],
        props: {},
        visible: false,
        activeValue: [],
        value: [],
        expandTrigger: 'click',
        changeOnSelect: false,
        popperClass: '',
        hoverTimer: 0,
        clicking: false,
        checkbox: true,
        breadcrumb: true,
        result_totle: 0,
        buttonDisable: true,
        label: [],
        menuWidth: 185,
        result: [],
        please: true
      };
    },

    components: {
      ElCheckbox,
      ElButton,
      ElBreadcrumb
    },

    watch: {
      visible(value) {
        if (value) {
          this.activeValue = this.value;
        }
      },
      value: {
        immediate: true,
        handler(value) {
          this.activeValue = value;
        }
      },
      result_totle(value) {
        if (value) {
          this.buttonDisable = false ;
        } else {
          this.buttonDisable = true ;
        }
      },
      activeValue(value) {
        if (value.length) {
          this.please = false;
        } else {
          this.please = true;
        }
        let options = this.options;
        this.label = [];
        value.forEach(value => {
          const targetOption = options && options.filter(option => option[this.valueKey] === value)[0];
          if (targetOption) {
            this.label.push(targetOption[this.labelKey]);
            options = targetOption[this.childrenKey];
          }
        });
      }
    },

    computed: {
      activeOptions: {
        cache: false,
        get() {
          const activeValue = this.activeValue;
          const configurableProps = ['label', 'value', 'children', 'disabled'];

          const formatOptions = options => {
            options.forEach(option => {
              if (option.__IS__FLAT__OPTIONS) return;
              configurableProps.forEach(prop => {
                const value = option[this.props[prop] || prop];
                if (value !== undefined) option[prop] = value;
              });
              if (Array.isArray(option.children)) {
                formatOptions(option.children);
              }
            });
          };

          const loadActiveOptions = (options, activeOptions = []) => {
            const level = activeOptions.length;
            activeOptions[level] = options;
            let active = activeValue[level];
            if (isDef(active)) {
              options = options.filter(option => option.value === active)[0];
              if (options && options.children) {
                loadActiveOptions(options.children, activeOptions);
              }
            }
            return activeOptions;
          };

          const optionsCopy = copyArray(this.options, this.props);
          formatOptions(optionsCopy);
          return loadActiveOptions(optionsCopy);
        }
      },
      id() {
        return generateId();
      },
      labelKey() {
        return this.props.label || 'label';
      },
      valueKey() {
        return this.props.value || 'value';
      },
      childrenKey() {
        return this.props.children || 'children';
      }
    },

    methods: {
      select(item, menuIndex) {
        if (item.__IS__FLAT__OPTIONS) {
          this.activeValue = item.value;
        } else if (menuIndex) {
          this.activeValue.splice(menuIndex, this.activeValue.length - 1, item.value);
        } else {
          this.activeValue = [item.value];
        }
        this.$emit('pick', this.activeValue.slice());
      },
      handleMenuLeave() {
        this.$emit('menuLeave');
      },
      loaded() {
        var childrenn;
        this.result.forEach((val, ind)=>{
          if (ind === 0) {
            childrenn = this.options[val];
          } else {
            childrenn = childrenn.cities[val];
          }
        });
        if (childrenn.checked === true) {
          childrenn[this.childrenKey].forEach((val) => {
            val.checked = true;
          });
        }
      },
      activeItem(item, menuIndex) {
        const len = this.activeOptions.length;
        this.activeValue.splice(menuIndex, len, item.value);
        this.activeOptions.splice(menuIndex + 1, len, item.children);
        this.result = [];
        for (var q = 0; q <= menuIndex; q++) {
          var length ;
          if (q === 0) {
            length = this.options.length;
            for (var w = 0; w < length; w++) {
              if (this.options[w][this.valueKey] === this.activeValue[q]) {
                this.result.push(w);
              }
            }
          } else {
            var childrenn;
            this.result.forEach((val, ind)=>{
              if (ind === 0) {
                childrenn = this.options[val];
              } else {
                childrenn = childrenn[this.childrenKey][val];
              }
            });
            for (var w = 0; w < childrenn[this.childrenKey].length; w++) {
              if (childrenn[this.childrenKey][w][this.valueKey] === this.activeValue[q]) {
                this.result.push(w);
              }
            }
          }
        }
        var lastactiveItem;
        this.result.forEach((val, ind)=>{
          if (ind === 0) {
            lastactiveItem = this.options[val];
          } else {
            lastactiveItem = lastactiveItem[this.childrenKey][val];
          }
        });
        if (this.changeOnSelect) {
          this.$emit('pick', this.activeValue.slice(), false);
        } else {
          if (lastactiveItem[this.childrenKey] && !lastactiveItem[this.childrenKey].length) {
            this.$emit('activeItemChange', this.activeValue, lastactiveItem, this.loaded, this.result.length);
          }
        }
      },
      scrollMenu(menu) {
        scrollIntoView(menu, menu.getElementsByClassName('is-active')[0]);
      },
      handleMenuEnter() {
        this.$nextTick(() => this.$refs.menus.forEach(menu => this.scrollMenu(menu)));
      }
    },

    render(h) {
      const {
        activeValue,
        activeOptions,
        visible,
        expandTrigger,
        popperClass,
        hoverThreshold
      } = this;
      let itemId = null;
      let itemIndex = 0;
      let hoverMenuRefs = {};
      // 返回筛选结果
      const screen = () => {
        if (this.checkbox) {
          var obj = {};
          filter(this.options, obj);
          this.$emit('filteritem', obj);
        } else {
          this.$emit('filteritem', obj);
        }
      };

      const filter = (options, obj) => {
        for (var i = 0; i < options.length; i++) {
          if (options[i].checked !== false && options[i].checked !== undefined) {
            obj[options[i][this.valueKey]] = {};
            if (options[i][this.childrenKey]) {
              filter(options[i][this.childrenKey], obj[options[i][this.valueKey]]);
            }
          };
        };
      };

      // 清空选择
      const onclear = () => {
        this.$refs.menus.forEach((val)=>{
          val.style.left = 0;
        });
        if (this.checkbox) {
          clear(this.options);
          this.result_totle = 0;
        }
        this.buttonDisable = true;
        setTimeout(() => {
          activeValue.splice(0);
        }, 400);
      };

      const clear = (options) => {
        for (var i = 0; i < options.length; i++) {
          options[i].checked = false;
          if (options[i][this.childrenKey]) {
            clear(options[i][this.childrenKey]);
          }
        };
      };

      // 统计选择结果
      const reault = (options) => {
        for (var i = 0; i < options.length; i++) {
          if (options[i].checked !== false && options[i].checked !== undefined) {
            if (options[i][this.childrenKey] && options[i][this.childrenKey].length) {
              reault(options[i][this.childrenKey]);
            } else {
              this.result_totle += 1;
            }
          }
        };
      };

      // 点击面包屑
      const breadcrumb_click = (event) => {
        this.$refs.menus.forEach((val)=>{
          val.style.left = -this.menuWidth * event.target.getAttribute('index') + 'px';
        });
        setTimeout(() => {
          activeValue.splice(parseInt(event.target.getAttribute('index'), 10) + 1, activeValue.length - event.target.getAttribute('index') - 1);
        }, 400);
        if (!this.checkbox) {
          this.buttonDisable = true;
        }
      };

      // 点击面包屑返回按钮
      const back_click = () => {
        if (activeValue.length !== 0) {
          activeValue.splice(activeValue.length - 1, 1);
          if (activeValue.length !== 0) {
            this.$refs.menus.forEach((val)=>{
              val.style.left = -this.menuWidth * (activeValue.length - 1) + 'px';
            });
          }
        }
        if (!this.checkbox) {
          this.buttonDisable = true;
        }
      };

      const hoverMenuHandler = e => {
        const activeMenu = hoverMenuRefs.activeMenu;
        if (!activeMenu) return;
        const offsetX = e.offsetX;
        const width = activeMenu.offsetWidth;
        const height = activeMenu.offsetHeight;

        if (e.target === hoverMenuRefs.activeItem) {
          clearTimeout(this.hoverTimer);
          const {activeItem} = hoverMenuRefs;
          const offsetY_top = activeItem.offsetTop;
          const offsetY_Bottom = offsetY_top + activeItem.offsetHeight;

          hoverMenuRefs.hoverZone.innerHTML = `
            <path style="pointer-events: auto;" fill="transparent" d="M${offsetX} ${offsetY_top} L${width} 0 V${offsetY_top} Z" />
            <path style="pointer-events: auto;" fill="transparent" d="M${offsetX} ${offsetY_Bottom} L${width} ${height} V${offsetY_Bottom} Z" />
          `;
        } else {
          if (!this.hoverTimer) {
            this.hoverTimer = setTimeout(() => {
              hoverMenuRefs.hoverZone.innerHTML = '';
            }, hoverThreshold);
          }
        }
      };
      
      const menus = this._l(activeOptions, (menu, menuIndex) => {
        let isFlat = false;
        const menuId = `menu-${this.id}-${ menuIndex}`;
        const ownsId = `menu-${this.id}-${ menuIndex + 1 }`;
        const items = this._l(menu, item => {
          const events = {
            on: {}
          };
          if (item.__IS__FLAT__OPTIONS) isFlat = true;

          if (!item.disabled) {
            // keydown up/down/left/right/enter
            // events.on.keydown = (ev) => {
            //   const keyCode = ev.keyCode;
            //   if ([37, 38, 39, 40, 13, 9, 27].indexOf(keyCode) < 0) {
            //     return;
            //   }
            //   const currentEle = ev.target;
            //   const parentEle = this.$refs.menus[menuIndex];
            //   const menuItemList = parentEle.querySelectorAll("[tabindex='-1']");
            //   const currentIndex = Array.prototype.indexOf.call(menuItemList, currentEle); // 当前索引
            //   let nextIndex, nextMenu;
            //   if ([38, 40].indexOf(keyCode) > -1) {
            //     if (keyCode === 38) { // up键
            //       nextIndex = currentIndex !== 0 ? (currentIndex - 1) : currentIndex;
            //     } else if (keyCode === 40) { // down
            //       nextIndex = currentIndex !== (menuItemList.length - 1) ? currentIndex + 1 : currentIndex;
            //     }
            //     menuItemList[nextIndex].focus();
            //   } else if (keyCode === 37) { // left键
            //     if (menuIndex !== 0) {
            //       const previousMenu = this.$refs.menus[menuIndex - 1];
            //       previousMenu.querySelector('[aria-expanded=true]').focus();
            //     }
            //   } else if (keyCode === 39) { // right
            //     if (item.children) {
            //       // 有子menu 选择子menu的第一个menuitem
            //       nextMenu = this.$refs.menus[menuIndex + 1];
            //       nextMenu.querySelectorAll("[tabindex='-1']")[0].focus();
            //     }
            //   } else if (keyCode === 13) {
            //     if (!item.children) {
            //       const id = currentEle.getAttribute('id');
            //       parentEle.setAttribute('aria-activedescendant', id);
            //       this.select(item, menuIndex);
            //       this.$nextTick(() => this.scrollMenu(this.$refs.menus[menuIndex]));
            //     }
            //   } else if (keyCode === 9 || keyCode === 27) { // esc tab
            //     this.$emit('closeInside');
            //   }
            // };

            // 返回所有父级被选中的index；
            const parent_activeIndex = (menuIndex) => {
              var result = [];
              for (var q = 0; q <= menuIndex; q++) {
                var arr = [];
                arr.push(q);
                var length = this.$refs.menus[q].children.length;
                for (var w = 0; w < length; w++) {
                  if (this.$refs.menus[q].children[w].classList.value.indexOf('is-active') !== -1) {
                    arr.push(w);
                  }
                }
                result.push(arr);
              }
              return result;
            };

            // 判断子级被选中的元素;
            const children_checked = (menuIndex) => {
              var parent_checked = parent_activeIndex(menuIndex);
              var childrenn;
              parent_checked.forEach((val)=>{
                if (val[0] === 0) {
                  childrenn = this.options[val[1]];
                } else {
                  childrenn = childrenn[this.childrenKey][val[1]];
                }
              });
              return childrenn;
            };

            // 递归选中所有子级
            const digui = (node, bool, menuIndex) => {
              if (node[this.childrenKey] && node[this.childrenKey].length > 0) {
                for (var i = 0;i < node[this.childrenKey].length;i++) {
                  node[this.childrenKey][i].checked = bool;
                  if (node[this.childrenKey][i][this.childrenKey]) {
                    digui(node[this.childrenKey][i], bool, menuIndex);
                  }
                }
              }
            };

            // 判断同级是否都被选中
            const all_checked = (i) => {
              return children_checked(i - 1)[this.childrenKey].every((val)=>{
                return val.checked === true;
              });
            };
            // 判断同级是否都没选中
            const all_dischecked = (i) => {
              return children_checked(i - 1)[this.childrenKey].every((val)=>{
                return val.checked === false || val.checked === undefined;
              });
            };

            const check_firstMenu = (event, menuIndex) => {
              if (event.target.nodeName === 'SPAN') {
                if (!children_checked(menuIndex).checked) {
                  children_checked(menuIndex).checked = true;
                  digui(children_checked(menuIndex), true, menuIndex);
                } else {
                  children_checked(menuIndex).checked = false;
                  digui(children_checked(menuIndex), false, menuIndex);
                }
                if (this.checkbox) {
                  this.result_totle = 0;
                  reault(this.options);
                }
              }
            };
              
            const chech_noone = (event, menuIndex) => {
              if (event.target.nodeName === 'SPAN') {
                if (!children_checked(menuIndex).checked) {
                  children_checked(menuIndex).checked = true;
                  digui(children_checked(menuIndex), true, menuIndex);
                  for (var i = menuIndex; i > 0; i--) {
                    if (!all_checked(i)) {
                      children_checked(i - 1).checked = 'indeterminate';
                    } else {
                      children_checked(i - 1).checked = true;
                    }
                  }
                } else {
                  children_checked(menuIndex).checked = false;
                  digui(children_checked(menuIndex), false, menuIndex);
                  for (var i = menuIndex; i > 0; i--) {
                    if (!all_dischecked(i)) {
                      children_checked(i - 1).checked = 'indeterminate';
                    } else {
                      children_checked(i - 1).checked = false;
                    }
                  }
                }
                if (this.checkbox) {
                  this.result_totle = 0;
                  reault(this.options);
                }
              }
            };

            if (item.children) {
              let triggerEvent = {
                click: 'click',
                hover: 'mouseenter'
              }[expandTrigger];
              const triggerHandler = (event) => {
                this.menuWidth = this.$refs.menus[0].offsetWidth;
                var isActive;
                if (event) {
                  isActive = event.path[0].classList.value.indexOf('is-active');
                }
                this.activeItem(item, menuIndex);
                this.$nextTick(() => {
                  // adjust self and next level
                  if (menuIndex === 0 && event) {
                    if (this.checkbox) {
                      check_firstMenu(event, menuIndex);
                    }
                  }
                  if (menuIndex > 0 && event) {
                    if (this.checkbox) {
                      chech_noone(event, menuIndex);
                    }
                    if (event.target.nodeName === 'LI') {
                      if (isActive !== -1) {
                        if (this.$refs.menus[menuIndex].style.left !== (-this.menuWidth * (menuIndex - 1) + 'px') && this.$refs.menus[menuIndex].style.left !== '') {
                          this.$refs.menus.forEach((val)=>{
                            val.style.left = -this.menuWidth * (menuIndex - 1) + 'px';
                          });
                        } else {
                          this.$refs.menus.forEach((val)=>{
                            val.style.left = -this.menuWidth * menuIndex + 'px';
                          });
                        }
                      } else {
                        setTimeout(() => {
                          this.$refs.menus.forEach((val)=>{
                            val.style.left = -this.menuWidth * menuIndex + 'px';
                          });
                        }, 100);
                      }
                    }
                  }
                  if (!this.checkbox && !this.buttonDisable) {
                    this.buttonDisable = true;
                  }
                  // this.scrollMenu(this.$refs.menus[menuIndex]);
                  // this.scrollMenu(this.$refs.menus[menuIndex + 1]);
                });
              };
              events.on[triggerEvent] = triggerHandler;
              events.on['mousedown'] = () => {
                this.clicking = true;
              };
              events.on['focus'] = () => { // focus 选中
                if (this.clicking) {
                  this.clicking = false;
                  return;
                }
                triggerHandler();
              };
            } else {
              events.on.click = (event) => {
                if (this.checkbox) {
                  this.activeItem(item, menuIndex);
                  this.$nextTick(() => {
                    if (menuIndex === 0 && event) {
                      check_firstMenu(event, menuIndex);
                    };
                    if (menuIndex > 0 && event) {
                      chech_noone(event, menuIndex);
                    };
                  });
                  // this.scrollMenu(this.$refs.menus[menuIndex]);
                  // this.select(item, menuIndex);
                } else {
                  this.buttonDisable = false;
                  this.activeItem(item, menuIndex);
                  this.$nextTick(() => {
                    // this.scrollMenu(this.$refs.menus[menuIndex]);
                  });
                }
              };
            }
          }
          if (!item.disabled && !item.children) { // no children set id
            itemId = `${menuId}-${itemIndex}`;
            itemIndex++;
          }
          return (
            <li
              class={{
                'el-cascader-menu__item': true,
                'el-cascader-menu__item--extensible': item.children,
                'is-active': item.value === activeValue[menuIndex],
                'is-disabled': item.disabled
              }}
              ref={item.value === activeValue[menuIndex] ? 'activeItem' : null}
              {...events}
              tabindex= { item.disabled ? null : -1 }
              role="menuitem"
              aria-haspopup={ !!item.children }
              aria-expanded={ item.value === activeValue[menuIndex] }
              id = { itemId }
              aria-owns = { !item.children ? null : ownsId }
            >
              <label
                class="el-checkbox" v-show={this.checkbox}>
                <span class={{
                  'el-checkbox__input': true,
                  'is-checked': item.checked,
                  'is-indeterminate': item.checked === 'indeterminate' ? true : false
                }}>
                  <span class="el-checkbox__inner"></span>
                  <input
                    // v-else
                    class="el-checkbox__original"
                    type="checkbox"
                  />
                </span>
              </label>
              {item.label}
            </li>
          );
        });
        let menuStyle = {};
        if (isFlat) {
          menuStyle.minWidth = this.inputWidth + 'px';
        }

        const isHoveredMenu = expandTrigger === 'hover' && activeValue.length - 1 === menuIndex;
        const hoverMenuEvent = {
          on: {
          }
        };

        if (isHoveredMenu) {
          hoverMenuEvent.on.mousemove = hoverMenuHandler;
          menuStyle.position = 'relative';
        }

        return (
          <ul
            class={{
              'el-cascader-menu': true,
              'el-cascader-menu--flexible': isFlat
            }}
            {...hoverMenuEvent}
            style={menuStyle}
            refInFor
            ref="menus"
            role="menu"
            id = { menuId }
          >
            {items}
            {
              isHoveredMenu
                ? (<svg
                  ref="hoverZone"
                  style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: '100%',
                    left: 0,
                    pointerEvents: 'none'
                  }}
                ></svg>) : null
            }
          </ul>
        );
      });

      if (expandTrigger === 'hover') {
        this.$nextTick(() => {
          const activeItem = this.$refs.activeItem;

          if (activeItem) {
            const activeMenu = activeItem.parentElement;
            const hoverZone = this.$refs.hoverZone;

            hoverMenuRefs = {
              activeMenu,
              activeItem,
              hoverZone
            };
          } else {
            hoverMenuRefs = {};
          }
        });
      }
      return (
        <transition name="el-zoom-in-top" on-before-enter={this.handleMenuEnter} on-after-leave={this.handleMenuLeave}>
          <div
            v-show={visible}
            class={[
              'el-cascader-menus el-popper',
              popperClass
            ]}
            ref="wrapper"
          >
            <div class='breadcrumb' v-show={this.breadcrumb}>
              <div class='icon'>
                <i class="el-icon-arrow-left" onClick={back_click}></i>
              </div>
              <el-breadcrumb separator="/">
                {
                  this.label.map((val, ind)=>{
                    return (
                      <span class="el-breadcrumb__item">
                        <span class="el-breadcrumb__inner" onClick={ind === (this.label.length - 1) ? '' : breadcrumb_click} index={ind}>{val}</span>
                        <span class="el-breadcrumb__separator">/</span>
                      </span>
                    )
                  })
                }
              </el-breadcrumb>
              <transition name="fade">
                <div class="please" v-show={this.please}>请选择</div>
              </transition>
            </div>
            <div x-arrow class="popper__arrow"></div>
            {menus}
            <div class="button">
              <span v-show={this.checkbox}>选择结果 {this.result_totle}</span>
              <button type="button" class={{'el-button': true, 'el-button--primary': true, 'el-button--small': true, 'is-disabled': this.buttonDisable}} onClick={screen} disabled={this.buttonDisable}><span>筛选</span></button>
              <button type="button" class={{'el-button': true, 'el-button--small': true, 'is-disabled': this.buttonDisable}} onClick={onclear} disabled={this.buttonDisable}><span>清空</span></button>
            </div>
          </div>
        </transition>
      );
    }
  };
</script>
