import React from 'react'
import { LaucnhesQuery } from "../../generated/graphql";
import classNames from "classnames"

interface Props {
    data: LaucnhesQuery
}

const Launches: React.FC<Props> = ({ data }) => {

    return (
        <div className='launches container py-2'>
            <h1>All Launches</h1>
            <ul className="launchesList">
                {!!data.launches && data.launches.map((Launch, i) => !!Launch && (
                    <li className="launch card bg-dark my-2 shadow" key={i}>
                        <h5 className={classNames("card-header", {
                            "bg-success": Launch.launch_success,
                            "bg-danger": !Launch.launch_success
                        })}>Flight No. {Launch.flight_number}</h5>
                        <div className="card-body">
                            <h2 className="card-title display-6">{`Mission Name: `}
                                <span className={classNames({
                                    "text-success": Launch.launch_success,
                                    "text-danger": !Launch.launch_success
                                })}>
                                    {Launch.mission_name}
                                </span>
                            </h2>
                            <p className="card-text">Launch Date: {Launch.launch_date_local}</p>
                            <p className="card-text"><strong>Mission was: {Launch.launch_success ? "Passed" : "Failed"}</strong></p>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Launches