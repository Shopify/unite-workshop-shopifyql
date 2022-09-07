import { gql } from "graphql-request";
export const SALES_QUERY = gql`
  {
    shopifyqlQuery(
      query: "FROM sales SHOW ordered_item_quantity BY product_title SINCE -1y UNTIL today ORDER BY ordered_item_quantity DESC"
    ) {
      __typename
      ... on TableResponse {
        tableData {
          rowData
          columns {
            name
            dataType
            displayName
          }
        }
      }
      parseErrors {
        code
        message
        range {
          start {
            line
            character
          }
          end {
            line
            character
          }
        }
      }
    }
  }
`;
