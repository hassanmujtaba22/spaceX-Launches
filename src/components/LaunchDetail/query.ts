import gql from "graphql-tag";

export const QUERY_LAUNCH_DETAIL = gql`
query LaunchesInfo($id: String){
    launch(id: $id){
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket{
        rocket_name
        rocket_type
      }
        ships
      details
      launch_site{
        site_name
      }
      links{
        video_link
        flickr_images
        article_link
      }
    }
  }
`