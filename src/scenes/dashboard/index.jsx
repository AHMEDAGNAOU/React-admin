import {Box} from "@mui/material";
import Header from "../../components/Header";

const Dashbord = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignContent="center">
                <Header title="DASHBOARD" subtitle="welcome to your dashboard" />
            </Box>
        </Box>
    );
}

export default Dashbord;