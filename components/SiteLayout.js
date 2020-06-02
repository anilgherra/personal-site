import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const SiteLayout = props => (
  <Layout>
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1"><Link href="/portfolio"><a> Portfolio</a></Link> </Menu.Item>
      <Menu.Item key="2"> <Link href="/tutorials"><a> Tutorials</a></Link> </Menu.Item>
      <Menu.Item key="3"><Link href="/trading"><a> Trading Career</a></Link> </Menu.Item>
      <Menu.Item key="4"><Link href="/bio"><a>Bio</a></Link> </Menu.Item>
    </Menu>
  </Header>
  <Layout>
    <Sider width={250} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}///dddasaX ASDV N8U  
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Portfolio">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Tutorials">
          <Menu.Item key="5">DS & Algorithms</Menu.Item>
          <Menu.Item key="6">Core Java Programming</Menu.Item>
          <Menu.Item key="7">Back-end Development</Menu.Item>
          <Menu.Item key="8">Distributed Systems</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Trading Career">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<NotificationOutlined />} title="Bio">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  </Layout>
</Layout>
);

export default SiteLayout;