'use client';
import { LogoutOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Tooltip } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import './BaseSidebar.styles.scss';

import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;

const items: MenuItem[] = [
  {
    label: 'Poli Klinik',
    key: '/poli-klinik',
  },
  {
    label: 'List Dokter',
    key: '/list-dokter',
  }
];

export const BaseSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedMenu, setselectedMenu] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  const handleNavigate = ({ key }: { key: string }) => {
    if (key === '/poli-klinik') router.push('/');
    else router.push(key);
  };

  const handleLogout = () => {
    router.push("signin")
  }

  useEffect(() => {
    if (pathname === '/') {
      setselectedMenu(['/poli-klinik']);
    } else {
      setselectedMenu([pathname]);
    }
  }, [pathname]);

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={`base-sidebar ${collapsed ? 'base-sidebar--collapsed' : ''}`}>
      <div className="base-sidebar__container">
        <Menu selectedKeys={selectedMenu} onClick={handleNavigate} mode="inline" items={items} />
        {collapsed ? (
          <Tooltip title="Logout" placement="right">
            <Button block danger icon={<LogoutOutlined />} />
          </Tooltip>
        ) : (
          <Button block danger icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </Sider>
  );
};
