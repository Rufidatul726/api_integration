import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    formControl: {
        margin: "10px",
        minWidth: 120,
        marginBottom: "30px",
        marginRight: "30px",
    },
    selectEmpty: {
        marginTop: "20px",
    },
    loading: {
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        padding: "25px",
    },
    marginBottom: {
        marginBottom: "30px",
    },
    marginRight: {
        marginRight: "30px",
    },
    list: {
        height: "75vh",
        overflow: "auto",
    },
}));