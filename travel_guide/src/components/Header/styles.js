import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
    },
    search: {
        borderRadius: 15,
        backgroundColor: "rgba(255,255,255, 0.7)",
        margin: "0 20px",
        width: "300px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    searchIcon: {
        color: "rgba(0,183,255, 1)",
        marginTop: "0.5rem",
        marginLeft: "0.5rem"
    },
    inputRoot: {
        color: "primary",
    },
    inputInput: {
        padding: "0.5rem",
    },
    button: {
        marginLeft: "1rem",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));
