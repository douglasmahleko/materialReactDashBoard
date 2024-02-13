import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import CollectionsIcon from '@mui/icons-material/Collections';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import VerticalShadesClosedIcon from '@mui/icons-material/VerticalShadesClosed';

export const mainNavBarItems = [
    {
        id : 0,
        icon : <PeopleIcon />,
        label : "Authentication",
        route : "authentication"
    },
    {
        id : 1,
        icon : <StorageIcon />,
        label : "Database",
        route : "database"
    },
    {
        id :2,
        icon : <CollectionsIcon />,
        label : "Storage",
        route : "storage"
    },
    {
        id : 3,
        icon : <PublicIcon />,
        label : "Hosting",
        route : "hosting"
    },
    {
        id : 4,
        icon : <SwapHorizIcon />,
        label : "Functions",
        route : "functions"
    },
    {
        id : 5,
        icon : <VerticalShadesClosedIcon />,
        label : "Machine Learning",
        route : "machine-learning"
    }
]