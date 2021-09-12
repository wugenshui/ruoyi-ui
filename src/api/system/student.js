import request from '@/utils/request'

// 查询测试学生列表
export function listStudent(query) {
  return request({
    url: '/system/student/list',
    method: 'get',
    params: query,
  })
}

// 查询测试学生详细
export function getStudent(id) {
  return request({
    url: '/system/student/' + id,
    method: 'get'
  })
}

// 新增测试学生
export function addStudent(data) {
  return request({
    url: '/system/student',
    method: 'post',
    data: data
  })
}

// 修改测试学生
export function updateStudent(data) {
  return request({
    url: '/system/student',
    method: 'put',
    data: data
  })
}

// 删除测试学生
export function delStudent(id) {
  return request({
    url: '/system/student/' + id,
    method: 'delete'
  })
}
