<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon>
            <PieChart />
          </el-icon> 图表组件
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="chart-box">
        <div class="content-title">柱状图</div>
        <Bar :chart-data="chart1.data" :chart-options="chart1.options" />
      </div>
      <div class="chart-box">
        <div class="content-title">折线图</div>
        <Line :chart-data="chart2.data" :chart-options="chart2.options" />
      </div>
      <div class="chart-box">
        <div class="content-title">饼状图</div>
        <Pie :chart-data="chart3.data" :chart-options="chart3.options" />
      </div>
      <div class="chart-box">
        <div class="content-title">环形图</div>
        <Doughnut :chart-data="chart4.data" :chart-options="chart4.options" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar, Line, Pie, Doughnut, Colors } from '@/plugins/chartjs'

export default {
  components: {
    Bar, Line, Pie, Doughnut
  },
  name: 'basecharts',
  setup() {
    const chart1 = {
      type: 'bar',
      data: {
        labels: ['周一', '周二', '周三', '周四', '周五'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230],
            backgroundColor: Colors[0]
          },
          {
            label: '百货',
            data: [164, 178, 190, 135, 160],
            backgroundColor: Colors[1]
          },
          {
            label: '食品',
            data: [144, 198, 150, 235, 120],
            backgroundColor: Colors[2]
          },
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: '最近一周各品类销售图',
            font: {
              size: 16
            }
          }
        }
      },
    }
    const chart2 = {
      type: 'line',
      data: {
        labels: ['6月', '7月', '8月', '9月', '10月'],
        datasets: [
          {
            label: '家电',
            data: [234, 278, 270, 190, 230],
            borderColor: Colors[5]
          },
          {
            label: '百货',
            data: [164, 178, 150, 135, 160],
            borderColor: Colors[6]
          },
          {
            label: '食品',
            data: [114, 138, 200, 235, 190],
            borderColor: Colors[7]
          },
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: '最近几个月各品类销售趋势图',
            font: {
              size: 16
            }
          }
        }
      },
    }
    const chart3 = {
      type: 'pie',
      data: {
        labels: ['T恤', '牛仔裤', '连衣裙', '毛衣', '七分裤', '短裙', '羽绒服'],
        datasets: [
          {
            data: [334, 278, 190, 235, 260, 200, 141],
            backgroundColor: Colors
          },
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: '服装品类销售饼状图',
            font: {
              size: 16
            }
          }
        }
      },
    }
    const chart4 = {
      type: 'doughnut',
      data: {
        labels: ['vue', 'react', 'angular'],
        datasets: [
          {
            data: [500, 500, 500],
            backgroundColor: Colors
          },
        ],
      },
      options: {
        showValue: false,
        legend: {
          position: 'bottom',
          bottom: 40,
        },
        plugins: {
          title: {
            display: true,
            text: '环形三等分',
            font: {
              size: 16
            }
          }
        }
      },
    }
    return {
      chart1,
      chart2,
      chart3,
      chart4,
    }
  },
}
</script>

<style scoped>
.content-title {
  clear: both;
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}

.chart-box {
  display: inline-block;
  width: 45%;
  margin: 20px;
}
</style>
