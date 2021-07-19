import * as Ant from 'antd';

const Footer = () => {
  return (
    <div>
      <Ant.Pagination defaultCurrent={1} total={50} />
    </div>
  );
};

export default Footer;
