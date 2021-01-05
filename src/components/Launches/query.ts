import gql from "graphql-tag";

export const QUERY_LAUNCHES = gql`
  query Laucnhes{
      launches{
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local
      }
    }
`