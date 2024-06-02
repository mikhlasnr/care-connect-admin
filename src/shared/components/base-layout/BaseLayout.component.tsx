import { Layout } from "antd";
import { BaseContent } from "../base-content/BaseContent.component";
import { BaseSidebar } from "../base-sidebar/BaseSidebar.component";
import { BaseLayoutProps } from "./BaseLayout.type";
import "./BaseLayout.styles.scss";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Layout className="base-layout" hasSider>
      <BaseSidebar />
      <Layout>
        <BaseContent>{children}</BaseContent>
      </Layout>
    </Layout>
  );
};
