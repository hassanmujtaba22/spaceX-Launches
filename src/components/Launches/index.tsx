import React from 'react'
import { useLaucnhesQuery } from '../../generated/graphql'
import Launches, {OwnProps} from './Launches' 

const LaunchesContainer = (props: OwnProps) => {
    const { data, error, loading } = useLaucnhesQuery()
    if (error) return <h1 className="loadingError">Error!</h1>
    if (loading || !data) return <h1 className="loadingError">Loading.....</h1>
    
    return (
        <Launches data={data} {...props}/>
    )
}

export default LaunchesContainer
