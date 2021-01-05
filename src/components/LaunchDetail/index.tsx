import React, { useEffect } from 'react'
import { useLaunchesInfoQuery } from '../../generated/graphql'
import LaunchDetail from './LaunchDetail'
interface OwnProps {
    id: number;
}
function LaunchDetailContainer({ id }: OwnProps) {
    const { data, error, loading } = useLaunchesInfoQuery({variables: {id: String(id)}})
    useEffect(() => {
        // fetch();
      }, [id]);
    if (error) return <h1 className="loadingError">Error!</h1>
    if (!data) return <h1 className="loadingError">Please Select a mission for it's detail</h1>
    if (loading) return <h1 className="loadingError">Loading</h1>
    console.log(data);
    
    return (
        <LaunchDetail data={data} />
    )
}

export default LaunchDetailContainer
