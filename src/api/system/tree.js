import request from '@/utils/request'

// 查询测试树列表列表
export function listTree(query) {
  return request({
    url: '/system/tree/list',
    method: 'get',
    params: query,
  })
}

// 查询测试树列表详细
export function getTree(id) {
  return request({
    url: '/system/tree/' + id,
    method: 'get'
  })
}

// 新增测试树列表
export function addTree(data) {
  return request({
    url: '/system/tree',
    method: 'post',
    data: data
  })
}

// 修改测试树列表
export function updateTree(data) {
  return request({
    url: '/system/tree',
    method: 'put',
    data: data
  })
}

// 删除测试树列表
export function delTree(id) {
  return request({
    url: '/system/tree/' + id,
    method: 'delete'
  })
}
