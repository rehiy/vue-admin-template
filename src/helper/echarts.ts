// https://github.com/ecomfe/vue-echarts
// https://echarts.apache.org/examples/zh/index.html

import { App } from 'vue';
import VChart from 'vue-echarts';

import { use } from 'echarts/core';
import { GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

use([
    // Component
    GridComponent,
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    // Chart
    BarChart,
    LineChart,
    PieChart,
    // Feature
    LabelLayout,
    // Renderer
    CanvasRenderer,
]);

export default (app: App<Element>) => {
    app.component('VChart', VChart);
};
