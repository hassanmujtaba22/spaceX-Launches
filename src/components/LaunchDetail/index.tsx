import React from 'react'
import { useLaunchesInfoQuery } from '../../generated/graphql'
import LaunchDetail from './LaunchDetail'

function LaunchDetailContainer() {
    const { data, error, loading } = useLaunchesInfoQuery({variables: {id: "110"}})
    if (error) return <h1 className="loadingError">Error!</h1>
    if (!data) return <h1 className="loadingError">Please Select a mission for it's detail</h1>
    if (loading) return <h1 className="loadingError">Loading</h1>
    
    return (
        <LaunchDetail data={data} />
    )
}

export default LaunchDetailContainer
