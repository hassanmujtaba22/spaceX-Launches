import React from 'react'
import { useLaucnhesQuery } from '../../generated/graphql'
import Launches from './Launches' 

const LaunchesContainer = () => {
    const { data, error, loading } = useLaucnhesQuery()
    if (error) return <h1 className="loadingError">Error!</h1>
    if (loading || !data) return <h1 className="loadingError">Loading.....</h1>
    
    return (
        <Launches data={data} />
    )
}

export default LaunchesContainer
