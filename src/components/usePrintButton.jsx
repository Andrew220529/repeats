import { pdf } from "@react-pdf/renderer";
import PDF from "./ui/Pdf/PDF";
import { Button } from "@chakra-ui/react";

export const UsePrintButton = ({data}) => {
    const handlePrintPDF = async () => {
        try {
            const blob = await pdf(<PDF data={data}/>).toBlob();
            const url = URL.createObjectURL(blob);
            window.open(url, "_blank");
        } catch (error) {
            console.error("Error handing nameplate printing:", error);
        }
    };

    return (
        <>
            <Button onClick={handlePrintPDF}>PDFをダウンロード</Button>
        </>
    )
}