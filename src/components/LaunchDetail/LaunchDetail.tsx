import React from 'react'
import { LaunchesInfoQuery } from "../../generated/graphql"

interface Props {
    data: LaunchesInfoQuery
}

const LauchDetail: React.FC<Props> = ({ data }) => {
    if(!data.launch){
        return <h1>Launch Unavailable</h1>    
    }
    return (
        <div className='launch container py-2'>
            <h1>{data.launch.mission_name}</h1>
        </div>
    )
}

export default LauchDetail