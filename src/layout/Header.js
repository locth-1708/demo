import { PageHeader, Avatar } from 'antd';

import './style.css';

const Header = () => {
  return (
    <div className="header">
      <PageHeader
        avatar={
          <Avatar
            size={40}
            src="http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg?w=144"
          />
        }
        backIcon={false}
        className="header__title"
        title="TO DO LIST APPLICATION"
      />
    </div>
  );
};

export default Header;
