import Mock from 'mockjs';

import img1604389203 from '../static/images/1604389203.jpg'
import img1604389156 from '../static/images/1604389156.jpg'
import img1604389027 from '../static/images/1604389027.jpg'
import img1604569055 from '../static/images/1604569055.jpg'
import img1604657209 from '../static/images/1604657209.jpg'
import img1604657722 from '../static/images/1604657722.jpg'
import img1604886550 from '../static/images/1604886550.jpg'
import img1604893255 from '../static/images/1604893255.jpg'
import img1605079976 from '../static/images/1605079976.jpg'
import img1605080371 from '../static/images/1605080371.jpg'
import img1605493696 from '../static/images/1605493696.jpg'
import img1605586458 from '../static/images/1605586458.jpg'
import img1605605035 from '../static/images/1605605035.jpg'
import img1605673023 from '../static/images/1605673023.jpg'
import img1606788194 from '../static/images/1606788194.jpg'
const data = [
  {
    "title": "大数据分析高考",
    "description": "大数据首次分析高考！北大博士：数学这样学最省精力，轻松140+",
    "imgUrl": img1606788194,
    "url": "/adv/CEE20201130",
    "update": '2020-11-30'
  },
  {
    "title": "高考数学（橙）",
    "description": "高考150分,120分是中低档题，与智力无关，学习方法不正确。我高一时数学也是90分左右，后来纠正4个学习方法，成绩才一路提升到140+！你对比一下我前后变化，就知道问题出在哪了：",
    "imgUrl": img1605673023,
    "url": "/adv/CEE20201118",
    "update": '2020-11-18'
  },
  {
    "title": "高考数学",
    "description": "没天理，暑假没少给孩子补数学，花了不少钱，反降了16分。孩子说上课时感觉都学会了，可做题时稍有难度的题就不会了，要崩溃了！！！求助大神们，救救孩子吧！",
    "imgUrl": img1605605035,
    "url": "/adv/CEE20201117",
    "update": '2020-11-17'
  },
  {
    "title": "高考数学（橙）",
    "description": "高考120分是中低档题，与智力无关。苦学！连120分都没拿到，学习方法肯定有问题。你可以对比下,看我是怎样学习的，就知道孩子问题出在哪了：",
    "imgUrl": img1605586458,
    "url": "/adv/CEE20201116",
    "update": '2020-11-16'
  },
  {
    "title": "高考数学",
    "description": "提分，和治病一样！要先找病因：看以下四个丢分原因属于哪个？",
    "imgUrl": img1605493696,
    "url": "/adv/MATH20201115",
    "update": '2020-11-15'
  },
  {
    "title": "一帮一带体验营（橙）",
    "description": "教你一个方法，一个月准保提高30分！很简单，钻高考漏洞。看这张“高考选、填题数据统计表”，看出猫腻了吗？",
    "imgUrl": img1605079976,
    "url": "/adv_c/CEE20201111",
    "update": '2020-11-11'
  },
  {
    "title": "三重礼包落地页",
    "description": "",
    "imgUrl": img1605080371,
    "url": "/adv/ACT20201110",
    "update": '2020-11-10'
  },
  {
    "title": "秒杀大招知识清单",
    "description": "教你两个方法，一个月准保提高30分！很简单，钻高考漏洞。看这张“高考选、填题数据统计表”，看出猫腻了吗？",
    "imgUrl": img1604893255,
    "url": "/adv/CEE20201109",
    "update": '2020-11-09'
  },
  {
    "title": "高考数学压轴题",
    "description": "高考数学压轴题拿满分？其实很简单！北大博士教你：考前梳理压轴题！",
    "imgUrl": img1604886550,
    "url": "/adv/CEE20201107",
    "update": '2020-11-07'
  },
  {
    "title": "数学体验营2.0",
    "description": " 数学为啥咋学不提分？学校、补课孩子都说学的挺好，可一做作业、考试就不会！该怎么补？",
    "imgUrl": img1604657722,
    "url": "/adv/CEE20201106-2",
    "update": '2020-11-06'
  },
  {
    "title": "数学体验营1.0",
    "description": " 数学为啥咋学不提分？学校、补课孩子都说学的挺好，可一做作业、考试就不会！该怎么补？",
    "imgUrl": img1604657209,
    "url": "/adv/CEE20201106",
    "update": '2020-11-06'
  },
  {
    "title": "高考题分三重礼",
    "description": "提分三重礼，3年知识精华，1次高考冲",
    "imgUrl": img1604569055,
    "url": "/adv/CEE20201105",
    "update": '2020-11-05'
  },
  {
    "title": "高考英语140+",
    "description": "全国高考英语最高分-清华杉姐教你绝招：梳理高考题型考察点",
    "imgUrl": img1604389027,
    "url": "/adv/Eng20201103",
    "update": '2020-11-03'
    
  },
  {
    "title": "高考英语140+(2)",
    "description": "高考英语想上140？清华杉姐教你一绝招：梳理高考题型考察点",
    "imgUrl": img1604389156,
    "url": "/adv/Eng2020110302",
    "update": '2020-11-03'
  },
  {
    "title": "大数据首次分析高考",
    "description": "大数据首次分析高考，北大博士：这样考最省力，轻松130+",
    "imgUrl": img1604389203,
    "url": "/adv/CEE20201103",
    "update": '2020-11-03'
  },
]

Mock.mock('/v1/data/list', 'post', data);
