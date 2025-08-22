"use client";

import {
  Button,
  Card,
  Space,
  Typography,
  Switch,
  Slider,
  Row,
  Col,
  Avatar,
  Divider,
} from "antd";
import { useTheme } from "@/hooks/useTheme";
import {
  UserOutlined,
  SettingOutlined,
  AppstoreOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function DesktopHomePage() {
  const { theme, isDark, changeTheme } = useTheme();

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        {/* Header */}
        <Card>
          <Row align="middle" justify="space-between">
            <Col>
              <Title level={2} style={{ margin: 0 }}>
                预订系统 - 桌面端
              </Title>
              <Text type="secondary">欢迎使用在线预订管理系统</Text>
            </Col>
            <Col>
              <Avatar size={64} icon={<UserOutlined />} />
            </Col>
          </Row>
        </Card>

        {/* Main Content */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              {/* Theme Settings */}
              <Card title="主题设置" extra={<SettingOutlined />}>
                <Space direction="vertical" style={{ display: "flex" }}>
                  <div>
                    <Text strong>当前主题模式: </Text>
                    <Text type={isDark ? "warning" : "success"}>
                      {isDark ? "深色模式" : "浅色模式"}
                    </Text>
                  </div>

                  <Divider />

                  <div>
                    <Text strong>选择主题:</Text>
                    <div style={{ marginTop: 12 }}>
                      <Space wrap>
                        <Button
                          type={theme === "light" ? "primary" : "default"}
                          onClick={() => changeTheme("light")}
                        >
                          浅色模式
                        </Button>
                        <Button
                          type={theme === "dark" ? "primary" : "default"}
                          onClick={() => changeTheme("dark")}
                        >
                          深色模式
                        </Button>
                        <Button
                          type={theme === "system" ? "primary" : "default"}
                          onClick={() => changeTheme("system")}
                        >
                          跟随系统
                        </Button>
                      </Space>
                    </div>
                  </div>
                </Space>
              </Card>

              {/* Desktop Components Demo */}
              <Card title="桌面端组件展示" extra={<AppstoreOutlined />}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Space direction="vertical" style={{ display: "flex" }}>
                      <Text strong>按钮组件</Text>
                      <Space wrap>
                        <Button type="primary">主要按钮</Button>
                        <Button>默认按钮</Button>
                        <Button type="dashed">虚线按钮</Button>
                        <Button type="link">链接按钮</Button>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space direction="vertical" style={{ display: "flex" }}>
                      <Text strong>控件组件</Text>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                        }}
                      >
                        <Text>开关:</Text>
                        <Switch defaultChecked />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                        }}
                      >
                        <Text>滑块:</Text>
                        <Slider defaultValue={30} style={{ flex: 1 }} />
                      </div>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Space>
          </Col>

          <Col xs={24} lg={8}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              {/* Quick Actions */}
              <Card title="快捷操作" size="small">
                <Space direction="vertical" style={{ display: "flex" }}>
                  <Button type="primary" icon={<AppstoreOutlined />} block>
                    新建预订
                  </Button>
                  <Button icon={<MessageOutlined />} block>
                    查看消息
                  </Button>
                  <Button icon={<SettingOutlined />} block>
                    系统设置
                  </Button>
                </Space>
              </Card>

              {/* Info Card */}
              <Card title="系统信息" size="small">
                <Space direction="vertical">
                  <div>
                    <Text type="secondary">设备类型: </Text>
                    <Text>桌面端</Text>
                  </div>
                  <div>
                    <Text type="secondary">界面库: </Text>
                    <Text>Ant Design</Text>
                  </div>
                  <div>
                    <Text type="secondary">主题风格: </Text>
                    <Text>iOS 风格</Text>
                  </div>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
}
