import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "./PaginationStyles";
import { perPage } from "../../../config";
import Error from "./ErrorMessage";
import {Loader} from "./cardStyle";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;
const TYPE_PAGINATION_QUERY = gql`
  query TYPE_PAGINATION_QUERY($type:String) {
    itemsConnection(where:{type:$type}) {
      aggregate {
        count
      }
    }
  }
`;


const Pagination = props => (
  <Query query={PAGINATION_QUERY} >
    {({ data, loading, error }) => {
      if (loading) return <Loader/>;
      if (error) return <Error error={error} />;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = Number(props.page);
      // console.log("pagination",props.type);
      return (
        <PaginationStyles data-test="pagination">
          <Head>
            <title>
              Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "itemPage",
              query: { page: page - 1, 
                // type:props.type 
              }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p>
            Page {props.page} of
            <span className="totalPages"> {pages}</span>
          </p>
          <p className="next">{count} Items Total</p>
          <Link
            prefetch
            href={{
              pathname: "itemPage",
              query: { page: page + 1,
                //  type:props.type 
                }
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

export default Pagination;
export { PAGINATION_QUERY };
