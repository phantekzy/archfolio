/* Import section */
import { DownloadIcon } from "lucide-react"
import { WindowControls } from "../components/WindowControls"
import { WindowWrapper } from "../hoc/WindowWrapper"
/* React-pdf */
import { Document, Page, pdfjs } from 'react-pdf';
/* React-pdf css */
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
/* React-pdf worker */
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

/* Resume window section */
const Resume = () => {
    return <>
        <div id="window-header">
            <WindowControls target='resume' />
            <h2>Resume</h2>
            <a
                href="/files/resume.pdf"
                download
                className="cursor-pointer"
                title="Download Resume"
            >
                <DownloadIcon
                    className="icon"
                />
            </a>
        </div>
        <Document file="/files/resume.pdf" >
            <Page pageNumber={1}
                renderTextLayer
                renderAnnotationLayer
                className=" w-[90%] left-1/2 -translate-x-1/2"
            />
        </Document >

    </>
}
/* Resume window */
const ResumeWindow = WindowWrapper(Resume, 'resume')

/* Export section */
export default ResumeWindow
