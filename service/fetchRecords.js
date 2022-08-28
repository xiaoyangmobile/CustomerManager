/* eslint-disable no-param-reassign */

/** 获取商品列表 */
function mockFetchRecordList(params) {
  const { delay } = require('./_utils/delay');

  const data = new Array();
  data.push({
    name:"花生",
    time:"今天 14:00",
    phone:"15312344321",
    action:"转入",
    detail:"拜访方式：电话 \n拜访记录：手头正忙，稍后联系\n拜访销售人员：张凤斌\n下次跟进时间：2020-05-12 15：00 "
  });
  data.push({
    name:"花生",
    time:"今天 10:00",
    phone:"15312344321",
    action:"跟进提醒",
    detail:"拜访方式：电话 \n拜访记录：手头正忙，稍后联系\n拜访销售人员：张凤斌\n下次跟进时间：2020-05-12 15：00 "
  });
  data.push({
    name:"花生",
    time:"今天 14:00",
    phone:"15312344321",
    action:"转入",
    detail:"拜访方式：电话 \n拜访记录：手头正忙，稍后联系\n拜访销售人员：张凤斌\n下次跟进时间：2020-05-12 15：00 "
  });
  data.push({
    name:"花生",
    time:"今天 10:00",
    phone:"15312344321",
    action:"跟进提醒",
    detail:"拜访方式：电话 \n拜访记录：手头正忙，稍后联系\n拜访销售人员：张凤斌\n下次跟进时间：2020-05-12 15：00 "
  });
  return delay().then(() => {
    return data;
  });
}

/** 获取商品列表 */
export function fetchRecordList(params) {
  if (true) {
    return mockFetchRecordList(params);
  }
  return new Promise((resolve) => {
    wx.request({
      url: 'http://60.205.57.246:8088/dlwd-tooth/visitrecord/list',
      method: 'GET',
      'headers': {
        'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)'
      },
      
    })
    resolve('real api');
  });
}
