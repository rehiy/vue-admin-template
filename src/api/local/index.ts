import { HttpClient } from '../basic/http';

export class LocalApi extends HttpClient {
    getChart1(query?: unknown) {
        return this.get('/chart1.json', query);
    }
    getChart2(query?: unknown) {
        return this.get('/chart2.json', query);
    }
    getChart3(query?: unknown) {
        return this.get('/chart3.json', query);
    }
    getChart4(query?: unknown) {
        return this.get('/chart4.json', query);
    }
    getTable(query?: unknown) {
        return this.get('/table.json', query);
    }
    getTodolist(query?: unknown) {
        return this.get('/todolist.json', query);
    }
}
