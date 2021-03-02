import React from 'react';
import classnames from 'classnames';
import './index.scss';

interface S{
  key: string
  path: string
  title: string
  desc: string
}

const list: S[] = [{
  key: '1',
  path: '1',
  title: '左脚踩右脚上天',
  desc: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
}, {
  key: '2',
  path: '2',
  title: '去见嫦娥姐姐',
  desc: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
}, {
  key: '3',
  path: '3',
  title: '穿越到2020年买股票',
  desc: '阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴',
}];

const listItems = list.map((item) => (
  <div className={classnames('list-item', `item-${item.key}`)} key={item.key}>
    <div className="avatar" />
    <h3 className="tit">{item.title}</h3>
    <p className="desc">{item.desc}</p>
    <div className="btn">
      <div className="container">
        <p>Get Started</p>
        <p className="arrow">{'->'}</p>
      </div>
    </div>
  </div>));

const Plate: React.FC = () => (
  <div className="com-home-plate">
    {listItems}
  </div>
);

export default Plate;
