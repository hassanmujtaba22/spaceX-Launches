import React from 'react'
import { LaunchesInfoQuery } from "../../generated/graphql"
import classNames from "classnames";

interface Props {
    data: LaunchesInfoQuery
}
const LauchDetail: React.FC<Props> = ({ data: { launch } }) => {
    if (!launch) {
        return <h1>Launch Unavailable</h1>
    }
    return (
        <div className='launch container py-5'>
            <p><strong>
                {`Flight No. ${launch.flight_number} - Launch in ${launch.launch_year}
                and Mission was ${launch.launch_success ? "Passed" : "Failed"}
                at ${launch.launch_site?.site_name}.`}
            </strong></p>
            <h1 className={classNames({
                "text-success": launch.launch_success,
                "text-danger": !launch.launch_success,
            })}>Mission Name: {launch.mission_name}</h1>
            <h3>Rocket Name: {launch.rocket?.rocket_name} {launch.rocket?.rocket_type}</h3>
            <p>{launch.details}</p>
            {!!launch.links && !!launch.links.article_link && (
                <div>
                    {launch.links.article_link ? <a href={launch.links.article_link} target="_blank">Article Link</a> : null}
                </div>
            )}
            {!!launch.links && !!launch.links.video_link && (
                <div>
                    {launch.links.video_link ? <a href={launch.links.video_link} target="_blank">Video Link</a> : null}
                </div>
            )}
            {!!launch.links && !!launch.links.flickr_images && (
                <div className="missionImg">
                    {launch.links.flickr_images.map(image =>
                        image ? <img src={image} key={image} alt="img" /> : "This Launch has no images",
                    )}
                </div>
            )}
        </div>
    )
}

export default LauchDetail