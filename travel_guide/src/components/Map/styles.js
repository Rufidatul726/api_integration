import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    mapContainer: {
        height: "calc(100vh - 64px)",
        width: "100%",
    },
    paper: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100px",
    },
    markerContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        "&:hover": { zIndex: 2 },
    },
    pointer: {
        cursor: "pointer",
    },
}));


