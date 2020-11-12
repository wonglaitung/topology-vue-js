export const defalutMaterials = [
  {
    name: '基本形状',
    expand: true,
    show: true,
    list: [
      {
        name: 'rectangle',
        icon: 't-icon t-rect',
        id: 1,
        data: {
          text: '正方形',
          rect: {
            width: 100,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'rectangle',
          icon: '\ue64d',
          iconFamily: 'topology',
          iconColor: '#2f54eb'
        }
      },
      {
        name: 'rectangle',
        icon: 't-icon t-rectangle',
        id: 2,
        data: {
          text: '圆角矩形',
          rect: {
            width: 200,
            height: 50
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 0.1,
          name: 'rectangle'
        }
      },
      {
        name: 'circle',
        icon: 't-icon t-circle',
        id: 3,
        data: {
          text: '圆',
          rect: {
            width: 100,
            height: 100
          },
          name: 'circle',
          textMaxLine: 1
        }
      },
      {
        name: 'triangle',
        icon: 't-icon t-triangle',
        id: 4,
        data: {
          text: '三角形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'triangle'
        }
      },
      {
        name: 'diamond',
        icon: 't-icon t-diamond',
        id: 5,
        data: {
          text: '菱形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'diamond'
        }
      },
      {
        name: 'pentagon',
        icon: 't-icon t-pentagon',
        id: 6,
        data: {
          text: '五边形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'pentagon'
        }
      },
      {
        name: 'hexagon',
        icon: 't-icon t-hexagon',
        id: 7,
        data: {
          text: '六边形',
          rect: {
            width: 100,
            height: 100
          },
          paddingTop: 10,
          paddingBottom: 10,
          name: 'hexagon'
        }
      },
      {
        name: 'pentagram',
        icon: 't-icon t-pentagram',
        id: 8,
        data: {
          text: '五角星',
          rect: {
            width: 100,
            height: 100
          },
          name: 'pentagram'
        }
      },
      {
        name: 'leftArrow',
        icon: 't-icon t-arrow-left',
        id: 9,
        data: {
          text: '左箭头',
          rect: {
            width: 200,
            height: 100
          },
          name: 'leftArrow'
        }
      },
      {
        name: 'rightArrow',
        icon: 't-icon t-arrow-right',
        id: 10,
        data: {
          text: '右箭头',
          rect: {
            width: 200,
            height: 100
          },
          name: 'rightArrow'
        }
      },
      {
        name: 'twowayArrow',
        icon: 't-icon t-twoway-arrow',
        id: 11,
        data: {
          text: '双向箭头',
          rect: {
            width: 200,
            height: 100
          },
          name: 'twowayArrow'
        }
      },
      {
        name: 'line',
        icon: 't-icon t-line',
        id: 12,
        data: {
          text: '直线',
          rect: {
            width: 100,
            height: 100
          },
          name: 'line'
        }
      },
      {
        name: 'cloud',
        icon: 't-icon t-cloud',
        id: 13,
        data: {
          text: '云',
          rect: {
            width: 100,
            height: 100
          },
          name: 'cloud'
        }
      },
      {
        name: 'message',
        icon: 't-icon t-msg',
        id: 14,
        data: {
          text: '消息框',
          rect: {
            width: 100,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'message'
        }
      },
      {
        name: 'file',
        icon: 't-icon t-file',
        id: 15,
        data: {
          text: '文档',
          rect: {
            width: 80,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'file'
        }
      },
      {
        name: 'text',
        icon: 't-icon t-text',
        id: 16,
        data: {
          text: 'le5le-topology / 乐吾乐',
          rect: {
            width: 160,
            height: 30
          },
          name: 'text'
        }
      },
      {
        name: 'image',
        icon: 't-icon t-image',
        id: 17,
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100
          },
          name: 'image',
          image: '/assets/img/logo.png'
        }
      },
      {
        name: 'cube',
        icon: 't-icon t-cube',
        id: 18,
        data: {
          text: '立方体',
          rect: {
            width: 50,
            height: 70
          },
          is3D: true,
          z: 10,
          zRotate: 15,
          fillStyle: '#ddd',
          name: 'cube',
          icon: '\ue63c',
          iconFamily: 'topology',
          iconColor: '#777',
          iconSize: 30
        }
      },
      {
        name: 'people',
        icon: 't-icon t-people',
        id: 19,
        data: {
          text: '用户',
          rect: {
            width: 70,
            height: 100
          },
          name: 'people'
        }
      },
      {
        name: '视频/网页',
        icon: 't-icon t-pc',
        id: 20,
        data: {
          text: '视频/网页',
          rect: {
            width: 200,
            height: 200
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          // strokeStyle: 'transparent',
          name: 'div'
        }
      }
    ]
  },
  {
    name: '流程图',
    expand: true,
    show: true,
    list: [
      {
        name: '开始/结束',
        icon: 't-icon t-flow-start',
        id: 21,
        data: {
          text: '开始/结束',
          rect: {
            width: 120,
            height: 40
          },
          borderRadius: 0.5,
          name: 'rectangle'
        }
      },
      {
        name: '流程',
        icon: 't-icon t-rectangle',
        id: 22,
        data: {
          text: '流程',
          rect: {
            width: 120,
            height: 40
          },
          name: 'rectangle'
        }
      },
      {
        name: '判定',
        icon: 't-icon t-diamond',
        id: 23,
        data: {
          text: '判定',
          rect: {
            width: 120,
            height: 60
          },
          name: 'diamond'
        }
      },
      {
        name: '数据',
        icon: 't-icon t-flow-data',
        id: 24,
        data: {
          text: '数据',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowData'
        }
      },
      {
        name: '准备',
        icon: 't-icon t-flow-ready',
        id: 25,
        data: {
          text: '准备',
          rect: {
            width: 120,
            height: 50
          },
          name: 'hexagon'
        }
      },
      {
        name: '子流程',
        icon: 't-icon t-flow-subprocess',
        id: 26,
        data: {
          text: '子流程',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowSubprocess'
        }
      },
      {
        name: '数据库',
        icon: 't-icon t-db',
        id: 27,
        data: {
          text: '数据库',
          rect: {
            width: 80,
            height: 120
          },
          name: 'flowDb'
        }
      },
      {
        name: '文档',
        icon: 't-icon t-flow-document',
        id: 28,
        data: {
          text: '文档',
          rect: {
            width: 120,
            height: 100
          },
          name: 'flowDocument'
        }
      },
      {
        name: '内部存储',
        icon: 't-icon t-internal-storage',
        id: 29,
        data: {
          text: '内部存储',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowInternalStorage'
        }
      },
      {
        name: '外部存储',
        icon: 't-icon t-extern-storage',
        id: 30,
        data: {
          text: '外部存储',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowExternStorage'
        }
      },
      {
        name: '队列',
        icon: 't-icon t-flow-queue',
        id: 31,
        data: {
          text: '队列',
          rect: {
            width: 100,
            height: 100
          },
          name: 'flowQueue'
        }
      },
      {
        name: '手动输入',
        icon: 't-icon t-flow-manually',
        id: 32,
        data: {
          text: '手动输入',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowManually'
        }
      },
      {
        name: '展示',
        icon: 't-icon t-flow-display',
        id: 33,
        data: {
          text: '展示',
          rect: {
            width: 120,
            height: 80
          },
          name: 'flowDisplay'
        }
      },
      {
        name: '并行模式',
        icon: 't-icon t-flow-parallel',
        id: 34,
        data: {
          text: '并行模式',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowParallel'
        }
      },
      {
        name: '注释',
        icon: 't-icon t-flow-comment',
        id: 35,
        data: {
          text: '注释',
          rect: {
            width: 100,
            height: 100
          },
          name: 'flowComment'
        }
      }
    ]
  },
  {
    name: '活动图',
    expand: true,
    show: true,
    list: [
      {
        name: '开始',
        icon: 't-icon t-inital',
        id: 36,
        data: {
          text: '',
          rect: {
            width: 30,
            height: 30
          },
          name: 'circle',
          fillStyle: '#555',
          strokeStyle: 'transparent'
        }
      },
      {
        name: '结束',
        icon: 't-icon t-final',
        id: 37,
        data: {
          text: '结束',
          rect: {
            width: 30,
            height: 30
          },
          name: 'activityFinal'
        }
      },
      {
        name: '活动',
        icon: 't-icon t-action',
        id: 38,
        data: {
          text: '活动',
          rect: {
            width: 120,
            height: 50
          },
          borderRadius: 0.25,
          name: 'rectangle'
        }
      },
      {
        name: '决策/合并',
        icon: 't-icon t-diamond',
        id: 39,
        data: {
          text: '决策/合并',
          rect: {
            width: 120,
            height: 50
          },
          name: 'diamond'
        }
      },
      {
        name: '垂直泳道',
        icon: 't-icon t-swimlane-v',
        id: 40,
        data: {
          text: '垂直泳道',
          rect: {
            width: 200,
            height: 500
          },
          name: 'swimlaneV'
        }
      },
      {
        name: '水平泳道',
        icon: 't-icon t-swimlane-h',
        id: 41,
        data: {
          text: '水平泳道',
          rect: {
            width: 500,
            height: 200
          },
          name: 'swimlaneH'
        }
      },
      {
        name: '垂直分岔/汇合',
        icon: 't-icon t-fork-v',
        id: 42,
        data: {
          text: '垂直分岔/汇合',
          rect: {
            width: 10,
            height: 150
          },
          name: 'forkV',
          fillStyle: '#555',
          strokeStyle: 'transparent'
        }
      },
      {
        name: '水平分岔/汇合',
        icon: 't-icon t-fork',
        id: 43,
        data: {
          text: '水平分岔/汇合',
          rect: {
            width: 150,
            height: 10
          },
          name: 'forkH',
          fillStyle: '#555',
          strokeStyle: 'transparent'
        }
      }
    ]
  },
  {
    name: '时序图和类图',
    expand: true,
    show: true,
    list: [
      {
        name: '生命线',
        icon: 't-icon t-lifeline',
        id: 44,
        data: {
          text: '生命线',
          rect: {
            width: 150,
            height: 400
          },
          name: 'lifeline'
        }
      },
      {
        name: '激活',
        icon: 't-icon t-focus',
        id: 45,
        data: {
          text: '激活',
          rect: {
            width: 12,
            height: 200
          },
          name: 'sequenceFocus'
        }
      },
      {
        name: '简单类',
        icon: 't-icon t-simple-class',
        id: 46,
        data: {
          text: 'Topolgoy',
          rect: {
            width: 270,
            height: 200
          },
          paddingTop: 40,
          font: {
            fontFamily: 'Arial',
            color: '#222222',
            fontWeight: 'bold'
          },
          fillStyle: '#ffffba',
          strokeStyle: '#7e1212',
          name: 'simpleClass',
          list: [
            {
              text: '- name: string\n+ setName(name: string): void',
              name: 'text',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              rectInParent: {
                x: 0,
                y: 0,
                width: '100%',
                height: '100%',
                rotate: 0
              },
              font: {
                fontFamily: 'Arial',
                color: '#222222',
                textAlign: 'left',
                textBaseline: 'top'
              }
            }
          ]
        }
      },
      {
        name: '类',
        icon: 't-icon t-class',
        id: 47,
        data: {
          text: 'Topolgoy',
          rect: {
            width: 270,
            height: 200
          },
          paddingTop: 40,
          font: {
            fontFamily: 'Arial',
            color: '#222222',
            fontWeight: 'bold'
          },
          fillStyle: '#ffffba',
          strokeStyle: '#7e1212',
          name: 'interfaceClass',
          list: [
            {
              text: '- name: string',
              name: 'text',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              rectInParent: {
                x: 0,
                y: 0,
                width: '100%',
                height: '50%',
                rotate: 0
              },
              font: {
                fontFamily: 'Arial',
                color: '#222222',
                textAlign: 'left',
                textBaseline: 'top'
              }
            },
            {
              text: '+ setName(name: string): void',
              name: 'text',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              paddingBottom: 10,
              rectInParent: {
                x: 0,
                y: '50%',
                width: '100%',
                height: '50%',
                rotate: 0
              },
              font: {
                fontFamily: 'Arial',
                color: '#222222',
                textAlign: 'left',
                textBaseline: 'top'
              }
            }
          ]
        }
      }
    ]
  },
  {
    name: '图表控件（echarts）',
    expand: true,
    show: true,
    list: [
      {
        name: '折线图',
        icon: 't-icon t-line-chart',
        id: 48,
        data: {
          text: '折线图',
          rect: {
            width: 300,
            height: 200
          },
          name: 'echarts',
          data: {
            echarts: {
              option: {
                xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                  }
                ]
              }
            }
          }
        }
      },
      {
        name: '柱状图',
        icon: 't-icon t-bar-chart',
        id: 49,
        data: {
          text: '柱状图',
          rect: {
            width: 300,
            height: 200
          },
          name: 'echarts',
          data: {
            echarts: {
              option: {
                color: ['#3398DB'],
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: [
                  {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                ],
                yAxis: [
                  {
                    type: 'value'
                  }
                ],
                series: [
                  {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                  }
                ]
              }
            }
          }
        }
      },
      {
        name: '饼图',
        icon: 't-icon t-pie-chart',
        id: 50,
        data: {
          text: '饼图',
          rect: {
            width: 200,
            height: 200
          },
          name: 'echarts',
          data: {
            echarts: {
              option: {
                tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                  orient: 'vertical',
                  x: 'left',
                  data: [
                    '直接访问',
                    '邮件营销',
                    '联盟广告',
                    '视频广告',
                    '搜索引擎'
                  ]
                },
                series: [
                  {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                      normal: {
                        show: false,
                        position: 'center'
                      },
                      emphasis: {
                        show: true,
                        textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                        }
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data: [
                      { value: 335, name: '直接访问' },
                      { value: 310, name: '邮件营销' },
                      { value: 234, name: '联盟广告' },
                      { value: 135, name: '视频广告' },
                      { value: 1548, name: '搜索引擎' }
                    ]
                  }
                ]
              }
            }
          }
        }
      },
      {
        name: '仪表盘',
        icon: 't-icon t-dashboard-chart',
        id: 51,
        data: {
          text: '仪表盘',
          rect: {
            width: 300,
            height: 300
          },
          name: 'echarts',
          data: {
            echarts: {
              option: {
                tooltip: {
                  formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                  feature: {
                    restore: {},
                    saveAsImage: {}
                  }
                },
                series: [
                  {
                    name: '业务指标',
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    data: [{ value: 50, name: '完成率' }]
                  }
                ]
              }
            }
          }
        }
      }
    ]
  }
];

export const userMaterials = [
  {
    name: 'componentData内容为画布数据topology.toComponent函数执行结果',
    image: 'http://topology.le5le.com/assets/img/favicon.ico',
    componentData: {
      animateCycleIndex: 0,
      animateDuration: 0,
      animateFrames: [],
      animateType: '',
      borderRadius: 0,
      children: [
        {
          animateCycleIndex: 0,
          animateDuration: 0,
          animateFrames: [],
          animateType: '',
          bkType: 0,
          borderRadius: 10,
          dash: 0,
          data: '',
          eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
          events: [],
          fillStyle: '',
          font: {
            background: '',
            color: '#222',
            fontFamily:
              '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 1.5,
            textAlign: 'center',
            textBaseline: 'middle'
          },
          fullIconRect: {
            center: {
              x: 446,
              y: 276
            },
            ex: 586,
            ey: 326,
            height: 100,
            width: 280,
            x: 306,
            y: 226
          },
          fullTextRect: {
            center: {
              x: 446,
              y: 276
            },
            ex: 586,
            ey: 326,
            height: 100,
            width: 280,
            x: 306,
            y: 226
          },
          globalAlpha: 1,
          gradientAngle: 0,
          gradientRadius: 0.01,
          iconRect: {
            center: {
              x: 356,
              y: 276
            },
            ex: 406,
            ey: 326,
            height: 100,
            width: 100,
            x: 306,
            y: 226
          },
          iconSize: 0,
          id: 'cc43e7b',
          imageAlign: 'center',
          lineDashOffset: 0,
          lineWidth: 1,
          locked: 0,
          name: 'rectangle',
          offsetRotate: 0,
          paddingBottom: 0,
          paddingBottomNum: 0,
          paddingLeft: 0,
          paddingLeftNum: 0,
          paddingRight: 0,
          paddingRightNum: 0,
          paddingTop: 0,
          paddingTopNum: 0,
          parentId: 'dde822',
          rect: {
            center: {
              x: 446,
              y: 276
            },
            ex: 586,
            ey: 326,
            height: 100,
            width: 280,
            x: 306,
            y: 226
          },
          rectInParent: {
            height: '100%',
            rect: {
              center: {
                x: 446,
                y: 276
              },
              ex: 586,
              ey: 326,
              height: 100,
              width: 280,
              x: 306,
              y: 226
            },
            rotate: 0,
            width: '93.33333333333333%',
            x: '0%',
            y: '0%'
          },
          rotate: 0,
          stand: false,
          strokeStyle: '#222',
          tags: [],
          text: '',
          textOffsetX: 0,
          textOffsetY: 0,
          textRect: {
            center: {
              x: 496,
              y: 276
            },
            ex: 586,
            ey: 326,
            height: 100,
            width: 180,
            x: 406,
            y: 226
          },
          type: 0,
          visible: true,
          zRotate: 0
        },
        {
          animateCycleIndex: 0,
          animateDuration: 0,
          animateFrames: [],
          animateType: '',
          bkType: 0,
          borderRadius: 10,
          dash: 0,
          data: '',
          eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
          events: [],
          fillStyle: '#1890ffff',
          font: {
            background: '',
            color: '#222',
            fontFamily:
              '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 1.5,
            textAlign: 'center',
            textBaseline: 'middle'
          },
          fullIconRect: {
            center: {
              x: 316,
              y: 276
            },
            ex: 326,
            ey: 326,
            height: 100,
            width: 20,
            x: 306,
            y: 226
          },
          fullTextRect: {
            center: {
              x: 316,
              y: 276
            },
            ex: 326,
            ey: 326,
            height: 100,
            width: 20,
            x: 306,
            y: 226
          },
          globalAlpha: 1,
          gradientAngle: 0,
          gradientRadius: 0.01,
          iconRect: {
            center: {
              x: 356,
              y: 276
            },
            ex: 406,
            ey: 326,
            height: 100,
            width: 100,
            x: 306,
            y: 226
          },
          iconSize: 0,
          id: '6db48f07',
          imageAlign: 'center',
          lineDashOffset: 0,
          lineWidth: 0,
          locked: 0,
          name: 'rectangle',
          offsetRotate: 0,
          paddingBottom: 0,
          paddingBottomNum: 0,
          paddingLeft: 0,
          paddingLeftNum: 0,
          paddingRight: 0,
          paddingRightNum: 0,
          paddingTop: 0,
          paddingTopNum: 0,
          parentId: 'dde822',
          rect: {
            center: {
              x: 316,
              y: 276
            },
            ex: 326,
            ey: 326,
            height: 100,
            width: 20,
            x: 306,
            y: 226
          },
          rectInParent: {
            height: '100%',
            rect: {
              center: {
                x: 316,
                y: 276
              },
              ex: 326,
              ey: 326,
              height: 100,
              width: 20,
              x: 306,
              y: 226
            },
            rotate: 0,
            width: '6.666666666666667%',
            x: '0%',
            y: '0%'
          },
          rotate: 0,
          rotatedAnchors: [
            {
              direction: 4,
              x: 306,
              y: 276
            },
            {
              direction: 1,
              x: 316,
              y: 226
            },
            {
              direction: 2,
              x: 326,
              y: 276
            },
            {
              direction: 3,
              x: 316,
              y: 326
            }
          ],
          stand: false,
          strokeStyle: 'transparent',
          tags: [],
          text: '',
          textOffsetX: 0,
          textOffsetY: 0,
          textRect: {
            center: {
              x: 366,
              y: 276
            },
            ex: 326,
            ey: 326,
            height: 100,
            width: -80,
            x: 406,
            y: 226
          },
          type: 0,
          visible: true,
          zRotate: 0
        },
        {
          TID: 'cacbba',
          anchors: [
            {
              direction: 4,
              x: 321,
              y: 276
            },
            {
              direction: 1,
              x: 332,
              y: 227
            },
            {
              direction: 2,
              x: 343,
              y: 276
            },
            {
              direction: 3,
              x: 332,
              y: 325
            }
          ],
          animateCycleIndex: 0,
          animateDuration: 0,
          animateFrames: [],
          animateType: '',
          bkType: 0,
          borderRadius: 0,
          dash: 0,
          data: '',
          eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
          events: [],
          fillStyle: '#fff',
          font: {
            background: '',
            color: '#222',
            fontFamily:
              '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 1.5,
            textAlign: 'center',
            textBaseline: 'middle'
          },
          fullIconRect: {
            center: {
              x: 332,
              y: 276
            },
            ex: 343,
            ey: 325,
            height: 98,
            width: 22,
            x: 321,
            y: 227
          },
          fullTextRect: {
            center: {
              x: 332,
              y: 276
            },
            ex: 343,
            ey: 325,
            height: 98,
            width: 22,
            x: 321,
            y: 227
          },
          globalAlpha: 1,
          gradientAngle: 0,
          gradientRadius: 0.01,
          iconRect: {
            center: {
              x: 370,
              y: 276
            },
            ex: 419,
            ey: 325,
            height: 98,
            width: 98,
            x: 321,
            y: 227
          },
          iconSize: 0,
          id: '3dd5e967',
          imageAlign: 'center',
          lineDashOffset: 0,
          lineWidth: 0,
          locked: 0,
          name: 'rectangle',
          offsetRotate: 0,
          paddingBottom: 0,
          paddingBottomNum: 0,
          paddingLeft: 0,
          paddingLeftNum: 0,
          paddingRight: 0,
          paddingRightNum: 0,
          paddingTop: 0,
          paddingTopNum: 0,
          parentId: 'dde822',
          rect: {
            center: {
              x: 332,
              y: 276
            },
            ex: 343,
            ey: 325,
            height: 98,
            width: 22,
            x: 321,
            y: 227
          },
          rectInParent: {
            height: '98%',
            rect: {
              center: {
                x: 332,
                y: 276
              },
              ex: 343,
              ey: 325,
              height: 98,
              width: 22,
              x: 321,
              y: 227
            },
            rotate: 0,
            width: '7.333333333333333%',
            x: '5%',
            y: '1%'
          },
          rotate: 0,
          rotatedAnchors: [
            {
              direction: 4,
              x: 321,
              y: 276
            },
            {
              direction: 1,
              x: 332,
              y: 227
            },
            {
              direction: 2,
              x: 343,
              y: 276
            },
            {
              direction: 3,
              x: 332,
              y: 325
            }
          ],
          stand: false,
          strokeStyle: 'transparent',
          tags: [],
          text: '',
          textOffsetX: 0,
          textOffsetY: 0,
          textRect: {
            center: {
              x: 381,
              y: 276
            },
            ex: 343,
            ey: 325,
            height: 98,
            width: -76,
            x: 419,
            y: 227
          },
          type: 0,
          visible: true,
          zRotate: 0
        },
        {
          TID: 'cacbba',
          anchors: [
            {
              direction: 4,
              x: 343,
              y: 256
            },
            {
              direction: 1,
              x: 393,
              y: 241
            },
            {
              direction: 2,
              x: 443,
              y: 256
            },
            {
              direction: 3,
              x: 393,
              y: 271
            }
          ],
          animateCycleIndex: 0,
          animateDuration: 0,
          animateFrames: [],
          animateType: '',
          bkType: 0,
          borderRadius: 0,
          dash: 0,
          data: '',
          eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
          events: [],
          fillStyle: '',
          font: {
            background: '',
            color: '#222',
            fontFamily:
              '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: 'bold',
            lineHeight: 1.5,
            textAlign: 'left',
            textBaseline: 'middle'
          },
          fullTextRect: {
            center: {
              x: 393,
              y: 256
            },
            ex: 443,
            ey: 271,
            height: 30,
            width: 100,
            x: 343,
            y: 241
          },
          globalAlpha: 1,
          gradientAngle: 0,
          gradientRadius: 0.01,
          iconRect: {
            center: {
              x: 0,
              y: 0
            },
            ex: 0,
            ey: 0,
            height: 0,
            width: 0,
            x: 0,
            y: 0
          },
          iconSize: 0,
          id: 'c55bc38',
          imageAlign: 'center',
          lineDashOffset: 0,
          lineWidth: 1,
          locked: 0,
          name: 'text',
          offsetRotate: 0,
          paddingBottom: 0,
          paddingBottomNum: 0,
          paddingLeft: 0,
          paddingLeftNum: 0,
          paddingRight: 0,
          paddingRightNum: 0,
          paddingTop: 0,
          paddingTopNum: 0,
          parentId: 'dde822',
          rect: {
            center: {
              x: 393,
              y: 256
            },
            ex: 443,
            ey: 271,
            height: 30,
            width: 100,
            x: 343,
            y: 241
          },
          rectInParent: {
            height: '30%',
            rect: {
              center: {
                x: 393,
                y: 256
              },
              ex: 443,
              ey: 271,
              height: 30,
              width: 100,
              x: 343,
              y: 241
            },
            rotate: 0,
            width: '33.333333333333336%',
            x: '12.333333333333334%',
            y: '15%'
          },
          rotate: 0,
          rotatedAnchors: [
            {
              direction: 4,
              x: 343,
              y: 256
            },
            {
              direction: 1,
              x: 393,
              y: 241
            },
            {
              direction: 2,
              x: 443,
              y: 256
            },
            {
              direction: 3,
              x: 393,
              y: 271
            }
          ],
          stand: false,
          strokeStyle: '#222',
          tags: [],
          text: '文字',
          textOffsetX: 0,
          textOffsetY: 0,
          textRect: {
            center: {
              x: 393,
              y: 267.25
            },
            ex: 443,
            ey: 271,
            height: 7.5,
            width: 100,
            x: 343,
            y: 263.5
          },
          type: 0,
          visible: true,
          zRotate: 0
        },
        {
          TID: 'cacbba',
          anchors: [
            {
              direction: 4,
              x: 343,
              y: 295
            },
            {
              direction: 1,
              x: 393,
              y: 280
            },
            {
              direction: 2,
              x: 443,
              y: 295
            },
            {
              direction: 3,
              x: 393,
              y: 310
            }
          ],
          animateCycleIndex: 0,
          animateDuration: 0,
          animateFrames: [],
          animateType: '',
          bkType: 0,
          borderRadius: 0,
          dash: 0,
          data: '',
          eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
          events: [],
          fillStyle: '',
          font: {
            background: '',
            color: '#222',
            fontFamily:
              '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 1.5,
            textAlign: 'left',
            textBaseline: 'middle'
          },
          fullTextRect: {
            center: {
              x: 393,
              y: 295
            },
            ex: 443,
            ey: 310,
            height: 30,
            width: 100,
            x: 343,
            y: 280
          },
          globalAlpha: 1,
          gradientAngle: 0,
          gradientRadius: 0.01,
          iconRect: {
            center: {
              x: 0,
              y: 0
            },
            ex: 0,
            ey: 0,
            height: 0,
            width: 0,
            x: 0,
            y: 0
          },
          iconSize: 0,
          id: '5ceeeba6',
          imageAlign: 'center',
          lineDashOffset: 0,
          lineWidth: 1,
          locked: 0,
          name: 'text',
          offsetRotate: 0,
          paddingBottom: 0,
          paddingBottomNum: 0,
          paddingLeft: 0,
          paddingLeftNum: 0,
          paddingRight: 0,
          paddingRightNum: 0,
          paddingTop: 0,
          paddingTopNum: 0,
          parentId: 'dde822',
          rect: {
            center: {
              x: 393,
              y: 295
            },
            ex: 443,
            ey: 310,
            height: 30,
            width: 100,
            x: 343,
            y: 280
          },
          rectInParent: {
            height: '30%',
            rect: {
              center: {
                x: 393,
                y: 295
              },
              ex: 443,
              ey: 310,
              height: 30,
              width: 100,
              x: 343,
              y: 280
            },
            rotate: 0,
            width: '33.333333333333336%',
            x: '12.333333333333334%',
            y: '54%'
          },
          rotate: 0,
          rotatedAnchors: [
            {
              direction: 4,
              x: 343,
              y: 295
            },
            {
              direction: 1,
              x: 393,
              y: 280
            },
            {
              direction: 2,
              x: 443,
              y: 295
            },
            {
              direction: 3,
              x: 393,
              y: 310
            }
          ],
          stand: false,
          strokeStyle: '#222',
          tags: [],
          text: '描述文字',
          textOffsetX: 0,
          textOffsetY: 0,
          textRect: {
            center: {
              x: 393,
              y: 306.25
            },
            ex: 443,
            ey: 310,
            height: 7.5,
            width: 100,
            x: 343,
            y: 302.5
          },
          type: 0,
          visible: true,
          zRotate: 0
        },
        {
          animateCycleIndex: 0,
          animateDuration: 0,
          animateFrames: [],
          animateType: '',
          bkType: 0,
          borderRadius: 0,
          children: [
            {
              animateCycleIndex: 0,
              animateDuration: 0,
              animateFrames: [],
              animateType: '',
              bkType: 0,
              borderRadius: 0,
              dash: 0,
              data: '',
              elementRendered: false,
              eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
              events: [],
              fillStyle: '#1890ffff',
              font: {
                background: '',
                color: '#222',
                fontFamily:
                  '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: 1.5,
                textAlign: 'center',
                textBaseline: 'middle'
              },
              fullTextRect: {
                center: {
                  x: 586,
                  y: 290
                },
                ex: 593.1428571428572,
                ey: 297.1428571428571,
                height: 14.285714285714286,
                width: 14.285714285714286,
                x: 578.8571428571429,
                y: 282.85714285714283
              },
              globalAlpha: 1,
              gradientAngle: 0,
              gradientRadius: 0.01,
              iconRect: {
                center: {
                  x: 586,
                  y: 295
                },
                ex: 591,
                ey: 300,
                height: 10,
                width: 10,
                x: 581,
                y: 290
              },
              iconSize: 0,
              id: 'a7c3847',
              imageAlign: 'center',
              lineDashOffset: 0,
              lineWidth: 1,
              name: 'circle',
              offsetRotate: 0,
              paddingBottom: 10,
              paddingBottomNum: 10,
              paddingLeft: 10,
              paddingLeftNum: 10,
              paddingRight: 10,
              paddingRightNum: 10,
              paddingTop: 10,
              paddingTopNum: 10,
              parentId: '653bb315',
              rect: {
                center: {
                  x: 586,
                  y: 290
                },
                ex: 596,
                ey: 300,
                height: 20,
                width: 20,
                x: 576,
                y: 280
              },
              rectInParent: {
                height: '100%',
                rect: {
                  center: {
                    x: 593,
                    y: 447
                  },
                  ex: 603,
                  ey: 457,
                  height: 20,
                  width: 20,
                  x: 583,
                  y: 437
                },
                rotate: 0,
                width: '100%',
                x: '0%',
                y: '0%'
              },
              stand: false,
              strokeStyle: 'transparent',
              tags: [],
              text: '',
              textOffsetX: 0,
              textOffsetY: 0,
              textRect: {
                center: {
                  x: 586,
                  y: 294.16666666666663
                },
                ex: 591,
                ey: 295,
                height: 1.666666666666667,
                width: 10,
                x: 581,
                y: 293.3333333333333
              },
              type: 0,
              visible: true,
              zRotate: 0
            }
          ],
          dash: 0,
          data: '',
          eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
          events: [],
          fillStyle: '#fff',
          font: {
            background: '',
            color: '#222',
            fontFamily:
              '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: 1.5,
            textAlign: 'center',
            textBaseline: 'middle'
          },
          fullTextRect: {
            center: {
              x: 586,
              y: 290
            },
            ex: 600.2857142857142,
            ey: 304.2857142857143,
            height: 28.571428571428573,
            width: 28.571428571428573,
            x: 571.7142857142857,
            y: 275.7142857142857
          },
          globalAlpha: 1,
          gradientAngle: 0,
          gradientRadius: 0.01,
          iconRect: {
            center: {
              x: 586,
              y: 290
            },
            ex: 596,
            ey: 300,
            height: 20,
            width: 20,
            x: 576,
            y: 280
          },
          iconSize: 0,
          id: '653bb315',
          imageAlign: 'center',
          lineDashOffset: 0,
          lineWidth: 1,
          locked: 0,
          name: 'circle',
          offsetRotate: 0,
          paddingBottom: 10,
          paddingBottomNum: 10,
          paddingLeft: 10,
          paddingLeftNum: 10,
          paddingRight: 10,
          paddingRightNum: 10,
          paddingTop: 10,
          paddingTopNum: 10,
          parentId: 'dde822',
          rect: {
            center: {
              x: 586,
              y: 290
            },
            ex: 606,
            ey: 310,
            height: 40,
            width: 40,
            x: 566,
            y: 270
          },
          rectInParent: {
            height: '40%',
            rect: {
              center: {
                x: 586,
                y: 290
              },
              ex: 606,
              ey: 310,
              height: 40,
              width: 40,
              x: 566,
              y: 270
            },
            rotate: 0,
            width: '13.333333333333334%',
            x: '86.66666666666667%',
            y: '44%'
          },
          stand: false,
          strokeStyle: '',
          tags: [],
          text: '',
          textOffsetX: 0,
          textOffsetY: 0,
          textRect: {
            center: {
              x: 586,
              y: 300.83333333333337
            },
            ex: 596,
            ey: 305,
            height: 8.333333333333334,
            width: 20,
            x: 576,
            y: 296.6666666666667
          },
          type: 0,
          visible: true,
          zRotate: 0
        }
      ],
      dash: 0,
      data: '',
      elementRendered: false,
      eventFns: ['link', 'doAnimate', 'doFn', 'doWindowFn'],
      events: [],
      fillStyle: '',
      font: {
        background: '',
        color: '',
        fontFamily:
          '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 1.5,
        textAlign: 'center',
        textBaseline: 'middle'
      },
      fullIconRect: {
        center: {
          x: 456,
          y: 276
        },
        ex: 606,
        ey: 326,
        height: 100,
        width: 300,
        x: 306,
        y: 226
      },
      fullTextRect: {
        center: {
          x: 456,
          y: 276
        },
        ex: 606,
        ey: 326,
        height: 100,
        width: 300,
        x: 306,
        y: 226
      },
      globalAlpha: 1,
      gradientAngle: 0,
      gradientRadius: 0.01,
      iconRect: {
        center: {
          x: 456,
          y: 263.5
        },
        ex: 606,
        ey: 301,
        height: 75,
        width: 300,
        x: 306,
        y: 226
      },
      imageAlign: 'center',
      lineDashOffset: 0,
      lineWidth: 1,
      name: 'combine',
      rect: {
        center: {
          x: 456,
          y: 276
        },
        ex: 606,
        ey: 326,
        height: 100,
        width: 300,
        x: 306,
        y: 226
      },

      strokeStyle: 'transparent',
      textOffsetX: 0,
      textOffsetY: 0,
      textRect: {
        center: {
          x: 456,
          y: 313.5
        },
        ex: 606,
        ey: 326,
        height: 25,
        width: 300,
        x: 306,
        y: 301
      },
      type: 0,
      visible: true,
      zRotate: 0
    }
  }
];

export const images = [
  {
    image:
      'https://iconfont.alicdn.com/t/d2ffc78f-ce7a-4b02-94c9-7a2224bf8485.png'
  }
];
