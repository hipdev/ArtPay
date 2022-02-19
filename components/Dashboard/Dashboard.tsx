import DashboardClient from './DashboardClient'
import DashboardArtist from './DashboardArtist'

//TODO: Connect Mode switch to side menu isClient for Artist|Client
//TODO: Iterator over data for jobs based on status grouping for jobs based on isClient


const Dashboard = ({props}) => {
  
  return <>{props.isClient ? <DashboardClient /> : <DashboardArtist />}</>
}

export default Dashboard
