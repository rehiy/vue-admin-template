import request from '@/helper/request'

export const fetchData = (query) => {
  return request({
    url: './table.json',
    method: 'get',
    params: query,
  })
}
