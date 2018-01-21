function embedPDF(pdfSrc, containerID){
	PDFObject.embed(pdfSrc,containerID);
	return this;
}

embedPDF(`./resources/Rabo_Print_Shop_User_Guide.pdf`, "#pdfContainer");