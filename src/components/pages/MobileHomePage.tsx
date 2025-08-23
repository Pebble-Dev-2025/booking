'use client';

import {
  Button,
  Card,
  List,
  Switch,
  Slider,
  Space,
  NavBar,
  TabBar,
  Grid,
  Avatar,
} from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
  SetOutline,
} from 'antd-mobile-icons';
import { useTheme } from '@/hooks/useTheme';

const { Item } = List;

export default function MobileHomePage() {
  const { theme, isDark, changeTheme } = useTheme();

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <div style={{ paddingBottom: '50px', color: 'var(--adm-color-text)' }}>
      <NavBar 
        style={{ 
          '--border-bottom': '1px solid var(--adm-border-color)',
          color: 'var(--adm-color-text)',
          backgroundColor: 'var(--adm-color-fill)',
        }}
      >
        预订系统 - 移动端
      </NavBar>

      <div style={{ padding: '16px' }}>
        <Space direction='vertical' block>
          <Card 
            title='主题设置' 
            style={{ 
              marginBottom: 16,
              backgroundColor: 'var(--adm-color-fill)',
              color: 'var(--adm-color-text)',
            }}
          >
            <List style={{ backgroundColor: 'transparent' }}>
              <Item
                style={{ color: 'var(--adm-color-text)' }}
                extra={
                  <span style={{ color: 'var(--adm-color-weak)' }}>
                    {isDark ? '深色' : '浅色'}
                  </span>
                }
              >
                当前主题
              </Item>
              <Item style={{ color: 'var(--adm-color-text)' }}>
                主题选择
                <div style={{ marginTop: 12 }}>
                  <Space wrap>
                    <Button 
                      size='small'
                      color={theme === 'light' ? 'primary' : 'default'}
                      onClick={() => changeTheme('light')}
                    >
                      浅色
                    </Button>
                    <Button 
                      size='small'
                      color={theme === 'dark' ? 'primary' : 'default'}
                      onClick={() => changeTheme('dark')}
                    >
                      深色
                    </Button>
                    <Button 
                      size='small'
                      color={theme === 'system' ? 'primary' : 'default'}
                      onClick={() => changeTheme('system')}
                    >
                      跟随系统
                    </Button>
                  </Space>
                </div>
              </Item>
            </List>
          </Card>

          <Card 
            title='移动端组件展示'
            style={{ 
              backgroundColor: 'var(--adm-color-fill)',
              color: 'var(--adm-color-text)',
            }}
          >
            <List style={{ backgroundColor: 'transparent' }}>
              <Item
                style={{ color: 'var(--adm-color-text)' }}
                prefix={<SetOutline />}
                extra={<Switch defaultChecked />}
              >
                开关控件
              </Item>
              <Item style={{ color: 'var(--adm-color-text)' }}>
                滑块控件
                <Slider defaultValue={30} style={{ marginTop: 12 }} />
              </Item>
              <Item
                style={{ color: 'var(--adm-color-text)' }}
                prefix={<Avatar src='' style={{ '--size': '32px' }} />}
                description={<span style={{ color: 'var(--adm-color-weak)' }}>这是一个列表项的描述信息</span>}
              >
                列表项示例
              </Item>
            </List>
          </Card>

          <Card 
            title='网格布局'
            style={{ 
              backgroundColor: 'var(--adm-color-fill)',
              color: 'var(--adm-color-text)',
            }}
          >
            <Grid columns={2} gap={8}>
              <Grid.Item>
                <div
                  style={{
                    padding: 16,
                    backgroundColor: 'var(--adm-color-fill-secondary)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: 'var(--adm-color-text)',
                  }}
                >
                  网格项 1
                </div>
              </Grid.Item>
              <Grid.Item>
                <div
                  style={{
                    padding: 16,
                    backgroundColor: 'var(--adm-color-fill-secondary)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: 'var(--adm-color-text)',
                  }}
                >
                  网格项 2
                </div>
              </Grid.Item>
            </Grid>
          </Card>

          <div style={{ marginTop: 16 }}>
            <Button color='primary' size='large' block>
              主要按钮
            </Button>
            <Button size='large' block style={{ marginTop: 8 }}>
              默认按钮
            </Button>
          </div>
        </Space>
      </div>

      <TabBar 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          width: '100%',
          backgroundColor: 'var(--adm-color-fill)',
          borderTop: '1px solid var(--adm-border-color)',
          color: 'var(--adm-color-text)',
        }}
      >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}