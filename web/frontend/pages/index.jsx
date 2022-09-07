import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ShopifyQLDataChart } from "../components/ShopifyQLDataChart";

export default function HomePage() {
  return (
    <Page>
      <TitleBar title="ShopifyQL Report" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ShopifyQLDataChart title="Products ordered over the past year" />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
