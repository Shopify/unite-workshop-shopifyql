import { Card } from "@shopify/polaris";
import { useAppQuery } from "../hooks";
import { DonutChart } from "@shopify/polaris-viz";

export function ShopifyQLDataChart({ title }) {
    const {
        data: salesData,
        isLoading: isLoadingSalesData,
        isError: salesDataError,
      } = useAppQuery({
        url: "/api/shopifyql/sales",
      });
      console.log(salesData);

      if (isLoadingSalesData) {
        return <div>Loading...</div>;
      }

      if (salesDataError) {
        return <div>Error</div>;
      }

    let tableData = salesData.body.data.shopifyqlQuery.tableData;
    let chartData = tableData.rowData.map((row) => {
        return {
            name: row[0],
            data: [
            {
                key: "last year",
                value: parseInt(row[1], 10),
            },
            ],
        };
    });

    return (
      <Card title={title}>
        <div
            style={{
                padding: "var(--p-space-5) var(--p-space-5)",
            }}
        >
            <div
                style={{
                height: 600,
                borderRadius: "var(--p-border-radius-2)",
                overflow: "hidden",
                }}
            >
                <DonutChart data={chartData} theme="Default"></DonutChart>
            </div>
        </div>
      </Card>
    );
  }
