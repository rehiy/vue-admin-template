export class HttpClient {
    protected async get(url: string, param?: unknown) {
        if (param) {
            url += '?' + this.buildQuery(param);
        }
        const body = await fetch(url, {
            method: 'GET',
            headers: this.buildHeader(),
        });
        return this.parseResponse(body);
    }

    protected async post(url: string, param: unknown) {
        const body = await fetch(url, {
            method: 'POST',
            headers: this.buildHeader('json'),
            body: JSON.stringify(param),
        });
        return this.parseResponse(body);
    }

    protected async delete(url: string, param?: unknown) {
        if (param) {
            url += '?' + this.buildQuery(param);
        }
        const body = await fetch(url, {
            method: 'DELETE',
            headers: this.buildHeader(),
        });
        return this.parseResponse(body);
    }

    protected async parseResponse(body: Response) {
        return await body.json();
    }

    protected buildHeader(type = '') {
        const headers: HeadersInit = {};

        if (type === 'json') {
            headers['Content-Type'] = 'application/json';
        }

        return headers;
    }

    protected buildQuery(obj: unknown, key?: string) {
        if (!obj && !key) {
            return '';
        }

        if (obj == null) {
            return key + '=';
        }

        const result = [];

        switch (typeof obj) {
            case 'string':
            case 'number':
            case 'boolean':
                result.push(key + '=' + encodeURIComponent(obj));
                break;
            case 'object':
                for (const i in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, i)) {
                        const k = key ? key + '[' + i + ']' : i;
                        result.push(this.buildQuery(obj[i], k));
                    }
                }
                break;
        }

        return result.join('&');
    }
}
