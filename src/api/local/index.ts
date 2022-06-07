import { HttpClient } from '../basic/http';

export class LocalApi extends HttpClient {
    getChart1(query?) {
        return this.get('/chart1.json', query);
    }
    getChart2(query?) {
        return this.get('/chart2.json', query);
    }
    getChart3(query?) {
        return this.get('/chart3.json', query);
    }
    getChart4(query?) {
        return this.get('/chart4.json', query);
    }
    getTable(query?) {
        return this.get('/table.json', query);
    }
    getTodolist(query?) {
        return this.get('/todolist.json', query);
    }
}
